import { animated, config, useSpring } from "@react-spring/three";
import React, {FunctionComponent, useContext, useState} from "react"
import {AppContext} from "../context/context"

type HoverableProps = {
    hoverScale?: number,
    onClick?: () => void,
    children: React.ReactNode
}

export const Hoverable: FunctionComponent<HoverableProps> = ({hoverScale = 1.1, onClick = () => {}, children, ...props}: HoverableProps) => {
    const [down, setDown] = useState(false);
    const {setHover} = useContext(AppContext);
    const [hover2, setHover2] = useState(false)

    const { scale } = useSpring({
        scale: down ? hoverScale * 1.05 : hover2 ? hoverScale : 1,
        config: config.wobbly
    });

    return (
        <animated.group
            scale={scale}
            onPointerOver={() => {
                setHover(true)
                setHover2(true)
            }}
            onPointerOut={() => {
                setHover(false)
                setHover2(false)
                setDown(false)
            }}
            onPointerDown={() => setDown(true)}
            onPointerUp={() => setDown(false)}
            onClick={() => {
                if (onClick) onClick();
                setHover(false)
                setHover2(false)
                setDown(false)
            }}
            {...props}
        >
            {children}
        </animated.group>
    );
}
