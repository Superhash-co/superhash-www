import React, {useContext, useState} from "react";
import MenuItem from "./menu-item";
import {AppContext} from "../context/context";

function Menu() {
    const genericHamburgerLine = `h-[1.75px] my-[2px] w-full rounded-full bg-white transition ease transform duration-300`;
    const context = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={"hidden md:block fixed top-1/2 -translate-y-1/2 ml-8 overflow-clip border border-opacity-[0.15] border-white backdrop-blur-xl divide-opacity-10 divide-y divide-white flex flex-col"}
                 style={{width: "168px", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.20)"}}>
                {
                    context.navItems.map(({isExternal, label, link}) => {

                        return (
                            <MenuItem isExternal={isExternal?isExternal:false} active={false} key={link} link={link} label={label}/>
                        )
                    })
                }
            </div>
            <div onBlur={()=>setIsOpen(false)} className={"md:hidden fixed bottom-[16px] left-1/2 -translate-x-1/2"}>

                {isOpen && <div
                    onClick={()=>setIsOpen(false)}
                    className={"overflow-clip border border-opacity-[16%] border-white backdrop-blur-xl divide-opacity-10 divide-y divide-white flex flex-col"}
                    style={{width: "247px", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.20)"}}>
                    {
                        context.navItems.map(({isExternal, label, link}) => {
                            return (
                                <MenuItem
                                    isExternal={isExternal ? isExternal : false} active={false} key={link}
                                          link={link} label={label}/>
                            )
                        })
                    }
                </div>}
                <div onClick={()=>setIsOpen(!isOpen)} className={"overflow-clip px-[19px] py-[15px] border border-opacity-[0.25] border-white backdrop-blur-xl flex justify-between items-center mt-1"}
                     style={{width: "247px", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.20)"}}>
                    <p>
                        <span>Menu</span>
                        { (context.activePageProps?.link !== "/") &&
                            <span>
                                &nbsp;/&nbsp;{context.activePageProps?.label}
                            </span>
                        }
                    </p>
<div className={"w-[17.5px] flex justify-center items-center"}>
    <div
        className={`opacity-[0.72] flex flex-col justify-center items-center group hover:opacity-100 transition ease transform duration-300 ${
            isOpen ? "w-[17px]" : "w-[17.5px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
    >
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-[5.8px]"
                    : ""
            }`}
        />
        <div
            className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : ""
            }`}
        />
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-[5.8px]"
                    : ""
            }`}
        />
    </div>
</div>
                </div>
            </div>
        </>

    )
}

export default Menu;
