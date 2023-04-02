import Head from 'next/head'
import React from "react";
import Image from "next/image";
import avatar1 from "../assets/avatars/avatar-1.png"
import avatar2 from "../assets/avatars/avatar-2.png"
import avatar3 from "../assets/avatars/avatar-3.png"
import avatar4 from "../assets/avatars/avatar-4.png"
import avatar5 from "../assets/avatars/avatar-5.png"
import avatar6 from "../assets/avatars/avatar-6.png"
import avatar7 from "../assets/avatars/avatar-7.png"
import avatar8 from "../assets/avatars/avatar-8.png"
import avatar9 from "../assets/avatars/avatar-9.png"
import avatar10 from "../assets/avatars/avatar-10.png"
import avatar11 from "../assets/avatars/avatar-11.png"
import avatar12 from "../assets/avatars/avatar-12.png"
import avatar13 from "../assets/avatars/avatar-13.png"
import avatar14 from "../assets/avatars/avatar-14.png"
import avatar15 from "../assets/avatars/avatar-15.png"
import avatar16 from "../assets/avatars/avatar-16.png"

export default function Team() {

    return (
        <>
            <Head>
                <title>About - Superhash</title>
            </Head>
            <div className={"flex flex-col items-center text-center"}>
                <div className={"grid grid-cols-3 gap-4 max-w-fit"}>

                        <Image priority src={avatar1} alt={"Avatar 1"}/>
                        <Image priority src={avatar2} alt={"Avatar 2"}/>
                        <Image priority src={avatar3} alt={"Avatar 3"}/>
                        <Image priority src={avatar4} alt={"Avatar 4"}/>
                        <Image priority src={avatar5} alt={"Avatar 5"}/>
                        <Image priority src={avatar6} alt={"Avatar 6"}/>
                        <Image priority src={avatar7} alt={"Avatar 7"}/>
                        <Image priority src={avatar8} alt={"Avatar 8"}/>
                        <Image priority src={avatar9} alt={"Avatar 9"}/>
                        <Image priority src={avatar10} alt={"Avatar 10"}/>
                        <Image priority src={avatar11} alt={"Avatar 11"}/>
                        <Image priority src={avatar12} alt={"Avatar 12"}/>
                        <Image priority src={avatar13} alt={"Avatar 13"}/>
                        <Image priority src={avatar14} alt={"Avatar 14"}/>
                        <Image priority src={avatar15} alt={"Avatar 15"}/>
                        <Image priority src={avatar16} alt={"Avatar 16"}/>
                </div>
                <h3 className={"mt-[64px] md:mt-[80px]"}>
                    We are building a company that prioritizes staying current with technology trends and finding a balance between innovation and profitability. We value knowledge preservation and strive for an efficient and supportive company culture. We understand the importance of preventing burnout and employ Entrepreneurial Operating System (EOS) in management to keep our top-level executives accountable.
                </h3>
            </div>
        </>
    )
}
