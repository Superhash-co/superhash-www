import React, {useRef, useEffect, useState} from 'react'
import * as THREE from 'three';
import {useFrame, useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Vector2} from "three"

function HoverControls(props: any) {
    const controlsRef = useRef();
    const { gl } = useThree();
    const mouse = useRef(new THREE.Vector2());
    const isHovering = useRef(false);
    const position = useRef(new Vector2());
    const [isDragging, setIsDragging] = useState(false);
    const [preventClick, setPreventClick] = useState(false);

    useEffect(() => {
        const domElement = gl.domElement;
        domElement.addEventListener('mousemove', onMouseMove);
        return () => domElement.removeEventListener('mousemove', onMouseMove);
    }, [gl]);

    function onMouseMove(event: { clientX: number; clientY: number; }) {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    useFrame((state) => {
        state.raycaster.far = 1900
        // @ts-ignore
        controlsRef.current = state.controls
        state.raycaster.setFromCamera(mouse.current, state.camera);
        // @ts-ignore
        const intersects = state.raycaster.intersectObjects(state.scene.children[2].children[0].children,  true);
        isHovering.current = intersects.length > 0;
        document.body.style.cursor = isHovering.current ? 'pointer' : 'auto'
        if (isHovering.current) {
            // @ts-ignore
            controlsRef.current.autoRotateSpeed -= 0.05;
            // @ts-ignore
            if (controlsRef.current.autoRotateSpeed <= 0.75) {
                // @ts-ignore
                controlsRef.current.autoRotateSpeed = 0.75;
            }
        } else {
            if (position.current.y > 0 && position.current.x > 0)
            // @ts-ignore
            if(controlsRef.current.autoRotateSpeed<props.autoRotateSpeed){
                // @ts-ignore
                controlsRef.current.autoRotateSpeed += 0.05
            }
            // @ts-ignore
            controlsRef.current.autoRotateSpeed = props.autoRotateSpeed;
        }
        // @ts-ignore
    });

    useEffect(() => {
        const domElement = gl.domElement;
        const handleMouseDown = () => {
            setIsDragging(true);
        };
        const handleMouseMove = () => {
            if (isDragging) {
                setPreventClick(true);
            }
        };
        const handleMouseUp = () => {
            setIsDragging(false);
            setPreventClick(false);
        };
        const handleClick = (event:any) => {
            if (preventClick) {
                event.stopPropagation();
                event.preventDefault();
            }
        };

        domElement.addEventListener('mousedown', handleMouseDown);
        domElement.addEventListener('mousemove', handleMouseMove);
        domElement.addEventListener('mouseup', handleMouseUp);
        domElement.addEventListener('click', handleClick);

        return () => {
            domElement.removeEventListener('mousedown', handleMouseDown);
            domElement.removeEventListener('mousemove', handleMouseMove);
            domElement.removeEventListener('mouseup', handleMouseUp);
            domElement.removeEventListener('click', handleClick);
        };
    }, [gl.domElement, isDragging, preventClick]);

    return <OrbitControls ref={controlsRef} {...props} />
}

export default HoverControls;
