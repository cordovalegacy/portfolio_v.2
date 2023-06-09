"use client"
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.25,
            duration: 1.1,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2
        }
    }
}

interface TSXProps {
    text: string,
    className: string
}

const AnimatedText: React.FC<TSXProps> = ({ text, className = "" }) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                variants={quote}
                initial="initial"
                animate="animate"
                className={`inline-block w-full text-black font-bold capitalize ${className}`}
            >{text.split(" ").map((word, idx) => (
                /* Super Unique Key (each word) */
                <motion.span
                    key={word + '-' + idx}
                    className="inline-block"
                    variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
            ))}</motion.h1>
        </div>
    )
}

export default AnimatedText
