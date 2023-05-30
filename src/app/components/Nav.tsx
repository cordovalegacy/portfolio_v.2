"use client"

import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { log } from "../layout" //custom console.log function exported for all
import Image from "next/image"

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
            <nav className="flex">
                <CustomLink href='/' title="Home" className="mr-4" />
                <CustomLink href={'/about'} title="About" className="mr-4" />
                <CustomLink href={'/projects'} title="Projects" className="mr-4" />
                <CustomLink href={'/articles'} title="Articles" className="mr-4" />
            </nav>
            <nav className="flex">
                <Link href={'/'}></Link>
                <Link href={'/'}></Link>
                <Link href={'/'}></Link>
                <Link href={'/'}></Link>
                <Link href={'/'}></Link>
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Nav