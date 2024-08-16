import React from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Books(){

const [book,setBooks] = React.useState([])
const [search, setSearch] =React.useState([])

// const navigate = useNavigate();
//     const navigateToBook=(rank)=> {
//         navigate(`/book/${rank}`)
//     }

    React.useEffect(() => {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=vMTJjP3bKNO0YBYi7hYnc21tnew6M8c1')
        .then( response => {
            setBooks(response.data.results.books);
        })
        .catch(error => {
            console.log(error);
        });
    },[])

    const searchBook=book.filter(e=>
        e.title.toLowerCase().includes(search)
    );

    return(
        <>

    <div className='flex flex-row justify-center items-start p-8 '>
        <div id="search-bar" className=" bg-[#618369] rounded-md shadow-lg w-[26vw] flex flex-row justify-center max-sm:w-[90vw] ">
            <form className="w-[25vw] flex items-center justify-center p-2 gap-2">
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="What are you looking for?" className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:[ring-gray-600] focus:border-transparent max-sm:w-[60vw] max-sm:text-[14px]" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {/* <button onClick={searchBook} type="submit"className="bg-[#618369] text-white rounded-md px-4 py-1 ml-2 hover:text-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                    Search
                </button> */}
            </form>
        </div>
    </div>

    <section id="Projects" className="pb-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-28 mt-10 mb-5">
        {searchBook.map(e => (
        <Link to={`/Book/${e.rank}`}><div className="w-[20vw] flex flex-col justify-center items-center bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl max-sm:w-[80vw] " key={e.rank}>
            <img src={e.book_image} alt="Book" className="h-[50vh] w-[15vw] rounded-t-xl max-sm:w-[60vw]" />
            <div className="px-4 py-3 w-72">
                <p className="text-center text-lg font-bold text-[#314636] truncate block capitalize">{e.title}</p>
            </div>
        </div></Link>
        ))}
    </section>
        </>
    );
}
export default Books