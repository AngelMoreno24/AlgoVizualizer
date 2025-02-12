import logo from './logo.svg';
import './App.css';
import { bubbleSort } from './algorithms/bubbleSort';
import { useEffect, useState } from 'react';
import './components/bar.css'
function App() {

  let [array, setArray] = useState([]);
  
  let [step, setStep] = useState([]);

  useEffect(()=>{

    setArray(bubbleSort([2,5,1,6,7,3,5,1]));
    

  },[])


function visualizer(instruction){

  if(instruction.action == "comparison"){
    return(
      
        <div>
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
                    <p></p>
                    
                  </div>
                );

              })
            }
          </div>

  
        </div>
      
    )
  }
}

const DynamicBar = ({ value, maxValue, color = 'blue', width = '20px' }) => {
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
        <div>  
            {array.map((data)=>{
              
            return(
              <div>

      
                {visualizer(data)}

              </div>
            )
            })}
          
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
