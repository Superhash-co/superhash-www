import React from "react";

import Link from "next/link";
import LinkedinIcon from "./linkedin-icon";
import MediumIcon from "./medium-icon";

function RightMenu() {
    return (
        <div className={"hidden md:block fixed right-8 top-1/2 -translate-y-1/2 overflow-clip border border-opacity-30 border-white backdrop-blur-xl divide-opacity-10 divide-y divide-white flex flex-col"}
             style={{width: "52px", borderRadius: "12px", backgroundColor: "rgba(255, 255, 255, 0.20)"}}>

                        <Link target={"_blank"} href={"https://linkedin.com/company/superhash"}
                              className={"group flex items-center justify-between px-4 py-2 text-md cursor-pointer hover:bg-white hover:bg-opacity-[0.16] h-[52px]"}>
                            <div className={"opacity-70 group-hover:opacity-100"}>
                                <LinkedinIcon/>
                            </div>
                        </Link>
            <Link target={"_blank"} href={"https://medium.com/superhash"}
                  className={"group flex items-center justify-between px-4 py-2 text-md cursor-pointer hover:bg-white hover:bg-opacity-[0.16] h-[52px]"}>
                <div className={"opacity-70 group-hover:opacity-100"}>
                    <MediumIcon/>
                </div>
            </Link>
        </div>
    )
}

export default RightMenu;
