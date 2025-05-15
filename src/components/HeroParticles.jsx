import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import './HeroParticles.css';

// Shader for updating particle positions
const positionFragmentShader = `
  uniform float time;
  uniform float delta;
  uniform float speed;
  uniform float curl;
  uniform vec2 mouse;
  uniform bool isMouseActive;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 posData = texture2D(texturePosition, uv);
    vec3 position = posData.xyz;
    float life = posData.w;
    
    // Noise function for more organic movement
    vec3 noisePos = position * curl;
    float noise = sin(noisePos.x + time) * cos(noisePos.y + time) * sin(noisePos.z + time);
    
    // Update position
    position.x += sin(position.y * 0.1 + time * 0.2) * 0.1 * speed;
    position.y += cos(position.x * 0.1 + time * 0.3) * 0.1 * speed;
    position.z += sin(position.z * 0.1 + time * 0.4) * 0.1 * speed;
    
    // Add noise movement
    position += vec3(noise) * delta * speed * 0.2;
    
    // Mouse interaction
    if (isMouseActive) {
      vec2 mousePos = mouse * 2.0 - 1.0; // Convert to NDC space
      mousePos.y *= -1.0; // Invert Y
      vec3 mousePosition = vec3(mousePos.x * 5.0, mousePos.y * 5.0, 0.0);
      vec3 dir = mousePosition - position;
      float dist = length(dir);
      if (dist < 2.0) {
        position += normalize(dir) * (2.0 - dist) * delta * 2.0;
      }
    }
    
    // Update life and reset position if needed
    life -= delta * 0.2;
    if (life <= 0.0) {
      // Reset particle
      position = vec3(
        (random(uv + time) * 2.0 - 1.0) * 5.0,
        (random(uv + time + 0.1) * 2.0 - 1.0) * 5.0,
        (random(uv + time + 0.2) * 2.0 - 1.0) * 5.0
      );
      life = 1.0;
    }
    
    gl_FragColor = vec4(position, life);
  }
`;

// Shader for particle rendering
const particleVertexShader = `
  uniform sampler2D texturePosition;
  uniform float pointSize;
  uniform float time;
  uniform vec3 baseColor;
  uniform vec3 accentColor;
  
  attribute vec2 reference;
  
  varying vec4 vColor;
  
  void main() {
    vec4 posData = texture2D(texturePosition, reference);
    vec3 pos = posData.xyz;
    float life = posData.w;
    
    // Set position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    // Set point size (larger closer to camera)
    gl_PointSize = pointSize * (1.0 / -pos.z + 1.0) * life;
    
    // Dynamic color based on position and life
    float r = 0.5 + 0.5 * sin(time * 0.5 + pos.x);
    float g = 0.5 + 0.5 * sin(time * 0.5 + pos.y + 2.0);
    float b = 0.5 + 0.5 * sin(time * 0.5 + pos.z + 4.0);
    
    // Mix base and accent colors
    vec3 color = mix(baseColor, accentColor, r);
    vColor = vec4(color, life * 0.7);
  }
`;

const particleFragmentShader = `
  varying vec4 vColor;
  
  void main() {
    // Create circular particles
    vec2 xy = gl_PointCoord.xy - vec2(0.5);
    float radius = length(xy);
    if (radius > 0.5) discard;
    
    // Add intense glow effect
    float alpha = smoothstep(0.5, 0.2, radius) * vColor.a * 2.0; // Double brightness
    
    // Make center of particle much brighter
    vec3 glowColor = vColor.rgb * (1.0 + (0.5 - radius) * 5.0); // Increased glow intensity
    
    gl_FragColor = vec4(glowColor, alpha);
  }
`;

const HeroParticles = ({ colorScheme, home = false }) => {
  const mountRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const isMouseActiveRef = useRef(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const animationFrameIdRef = useRef(null);
  const rendererRef = useRef(null);
  const gpuComputeRef = useRef(null);
  
  // Effect colors based on theme
  const getColorScheme = () => {
    // Default colors - blue/teal for home page
    let baseColor = new THREE.Color(0x3498db);
    let accentColor = new THREE.Color(0x1abc9c);
    
    if (colorScheme) {
      return colorScheme;
    }
    
    // Home page has different default colors than project pages
    if (home) {
      baseColor = new THREE.Color(0x1a8754); // Green
      accentColor = new THREE.Color(0x3498db); // Blue
    }
    
    return {
      baseColor,
      accentColor
    };
  };

  useEffect(() => {
    if (!mountRef.current || isInitialized) return;
    
    setIsInitialized(true);
    
    // Three.js variables
    let scene, camera, particles;
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    
    // Constants - Reduce particle count for better performance
    const PARTICLES = home ? 65536 : 32768; // Half the previous count
    const TEXTURE_WIDTH = Math.ceil(Math.sqrt(PARTICLES)); // Ensure we have enough texels
    const TEXTURE_HEIGHT = Math.ceil(PARTICLES / TEXTURE_WIDTH);
    
    // Setup Three.js scene
    const init = () => {
      // Create scene
      scene = new THREE.Scene();
      
      // Create camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 10;
      
      try {
        // Create renderer with antialiasing for smoother edges
        rendererRef.current = new THREE.WebGLRenderer({ 
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance' // Request high-performance GPU
        });
        rendererRef.current.setSize(width, height);
        rendererRef.current.setClearColor(0x000000, 0);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        mountRef.current.appendChild(rendererRef.current.domElement);
        
        try {
          // Initialize GPU computation
          gpuComputeRef.current = new GPUComputationRenderer(TEXTURE_WIDTH, TEXTURE_HEIGHT, rendererRef.current);
          
          // Create position texture
          const positionTexture = gpuComputeRef.current.createTexture();
          fillPositionTexture(positionTexture);
          
          // Add position variable to GPU compute
          const positionVariable = gpuComputeRef.current.addVariable('texturePosition', positionFragmentShader, positionTexture);
          
          // Set variable dependencies and uniforms
          gpuComputeRef.current.setVariableDependencies(positionVariable, [positionVariable]);
          
          // Setup uniforms
          positionVariable.material.uniforms.time = { value: 0.0 };
          positionVariable.material.uniforms.delta = { value: 0.0 };
          positionVariable.material.uniforms.speed = { value: home ? 1.0 : 0.8 }; // Slightly slower for better stability
          positionVariable.material.uniforms.curl = { value: home ? 0.5 : 0.4 }; // Less curl to reduce chaos
          positionVariable.material.uniforms.mouse = { value: new THREE.Vector2(0, 0) };
          positionVariable.material.uniforms.isMouseActive = { value: false };
          
          // Add utility functions to shader
          const positionShaderMaterial = positionVariable.material;
          positionShaderMaterial.defines.random = `
            float random(vec2 co) {
              return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
            }
          `;
          
          // Initialize GPU computation
          const error = gpuComputeRef.current.init();
          if (error !== null) {
            console.error('GPU Compute error:', error);
          }
          
          // Create particles
          createParticles(positionVariable);
          
          // Set up event listeners
          const cleanup = setupEventListeners();
          
          // Start animation
          animate(0);
          
          return cleanup;
        } catch (error) {
          console.error('Error initializing GPU compute:', error);
          
          // Fallback to simple rendering if GPU compute fails
          createFallbackParticles();
          
          const cleanup = setupEventListeners();
          animate(0);
          
          return cleanup;
        }
      } catch (error) {
        console.error('Error in Three.js initialization:', error);
      }
    };
    
    // Create initial particle positions
    const fillPositionTexture = (texture) => {
      const data = texture.image.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // For home page, create a wider spread of particles
        const spread = home ? 12 : 8; // Reduced spread to keep particles more visible
        const x = Math.random() * spread - (spread/2);
        const y = Math.random() * spread - (spread/2);
        const z = Math.random() * spread - (spread/2);
        
        data[i] = x;
        data[i + 1] = y;
        data[i + 2] = z;
        data[i + 3] = Math.random(); // randomize life for staggered reset
      }
    };
    
    // Create particle system
    const createParticles = (positionVariable) => {
      const geometry = new THREE.BufferGeometry();
      
      // Create reference positions (UVs for position lookup)
      const references = new Float32Array(PARTICLES * 2);
      for (let i = 0; i < PARTICLES; i++) {
        const x = (i % TEXTURE_WIDTH) / TEXTURE_WIDTH;
        const y = Math.floor(i / TEXTURE_WIDTH) / TEXTURE_HEIGHT;
        
        references[i * 2] = x;
        references[i * 2 + 1] = y;
      }
      
      // Add reference attribute to geometry
      geometry.setAttribute('reference', new THREE.BufferAttribute(references, 2));
      
      // Create particle material
      const colors = getColorScheme();
      
      const particleUniforms = {
        texturePosition: { value: null },
        pointSize: { value: home ? 12.0 : 4.0 }, // Slightly reduced point sizes for better performance
        time: { value: 0.0 },
        baseColor: { value: colors.baseColor },
        accentColor: { value: colors.accentColor }
      };
      
      const material = new THREE.ShaderMaterial({
        uniforms: particleUniforms,
        vertexShader: particleVertexShader,
        fragmentShader: particleFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      
      // Create particle system and add to scene
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      
      // Store uniforms for animation updates
      particles.userData.uniforms = particleUniforms;
      particles.userData.positionVariable = positionVariable;
    };
    
    // Fallback for devices that don't support GPUComputationRenderer
    const createFallbackParticles = () => {
      const geometry = new THREE.BufferGeometry();
      
      // Reduced number of particles for the fallback
      const fallbackCount = Math.floor(PARTICLES / 4);
      const positions = new Float32Array(fallbackCount * 3);
      const colors = new Float32Array(fallbackCount * 3);
      const sizes = new Float32Array(fallbackCount);
      
      const colorScheme = getColorScheme();
      const color1 = colorScheme.baseColor;
      const color2 = colorScheme.accentColor;
      
      for (let i = 0; i < fallbackCount; i++) {
        // Position
        const spread = home ? 12 : 8;
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
        
        // Color - mix between base and accent
        const mixFactor = Math.random();
        colors[i * 3] = color1.r * (1 - mixFactor) + color2.r * mixFactor;
        colors[i * 3 + 1] = color1.g * (1 - mixFactor) + color2.g * mixFactor;
        colors[i * 3 + 2] = color1.b * (1 - mixFactor) + color2.b * mixFactor;
        
        // Size - vary between small and medium
        sizes[i] = Math.random() * 5 + 2;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      
      const material = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });
      
      particles = new THREE.Points(geometry, material);
      particles.userData.isFallback = true;
      scene.add(particles);
    };
    
    // Set up mouse interaction
    const setupEventListeners = () => {
      // Mouse move handler
      const onMouseMove = (event) => {
        const rect = rendererRef.current.domElement.getBoundingClientRect();
        mouseRef.current.x = (event.clientX - rect.left) / rect.width;
        mouseRef.current.y = (event.clientY - rect.top) / rect.height;
        isMouseActiveRef.current = true;
      };
      
      // Mouse leave handler
      const onMouseLeave = () => {
        isMouseActiveRef.current = false;
      };
      
      // Touch handler for mobile
      const onTouchMove = (event) => {
        if (event.touches.length > 0) {
          const rect = rendererRef.current.domElement.getBoundingClientRect();
          mouseRef.current.x = (event.touches[0].clientX - rect.left) / rect.width;
          mouseRef.current.y = (event.touches[0].clientY - rect.top) / rect.height;
          isMouseActiveRef.current = true;
          event.preventDefault();
        }
      };
      
      // Touch end handler
      const onTouchEnd = () => {
        isMouseActiveRef.current = false;
      };
      
      // Window resize handler with debounce for better performance
      let resizeTimeout;
      const onResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (!mountRef.current || !rendererRef.current) return;
          
          width = mountRef.current.clientWidth;
          height = mountRef.current.clientHeight;
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          
          rendererRef.current.setSize(width, height);
        }, 250); // 250ms debounce time
      };
      
      // Add event listeners
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.addEventListener('mousemove', onMouseMove, { passive: true });
        rendererRef.current.domElement.addEventListener('mouseleave', onMouseLeave, { passive: true });
        rendererRef.current.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
        rendererRef.current.domElement.addEventListener('touchend', onTouchEnd, { passive: true });
        rendererRef.current.domElement.addEventListener('touchcancel', onTouchEnd, { passive: true });
      }
      
      window.addEventListener('resize', onResize, { passive: true });
      
      // Return cleanup function
      return () => {
        if (rendererRef.current && rendererRef.current.domElement) {
          rendererRef.current.domElement.removeEventListener('mousemove', onMouseMove);
          rendererRef.current.domElement.removeEventListener('mouseleave', onMouseLeave);
          rendererRef.current.domElement.removeEventListener('touchmove', onTouchMove);
          rendererRef.current.domElement.removeEventListener('touchend', onTouchEnd);
          rendererRef.current.domElement.removeEventListener('touchcancel', onTouchEnd);
        }
        window.removeEventListener('resize', onResize);
        clearTimeout(resizeTimeout);
      };
    };
    
    // Clock for timing
    const clock = new THREE.Clock();
    
    // Animation loop with throttling for lower-end devices
    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (time) => {
      // Throttle frame rate
      const now = performance.now();
      const elapsed = now - lastFrameTime;
      
      if (elapsed > frameInterval) {
        lastFrameTime = now - (elapsed % frameInterval); // Adjust for drift
        
        const deltaTime = Math.min(0.04, clock.getDelta()); // Cap delta time to prevent large jumps
        time *= 0.001; // Convert to seconds
        
        if (particles) {
          if (particles.userData.isFallback) {
            // Animate fallback particles
            animateFallbackParticles(time, deltaTime);
          } else if (gpuComputeRef.current && particles.userData.positionVariable) {
            // Update uniforms
            const positionVariable = particles.userData.positionVariable;
            positionVariable.material.uniforms.time.value = time;
            positionVariable.material.uniforms.delta.value = deltaTime;
            positionVariable.material.uniforms.mouse.value.copy(mouseRef.current);
            positionVariable.material.uniforms.isMouseActive.value = isMouseActiveRef.current;
            
            // Compute new position
            gpuComputeRef.current.compute();
            
            // Update particle uniforms
            particles.userData.uniforms.texturePosition.value = gpuComputeRef.current.getCurrentRenderTarget(positionVariable).texture;
            particles.userData.uniforms.time.value = time;
          }
        }
        
        // Render scene
        if (rendererRef.current) {
          rendererRef.current.render(scene, camera);
        }
      }
      
      // Continue animation loop
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
    
    // Animate fallback particles
    const animateFallbackParticles = (time, deltaTime) => {
      if (!particles || !particles.geometry) return;
      
      const positions = particles.geometry.attributes.position.array;
      const count = positions.length / 3;
      
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        // Simple circular motion
        const angle = time * 0.2 + i * 0.01;
        const radius = 0.02 * Math.sin(time * 0.1 + i * 0.1);
        
        positions[ix] += Math.sin(angle) * radius;
        positions[iy] += Math.cos(angle) * radius;
        positions[iz] += Math.sin(time * 0.2 + i * 0.02) * 0.01;
        
        // Mouse interaction
        if (isMouseActiveRef.current) {
          const mouseX = (mouseRef.current.x * 2 - 1) * 5;
          const mouseY = -(mouseRef.current.y * 2 - 1) * 5;
          const dx = mouseX - positions[ix];
          const dy = mouseY - positions[iy];
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 2) {
            const force = (2 - dist) * 0.01;
            positions[ix] += dx * force;
            positions[iy] += dy * force;
          }
        }
        
        // Boundaries check
        const limit = home ? 8 : 6;
        if (Math.abs(positions[ix]) > limit) positions[ix] *= 0.95;
        if (Math.abs(positions[iy]) > limit) positions[iy] *= 0.95;
        if (Math.abs(positions[iz]) > limit) positions[iz] *= 0.95;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
    };
    
    // Initialize and start animation
    const cleanup = init();
    
    // Cleanup function
    return () => {
      setIsInitialized(false);
      
      if (cleanup) cleanup();
      
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      
      if (mountRef.current && rendererRef.current) {
        try {
          mountRef.current.removeChild(rendererRef.current.domElement);
        } catch (error) {
          console.error('Error removing renderer:', error);
        }
      }
      
      // Dispose of resources
      if (particles) {
        particles.geometry.dispose();
        
        if (particles.material) {
          particles.material.dispose();
        }
        
        scene.remove(particles);
      }
      
      if (gpuComputeRef.current) {
        gpuComputeRef.current.dispose();
        gpuComputeRef.current = null;
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, [colorScheme, home, isInitialized]);
  
  return (
    <div 
      ref={mountRef} 
      className={`hero-particles ${home ? 'home-particles' : ''}`}
    />
  );
};

export default HeroParticles; 