import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  let [booklist, setbooklist] = useState([])
  let [search, setsearch] = useState("")
  useEffect(() => {
    let getbook = axios.get("http://localhost:3000/bookdata")
    getbook.then((res) => {
      // console.log(res.data);
      setbooklist(res.data)
    })
  }, [])
  // console.log(booklist);
  let searchbook = (e) => {
    setsearch(e.target.value)
  }
  console.log(search);


  return (

    <div>
      <div className='container mx-auto'>
        <form action="">
          <div className='m-5'>
            <input type="text" name='name' onChange={(e) => { searchbook(e) }} className='border border-stone-800 w-60 px-2 py-1 rounded-md' placeholder='Search Book' />
          </div>
        </form>
        <div className='flex flex-wrap'>
          {booklist
            .filter((val) => {
              if ((val.title.toLocaleLowerCase()).match(search.toLocaleLowerCase())) {
                return val
              }
              else if (search === "") {
                return val
              }
            })
            .map((val, i) => {
              return (
                <>
                  <div className='w-1/4 '>
                    <Link to={"/singlebook/"+val.id}>
                      <div className='m-4 bg-[#25344e] p-2 shadow-xl shadow-slate-500 rounded-md'>
                        <div >
                          <h1 className='text-white text-center font-bold text-lg mb-5 uppercase'>{val.title}</h1>
                          <h2 className='text-[#9c7c5c] font-bold text-center tracking-widest uppercase mb-1 text-lg'>{val.author}</h2>
                          <p className='text-center text-white font-bold mb-2'> Publish- {val.publicationYear}</p>
                          <div className='w-full p-4 shadow-2xl shadow-slate-900'>
                            <div className='border-2 border-white p-[7px]'>
                              {/* <img src={"https://t3.ftcdn.net/jpg/09/57/69/12/240_F_957691254_AFgypE0VnBHUXUs0ZFZhuiIDvv9NLohq.jpg"} className='hover:scale-[1.2] transition-all ' alt="" /> */}
                              <img src={val.image} className='hover:scale-[1.2] transition-all h-72 object-cover w-full' alt="" />
                            </div>
                          </div>
                          <div className='mb-5 mt-10'>
                            <h1 className='text-center text-white font-bold ' > {val.pages} pages</h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )
            })

          }

        </div>
      </div>
    </div>
  )
}

export default Home