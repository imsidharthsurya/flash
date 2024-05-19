import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input className='col-span-9 py-2 px-4 m-4' type='text' placeholder='search'/>
            <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default GptSearchBar