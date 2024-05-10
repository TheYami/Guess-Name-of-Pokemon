import React from 'react'

const Game = ({pokemon,startGame,checkAnswer,inputAnswer,score,answer,idk,answerName,next,idkButton}) => {
  return (
    <>
        {startGame && (
        <div className='w-full h-[89vh]'>

            <div className='w-full text-center'>
                <h1 className='text-4xl font-bold py-2 text-pink-400'>What is this Pokemon</h1>
            </div>
            
            <div className='flex w-full'>
                <div className='w-full flex flex-col items-center justify-center border-t-2 relative'>
                    <div className='absolute flex flex-col items-center justify-center right-[10px] top-0 sm:right-20 sm:top-2'>
                        <h1 className='font-bold text-4xl sm:text-[4rem] text-green-600'>{score}</h1>
                        <small className=' text-lg'>score</small>
                    </div>
                    <div className='mt-5'>
                        <img src= {pokemon?.sprites?.other?.home?.front_default} alt="pokemon" className='sm:h-[350px] sm:w-[350px] h-[200px] w-[200px]'/>
                        {answerName && (
                            <h2 className='font-bold text-xl text-red-600 text-center'>{pokemon.name}</h2>
                        )}
                    </div>
                    
                   
                    <div className="mt-10 flex flex-col items-center">
                        {idkButton && (
                            <form onSubmit={checkAnswer}>
                            <div className='flex flex-wrap items-center justify-center sm:flex-nowrap'> 
                                <input type="text" className='w-[350px] h-10 rounded-full border-2  outline-none px-6 font-semibold border-blue-800' 
                                    onChange={inputAnswer} value={answer}
                                />
                            <button className='bg-blue-900 text-white px-4 py-2 rounded-full ml-2 mt-3 sm:mt-0' type='submit'>OK</button>
                            </div>
                        </form>
                        )}
                        
                       
                       {idkButton && (
                        <button className='bg-red-500 text-white mt-2 px-4 py-2 rounded-full ml-2' onClick={idk}>I don't know</button>
                       )}
                        {answerName && (
                            <button className='bg-green-500 text-white mt-2 px-4 py-2 rounded-full ml-2' onClick={next}>Next</button>
                        )}
                    </div>
                   
                </div>
            </div>
         
        </div>
        )}
    </>
  )
}

export default Game