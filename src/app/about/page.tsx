"use client"

// !Packages
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

// !Components
import AnimatedText from "../../components/global/AnimatedText"

type TSXProps = {
    value: number;
    styles: string;
}

//*this function (animation) increments the numbers
const AnimatedNumbers: React.FC<TSXProps> = ({ value, styles }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 6000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest: any) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref} className={styles}>{value}</span>
}


const About = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center h-[90vh] xs:w-[90vw] xs:mx-auto xs:h-full xs:mt-10 px-6">
            <AnimatedText text="Passion Fuels Purpose!" className="text-5xl xs:text-4xl" />
            <div className="w-full flex xs:flex xs:flex-col xs:text-center px-5 gap-6 pb-4 -mb-10">
                <div className="w-2/3 xs:w-full xs:mx-auto m-10 flex flex-col items-start justify-start xs:text-left">
                    <h2 className="mb-2 font-bold text-xl xs:w-[90vw] xs:mx-auto font-gold uppercase text-slate-700">Biography</h2>
                    <p className="font-medium">
                        Hello, I am <span className="text-blue-800 font-bold">Brendan</span>, a seasoned <span className="text-blue-800 font-bold italic">software engineer</span> with <span className="text-blue-800 font-bold italic">leadership</span> experience and a focus on full-stack  <span className="text-blue-800 font-bold italic">mobile and web</span> development.
                    </p>
                    <p className="font-medium">
                        Design is the art of problem-solving and crafting intuitive, delightful user experiences. My firm belief is balancing functional UX with beautiful UI. My number one goal as a developer is to shape solutions that go beyond beauty and dedicate myself to produce practical applications that are intuitive and fun to use.
                    </p>
                    <p className="font-medium">
                        From websites, to chat applications; video streaming, to robust tooling apps; iOS and Android mobile applications, and much more; I deliver excellent design and user-centric solutions.
                    </p>
                    <div className="mt-6 xs:space-y-10 xs:mt-10 xs:inline-block xs:flex-col flex w-full items-end justify-between xs:pb-5">
                        <div className="flex flex-col items-start justify-center">
                            <span className="inline-block text-5xl font-bold">
                                <AnimatedNumbers value={2500} styles="text-slate-700"/>
                            </span>
                            <h2 className="text-xl font-medium text-dark/75 text-left">GitHub Contributions</h2>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="inline-block text-5xl font-bold">
                                <AnimatedNumbers value={250} styles="text-slate-700"/>
                            </span>
                            <h2 className="text-xl font-medium text-dark/75 text-left">Projects</h2>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="inline-block text-5xl font-bold">
                                <AnimatedNumbers value={4} styles="text-slate-700"/>
                            </span>
                            <h2 className="text-xl font-medium text-dark/75 text-right">Years of Experience</h2>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 xs:w-full xs:mt-0 mt-6 relative h-max rounded-2xl border-2 border-solid border-slate-800">
                    <div className="absolute top-0 -right-2.5 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-slate-800" />
                    <Image src={'/portrait.jpeg'} width={500} height={500} alt="portait photo" className="w-[500px] h-auto rounded-xl" />
                </div>
                <h2 className="xs:block hidden text-black font-bold text-3xl">Great to meet you!</h2>
            </div>
        </main>
    )
}

export default About
