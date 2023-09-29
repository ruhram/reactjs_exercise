/* eslint-disable react/prop-types */
import { useState } from 'react'


function Header(props){
  
  return(<h1>Belajar React bareng WPU {props.author} </h1>)
}

function HomePage(){
  const [likes, setLikes] = useState(0)

  function handleClick(){
      setLikes(likes + 1)
  }

  return(
      <div>
          <Header author='WPU' />
          <button onClick={handleClick}> Like ({likes}) </button>
      </div>
  );
}


export default HomePage
