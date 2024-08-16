import Nav from '../component/Nav'
import Books from '../pages/Books'
import Footer from '../component/Footer'


import ImgHeader from '../assets/bg-header.jpeg'
function Home() {
    return (
        <>
        <Nav />
            <div className="relative w-full h-[80vh]" id="home">
                <div>
                    <div className="absolute inset-0">
                        <img 
                            src={ImgHeader} 
                            alt="Background Image" 
                            className="object-cover object-center w-full h-full" />
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-[#161616] opacity-70 flex flex-col justify-center items-center md:flex-row">
                    <div className="flex flex-col items-center justify-center md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-[#ffffff] font-bold text-4xl md:text-5xl leading-tight mb-2">Books Oasis</h1>
                        <p className="text-white text-center font-regular text-xl mb-8 mt-4 w-[30vw] max-sm:w-[70vw]">Explore a world of Books, all in one place. Start your reading journey today!</p>
                        {/* <button className="text-lg px-6 py-3 w-[13vw] bg-[#77a582] text-[#3f3f3f] font-bold rounded-lg hover:bg-[#ffffff] transition duration-200 max-sm:w-[50vw]">
                            Read Books
                        </button> */}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#ffffff] transform  origin-bottom-left z-0"></div>
            </div>
            <Books />
            <Footer />
        </>
    );
}
export default Home;
