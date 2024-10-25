import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { BsActivity } from 'react-icons/bs';

function SingleBook() {
    let pos = useParams()
    let [singlebook, setsinglebook] = useState({})
    let [star, setstar] = useState("")
    const [list, setlist] = useState([])
    const [about, setabout] = useState("")
    let [modal, setmodal] = useState(false)
    let [liststar2, setliststar2] = useState([])
    useEffect(() => {
        let getbook = axios.get("http://localhost:3000/bookdata/" + pos.id)
        getbook.then((res) => {
            setsinglebook(res.data)
            setabout(res.data.about)
        })
    }, [])
    // console.log(singlebook);
    // console.log(about);
    // console.log(star);

    useEffect(() => {
        let gettotal = JSON.parse(localStorage.getItem("ratings")) || []
        setlist(gettotal)
    }, [])

    let submit = async (e) => {
        e.preventDefault()
        console.log(star);
        let obj = { "stare": star }
        let arr = [...list, obj]

        let newdata = { ...singlebook, "star": star }
        console.log(newdata);

        let setstar = await axios.put(`http://localhost:3000/bookdata/${pos.id}`, newdata)
        setsinglebook(setstar.data)
        console.log(setlist);

        setlist(arr)
    }
    useEffect(() => {
        let getstar = axios.get("http://localhost:3000/bookdata")
    }, [])


    return (
        <>
            <div>
                <div className="container mx-auto">
                    <div className='max-w-6xl mx-auto'>
                        <div className='flex'>
                            <div className='w-5/12'>
                                <div className='m-4 bg-[#25344e] p-2 shadow-xl shadow-slate-500 rounded-md'>
                                    <div >
                                        <h1 className='text-white text-center font-bold text-lg mb-5 uppercase'>{singlebook.title}</h1>
                                        <h2 className='text-[#9c7c5c] font-bold text-center tracking-widest uppercase mb-1 text-lg'>{singlebook.author}</h2>
                                        <p className='text-center text-white font-bold mb-2'> Publish- {singlebook.publicationYear}</p>
                                        <div className='w-full p-4 shadow-2xl shadow-slate-900'>
                                            <div className='border-2 border-white p-[7px]'>
                                                {/* <img src={"https://t3.ftcdn.net/jpg/09/57/69/12/240_F_957691254_AFgypE0VnBHUXUs0ZFZhuiIDvv9NLohq.jpg"} className='hover:scale-[1.2] transition-all ' alt="" /> */}
                                                <img src={singlebook.image} className='hover:scale-[1.2] transition-all h-72 object-cover w-full' alt="" />
                                            </div>
                                        </div>
                                        <div className='mb-5 mt-10'>
                                            <h1 className='text-center text-white font-bold ' > {singlebook.pages} pages</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='m-4 flex pt-10'>
                                    <div>
                                        {/* <p className='font-bold text-slate-500 text-left'>{singlebook.about.substring(2,400)} */}
                                        <p className='font-bold text-slate-500 text-left'>{about.substring(0, 420)}
                                            <button className='text-red-400' onClick={() => { setmodal(!modal) }}>...Read More</button>
                                        </p>
                                        <div className='mt-3'>
                                            <div className='flex gap-3 mb-2'>
                                                <h1 className='text-red-400 font-bold'>OLD PRICE =</h1>
                                                <h2 className='font-extrabold'>{singlebook.oldprice} ₹</h2>
                                            </div>
                                            <div className='flex gap-3'>
                                                <h1 className=' text-green-500 font-bold'>NEW PRICE =</h1>
                                                <h2 className='font-extrabold'>{singlebook.newprice} ₹</h2>
                                            </div>

                                        </div>
                                        <div className='pt-3'>
                                            <h1 className='font-bold mb-2'>Enter Rating</h1>
                                            <form action="" onSubmit={(e) => submit(e)}>
                                                <div className='flex gap-1'>
                                                    {[1, 2, 3, 4, 5].map((val, i) => {
                                                        i = i + 1
                                                        return (
                                                            <>
                                                                <FaStar key={i} onClick={() => { setstar(i) }} style={star >= i ? { color: "blue" } : ""} />
                                                            </>
                                                        )
                                                    })
                                                    }
                                                </div>
                                                <button type='submit' className='bg-blue-600 text-white mt-3 px-3 py-2 rounded-md font-bold'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rate'>
                        <div className='flex gap-1 mt-5'>
                            <div>
                                {singlebook.star == 1 &&
                                    <>
                                        <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                            <FaStar />
                                        </div>
                                    </>
                                }
                                {singlebook.star == 2 &&
                                    <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                }
                                {singlebook.star == 3 &&
                                    <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                }
                                {singlebook.star == 4 &&
                                    <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                }
                                {singlebook.star == 5 &&
                                    <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                }
                            </div>
                            {/* {list.map((val, i) => {
                                return (
                                    <>
                                        <div>
                                            {val.stare == 1 &&
                                                <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                                    <FaStar />
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {val.stare == 2 &&
                                                <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {val.stare == 3 &&
                                                <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {val.stare == 4 &&
                                                <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            {val.stare == 5 &&
                                                <div className='flex w-[100px] bg-slate-300 text-blue-800 p-4 justify-center'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            }
                                        </div>
                                    </>
                                )
                            })
                            } */}
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal &&
                <div className=''>
                    <div className='fixed inset-0 bg-slate-900 opacity-25  overflow-hidden' ></div>
                    <div className='container mx-auto '>
                        <div className='fixed inset-0 flex items-center justify-center overflow-scroll z-20 '>
                            <div className=' relative w-1/2 p-8 text-orange-300 font-bold rounded shadow-2xl shadow-slate-500 bg-slate-600 max-h-[700px] overflow-y-auto overflow-x-hidden'>
                                <div className='flex justify-end'>
                                    <button className='text-red-500 text-6xl absolute -top-5 -right-1 ' onClick={() => { setmodal(!modal) }}>&times;</button>
                                </div>
                                <p>{about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* <div className='h-96'>
                <h1 className=''>jnj</h1>
            </div> */}

        </>
    )
}

export default SingleBook