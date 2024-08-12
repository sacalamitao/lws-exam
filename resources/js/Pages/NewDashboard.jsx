/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'

import { Fragment, useState, useEffect } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'
import Nav from '../Components/Nav' 
import ShowModal from '../Components/ShowModal'
import axios from 'axios';


export default function NewDashboard() {
    const [anime, setAnime] = useState([]);
    const [showAnime, setShowAnime] = useState(false)

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
      };

  useEffect(() => {
    fetchAnime();
}, []);

  const fetchAnime = async () => {
    const response = await axios.get('/api/animeApi');
    setAnime(response.data);
};

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      {/* Hero section */}
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

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            <Nav loggedin={true}/>
          </nav>
        </header>

        <div className="mx-10 relative flex max-w-3xl flex-col px-6 py-32 sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-8xl">Kimetsu no Yaiba</h1>
          <div className='flex items-start pt-2.5'>
            <img
              alt=""
              src="http://localhost:8000/images/frame.png"
              className="h-5 w-5 object-cover object-center"
            />
            <p className="text-xs font-bold tracking-tight text-white lg:text-xs px-1">5.0</p>
            <p className="text-xs font-bold tracking-tight text-white lg:text-xs">Category: Adventure fiction, Dark fantasy, Martial Arts</p>
          </div>
       
          
          <p className="mt-4 text-xl text-white">
          Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.
          </p>
          <div className='flex space-x-9 w-full'>
            <a
              href="#"
              className="flex space-x-3 mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-500"
            >
              <img src="http://localhost:8000/images/play.png" alt="" />
              <p>Watch Now!</p>
            </a>
            <a 
              href="/register"
              className="mt-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
              <img src="http://localhost:8000/images/heart.png" alt="" />
            </a>
            <a 
              href="/anime/create"
              className="mt-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
              <PlusIcon className='h-7 w-7'/>
            </a>
          </div>

        </div>
      </div>

      <main className='bg-gray-900'>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          {/* <!-- component --> */}
          <div className="mt-32 relative ">
            <h1 className="text-5xl font-extrabold tracking-tight text-center"></h1>
            <ul className="mt-10 pb-8 px-[4rem] w-full flex overflow-x-auto gap-8 snap-x">
                { anime.map ((anime) => (
                    <li className="snap-center" key={anime.id}>
                        <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                        <img 
                            src={anime.image}
                            alt="" 
                            className="absolute inset-0 w-full h-full object-cover object-bottom" 
                        />
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                            <div>
                            <p className="font-medium text-white">{anime.name}</p>
                            <h2 className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                                {anime.description}
                            </h2>
                            </div>
                            <button onClick={() => setShowAnime(true)} className="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
                                Show Anime
                            </button>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
      <ShowModal isOpen={showAnime} onSendData={() => handleDataFromChild(false)}    />
    </div>
  )
}
