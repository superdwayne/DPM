import { render } from 'react-dom';
import React, { useRef } from 'react';
import { ZapparCamera, ZapparCanvas, InstantTracker } from '@zappar/zappar-react-three-fiber';

export default function Zap() {
  // Setup a camera ref, as we need to pass it to the tracker.
  const camera = useRef();
  // Use Webpack to load in target file

  return (
    <ZapparCanvas>
    <ZapparCamera />
    <InstantTracker
      placementUI="placement-only"
      placementCameraOffset={[0, 0, -10]}
    >
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </InstantTracker>
    <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
  </ZapparCanvas>
  );
}
render(<Zap />, document.getElementById('root'));