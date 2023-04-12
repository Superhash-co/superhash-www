import Head from 'next/head'
import React from "react";

export default function About() {

    return (
        <>
            <Head>
                <title>About - Superhash</title>
            </Head>
            <div className={"text-center flex flex-col gap-8"}>
                <h2>Our Vision</h2>
                <p>
                    Superhash aims to be a key global player in providing world class infrastructure design and software
                    engineering services.
                </p>
                <p>
                    Our focus is on preserving knowledge and understanding the evolving technology landscape. We build a
                    strong culture of learning, diversity, and teamwork to achieve our goals and provide the best
                    possible service. We prioritize cost-efficient, widely supported technologies and make informed
                    decisions with data. We take a measured approach as we navigate the rapidly changing world of
                    technology.
                </p>
                <p>
                    Superhash aims to operate primarily as a remote company. While providing working spaces for employees,
                    we recognize that the best fit for our team may not always be located in the same place. We have
                    experience leading remote teams efficiently since 1999 and have seen the benefits and drawbacks of
                    remote work. We strive to become a globally recognized service provider and believe this can be
                    achieved by not limiting ourselves to a single location or timezone. Our culture values self-management
                    and skill preservation in order to achieve global recognition.
                </p>
                <h4>Our Founders</h4>
                <p>
                    Our Chief Integration Officer, Gyorgy Kiss is a DeFi professional with a global consulting experience.
                    He specializes in using DLT technology in relation to video games, and has multiple presentations on the topic to an
                    international audience under his belt. He also volunteers as a trainer for a non-profit youth center and
                    contributes to blockchain open-source projects such as Truffle, Loom, and OpenZeppelin.
                </p>
                <p>
                    Superhash CTO Istvan Banfi has over 20 years of experience in the financial industry, including leading
                    architecture design teams for major Eastern European banks. He has an extensive SRE / DevOps experience
                    related to cloud infrastructure providers as well as permissioned DLT architectures. He has a track record
                    of successfully growing and leading large developer teams of 100+ members. Istvan is an avid traveler.
                    He currently resides in the Canary Islands.
                </p>
                <p>
                    Our CEO, Konrad Kiss is a seasoned entrepreneur with expertise in managing remote teams and establishing
                    software development service companies. He has been involved in the video game industry for decades
                    and has several video game and fintech projects under his belt. He is enthusiastic about the future of
                    health and education. He is the founder of a primary school that teaches children pragmatic skills.
                </p>
            </div>
        </>
    )
}
