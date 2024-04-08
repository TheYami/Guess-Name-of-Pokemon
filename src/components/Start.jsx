import React from 'react'

const Start = ({start,setStart,isStart,setStartGame}) => {
  return (
    <>
        {start && (
        <div className="w-full h-[89vh] bg-black">
        <div className="w-full h-full relative text-center bg-[url('https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png')]">
            <h2 className='text-white font-semibold text-9xl '>Click To Play</h2>
            <button className='absolute top-[50%] left-[42%] py-4 px-8 bg-blue-500 text-white rounded-md text-xl hover:brightness-90 active:translate-y-1'
                onClick={isStart}
            >Start</button>
        </div>
    </div>
    )}
    </>
    
  )
}
export default Start