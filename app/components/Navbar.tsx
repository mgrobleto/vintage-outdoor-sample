import Link from "next/link"

const Navbar : React.FC = () => {

    const links = [
        {
            label: 'Home',
            path: '#home',
        },
        {
            label: 'About us',
            path: '#about',
        },
        {
            label: 'Services',
            path: '#services',
        },
        {
            label: 'Gallery',
            path: '#gallery',
        },
        {
            label: 'Testimonials',
            path: '#testimonials',
        },
        {
            label: 'Blog',
            path: '#blog',
        },
        {
            label: 'Contact us',
            path: '#contact-us',
        },
    ]

    return (
        <div className="bg-transparent xl:flex flex-row w-full h-auto fixed p-10">
            <div className="logo">

            </div>
            <div className="options w-full flex flex-row items-start justify-between leading-6 text-xs xl:text-lg m-5">
                {links.map((l,i) => {
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className=""
                        >
                            <div className="ml-3 text-base"> {l.label} </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar