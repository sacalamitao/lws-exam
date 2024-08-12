// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Create = () => {
    const [anime, setAnime] = useState([]);
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchAnime();
    }, []);

    const fetchAnime = async () => {
        const response = await axios.get('/api/animeApi');
        setAnime(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await axios.put(`/api/animeApi/${editId}`, { name, rating, details, image, description });
        } else {
            await axios.post('/api/animeApi', { name, rating, details, image, description });
        }
        setName('');
        setRating('');
        setDetails('');
        setImage('');
        setDescription('');
        setEditId(null);
        fetchAnime();
    };

    const handleEdit = (post) => {
        setName(post.name);
        setRating(post.rating);
        setDetails(post.details);
        setImage(post.image);
        setDescription(post.description);
        setEditId(post.id);
    };

    const handleDelete = async (id) => {
        console.log(id)
        await axios.delete(`/api/animeApi/${id}`);
        fetchAnime();
    };

    return (
        <div>
            <div className="relative bg-gray-900 w-screen h-screen">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <img
                        alt=""
                        src="http://localhost:8000/images/cover-img.png"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
                <h1>Anime</h1>
                <div className='grid grid-cols-2 gap-4'>
                <form onSubmit={handleSubmit} className='relative z-10 flex'>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-white">Anime Form</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-400">
                                You can add an anime instance here.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="animename" className="block text-sm font-medium leading-6 text-white">
                                        Anime Name
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="name"
                                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="animerating" className="block text-sm font-medium leading-6 text-white">
                                        Rating
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                id="rating"
                                                name="rating"
                                                type="text"
                                                placeholder="rating"
                                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="animedetails" className="block text-sm font-medium leading-6 text-white">
                                        Details
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                value={details}
                                                onChange={(e) => setDetails(e.target.value)}
                                                id="details"
                                                name="details"
                                                type="text"
                                                placeholder="details"
                                                className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="imageurl" className="block text-sm font-medium leading-6 text-white">
                                        Image URL
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        id="image"
                                        name="image"
                                        rows={3}
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <a href="/dashboard" className="text-sm font-semibold leading-6 text-white">
                                Cancel
                            </a>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                {editId ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                </form>
                    <div className="relative z-10">
                        <div className="mx-auto max-w-7xl">
                            <div className="py-10">
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <div className="sm:flex sm:items-center">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-base font-semibold leading-6 text-white">Anime Table</h1>
                                            <p className="mt-2 text-sm text-gray-300">
                                            A list of all the anime in your database including their name, description, and rating.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8 flow-root">
                                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                <table className="min-w-full divide-y divide-gray-700">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                            Name
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                            Description
                                                            </th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                            Rating
                                                            </th>
                                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">Edit</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-800">
                                                        {anime.map((anime) => (
                                                            <tr key={anime.name}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                                {anime.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{anime.description}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{anime.rating}</td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <button onClick={() => handleEdit(anime)}>Edit</button>
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <button onClick={() => handleDelete(anime.id)}>Delete</button>
                                                            </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
