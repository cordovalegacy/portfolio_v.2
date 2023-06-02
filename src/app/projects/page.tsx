"use client"
import Link from 'next/link'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import { GoMarkGithub as GitHub } from 'react-icons/go'
import { motion } from 'framer-motion'

interface TSXProps {
    type: any,
    title: string,
    summary: string,
    img: string,
    link: string,
    github: string
}

const FeaturedProject: React.FC<TSXProps> = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border p-6 border-solid border-black bg-gray-200 shadow-2xl'>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image width={600} height={600} src={img} alt={title} className='w-[600px] h-auto hover:brightness-125 transition duration-300' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-pink-700 text-3xl font-medium'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-5xl font-semibold'>{title}</h2>
                </Link>
                <p className='my-2 text-lg font-medium text-black'>{summary}</p>
                <div className='flex w-full justify-start gap-4 items-center mt-2'>
                    <motion.a
                        href={github}
                        className="ml-6"
                        whileHover={{ y: -4, scale: 1.2 }}
                        whileTap={{ scale: 2.0 }}
                    ><GitHub className="text-5xl hover:text-pink-700 outline-none border-2 border-black hover:outline hover:outline-2 hover:bg-slate-800 rounded-full transition duration-150" />
                    </motion.a>
                    <Link href={link} target='_blank' className='hover:-translate-y-1 hover:bg-slate-900 shadow-lg hover:text-pink-600 transition duration-300 ml-2 bg-black rounded-lg text-gray-200 px-6 text-lg font-semibold hover'>View the project</Link>
                </div>
            </div>
        </article>
    )
}

const Project: React.FC<TSXProps> = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='flex flex-col gap-2 w-full items-center justify-center rounded-2xl border border-solid border-black bg-gray-200 p-6 relative'>
            <div className='w-full flex flex-col mb-10 items-start justify-between pl-6'>
                <span className='text-pink-700 text-xl font-medium'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-center text-2xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black text-center'>{summary}</p>
                <div className='flex w-full justify-start gap-4 items-center mt-2'>
                    {github === "none" ? null :
                        <motion.a
                            href={github}
                            className="ml-6"
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 2.0 }}
                        ><GitHub className="text-3xl hover:text-pink-700 outline-none border-2 border-black hover:outline hover:outline-2 hover:bg-slate-800 rounded-full transition duration-150" />
                        </motion.a>
                    }
                    <Link href={link} target='_blank' className='hover:-translate-y-1 hover:bg-slate-900 shadow-lg hover:text-pink-600 transition duration-300 ml-2 bg-black rounded-lg text-gray-200 px-6 text-md font-semibold hover'>View</Link>
                </div>
            </div>
            <Link href={link} target='_blank' className='w-full flex flex-col justify-center items-center cursor-pointer overflow-hidden rounded-lg'>
                <Image width={600} height={600} src={img} alt={title} className='shadow-xl rounded-md w-[400px] h-auto hover:brightness-105 transition duration-300' />
            </Link>
        </article>
    )

}

const Projects = () => {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-start gap-6 p-24">
            <AnimatedText className='text-6xl mb-4' text={"Make progress, not excuses."} />
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'Legacy Builds, LLC. E-Commerce Site.'}
                        summary={'React, MongoDB, Express, NodeJS, SASS, Tailwind CSS, AWS EC2, PayPal SDK, EmailJS, React Responsive Carousel, Authentication/Authorization, and more!'}
                        link={'http://www.legacybuildspc.com/'}
                        type={'Featured Project'}
                        github={'https://github.com/cordovalegacy/Legacy_Deployment'}
                        img={'/legacy_builds.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Search Engine - Google Clone'}
                        summary={'React, NextJS, Tailwind CSS, Vercel, OAuth2.0 w/ NextAuth, Paganation, IPAPI (Geo Location), Google Programmable Search API, and more!'}
                        link={'https://nextjs13-googleclone.vercel.app/'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/Next_JS_Google_Clone'}
                        img={'/google_clone.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Movie Site - IMDB Clone'}
                        summary={'React, NextJS, Tailwind CSS, Vercel, Paganation, The Movie Database Api, Next Themes, and more!'}
                        link={'https://imdb-clone-cordovalegacy.vercel.app/'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/NextJS_IMDB_Clone'}
                        img={'/imdb_clone.png'}
                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'Dispatch - Full Stack Chat Application'}
                        summary={'React, MongoDB, Express, NodeJS, Tailwind CSS, Giphy SDK, Socket.io, Emoji Mart API, Vite, Authentication/Authorization, and more!'}
                        link={'https://www.linkedin.com/posts/brendan-cordova-2874011ba_update-new-sprints-added-to-project-added-ugcPost-7066596851277250560-6vXH/?utm_source=share&utm_medium=member_desktop'}
                        type={'Featured Project'}
                        github={'https://github.com/cordovalegacy/Dispatch'}
                        img={'/dispatch.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Portfolio - Retired V.1'}
                        summary={'React, Heroku, Vanilla JS, Responsive Forms, and more!'}
                        link={'https://agile-chamber-82558.herokuapp.com/'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/portfolio_deployment'}
                        img={'/portfolio_v1.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Specialist in Probate - Legal Site'}
                        summary={'React, Vanilla JS, Heroku, Responsive Forms, and more!'}
                        link={'https://glacial-dawn-05023.herokuapp.com/'}
                        type={'Project'}
                        github={'none'}
                        img={'/specialist_in_probate.png'}
                    />
                </div>
            </div>
        </main>
    )
}

export default Projects
