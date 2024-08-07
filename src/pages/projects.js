import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ecommerce1 from '../../public/images/projects/ecommerce1.png';
import artgram from '../../public/images/projects/artgram.png';
import blogs from '../../public/images/projects/blogs.png';
import dashboard1 from '../../public/images/projects/dashboard1.png';
import lochel from '../../public/images/projects/lochel.png';
import memories1 from '../../public/images/projects/memories1.png';
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' 
            />
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark sm:px-4 sm:text-base
                        '
                    > Visit Project </Link>
                </div>

            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' 
            />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className='text-lg font-semibold underline md:text-base'
                    > Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>

                </div>

            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>VisionTey | Projects Page</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 !text-6xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl'
                    />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="E-commerce site"
                                summary="A dynamic ecommerce site built with React.js and Firebase. 
                                It offers a wide range of products, featuring real-time data updates 
                                and secure transactions. With a user-friendly interface and fast performance, you can easily browse, shop, and track your orders seamlessly."
                                link="https://edumart.netlify.app/"
                                type="Featured Project"
                                img={ecommerce1}
                                github="https://github.com/Vision-Tey/courier-Gryffindor-frontend"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Dashboard project"
                                link="https://vi-dashboard.vercel.app/"
                                type="Project-1"
                                img={dashboard1}
                                github="https://github.com/Vision-Tey/my-dashboard"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Art Picture gallery"
                                link="https://art-gram-e6fdc.web.app/"
                                type="Project-2"
                                img={artgram}
                                github="https://github.com/Vision-Tey/artpiece-gallery"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Blogs Web Application"
                                summary="A robust blog site built with React.js and Firebase. 
                                It allows users to create, read, and comment on posts with real-time
                                 updates. Featuring a clean and intuitive interface, it ensures an 
                                 engaging and interactive experience for both writers and readers."
                                link="https://blogs-website-ca0d1.web.app/"
                                type="Featured Project"
                                img={blogs}
                                github="https://github.com/Vision-Tey/blogs-website"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Memories Web Application"
                                link="https://memories-project-seven.vercel.app/"
                                type="Project-3"
                                img={memories1}
                                github="https://github.com/Vision-Tey/memories-project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Organisation Website"
                                link="https://lochel-compassion-uganda.netlify.app/"
                                type="Project-4"
                                img={lochel}
                                github="https://github.com/Vision-Tey/LOCHEL"
                            />
                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects