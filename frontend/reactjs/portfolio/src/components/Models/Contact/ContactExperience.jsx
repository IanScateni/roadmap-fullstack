import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Fondo del canvas */}
      <color attach="background" args={["#2d2d38"]} />

      {/* Luces */}
      <ambientLight intensity={0.5} color="#fff" />
      <directionalLight position={[4, 6, 3]} intensity={1.8} color="#f3f3f3" castShadow />
      <directionalLight position={[-4, 5, 2]} intensity={0.5} color="#ffffff" />
      

      {/* Suaviza sombras al pie del objeto */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.35}
        scale={10}
        blur={1.5}
        far={10}
      />
      
      <spotLight
        position={[2, 5, 6]}
        angle={0.25}
        intensity={100}
        penumbra={0.2}
        color="white"
      />

      {/* Controles */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Piso tipo escritorio */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Modelo de escritorio */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;