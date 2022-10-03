
import {useState} from 'react'


const ButtonCounter = () => {

  const [counter, setCounter] = useState(0)

  const handleClick = (value: number) : void  => {
    if(counter === 0 && value === -1) return
    setCounter(prev => prev + value) 
  }

  return (      
      
      <button className="button-group">
        <span onClick={() => handleClick(-1)}>-</span>
        <span>{counter}</span>
        <span onClick={() => handleClick(1)}>+</span>
      </button>     
        
      
    
  )
}
export default ButtonCounter