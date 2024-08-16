import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from "react-router-dom"

function Login(){
    const [email,setEmail]= React.useState("")
    const [password,setPassword]= React.useState("") 
    const [error,setError]= React.useState("")
    const [users,setUsers]= React.useState([])

    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get('https://665786425c36170526451ff0.mockapi.io/db-api')
          .then( response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },[])

    const checkData=(e)=>{
        e.preventDefault();
        setError('')

        if (!email || !password) {
            setError('Please enter your email and password')
            return;
        }

    const user = users.find(e =>
        e.email === email && e.password === password        
    )
        if(user) {
            localStorage.setItem('userID', user.id);
            navigate('/HomeLogin')
        } else {
            setError('Email or password is not correct!')
        }
        
    }

    return(
        <>
        <div className='bg-[#f5f4f4] flex justify-center items-center max-sm:h-[100vh] '>
            <div className="font-[sans-serif] bg-[#f5f4f4] max-w-4xl flex items-center mx-auto md:h-screen p-4">
                <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                    <div className="relative md:col-span-1 flex items-center justify-center bg-[url('https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-70"></div>
                        <div className="relative z-10 text-center px-4 py-8 text-[#f7f7f7]">
                            <h4 className="text-[2rem] font-semibold">Books Oasis</h4>
                            <p className="text-[14px] text-gray-300 mt-3 leading-relaxed">Welcome to our Login page!</p>
                        </div>
                    </div>
                    
                    <form className="md:col-span-2 w-full py-6 px-6 sm:px-16 bg-[#ffffff]">
                        <div className="mb-6">
                            <h3 className="text-[#618369] text-2xl font-bold">Login to your account</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input value={password} onChange={(e)=>setPassword(e.target.value)} name="password" type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            {error && <p style={{ color: 'red'}}>{error}</p>}
                        </div>

                        <div className="!mt-12">
                            <button onClick={checkData} type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-[#618369] hover:bg-[#8fb898] focus:outline-none">
                                Login
                            </button>
                        </div>
                        <p className="text-gray-800 text-sm mt-6 text-center">Don't have an account? <Link to='/Signup'><a  className="text-[#618369] font-semibold hover:underline ml-1">Sign up here</a></Link></p>
                        <p className="text-gray-800 text-sm mt-6 text-center">Don't want login? <Link to='/'><a  className="text-[#618369] font-semibold hover:underline ml-1"> Go home </a></Link></p>

                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login