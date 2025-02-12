import logo from './logo.svg';
import './App.css';
import { bubbleSort } from './algorithms/bubbleSort';
import { useEffect, useState } from 'react';
import './components/bar.css'
function App() {

  let [array, setArray] = useState([]);
  
  let [step, setStep] = useState([]);
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);
  useEffect(()=>{

    setArray(bubbleSort([2,5,12,6,7,3,5,1,12,61,6,31,51]));
    
  },[])

  useEffect(()=>{ 

    if(array.length >0 && play==true){

      setStep(array[0])
      console.log("asdasdasdsad")
      console.log(array[0])
 

    }

  },[array])

  useEffect(() => {
    if (index < array.length && play == true) {
      const timeout = setTimeout(() => {
        setStep(array[index]); // Update step
        setIndex(prev => prev + 1); // Move to next index
      }, 1000); // Delay between updates

      return () => clearTimeout(timeout); // Cleanup on re-renders
    }
  }, [index, array, play]); // Runs when `index` changes




  
function visualizer(instruction){

  if(instruction.action){
    return(
      
        <div >
          <p>{instruction.action} {instruction.left}  {instruction.right} {instruction.array}</p>
           
          <div className='bar-grid'>


              {instruction.array.map((item, index) => {

                let color = "green"; // Default color

                if(index == instruction.left || index == instruction.right){
                  color = "blue"
                }
                
                return(
                  
                  <div >

                    <DynamicBar key={index} value={item} maxValue={10} color={color} />
                    <p>{item}</p>
                    
                  </div>
                );

              })
            }
          </div>

  
        </div>
      
    )
  }
}

const DynamicBar = ({ value, maxValue, color = 'blue', width = '30px' }) => {
  const percentage = (value / maxValue) * 100;

  const barStyle = {
    width: width,
    height:  percentage ,
    backgroundColor: color, 
    transition: 'width 0.3s ease-in-out', // Optional: for smooth transitions
  };
 
  return ( 
      <div style={barStyle}></div>  
  );
};
 


  
  return (
    <div className="App">
      <header className="App-header"> 

        <button onClick={()=>{play?(setPlay(false)):(setPlay(true))}}>
          {play?("pause"):("play")}
        </button>
        <div>   
      
                {visualizer(step)}
 
          
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
