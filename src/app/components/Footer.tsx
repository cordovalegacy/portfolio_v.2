import Link from "next/link"
import HomeLayout from "./Layout"
import { FaHandPeace as Peace } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="w-full h-[10vh] border-t-2 border-black border-solid font-medium text-md">
            <HomeLayout className="py-6 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center gap-1">
                    Built With <span className="font-bold text-2xl px-1 text-pink-700">&#9825;</span>
                    by&nbsp;<Link
                        className="hover:underline hover:underline-offset-2 hover:-translate-y-1 transform transition duration-200"
                        href="https://www.linkedin.com/in/brendan-cordova-2874011ba/"
                    >Brendan Cordova</Link>
                </div>
                <h3 className="underline">Thanks for stopping by! <Peace className="inline-block"/></h3>
            </HomeLayout>
        </footer>
    )
}

export default Footer
