import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddBook } from '../../Redux/Actions/BookActions';

function Form() {
    const [data, setdata] = useState({})
    let dispatch = useDispatch()

    let handleChange = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(data);
        dispatch(AddBook(data))
        // let adddata= await axios.post("http://localhost:3000/bookdata",data)
    }
    return (
        <>
            <div>
                <div className="container mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto" style={{ maxWidth: "700px" }}>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Book</h2>

                        <div className=' grid grid-cols-2 gap-3'>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Book Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Enter book title"
                                    name="title"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                                    Author
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Enter author's name"
                                    name="author"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publicationYear">
                                    Publication Year
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Enter publication year"
                                    name="publicationYear"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                    Total pages
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Enter Pages"
                                    name="pages"
                                    onChange={handleChange}
                                />
                                {/* <input type="range" /> */}
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                    Old Price
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Enter Old Price"
                                    name="oldprice"
                                    onChange={handleChange}
                                />
                                {/* <input type="range" /> */}
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                    New Price
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Enter New Price"
                                    name="newprice"
                                    onChange={handleChange}
                                />
                                {/* <input type="range" /> */}
                            </div>


                            <div className="mb-6 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                                    Type
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="type"
                                    onChange={handleChange}
                                >
                                    <option value="">Select Type</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-Fiction</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="science-fiction">Science Fiction</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="biography">Biography</option>
                                </select>
                            </div>

                            <div className="mb-6 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
                                    Language
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id=""
                                    name="language"
                                    onChange={handleChange}
                                >
                                    <option value="">Select Language</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                    <option value="Gujarati">Gujarati</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Marathi">Marathi</option>
                                    <option value="Kannada">Kannada</option>
                                </select>
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                    Enter Image Link
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Enter Image Link"
                                    name="image"
                                    onChange={handleChange}
                                />
                                {/* <input type="range" /> */}
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                                    Enter About Book
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter About Book"
                                    name="about"
                                    onChange={handleChange}
                                />
                                {/* <input type="range" /> */}
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add Book
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form