import Head from 'next/head'
import React from "react";

export default function About() {

    return (
        <>
            <Head>
                <title>About - Superhash</title>
            </Head>
            <div className={"text-center flex flex-col gap-8"}>
                <h2>Vision</h2>
                <p>
                    Superhash aims to be a key player in the DeFi market by providing world-class services using
                    decentralized technology.
                </p>
                <p>
                    Our focus is on preserving knowledge and understanding the evolving DeFi landscape. We build a
                    strong culture of learning, diversity, and teamwork to achieve our goals and provide the best
                    possible service. We prioritize cost-efficient, widely supported technologies and make informed
                    decisions with data. We take a measured approach as we navigate the rapidly changing world of
                    decentralized finance.
                </p>
                <p>
                Superhash aims to operate primarily as a remote company. While providing working spaces for employees,
                we recognize that the best fit for our team may not always be located in the same place. We have
                experience leading remote teams efficiently since 1999 and have seen the benefits and drawbacks of
                remote work. We strive to become a globally recognized DeFi software development service provider from
                Europe and believe this can be achieved by not limiting ourselves to a single location or timezone. Our
                culture values self-management and skill preservation in order to achieve global recognition.
            </p>
                <h2>Team</h2>
                <p>
                    Konrad Kiss is a seasoned entrepreneur with expertise in managing remote teams and establishing
                    software development service companies. He has been involved in the video game industry for decades
                    and has several video game and fintech projects under his belt. He also serves as an investor in a
                    European firm focusing on clean data sources.
                </p>
                <p>
                    Gyorgy Kiss is a blockchain professional with global consulting experience before joining Superhash.
                    He specializes in using blockchain for video games, and recently presented on the topic at an
                    international conference. He also volunteers as a trainer for a non-profit youth center and
                    contributes to blockchain open-source projects such as Truffle, Loom, and OpenZeppelin.
                </p>
                <p>
                    Istvan Banfi has over 20 years of experience in the financial industry, including leading
                    architecture design teams for major Eastern European banks. He has extensive experience with
                    Hyperledger and Ethereum DLT architectures and has a track record of successfully growing and
                    leading large developer teams. Istvan is an avid traveler, currently residing in the Canary Islands.
                </p>
            </div>
        </>
    )
}
