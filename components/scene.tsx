import useSpline from '@splinetool/r3f-spline'
import {PerspectiveCamera} from '@react-three/drei'
import {Hoverable} from "./hoverable"
import {useFrame} from "@react-three/fiber"
import React, {useContext} from "react"

import {animated, useSpring} from "@react-spring/three"
import {AppContext} from "../context/context"
import {useRouter} from "next/router"
import HoverControls from "./HoverControls"


export default function Scene() {
    const {nodes, materials} = useSpline('/scene.splinecode')
    const context = useContext(AppContext)
    const router = useRouter()

    let {rotation, scale, cameraZ} = useSpring({
        from: {
            rotation: context.isPageOpen ? 0 : Math.PI * 9,
            scale: 0,
            cameraZ: 6500,

        },
        cameraZ: context.isPageOpen ? 6500 : 2200,
        rotation: 0,
        scale: context.isPageOpen ? 0 : 1,
        config: {
            mass: context.isPageOpen ? 1 : 6,
            tension: context.isPageOpen ? 300 : 300,
            friction: 50,
            precision: 0.0001,
        }
    })

    useFrame((state) => {
        // @ts-ignore
        state.camera.aspect = window.innerWidth / window.innerHeight
        // @ts-ignore
        state.camera.fov = 45 / ((state.camera.aspect + 1) / 2)

        state.setSize(window.innerWidth, window.innerHeight)
        let zoomDistance = Number(cameraZ.get()),
            currDistance = state.camera.position.length(),
            factor = zoomDistance / currDistance

        state.camera.position.x *= factor
        state.camera.position.y *= factor
        state.camera.position.z *= factor
        if (context.isPageOpen) {
            // @ts-ignore
            state.controls?.setPolarAngle(Math.PI / 2)

            // @ts-ignore
            state.controls?.setAzimuthalAngle(state.controls?.getAzimuthalAngle() - state.clock.getElapsedTime() * 0.000001)
        }else{
            let hoveredItem = context.navItems.find((item) => item.link === context.hoveredMenuItem)
            if (hoveredItem && hoveredItem.link !== "/"){
                // @ts-ignore
                state.controls?.setPolarAngle(hoveredItem.position.x)

                // @ts-ignore
                state.controls?.setAzimuthalAngle(hoveredItem.position.y)
            }
        }
    })
    const AnimatedPerspectiveCamera = animated(PerspectiveCamera)

    return (
        <>
            <HoverControls
                enableDamping={true}
                enablePan={false}
                enableZoom={false}
                makeDefault
                autoRotate={true}
                autoRotateSpeed={1.5}
            />
            <AnimatedPerspectiveCamera
                name="MainCamera"
                makeDefault={true}
                far={10000}
                near={1}
                position-x={0}
                position-y={0}
                position-z={2500}
                rotation={[0, 0, 0]}
            >
                <hemisphereLight position={[0, 0, 0]} name="Default Ambient Light" intensity={1} color="#a9d2f8"/>
                <pointLight
                    name="Point Light"
                    castShadow={true}
                    intensity={1.2}
                    distance={6500}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-near={1}
                    shadow-camera-far={2000}
                    position={[-1000, 500, -500]}
                    rotation={[0, 0, 0]}
                    scale={1}
                />
            </AnimatedPerspectiveCamera>
            <animated.group rotation-y={rotation} name="Group" position={[0, 0, 0]} scale={1}>
                <animated.group name="Text" scale={scale} position={[0, 0, 0]}>
                    <Hoverable onClick={() => router.push("/team")}>
                        <mesh
                            name="Team"
                            geometry={nodes.Team.geometry}
                            material={materials['Team Material']}
                            position={[-438.17, -13.13, -10.44]}
                            rotation={[1.68, -1.38, -1.46]}
                            scale={1}
                        >
                            <mesh
                                name="Team-text"
                                geometry={nodes['Team-text'].geometry}
                                material={nodes['Team-text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[2.19, 9.14, -442.75]}
                                rotation={[-3.14, 0, 0.01]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                    <Hoverable onClick={() => {
                        router.push("/about")
                    }}>
                        <mesh
                            name="About Us"
                            geometry={nodes['About Us'].geometry}
                            material={materials['About Us Material']}
                            position={[-59.04, 385.35, -135.6]}
                            rotation={[-2.11, -0.16, 0.03]}
                            scale={1}
                        >
                            <mesh
                                name="About Us text"
                                geometry={nodes['About Us text'].geometry}
                                material={nodes['About Us text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[-3.04, 14.21, -405.37]}
                                rotation={[3.14, 0, -0.01]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                    <Hoverable onClick={() => router.push("/works")}>
                        <mesh
                            name="Past Works"
                            geometry={nodes['Past Works'].geometry}
                            material={materials['Past Works Material']}
                            position={[-159.52, -363.55, -132.08]}
                            rotation={[1.72, -0.29, -0.47]}
                            scale={1}
                        >
                            <mesh
                                name="past-works-text"
                                geometry={nodes['past-works-text'].geometry}
                                material={nodes['past-works-text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[2.16, 9.93, -427.57]}
                                rotation={[3.14, 0, 0]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                    <Hoverable onClick={() => router.push("/contact")}>
                        <mesh
                            name="Contact Us"
                            geometry={nodes['Contact Us'].geometry}
                            material={materials['Contact Us Material']}
                            position={[221.82, 136.16, 324.63]}
                            rotation={[-0.43, 0.55, -2.92]}
                        >
                            <mesh
                                name="contact-us-text"
                                geometry={nodes['contact-us-text'].geometry}
                                material={nodes['contact-us-text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[2.8, -85.43, -426.23]}
                                rotation={[2.92, 0.01, 0]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                    <Hoverable>
                        <mesh
                            name="Blog"
                            geometry={nodes.Blog.geometry}
                            material={materials['Blog Material']}
                            position={[174.69, -277.79, 317.7]}
                            rotation={[0.96, 0.32, 2.78]}
                            scale={1}
                        >
                            <mesh
                                name="Blog-text"
                                geometry={nodes['Blog-text'].geometry}
                                material={nodes['Blog-text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[-1.37, 13.22, -453.74]}
                                rotation={[-3.14, 0, 0]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                    <Hoverable>
                        <mesh
                            name="Careers"
                            geometry={nodes.Careers.geometry}
                            material={materials['Careers Material']}
                            position={[272.54, -89.76, -271.61]}
                            rotation={[2.84, 0.76, 0.19]}
                            scale={1}
                        >
                            <mesh
                                name="Careers-text"
                                geometry={nodes['Careers-text'].geometry}
                                material={nodes['Careers-text'].material}
                                castShadow={true}
                                receiveShadow={true}
                                position={[1.26, -51.22, -393.93]}
                                rotation={[3.08, -0.01, 0]}
                                scale={[-2.5, 2.5, 2.5]}
                            />
                        </mesh>
                    </Hoverable>
                </animated.group>
                {/*<mesh
                        name="particles"
                        geometry={nodes.Sphere.geometry}
                        material={materials['']}
                        castShadow={false}
                        receiveShadow={false}
                        position={[0,-1000,0]}
                        rotation={[0, 0, 0]}
                        scale={2}
                    />*/}
            </animated.group>
        </>
    )
}
