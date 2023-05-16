import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='shadow-md sticky top-0 bg-slate-100 z-20'>
            <header className="font-style: system-ui">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/logo-no-background.png" width={100} height={10} alt="" />
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="px-6 mr-5 text-xl hover:shadow-slate-400  hover:border-b-indigo-700  text-black hover:text-blue-600 cursor-pointer">Home</Link>
                        <Link href={"/market"} className="px-4 mr-5 text-xl   text-black hover:text-blue-600 cursor-pointer">Market</Link>
                        <Link href={"/analysis"} className="px-4  mr-5 text-xl  text-black hover:text-blue-600 cursor-pointer">Analysis</Link>
                        <Link href={"/contact"} className="px-4  mr-5 text-xl  text-black hover:text-blue-600 cursor-pointer">Contact Us</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
