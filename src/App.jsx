import React from "react"
import { nanoid } from 'nanoid'
import Die from "./components/Die"
import Confetti from "react-confetti";


export default function App(){
  const [dieArr, setDieArr] = React.useState( ()=> allDice())
  const gameState = dieArr.every(die => die.isChos) && dieArr.every(die => die.value === dieArr[0].value)
   
gameState ?  document.getElementById("btn").focus() : undefined
  let count = 0
  let mach = 0
  dieArr.map(die => die.isChos ? count++ : count)
  if(count === 10){
    console.log("Game Over")
    for(let i = 0; i < dieArr.length - 1;i++){
      dieArr[i].value === dieArr[i+1].value ? mach +=1 : mach
    }
    if(mach == 9) {console.log("You Win")}else{console.log(mach)}
  } 
  function allDice(){
    return new Array(10).fill(0).map(()=>(
      {value:Math.floor(Math.random() * 6)+ 1,
        isChos: false,
        id: nanoid()
      }))
  }

  const allElements = dieArr.map(num => 
    <Die onClick={handleClick} 
      isHeld ={num.isChos}
      key={num.id} id={num.id} 
      val={num.value}/>)


  function handleRoll(){
    allDice()
    setDieArr(old => old.map(old =>
       old.isChos === false ?
       {...old, value: Math.floor(Math.random() * 6)+ 1}
       : old))
  }
  function handleReStart(){
    location.reload()
  }
  function handleClick(id){
    id =id.currentTarget.id
    setDieArr(prev =>  prev.map(old => old.id === id ? {...old, isChos: !old.isChos} : old))
    
    }

  

 return <main>
  { gameState && <Confetti />}
  <div className="container">
          {allElements}
  </div>
  <button id="btn" className="roll" onClick={!gameState ? handleRoll : handleReStart}> {gameState ? "Game Over" : "Roll"} </button>
        </main>
}