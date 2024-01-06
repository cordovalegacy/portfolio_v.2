"use client"


// !Components
import Project from '@/components/projects/Project'
import AnimatedText from '../../components/global/AnimatedText'
import FeaturedProject from '@/components/projects/FeaturedProject'


const Projects = () => {
    return (
        <main className="flex xs:w-[90vw] xs:mx-auto min-h-screen w-full flex-col items-center justify-start gap-6 xs:p-12 p-16">
            <AnimatedText className='text-6xl mb-4 xs:text-3xl xs:w-full' text={"Make progress, not excuses."} />
            <div className='grid grid-cols-12 gap-24 xs:flex xs:flex-col'>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'Ramsey Network App | Software Engineer'}
                        summary={'React, React Native, Typescript, Zustand, React Query, Java, Spring Boot'}
                        link={'https://www.ramseysolutions.com/shows/app'}
                        type={'Featured Project'}
                        github={'none'}
                        video={'/rn_app.mov'}
                        poster={'/rn_poster.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Legacy Builds, LLC. E-Commerce Site'}
                        summary={'React, MongoDB, Express, NodeJS, SASS, Tailwind CSS, AWS EC2, PayPal SDK, EmailJS, React Responsive Carousel, Authentication, Authorization, and more!'}
                        link={'http://www.legacybuildspc.com/'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/Legacy_Deployment'}
                        img={'/legacy_builds.png'}
                    />
                </div>
                <div className='col-span-6 xs:flex xs:flex-col'>
                    <Project
                        title={'Search Engine - Google Clone'}
                        summary={'React, NextJS, Tailwind CSS, Vercel, OAuth2.0 w/ NextAuth, Paganation, IPAPI (Geo Location), Google Programmable Search API, and more!'}
                        link={'https://nextjs13-googleclone.vercel.app/'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/Next_JS_Google_Clone'}
                        img={'/google_clone.png'}
                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'Aisop Adventures | AI Engineer'}
                        summary={'React, NextJs, Tailwind, NodeJs, Socket.io, Python, Django, Docker, Framer-Motion, Redux, RTK Query, PostgresSql, AWS (EC2, S3, SES), OpenAI (Eden GPT-4.0), and more!'}
                        link={'https://www.aisop.io/'}
                        type={'Featured Project'}
                        github={'none'}
                        video={'/aisop.mp4'}
                        poster={'/aisop_poster.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Project
                        title={'Aisop Mobile Application'}
                        summary={'React, React Native, OpenAI (Eden GPT-4.0) NodeJs, Socket.io, Javascript, Python, Django, Zustand, RTK Query,  AWS (S3) and more!'}
                        type={'Project'}
                        img={'/aisop_app.png'}
                        github='none'
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
                    <br />
                    <Project
                        title={'GitHub - 250+ Repositories'}
                        summary={'React, React Native, TypeScript, Python, JavaScript, Java, Ruby, Kotlin, Vue'}
                        link={'https://github.com/cordovalegacy?tab=repositories'}
                        type={'Personal Projects'}
                        github={'https://github.com/cordovalegacy/'}
                        img={'/github.jpg'}
                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'3BX | Lead Frontend Developer'}
                        summary={'React, TypeScript, Next.JS, NodeJS, Tailwind CSS, Framer-Motion, AWS Lambdas, AWS S3, AWS API Gateway, Redux, and more!'}
                        link={'https://www.booksbeatsbox.com/'}
                        type={'Featured Project'}
                        github={'none'}
                        video={'/3bx.mp4'}
                        poster={'/3bx_poster.svg'}
                    />
                </div>
                <div className='col-span-6 xs:flex xs:flex-col'>
                    <Project
                        title={'Dispatch - Full Stack Chat Application'}
                        summary={'React, MongoDB, Express, NodeJS, Tailwind CSS, Giphy SDK, Socket.io, Emoji Mart API, Vite, Authentication/Authorization, and more!'}
                        link={'https://www.linkedin.com/posts/brendan-cordova-2874011ba_update-new-sprints-added-to-project-added-ugcPost-7066596851277250560-6vXH/?utm_source=share&utm_medium=member_desktop'}
                        type={'Project'}
                        github={'https://github.com/cordovalegacy/Dispatch'}
                        img={'/dispatch.png'}
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
