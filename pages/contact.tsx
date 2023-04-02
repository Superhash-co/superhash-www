import Head from 'next/head'
import React from "react";
import Button from "../components/button";
import Link from "next/link";
import LinkedinIcon from "../components/linkedin-icon";
import MediumIcon from "../components/medium-icon";

export default function About() {
    return (
        <>
            <Head>
                <title>Get in touch - Superhash</title>
            </Head>
            <div className={"flex flex-col items-center gap-8 md:gap-12"}>
                <h2 className={"px-1"}>Let&apos;s explore the<br/>next universe<br/>together.</h2>

                <Button href={"mailto:hello@superhash.com"}>hello@superhash.co</Button>
                <div className={"md:hidden flex gap-3"}>

                    <Link target={"_blank"} href={"https://linkedin.com"}
                          className={`group flex rounded-full backdrop-blur-xl items-center justify-between px-4 py-2 text-md cursor-pointer hover:bg-white hover:bg-opacity-[0.16] h-[52px]`}
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.20)"}}
                    >
                        <div className={"opacity-70 group-hover:opacity-100"}>
                            <LinkedinIcon/>
                        </div>
                    </Link>
                    <Link target={"_blank"} href={"https://medium.com"}
                          className={"group flex rounded-full backdrop-blur-xl items-center justify-between px-4 py-2 text-md cursor-pointer hover:bg-white hover:bg-opacity-[0.16] h-[52px]"}
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.20)"}}
                    >
                        <div className={"opacity-70 group-hover:opacity-100"}>
                            <MediumIcon/>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
