import Image from 'next/image'
import HomeLayout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex w-full min-h-screen items-center">
      <HomeLayout className='pt-0'>
        <div className="flex items-center justify-between w-full">
          <div className='w-[45%] py-10'>
            <Image
              width={600}
              height={600}
              src={'/profile_portfolio.svg'}
              alt="profile pic"
              className='w-full h-auto rounded-full border border-slate-500'
            />
          </div>
          <div className='w-[45%] flex flex-col items-center self-center'>
            <AnimatedText text={"Turning Vision Into Reality With Code And Design."} className='text-5xl text-left'/>
            <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div>
              <Link href={'/Resume_July'}>Resume</Link>
              <Link href={'mailto:cordovalegacy19@gmail.com'}>Contact</Link>
            </div>
          </div>
        </div>
      </HomeLayout>
    </main>
  )
}
