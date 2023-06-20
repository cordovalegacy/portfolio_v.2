"use client"
import Image from "next/image"
import Link from "next/link"

const HireMe = () => {
    return (
        <div className="fixed bottom-0 left-0 flex items-center justify-center overflow-hidden xs:hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <Image src={'/circle.png'} width={135} height={135} alt="animated hire me" className="animate-spin-slow" />
                <Link
                    href="mailto:cordovalegacy19@gmail.com"
                    className="flex items-center justify-center absolute left-1/2 top-[28.7%] hover:bg-white hover:text-black hover:shadow-gray-500 -translate-x-1/2 -translate-y-1 bg-slate-800 shadow-sm shadow-slate-700 font-extrabold text-white border border-solid border-black w-20 h-20 rounded-full"
                >Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe
