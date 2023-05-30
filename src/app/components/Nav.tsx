"use client"

import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation" //grabs path from url
import { log } from "../layout" //custom console.log function exported for all
import { motion } from 'framer-motion'

//! React-Icons
import { GoMarkGithub as GitHub } from 'react-icons/go'
import { BsLinkedin as LinkedIn } from 'react-icons/bs'
import { FaInstagramSquare as Insta } from 'react-icons/fa'
//! React-Icons

//*type declarations for TSX props
interface TSXProps {
    href: string,
    title: string,
    className: string
}

//*mini component for Link tags
const CustomLink: React.FC<TSXProps> = ({ href, title, className = "" }) => {

    const pathname = usePathname()
    // log("Path String in Console", pathname) //current path string

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`${pathname === href ? 'w-full' : 'w-0'} h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}> {/* compare current path to href props to provide active underline */}
                &nbsp;
            </span>
        </Link>
    )
}

const Nav = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
            <nav className="flex items-center">
                <CustomLink href='/' title="Home" className="mr-4" />
                <CustomLink href={'/about'} title="About" className="mr-4" />
                <CustomLink href={'/projects'} title="Projects" className="mr-4" />
                <CustomLink href={'/experience'} title="Experience" className="mr-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="https://github.com/cordovalegacy"
                    className="ml-6"
                    whileHover={{y: -4, scale: 1.3}}
                    whileTap={{ scale: 2.0 }}
                ><GitHub className="text-xl hover:text-white hover:bg-slate-800 hover:outline hover:brightness-150 rounded-full transition duration-150" />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/brendan-cordova-2874011ba/"
                    className="ml-6"
                    whileHover={{y: -4, scale: 1.3}}
                    whileTap={{ scale: 2.0 }}
                ><LinkedIn className="text-xl hover:text-blue-600 transition duration-300 rounded" />
                </motion.a>
                <motion.a
                    href="https://www.instagram.com/legacybuildspc/"
                    className="ml-6"
                    whileHover={{y: -4, scale: 1.3}}
                    whileTap={{ scale: 2.0 }}
                ><Insta className="text-2xl hover:text-pink-700 transition duration-300 rounded-lg" />
                </motion.a>
            </nav>
            <nav className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </nav>
        </header>
    )
}

export default Nav