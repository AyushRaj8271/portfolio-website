import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');

    return (
        <mesh>
            {/* Corrected typo in the comment */}
            {/* We need to add a light source */}
            <hemisphereLight intensity={2} groundColor="black" />
            <pointLight intensity={10} />
            <spotLight
              position ={[-20,50,10]}
              angle={0.22}
              penubra={1}
              intensity={10000}
              castShadow
              shadow-mapSize={1024}
            />
            {/* Used to show the object on the canvas */}
            <primitive object={computer.scene}
            scale={isMobile ? 0.6 : 0.68}
            position={isMobile ? [0,-3,-2.2] :[0,-3.25
              ,-1.5]}
            rotation={[-0.01,-0.2,-0.1]} />
        </mesh>
    )
};

const ComputerCanvas = () => {
    const [isMobile,setIsMobile]=useState(false);
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");
    
        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
    
        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
          setIsMobile(event.matches);
        };
    
        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        // Remove the listener when the component is unmounted
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }, []);

    return (
        <Canvas
            frameloop="demand"  // Corrected typo in the property name
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
             <Suspense fallback={<CanvasLoader />}>
                {/* This allows us to move the model */}
                <OrbitControls enableZoom={false}
                    // It helps us to restrict rotation
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
