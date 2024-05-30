import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
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
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    {/* <Details
                        type="Bachelor Of Science In Land Economics"
                        time="2022 - present"
                        place="Makerere University, Kampala"
                        info="Relevant courses including Engineering Mathematics, Real Estate Valuation, Construction Management,
                         ICT, Construction Technology etc"
                    /> */}
                    <Details
                        type="Full Stack Web Development Certification"
                        time="July 2021 - December 2021"
                        place="OUTBOX EDU."
                        info="Completed my Full Stack Web Development course where I learned both frontend development skills
                        and back-end development skills"
                    />
                    <Details
                        type=" Uganda Advanced Certificate of Education (UACE)"
                        time="2018 - 2019,"
                        place="Mbarara High School"
                        info="Finished Advanced level with a combination of Physics, Mathematics and Technical Drawing as Principle
                        subjects and ICT and General paper as subsidiary subjects"
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education