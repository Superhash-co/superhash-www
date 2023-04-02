import Head from 'next/head'
import React from "react";
import work1 from "../assets/works/work-1.svg"
import work2 from "../assets/works/work-2.svg"
import work3 from "../assets/works/work-3.svg"
import work4 from "../assets/works/work-4.svg"
import work5 from "../assets/works/work-5.svg"
import work6 from "../assets/works/work-6.svg"
import work7 from "../assets/works/work-7.svg"
import work8 from "../assets/works/work-8.svg"
import work9 from "../assets/works/work-9.svg"
import work10 from "../assets/works/work-10.svg"
import work11 from "../assets/works/work-11.svg"
import work12 from "../assets/works/work-12.svg"
import Image from "next/image";

export default function work() {

    return (
        <>
            <Head>
                <title>About - Superhash</title>
            </Head>
               
            <div className={"flex flex-col items-center text-center"}>
                <h3>
                    Some of the most prestigious companies Superhash and its members had the pleasure to work with
                </h3>
                <div className={"max-w-[448px] w-full flex flex-col divide-y divide-white divide-opacity-[0.16] items-center justify-items-center border border-white border-opacity-[0.16] rounded-[16px] mt-12 overflow-hidden"}>
                    <div className={"flex divide-x divide-white divide-opacity-[0.16] w-full items-center justify-center w-full h-1/4"}>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work2} alt={"work 2"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work3} alt={"work 3"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work4} alt={"work 4"}/>
                    </div>     
                    <div className={"flex divide-x divide-white divide-opacity-[0.16] w-full items-center justify-center w-full h-1/4"}>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work5} alt={"work 5"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work6} alt={"work 6"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work7} alt={"work 7"}/>
                    </div>
                    <div className={"flex divide-x divide-white divide-opacity-[0.16] w-full items-center justify-center w-full h-1/4"}>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work8} alt={"work 8"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work9} alt={"work 9"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work10} alt={"work 10"}/>
                    </div>
                    <div className={"flex divide-x divide-white divide-opacity-[0.16] w-full items-center justify-center w-full h-1/4"}>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work1} alt={"work 1"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work11} alt={"work 11"}/>
                        <Image priority unoptimized className={"w-1/3 p-5 justify-self-center self-center hover:bg-white hover:bg-opacity-[0.08] cursor-pointer transition-all ease-in-out duration-300"} src={work12} alt={"work 12"}/>
                    </div>




                </div>
            </div>
        </>
    )
}
