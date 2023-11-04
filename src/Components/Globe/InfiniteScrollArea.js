// src/components/InfiniteScrollArea.js
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Content from "./Content";

const InfiniteScrollArea = () => {
    const [selectedContent, setSelectedContent] = useState(null);
  
    const contents = [
      { id: 1, position: [-2, 0, 0], htmlContent: '<Html>HTML Content for Cube 1</Html>' },
      { id: 2, position: [0, 0, 0], htmlContent: '<Html>HTML Content for Cube 2</Html>' },
      { id: 3, position: [2, 0, 0], htmlContent: '<Html>HTML Content for Cube 3</Html>' },
      // ... (add more content objects as needed)
    ];
  
    const handleContentClick = (id) => {
      const content = contents.find(content => content.id === id);
      setSelectedContent(content);
    };
  
    return (
      <Canvas camera={{ position: [0, 5, 5], rotation: [-0.5, 0, 0] }}
                 style={{ backgroundColor: '#323232', display: 'block', height: '100vh', width: '100vw' }}>

        <OrbitControls />
        {contents.map(content => (
          <Content
            key={content.id}
            position={content.position}
            onClick={() => handleContentClick(content.id)}
            htmlContent={content === selectedContent ? content.htmlContent : null}
          />
        ))}
      </Canvas>
    );
  };

export default InfiniteScrollArea;
