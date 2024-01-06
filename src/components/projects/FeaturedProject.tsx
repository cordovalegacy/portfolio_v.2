
// !Packages
import Link from "next/link"
import { motion } from 'framer-motion'
import { GoMarkGithub as GitHub } from 'react-icons/go'

type FeaturedProps = {
    type: any;
    title: string;
    summary: string;
    video: string;
    link: string;
    github: string;
    poster: string;
}

const FeaturedProject: React.FC<FeaturedProps> = ({ type, title, summary, video, link, github, poster }) => {
    return (
        <article className='w-full xs:w-[90vw] min-h-[400px] mx-auto xs:flex-col flex items-center justify-between rounded-3xl border p-6 border-solid border-black bg-gray-200 shadow-2xl'>
            <Link href={link} target='_blank' className={`mx-auto w-1/2 xs:w-full cursor-pointer overflow-hidden rounded-lg xs:mb-4`}>
                <video width={600} height={600} controls loop src={video} muted poster={poster} className='w-full max-h-[400px] h-auto hover:brightness-125 transition duration-300 rounded-xl' />
            </Link>
            <div className='w-1/2 xs:w-full xs:gap-4 flex flex-col items-start justify-between pl-6 xs:pl-0'>
                <span className='text-pink-700 text-3xl font-medium'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-5xl font-semibold xs:text-3xl'>{title}</h2>
                </Link>
                <p className='my-2 xs:text-md xs:w-full xs:mx-auto text-lg font-medium text-black'>{summary}</p>
                <div className='flex w-full justify-start gap-4 items-center mt-2'>
                    {github === "none" ? null :
                        <motion.a
                            href={github}
                            className="ml-6 xs:ml-0"
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 2.0 }}
                        ><GitHub className="text-5xl hover:text-pink-700 outline-none border-2 border-black hover:outline hover:outline-2 hover:bg-slate-800 rounded-full transition duration-150" />
                        </motion.a>
                    }
                    <Link href={link} target='_blank' className='hover:-translate-y-1 hover:bg-slate-900 shadow-lg hover:text-pink-600 transition duration-300 xs:ml-0 xs:py-2 ml-2 bg-black rounded-lg text-gray-200 px-6 text-lg font-semibold hover'>View the project</Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject