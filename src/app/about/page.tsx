"use client"
import { useEffect, useRef } from "react"
import AnimatedText from "../components/AnimatedText"
import Image from "next/image"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface TSXProps{ //types
    value: number
}

//*this function (animation) increments the numbers
const AnimatedNumbers: React.FC<TSXProps> = ({ value }) => { 
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 6000 })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest: any) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue, value])

    return <span ref={ref}>{value}</span>
}


const About = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center h-[90vh] xs:w-[90vw] xs:h-full xs:mt-10 px-6">
            <AnimatedText text="Passion Fuels Purpose!" className="text-5xl xs:text-3xl" />
            <div className="grid w-full xs:flex xs:flex-col xs:text-center grid-cols-9 px-5 gap-6 pb-4 pt-6">
                <div className="col-span-4 flex flex-col items-start justify-start xs:items-center">
                    <h2 className="mb-4 text-xl xs:w-[90vw] font-gold uppercase text-black/75">Biography</h2>
                    <p className="font-medium">
                        Hello, I am Brendan, a Lead Frontend Developer with a focus on Full Stack Development. I specialize in crafting beautiful, functional, and user-centered digital experiences.
                    </p>
                    <p className="font-medium">
                        Design is the art of problem-solving and crafting intuitive, delightful user experiences. My firm belief is balancing functional UX with beautiful UI. My number one goal as a developer is to shape solutions that go beyond beauty and dedicate myself to produce practical applications that are intuitive and fun to use.
                    </p>
                    <p className="font-medium">
                        From websites, to chat applications; video streaming, to robust tooling apps; I deliver excellent design and user-centric solutions. We should collaborate on your next digital venture!
                    </p>
                </div>
                <div className="col-span-3 mt-12 relative h-max rounded-2xl border-2 border-solid border-slate-800">
                    <div className="absolute top-0 -right-2.5 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-slate-800"/>
                    <Image src={'/about.jpg'} width={500} height={500} alt="about photo" className="w-full h-auto rounded-xl"/>
                </div>
                <div className="col-span-2 flex flex-col items-end justify-between xs:pb-10">
                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-5xl font-bold">
                            <AnimatedNumbers value={1300}/>+
                        </span>
                        <h2 className="text-xl font-medium text-dark/75 text-right">GitHub Contributions</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-5xl font-bold">
                            <AnimatedNumbers  value={200}/>+
                        </span>
                        <h2 className="text-xl font-medium text-dark/75 text-right">Projects</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <span className="inline-block text-5xl font-bold">
                        <AnimatedNumbers value={3}/>+
                        </span>
                        <h2 className="text-xl font-medium text-dark/75 text-right">Years of Experience</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
