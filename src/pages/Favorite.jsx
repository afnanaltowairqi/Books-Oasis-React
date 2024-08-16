// import Nav from '../component/Nav'
// import Footer from '../component/Footer'
// import UpdateNav from '../component/UpdateNav'


// import React from 'react'

// function Favorite() {
//     const [favorite,setFavorite]= React.useState([])

//     React.useEffect(() => {
//         const storedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
//         setFavorite(storedFavorites);
//       }, []);

//       const removeFromFavorites = (rank) => {
//         const updatedFavorites = favorite.filter(book => book.rank !== rank);
//         localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//         setFavorite(updatedFavorites);
//       };

//     return(
//         <>
//         <UpdateNav />
//         <section id="Projects" className="pb-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-28 mt-10 mb-5">
//             {favorite.map(e => (
//             <div className="w-[20vw] flex flex-col justify-center items-center bg-white shadow-md rounded-xl duration-500 hover:shadow-xl" key={e.rank}>
//                 <img src={e.book_image} alt="Book" className="h-[50vh] w-[15vw] rounded-t-xl" />
//                 <div className="px-4 py-3 w-72">
//                     <p className="text-center text-lg font-bold text-[#314636] truncate block capitalize">{e.title}</p>
//                 </div>
//                 <div onClick={removeFromFavorites(e.rank)} className="flex items-center h-10 w-30 rounded-md bg-[#9c405b] hover:bg-[#c9728c] hover:text-[#313131] text-[#ffffff] font-medium p-2 cursor-pointer"> Delete from Favorite </div>
//             </div>
//             ))}
//         </section>
//         <Footer />

//         </>
//     );
// }
// export default Favorite
