import { Link } from "react-router-dom"

function Nav() {
    return(
        <>
        <nav className="flex flex-wrap items-center justify-between p-3 bg-[#323232] ">
            <Link to='/'><div className="text-2xl text-[#f5f4f4] font-extrabold">Books Oasis. </div></Link>
            <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                {/* <Link to="/Favorite"><p className="block md:inline-block text-[#ffffff] hover:text-[#618369] cursor-pointer px-3 py-3 md:border-none">My Favorites</p></Link> */}
            </div>
            <div className="flex justify-end gap-2">
                <Link to='/Login'><div className="flex items-center h-10 w-30 rounded-md  hover:text-[#618369] text-[#ffffff] font-medium p-2 cursor-pointer "> Login </div></Link>
                <Link to='/Signup'><div className="flex items-center h-10 w-30 rounded-md bg-[#618369] hover:bg-[#8fb898] hover:text-[#313131] text-[#ffffff] font-medium p-2 cursor-pointer"> Sign up </div></Link>
            </div>
        </nav>
        </>
    );
}
export default Nav