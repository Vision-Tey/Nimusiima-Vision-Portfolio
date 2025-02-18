import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary capitalize dark:text-primaryDark'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-56'>
            <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Frontend Developer" company="Cherio"
                        companyLink="https://www.linkedin.com/company/cherio-technology"
                        time="Feb 2024 - Dec 2024" address="Kampala Uganda"
                        work="Worked and collaborated on an exciting agritech product at Cherio as a frontend developer which was a coffee value chain tracker and traceability tool aimed at providing traceable value chains where
                        i was responsible for the development of the user interface using Reactjs and tailwindcss,
                        collaborated with backend developers to implement APIs for user authentication, tracking and traceability,
                        worked closely with product managers to translate business requirements into functional UI components."
                    />
                    <Details
                        position="Group Lead - Editor Project" company="Dowell"
                        companyLink="www.google.com"
                        time="Feb 2023 - Present" address="Delhi, India"
                        work="As a Group Lead for the Editor Web App Project at, I am responsible
                         for leading a dynamic team of four developers and a designer to drive the 
                         successful completion of the project.

                        In this role, I oversee the development and implementation of cutting-edge
                         form editor, working closely with my team to ensure efficient collaboration
                          and delivery of high-quality results in the required time."
                    />
                    <Details
                        position="Web Developer" company="Dowell"
                        companyLink="www.google.com"
                        time="June 2022 - Jan 2023" address="Delhi, India"
                        work="Worked as a front-end developer at Dowell Research
                         India Limited as a freelancer on a drag and drop form Editor which is a web app built in 
                         Reactjs framework."
                    />
                    <Details
                        position="Software Developer Intern" company="Outbox Uganda"
                        companyLink="www.google.com"
                        time="Feb 2022 - Jun 2022" address="Soliz House Plot 23 Lumumba Ave Kampala"
                        work="I collaborated with a team of 2 Web developers, a software engineer and business analyst
                         on a SafePal project which is a project under the Ministry of Gender, Labor and Social development 
                         and UNFPA and it points to help victims of gender-based violence to report cases using their cell 
                         phones with the help of USSD, a mobile app and a website.
                         I contributed in the development of several parts of the project which include the USSD built in node js,
                          Mobile app built in Java, Dashboard built in React js, mobile app Backend built-in Django and a php server
                           for receiving responses from USSD and website."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience