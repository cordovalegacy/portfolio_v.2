import Image from 'next/image'
import HomeLayout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { BsArrowUpRightSquare as Download } from 'react-icons/bs'
import { FcIdea as Bulb } from 'react-icons/fc'
import HireMe from './components/HireMe'


export default function Home() {

  return (
    <main className="flex w-full h-[90vh] xs:h-full items-center">
      <HomeLayout className='pt-0 xs:w-full'>
        <div className="flex items-center justify-between w-full xs:flex-col">
          <div className='w-[45%] xs:w-[90vw] py-10'>
            <Image
              width={600}
              height={600}
              src={'/profile_portfolio.svg'}
              alt="profile pic"
              className='w-full h-auto rounded-full border border-slate-500'
            />
          </div>
          <div className='w-[45%] xs:w-[90vw] flex flex-col items-center self-center'>
            <AnimatedText text={"Bridging the Gap between Visionary Ideas and Technological Realities."} className='text-4xl text-left xs:text-2xl xs:w-full' />
            <p className='my-3 text-base font-medium xs:text-lg'>
              Transforming ideas into cutting-edge web applications with expertise in React.js and full-stack web development. Dive into my latest projects and witness innovation in action.
            </p>
            <div className='flex items-center self-start mt-2 xs:max-w-[75%]'>
              {/* target attribute (_blank) lets us open new tab */}
              <Link
                className='flex xs:max-w-[150px] hover:-translate-y-1 items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border border-solid border-transparent hover:border-black transition duration-200'
                href={'/Resume_Cordova_8.pdf'}
                target={"_blank"}
                download={true}
              >Resume <Download className='pl-2 w-full transform transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1' /></Link>
              <Link
                className='ml-4 xs:max-w-[75px] text-lg font-medium capitalize hover:text-gray-700 hover:-translate-y-1 transition duration-300 text-black underline underline-offset-2 decoration-2 decoration-gray-700'
                href={'mailto:cordovalegacy19@gmail.com'}
              >Contact</Link>
            </div>
          </div>
        </div>
      </HomeLayout>
      <HireMe />
        <Bulb className='absolute bottom-6 right-6 xs:hidden text-[8vw] hover:brightness-125 cursor-pointer flickering'/>
    </main>
  )
}
