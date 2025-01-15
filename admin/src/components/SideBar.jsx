import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-[#32003a] min-h-screen pl-[4vw]'>
    
        <div className='flex flex-col gap-5 mt-10'>
            <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#9650d7] text-sm font-medium'>
                <img src={assets.add_song} className='w-5'alt="" />
                <p className='hidden sm:block'> Add song</p>
            </NavLink>

            <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#9650d7] text-sm font-medium'>
                <img src={assets.song_icon} className='w-5'alt="" />
                <p className='hidden sm:block'> list song</p>
            </NavLink>

            <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#9650d7] text-sm font-medium'>
                <img src={assets.add_album} className='w-5'alt="" />
                <p className='hidden sm:block'> Add album</p>
            </NavLink>

            <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#9650d7] text-sm font-medium'>
                <img src={assets.album_icon} className='w-5'alt="" />
                <p className='hidden sm:block'> list album</p>
            </NavLink>

        </div>
    </div>
  )
}

export default SideBar