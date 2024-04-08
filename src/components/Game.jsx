import React from 'react'

const Game = ({pokemon,startGame,checkAnswer,inputAnswer,score,answer}) => {
  return (
    <>
        {startGame && (
        <div className='w-full h-[89vh]'>

            <div className='w-full text-center'>
                <h1 className='text-4xl font-bold py-2 text-pink-400'>What is this Pokemon</h1>
            </div>
            
            <div className='flex w-full'>
                <div className='w-full flex flex-col items-center justify-center border-t-2 relative'>
                    <h1 className='font-bold text-[4rem] absolute right-20 top-2 text-green-600'>{score}</h1>
                    <small className='absolute right-24 top-20 text-lg'>score</small>
                    <div>
                        <img src= {pokemon?.sprites?.other?.home?.front_default} alt="pokemon" className='h-[350px] w-[350px]'/>
                    </div>
                    
                    <div className="mt-10">
                        <form onSubmit={checkAnswer}>
                            <div> 
                                <input type="text" className='w-[350px] h-10 rounded-full border-2  outline-none px-6 font-semibold border-blue-800' 
                                    onChange={inputAnswer} value={answer}
                                />
                            <button className='bg-blue-900 text-white px-4 py-2 rounded-full ml-2' type='submit'>OK</button>
                            </div>
                        </form>
                       
                    </div>
                   
                </div>
            </div>
         
        </div>
        )}
    </>
  )
}

export default Game