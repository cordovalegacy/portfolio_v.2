
// !Packages
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GoMarkGithub as GitHub } from 'react-icons/go'

type ProjectProps = {
    type: any;
    title: string;
    summary: string;
    img: string;
    link?: string;
    github?: string;
}

const Project: React.FC<ProjectProps> = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='flex flex-col gap-2 w-full xs:w-[90vw] min-h-[500px] shadow-lg xs:mx-auto items-center justify-start rounded-2xl border border-solid border-black bg-gray-200 p-6 relative'>
            <div className='w-full flex flex-col mb-10 items-start justify-between xs:pl-0 pl-6'>
                <span className='text-pink-700 text-xl font-medium'>{type}</span>
                {link
                    ? <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full xs:text-left text-center text-2xl font-bold'>{title}</h2>
                    </Link>
                    : <div className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full xs:text-left text-center text-2xl font-bold'>{title}</h2>
                    </div>
                }
                <p className='my-2 font-medium text-black xs:text-left text-left'>{summary}</p>
                <div className='flex w-full justify-start xs:justify-start xs:gap-8 gap-4 items-center mt-2'>
                    {github === "none" ? null :
                        <motion.a
                            href={github}
                            className="ml-6 xs:ml-0"
                            whileHover={{ y: -4, scale: 1.2 }}
                            whileTap={{ scale: 2.0 }}
                        ><GitHub className="text-3xl xs:text-4xl hover:text-pink-700 outline-none border-2 border-black hover:outline hover:outline-2 hover:bg-slate-800 rounded-full transition duration-150" />
                        </motion.a>
                    }
                    {link && <Link href={link} target='_blank' className='hover:-translate-y-1 hover:bg-slate-900 shadow-lg hover:text-pink-600 transition duration-300 ml-2 bg-black rounded-lg text-gray-200 px-6 text-md xs:text-xl font-semibold hover'>View</Link>}
                </div>
            </div>
            {link
                ? <Link href={link} target='_blank' className='w-full flex flex-col justify-center items-center cursor-pointer overflow-hidden rounded-lg'>
                    <Image width={600} height={600} src={img} alt={title} className='shadow-xl rounded-lg w-[400px] h-auto hover:brightness-105 transition duration-300' />
                </Link>
                : <div className='w-full flex flex-col justify-center items-center cursor-pointer overflow-hidden rounded-lg'>
                    <Image width={600} height={600} src={img} alt={title} className='shadow-xl rounded-lg w-[400px] h-auto hover:brightness-105 transition duration-300' />
                </div>
            }
        </article>
    )
}

export default Project