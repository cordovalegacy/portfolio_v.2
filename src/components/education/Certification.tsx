

// !Packages
import Image from 'next/image'

type CertificationProps = {
    type: any;
    title: string;
    img: string;
}

const Certification = ({ type, title, img }: CertificationProps) => {
    return (
        <article className='flex flex-col gap-2 w-full xs:w-[90vw] xs:mx-auto items-center justify-center rounded-2xl border border-solid border-black bg-gray-200 p-6 relative'>
            <div className='w-full flex flex-col mb-3 items-start justify-between xs:pl-0 pl-3 text-left'>
                <span className='text-pink-700 text-xl font-medium'>{type}</span>
                <h2 className='mt-2 w-full xs:text-left text-left text-2xl font-bold'>{title}</h2>
            </div>
            <div className='w-full flex flex-col justify-center items-center cursor-pointer overflow-hidden rounded-lg'>
                <Image width={600} height={600} src={img} alt={title} className='shadow-xl rounded-md w-[400px] sm:min-h-[300px] min-h-[325px] h-auto hover:brightness-105 transition duration-300' />
            </div>
        </article>
    )
}

export default Certification