interface TSXProps {
    children: React.ReactNode //*this is the type for {children}
    className: string
}

const HomeLayout: React.FC<TSXProps> = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}>
            {children}
        </div>
    )
}

export default HomeLayout
