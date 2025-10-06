import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//inline styling has higher priority than external css file (index.css)
//most advanced in terms of priority is tailwind css
//tailwind css has higher priority than inline styling

//state is not persistent accross broswer reloads (returns to default value on reload)
const Card = ({title }) => {  
  //const [varaibleName ,setvaraibleName] = useState(defaultValue);:
  const [hasLiked ,setHasLiked ] = useState(false);
  return (
    <div className = "card">
      <h2>{title}</h2>
      <button onClick={()=>{setHasLiked(true)}}>
        {hasLiked ? "Liked" : "Like"}. 
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className = "card-continaer">
      < Card title = "Card 1" />
      < Card title = "Card 2" />
      < Card title = "Card 3" />
    </div>
  )
}

export default App
