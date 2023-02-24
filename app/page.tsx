'use client'
import { use, useState } from 'react'


export default function Home() {
  const startGame = ()=>{
      setGameStarted(true)
      console.log("Game Started")
  }

  const stopGame = ()=>{
    setGameStarted(false)
    console.log("Game Stopped")
  }

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [dicedNumber, setDicedNumber] = useState(1);
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);

  

  const selectNumberHandler = (v:number)=>{
    setSelectedNumber(v);
    console.log(v);
  }

  const genRandomNumber = ()=>{
    if (selectedNumber){
    const rNum = Math.ceil(Math.random() * 6)
    console.log(rNum);
    setDicedNumber(rNum);
    if (rNum === selectedNumber)
    {
      setScore(score + 10)
    }else
    {
      setScore(score - 2)
    }
  }else
    {
      setError("Please Select a Number")
    }
  }


  const numbers = [1,2,3,4,5,6]
  return (
      <>
      { gameStarted ? 
      (
      <div>
          <div className='flex justify-center text-green-900 text-6xl font-bold mt-5'>Select Number</div>
          <div className='flex justify-center gap-12 mt-14'>
            {numbers.map(value=>(            

              <div  onClick={()=>selectNumberHandler(value)} key={value} className={` cursor-pointer flex justify-center items-center w-12 h-12 ${selectedNumber===value ? 'bg-blue-900': 'bg-black'} text-white text-center rounded-lg`} >{value}</div>
            ))
          }
          </div> 
          <div className='flex justify-center cursor-pointer  mt-10' onClick={genRandomNumber}><img className='w-[100px] h-[100px]' src={`dice/dice${dicedNumber}.png`}/></div>
          <div className='flex justify-center'>Click on Dice to Roll</div>
          <div className="text-red-900 font-bold text-9xl flex justify-center">{score}</div>
          <div className='mt-5 text-5xl font-bold flex justify-center'>Total Score</div>
          <div className='flex justify-center'>
          <button className='mt-9 text-3xl font-bold bg-blue-900 text-white rounded-lg p-4' onClick={()=>setScore(0)}>Reset Score</button>
          </div>
      </div>  
      ) 
      : 
      (<div className='flex '>
          <div className='' >
            <img src='dice/dices.png'></img>
          </div>
          <div className='flex flex-col justify-center '>
            <div ><h1 className='text-[60px] font-bold'>The Dice Game</h1></div>
            <div><button  className='bg-blue-800 p-2 text-white rounded-lg' onClick={startGame}>Start Game</button></div>
          </div>
        </div>)
        
        }
        
      </>
  )
}
