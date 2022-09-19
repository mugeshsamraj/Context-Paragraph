import React,{useState} from 'react'
import data from './data'

const Context = () => {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    setText(data.slice(0,number));
  };
  return (
    <div>
      <h2>Enter the Paragraph to Generator</h2>
      <label htmlFor='count'>Paragraph:</label>
      <input 
      type="number"
      name='count'
      id='count'
      value={count}
      onChange={(e)=>{
        setCount(e.target.value);
      }}/>
      <button type='submit' className='btn' onClick={submitHandler}>Generated</button>
      <article className='lorem-text'>
        {text.map((item,index) => {
          return <p key={index}> {item} </p>;
        })}
      </article>
    </div>
  )
}

export default Context