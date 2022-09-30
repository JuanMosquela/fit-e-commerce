
import {useState} from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'

const ButtonCounter = () => {

  const [counter, setCounter] = useState(0)

  const handleClick = (value: number) : void  => {
    if(counter === 0 && value === -1) return
    setCounter(prev => prev + value) 
  }

  return (
    <>    
      <div className="button-wrapper">
        <button className="button-group">
          <span onClick={() => handleClick(-1)}>-</span>
          <span>{counter}</span>
          <span onClick={() => handleClick(1)}>+</span>
        </button>
      
        <button className="add-button">
          <BsFillCartPlusFill />
          Add to Cart
        </button>
      </div>
    </>
  )
}
export default ButtonCounter