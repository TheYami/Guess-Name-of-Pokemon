import React from 'react'

const Start = ({start,setStart,isStart,setStartGame}) => {
  return (
    <>
        {start && (
        <div className="w-full h-[89vh] bg-black">
        <div className="w-full h-full flex flex-col justify-center items-center text-center bg-[url('https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png')] bg-center">
            <h2 className='text-white font-semibold text-4xl sm:text-9xl '>Click To Play</h2>
            <button className='mt-10 py-4 px-8 bg-blue-500 text-white rounded-md text-xl hover:brightness-90 active:translate-y-1'
                onClick={isStart}
            >Start</button>
        </div>
    </div>
    )}
    </>
    
  )
}
export default Start