// use rafce to create react component snippet (react snippet extension)
import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//inline styling has higher priority than external css file (index.css)
//most advanced in terms of priority is tailwind css
//tailwind css has higher priority than inline styling

//state is not persistent accross broswer reloads (returns to default value on reload)
//hooks are special functions that let you "hook into" React features.
//useState is a Hook that lets you add React state to function components.
//React will preserve this state between re-renders.
//useState returns a pair: the current state value and a function that lets you update it.
//You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
//The only argument to useState is the initial state. It can be a value of any type: number, string, array, object, etc.
//Unlike the setState function found in class components, updating a state variable with the setter function provided by useState does not automatically merge the old and new state together. 
//Instead, it replaces the state variable with the new value provided.

// useState = for managing state
// useEffect = for handling side effects like data fetching from server or API calls (runs twice)
// useContext = for sharing data across components 
// useCallback = for optimizing callback functions 
//useContext, useReducer, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, useTransition, useDeferredValue

const Card = ({title }) => { 
  const [count,setCount ] = useState(0); // <-- just to show that we can have multiple states in a component
  const [hasLiked ,setHasLiked ] = useState(false); 
  //const [varaibleName ,setvaraibleName] = useState(defaultValue);:
  // {variablename ? "when true" : "when false"}
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  },[hasLiked]); //runs only when hasLiked changes (second argument is dependency array)
  return (
    <div className = "card" onClick={()=>{setCount(count + 1)}}>{/*better programming practise to use prevState instead of the variable itself. eg. onClick={()=>{setCount(prevCount => prevCount + 1)}}*/}
      <h2>{title} <br/> {count}</h2>
      <button onClick={()=>{setHasLiked(true)}}>
        {hasLiked ? "Liked" : "Like"}. 
      </button>
    </div>
  )
}
//conditional rendering: {condition && <Component />} (if condition is true, render component)

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
