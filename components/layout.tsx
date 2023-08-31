import React, {useContext, useEffect, useRef, useState} from "react"
import {Canvas} from "@react-three/fiber"
import Menu from "./menu";
import Logo from "./logo";
import Head from "next/head";
import {AppContext} from "../context/context";
import RightMenu from "./right-menu";
import {animated, easings, useTransition} from '@react-spring/web'
import {useRouter} from "next/router";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import SimpleBarCore from "simplebar-core";

const Scene = React.lazy(() => import("./scene"))

export default function Layout(props: any) {
    const context = useContext(AppContext);
    const router = useRouter();

    const [alreadyClicked, setAlreadyClicked] = useState(false);
    const [isHeaderShow, setIsHeaderShow] = useState(false);
    const scrollbar = useRef() as React.MutableRefObject<SimpleBarCore>;
    const [mousePos, setMousePos] = useState({x:0,y:0});

    const transition = useTransition(props.children, {
        onDestroyed: () => {
            scrollbar.current?.recalculate()
            // @ts-ignore
            scrollbar.current.getScrollElement().scrollTop = 0
        },
        exitBeforeEnter: true,
        from: {
            scale: 1,
            opacity: 0,
            transform: "translate3d(0,0,1000px)",
        },
        enter: {
            scale: 1,
            opacity: 1,
            transform: "translate3d(0,0,0px)",
        },
        leave: {
            scale: 1,
            opacity: 0,
            transform: router.asPath === "/" ? "translate3d(0,0,1000px)" : "translate3d(0,0,-5000px)",
        },
        config: {
            tension: 280, friction: 60,
            duration: 600,
            precision: 0.00000000001,
            easing: easings.easeInOutQuad,
        },
    })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    return (<>
            <Head>
                <meta name="description" content="Superhash specializes in multiplayer gaming and web3 backends and infrastructures, offering resilient and highly scalable solutions."/>
                <meta property="og:image" content={context.assetPrefix+"/sh-og.png"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/svg+xml" href={context.assetPrefix+"/favicon.svg"}/>
                <link rel="icon" type="image/png" href={context.assetPrefix+"/favicon.png"}/>
                <meta name="theme-color" content={context.activePageProps?.bg}/>
                <style>
                    {`
                    body{
                        background: ${context.activePageProps?.bg} 
                    }
                `}
                </style>
            </Head>

            <div className={`w-screen h-screen overflow-hidden font-sans`}>

                <Canvas onMouseUp={()=>setAlreadyClicked(true)}  fallback={null} style={{position: "absolute"}} resize={{scroll: true}} shadows flat linear>
                    <Scene />
                </Canvas>

                <h3 className={`${context.hover?"opacity-100":"opacity-0"} duration-300 transition-opacity whitespace-nowrap fixed bg-white pointer-events-none text-[#0080FF] px-[12px] py-[2px] rounded-full`} style={{top: mousePos.y-25, left: mousePos.x+10}}>learn more</h3>

                <SimpleBar scrollableNodeProps={{
                    onScroll(e: any) {
                        e.target.scrollTop > 30 ? setIsHeaderShow(true) : setIsHeaderShow(false);
                    }
                }} ref={scrollbar} className={`h-screen overflow-x-hidden ${context.isPageOpen ? "" : "pointer-events-none"}`}>
                    <div
                        className={`w-screen flex justify-center relative transform-gpu ${context.isPageOpen ? "" : "pointer-events-none"}`} style={{transformStyle: "preserve-3d", transform: "perspective(1300px)", perspectiveOrigin: "center", transformOrigin: "center 50vh"}}>
                        {transition((style: any, item: any) => (
                            <animated.div style={{ ...style}} className={"transform-gpu overflow-x-hidden absolute max-w-[448px] min-h-screen flex items-center"}>
                                <div
                                    className={"px-8 md:px-0 before:content-[''] before:h-48 before:block after:content-[''] after:h-48 after:block"}>
                                    {item}
                                </div>
                            </animated.div>
                        ))}
                    </div>
                </SimpleBar>

                <div className={`md:flex fixed transition-all duration-300 ease-in-out ${context.isPageOpen?"hidden bottom-0 opacity-0":"bottom-[100px] opacity-100"}  left-1/2 -translate-x-1/2 items-center flex-initial shrink-0 w-full justify-center flex-nowrap`}><span
                    className={"ml-2 min-w-max flex justify-center"}><a className={"flex justify-center"}
                    href={context.assetPrefix+"/superhash-gc2023.pdf"}><img
                    src={context.assetPrefix+"/sh-promo-cover.png"} width={"19px"}
                    />&nbsp;Get our intro brochure</a></span></div>

                {/*!context.isPageOpen &&
                    <div
                        className={`hidden md:flex fixed transition-all duration-300 ease-in-out ${alreadyClicked?"bottom-0 opacity-0":"bottom-[24px]  opacity-100"} left-1/2 -translate-x-1/2 items-center flex-initial shrink-0 w-full justify-center flex-nowrap`}>
                        <svg className={"hidden md:block"} width="13" height="18" viewBox="0 0 13 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.83333 2.125C3.33756 2.125 2.125 3.33756 2.125 4.83333V13.1667C2.125 14.6624 3.33756 15.875 4.83333 15.875H8.16667C9.66244 15.875 10.875 14.6624 10.875 13.1667V4.83333C10.875 3.33756 9.66244 2.125 8.16667 2.125H4.83333ZM0.875 4.83333C0.875 2.64721 2.64721 0.875 4.83333 0.875H8.16667C10.3528 0.875 12.125 2.64721 12.125 4.83333V13.1667C12.125 15.3528 10.3528 17.125 8.16667 17.125H4.83333C2.64721 17.125 0.875 15.3528 0.875 13.1667V4.83333Z"
                                fill="white"/>
                            <path
                                d="M6.5 4.20833C6.84518 4.20833 7.125 4.48816 7.125 4.83333V8.16667C7.125 8.51185 6.84518 8.79167 6.5 8.79167C6.15482 8.79167 5.875 8.51185 5.875 8.16667V4.83333C5.875 4.48816 6.15482 4.20833 6.5 4.20833Z"
                                fill="white"/>
                        </svg>

                        <svg className={"md:hidden"} xmlns="http://www.w3.org/2000/svg" height="18"
                             width="18" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/>
                            <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/>
                            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/>
                            <path
                                d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/>
                            <path d="M2.541 5.594a13.487 13.487 0 0 1 2.46 -1.427"/>
                            <path d="M14 3.458c1.32 .354 2.558 .902 3.685 1.612"/>
                        </svg>
                        <span className={"ml-2 min-w-max"}>
                            Move around to discover our universe
                        </span>
                    </div>
                */}

                <div className={"absolute overflow-hidden"}>
                    <div
                        style={{backgroundColor: context.isPageOpen?context.activePageProps?.bg:"transparent"}}
                        className={`${isHeaderShow?"border-opacity-[0.16]":"border-opacity-0"} transition-[border] duration-300 fixed top-0 left-0 w-full flex justify-center items-center h-[72px] border-b border-white`}>
                        <Link href={"/"}>
                            <Logo/>
                        </Link>
                    </div>
                    <div className={"flex w-full"}>
                        <Menu/>
                        <RightMenu/>
                    </div>
                </div>
            </div>
        </>)
}
