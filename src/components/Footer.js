import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
            font-medium text-lg dark:text-light dark:border-light sm:text-base
            '
        >
            <Layout className=' flex items-center justify-between py-8 lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Built With <span className='text-primary dark:text-primaryDark text-2xl px-1 '>&#9825;</span>
                    by&nbsp;<Link href="https:vision-portfolio.netlify.app" className='underline
                        underline-offset-2'
                        target={"_blank"}
                    >VisionTey</Link>
                </div>

                <Link href="https:vision-portfolio.netlify.app" target={"_blank"} className='underline
                    underline-offset-2'>Say hello</Link>

            </Layout>
        </footer>

    )
}

export default Footer