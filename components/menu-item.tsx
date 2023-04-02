import React, {useContext, useEffect} from "react";
import Icon from "./icon";
import Link from "next/link";
import {useRouter} from "next/router";
import {AppContext} from "../context/context";

const defaultProps = {
    isExternal: false,
    active: false,
    link: "",
    label: ""
};

export default function MenuItem({label, link, isExternal}: typeof defaultProps) {
    const context = useContext(AppContext);
    const router = useRouter()
    useEffect(()=>{
        context.setPrev(context.isPageOpen);
        context.setIsPageOpen(router.asPath !== "/");
    })
    return (
        <Link scroll={true} onPointerOver={()=>context.setHoveredMenuItem(link)} onPointerOut={()=>context.setHoveredMenuItem("")}
            {...{target: isExternal?"_blank":"_self"}} href={link}
              className={"p2 group flex items-center justify-between py-[10px] md:px-[19px] md:px-3 pl-[20px] pr-4 md:py-2 cursor-pointer transition duration-300 ease-in-out ".concat(router.asPath === link ? "bg-white bg-opacity-[0.24]" : "hover:bg-white hover:bg-opacity-[0.16]")}>
            <div className={"transition duration-300 ease-in-out md:opacity-70 ".concat( router.asPath !== link ? "group-hover:opacity-100" : "")}>{label}</div>
            {
                isExternal && <Icon classNames={"mr-1 transition duration-300 ease-in-out ".concat(router.asPath !== link ? " opacity-[0.72] group-hover:opacity-100" : "")}/>
            }
        </Link>
    )
}
