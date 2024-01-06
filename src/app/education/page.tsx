"use client"

// !Components
import AnimatedText from '@/components/global/AnimatedText'
import Certification from '@/components/education/Certification'

const Education = () => {
    return (
        <main className="flex xs:w-[90vw] xs:mx-auto min-h-screen w-full flex-col items-center justify-start gap-6 xs:p-12 p-16">
            <AnimatedText className='text-6xl mb-4 xs:text-3xl xs:w-full' text={"Molded by Masters in Engineering"} />
            <div className='grid grid-cols-12 xs:gap-6 gap-16 xs:flex xs:flex-col'>
                <div className='col-span-6'>
                    <Certification
                        title={'Bootcamp Graduation'}
                        type={'Certification'}
                        img={'/graduation.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Certification
                        title={'Subject Matter Expert Cert.'}
                        type={'Certification'}
                        img={'/sme.png'}
                    />
                </div>
            </div>
            <div className='grid grid-cols-12 xs:gap-6 gap-16 xs:flex xs:flex-col'>
                <div className='col-span-6'>
                    <Certification
                        title={'Next-JS'}
                        type={'Certification'}
                        img={'/next_cert.png'}
                    />
                </div>
                <div className='col-span-6'>
                    <Certification
                        title={'React Native'}
                        type={'Certification'}
                        img={'/react_native_cert.png'}
                    />
                </div>
            </div>
            <div className='grid grid-cols-12 xs:gap-6 gap-16 xs:flex xs:flex-col'>
                <div className='col-span-6'>
                    <Certification
                        title={'Redux & Redux Toolkit'}
                        type={'Certification'}
                        img={'/redux_cert.png'}
                    />
                </div>
                {/* <div className='col-span-6'>
                    <Certification
                        title={'Typescript'}
                        type={'Certification'}
                        img={'/typescript_cert.png'}
                    />
                </div> */}
            </div>
        </main>
    )
}

export default Education
