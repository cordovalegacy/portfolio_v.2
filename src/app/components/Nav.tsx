"use client"

import Link from "next/link"
import Logo from "./Logo"
import { usePathname, useRouter } from "next/navigation" //grabs path from url
import { motion } from 'framer-motion'
import { useState } from 'react'

//! React-Icons
import { GoMarkGithub as GitHub } from 'react-icons/go'
import { BsLinkedin as LinkedIn } from 'react-icons/bs'
import { FaInstagramSquare as Insta } from 'react-icons/fa'

// !Types
interface TSXProps {
    href: string,
    title: string,
    className: string
}

interface TSXMobileProps {
    href: string,
    title: string,
    className: string,
    toggle: () => void
}

//*mini component for Link tags
const CustomLink: React.FC<TSXProps> = ({ href, title, className = "" }) => {

    const pathname = usePathname()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`${pathname === href ? 'w-full' : 'w-0'} h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}> {/* compare current path to href props to provide active underline */}
                &nbsp;
            </span>
        </Link>
    )
}

//*mini component for Mobile Link tags
const CustomMobileLink: React.FC<TSXMobileProps> = ({ href, title, className = "", toggle }) => {

    const pathname = usePathname() // *grabs current path in url
    const router = useRouter() // *can use like react-router-dom

    const clickHandler = () => {
        toggle() // *toggle hamburger menu
        router.push(href) // *same as navigate in react-router-dom
    }

    return (
        <button onClick={clickHandler} className={`${className} relative group`}>
            {title}
            <span className={`${pathname === href ? 'w-full' : 'w-0'} h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
                &nbsp;
            </span>
        </button>
    )
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="w-full relative h-[10vh] px-32 py-8 font-medium flex justify-between items-center">
            <button className="flex-col absolute left-6 justify-center items-center hidden lg:flex" onClick={clickHandler}>
                <span className={`${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                <span className={`${isOpen ? 'opacity-0' : 'opacity-100'} bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`}></span>
                <span className={`${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} transition-all duration-300 ease-out bg-black block h-0.5 w-6 rounded-sm`}></span>
            </button>

            {
                isOpen
                    ? <div className="w-full min-w-[70vw] flex-col flex fixed justify-between items-center z-30 top-1/2 left-1/2 -translate-x-1/2 bg-black/90 dark:bg-white/90 rounded-lg backdrop-blur-md py-32 -translate-y-1/2">
                        <nav className="flex flex-col gap-2 items-center justify-center mx-auto">
                            <CustomMobileLink href='/' title="Home" className="text-2xl" toggle={clickHandler} />
                            <CustomMobileLink href={'/about'} title="About" className="text-2xl" toggle={clickHandler} />
                            <CustomMobileLink href={'/projects'} title="Projects" className="text-2xl" toggle={clickHandler} />
                            <CustomMobileLink href={'/experience'} title="Experience" className="text-2xl" toggle={clickHandler} />
                        </nav>
                        <nav className="flex gap-4 mt-8 items-center justify-center flex-wrap">
                            <motion.a
                                href="https://github.com/cordovalegacy"
                                whileHover={{ y: -4, scale: 1.3 }}
                                whileTap={{ scale: 2.0 }}
                            ><GitHub className="text-3xl hover:text-white hover:bg-slate-800 hover:outline hover:brightness-150 rounded-full transition duration-150" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/brendan-cordova-2874011ba/"
                                whileHover={{ y: -4, scale: 1.3 }}
                                whileTap={{ scale: 2.0 }}
                            ><LinkedIn className="text-3xl hover:text-blue-600 transition duration-300 rounded" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/legacybuildspc/"
                                whileHover={{ y: -4, scale: 1.3 }}
                                whileTap={{ scale: 2.0 }}
                            ><Insta className="text-4xl hover:text-pink-700 transition duration-300 rounded-lg" />
                            </motion.a>
                        </nav>
                    </div>

                    : null
            }

            <div className="w-full flex justify-between items-center lg:hidden">
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
                        whileHover={{ y: -4, scale: 1.3 }}
                        whileTap={{ scale: 2.0 }}
                    ><GitHub className="text-xl hover:text-white hover:bg-slate-800 hover:outline hover:brightness-150 rounded-full transition duration-150" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/brendan-cordova-2874011ba/"
                        className="ml-6"
                        whileHover={{ y: -4, scale: 1.3 }}
                        whileTap={{ scale: 2.0 }}
                    ><LinkedIn className="text-xl hover:text-blue-600 transition duration-300 rounded" />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/legacybuildspc/"
                        className="ml-6"
                        whileHover={{ y: -4, scale: 1.3 }}
                        whileTap={{ scale: 2.0 }}
                    ><Insta className="text-2xl hover:text-pink-700 transition duration-300 rounded-lg" />
                    </motion.a>
                </nav>
            </div>

            <nav className="absolute left-1/2 top-2 -translate-x-1/2 xs:right-2 xs:-translate-x-4">
                <Logo />
            </nav>

        </header>
    )
}

export default Nav