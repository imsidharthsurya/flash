import React from 'react'
import { BG_IMAGE } from '../utils/constants'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langValue=useSelector((store)=>store.config.lang)
  return (
    <div>
        <img className="absolute -z-10" src={BG_IMAGE} alt="bg-image"/>
    <div className='pt-[12%] flex justify-center'>
        
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input className='col-span-9 py-2 px-4 m-4' type='text' placeholder={lang[langValue].searchPlaceholder}/>
            <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md'>{lang[langValue].search}</button>
        </form>
    </div>
    </div>
  )
}

export default GptSearchBar