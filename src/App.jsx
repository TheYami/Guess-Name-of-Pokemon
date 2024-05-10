import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Game from './components/Game'

function App() {


  const [number,setNumber] = useState(Math.floor(Math.random()*1025)+11)

  const [pokemon,setPokemon] = useState('')
  const [isloading,setIsLoading] = useState(false)
  const [idkButton,setIdkButton] = useState(true)

  useEffect(() => {
    let abortController = new AbortController()

    const loadPokemon = async () => {
    
      try{
        setIsLoading(true)
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`,{
          signal: abortController.signal
        })

        setPokemon(response.data)

      }catch(error){
        console.log("I had Error",error)

      }finally{
        setIsLoading(false)
      }
    }

    loadPokemon()

    return () => abortController.abort

  },[number])

  console.log(pokemon)

  const [start, setStart] = useState(true)
  const [startGame,setStartGame] = useState(false)
  const [answerName,setAnswerName] = useState(false)



  const isStart = () =>{
    setStart(!start)
    setStartGame(true)
  }

  const [score,setScore] = useState(0)
  const [answer,setAnswer] = useState('')

  const inputAnswer = (e) =>{
    setAnswer(e.target.value)
  }

  const checkAnswer = (event) =>{
    event.preventDefault()
    if(answer.toLowerCase() === pokemon.name.toLowerCase()){
      setNumber(()=>Math.floor(Math.random()*1025)+11)
      if(setAnswerName){
        setScore(score=>score+10)
      }else
      setScore(score => score+10)
      setAnswerName(false)
      setAnswer('')
    }else{
      setScore(score => score-2)
      setAnswer('')
    }
  }

  const idk = ()=>{
    setAnswerName(true)
    setIdkButton(false)
    setScore(score => score-10)
  }

  const next = ()=>{
    setAnswerName(false)
    setIdkButton(true)
    setAnswer('')
    setNumber(()=>Math.floor(Math.random()*1025)+11)
  }
  return (
    <>
      <Navbar/>
      <Start start={start} setStart={setStart} isStart={isStart} setStartGame={setStartGame}/>
      <Game pokemon={pokemon} startGame={startGame} checkAnswer={checkAnswer} inputAnswer={inputAnswer} score={score} answer={answer}
        idk={idk} answerName={answerName} next={next} idkButton={idkButton} 
      />
  
    </>
  )
}

export default App
