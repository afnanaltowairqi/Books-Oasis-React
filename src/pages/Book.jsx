import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React from 'react';
import { Link } from "react-router-dom"
import Nav from '../component/Nav'
import Footer from '../component/Footer'



function Book() {
    // const navigate = useNavigate();
    const [book,setBook] = React.useState([])
    const {rank} =useParams();
    


    React.useEffect(() => {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=vMTJjP3bKNO0YBYi7hYnc21tnew6M8c1')
        .then( response => {
            const bookDetails = response.data.results.books.find(b => b.rank === parseInt(rank));
            setBook(bookDetails)
        })
        .catch(error => {
            console.log(error);
        });
    },[])

    // const addToFavorite = () => {
    //     const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    //     if (!favorite.some(favBook => favBook.rank === book.rank)) {
    //       favorite.push(book);
    //       localStorage.setItem('favorite', JSON.stringify(favorite));
    //       alert('تمت إضافة الكتاب إلى المفضلة');
    //     } else {
    //       alert('الكتاب موجود بالفعل في المفضلة');
    //     }
    //   };
    

//    const e = setBooks.find((e)=>
//       e.id === id
//    );

    // const navigateBack=(e)=>{
    //     e.preventDefault();
    //     navigate('/')
    //  }

    return(
        <>
        <Nav />
        <section className="bg-[#f5f4f4] h-screen mx-auto flex justify-center items-center gap-y-20 gap-x-28 max-sm:w-[100vw] max-sm:h-[120vh] ">
        <div className="h-[70vh] w-[70vw] flex flex-row gap-6 items-center bg-white shadow-md rounded-xl duration-500 hover:shadow-xl max-sm:flex-col max-sm:w-[90vw] max-sm:h-[110vh] ">
            <img src={book.book_image} alt="Book" className="h-[70vh] w-[20vw] rounded-t-xl max-sm:w-[60vw] max-sm:h-[70vh] "  />
            <div className=" w-[50vw] h-[60vh] flex flex-col justify-center items-start gap-4 max-sm:w-[80vw] ">
                <h1 className="text-center text-4xl font-bold text-[#618369] truncate block capitalize max-sm:text-2xl">{book.title}</h1>
                <p className='text-gray-400 mr-3 text-md max-sm:text-sm'> Author: {book.author} </p>
                <p className='text-[#4b4b4b] mr-3 text-md max-sm:text-sm'> <b className='text-[#618369]'>Description:</b> {book.description} </p>
                <a className="text-[blue]" href={book.amazon_product_url}> Buy this Book</a>
                <div className='flex gap-4 max-sm:flex-row '>
                {/* <div className="flex items-center h-10 w-30 rounded-md bg-[#9c405b] hover:bg-[#c9728c] hover:text-[#313131] text-[#ffffff] font-medium p-2 cursor-pointer"> Add to Favorite </div>  */}
                <Link to='/'><div className="flex items-center h-10 w-30 rounded-md bg-[#696969] hover:bg-[#8fb898] hover:text-[#313131] text-[#ffffff] font-medium p-2 cursor-pointer"> Back </div></Link>
                </div>
                
            </div>
             
        </div>

    </section>
    <Footer />

        </>
    );
}
export default Book