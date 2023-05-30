"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

function Logo() {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink
                href={'/'}
                className="w-10 h-10 font-bold bg-black text-white flex items-center justify-center rounded"
                whileHover={{ 
                    backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                    transition: { duration:1, repeat:Infinity }
                }}
            >BC</MotionLink>
        </div>
    )
}

export default Logo
