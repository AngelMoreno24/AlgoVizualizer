import React from 'react' 
import '../App.css';
import { bubbleSort } from '../algorithms/bubbleSort';
import { useEffect, useState } from 'react';
import '../components/bar.css'
import '../components/layout.css'

const BubbleSort = () => {
  
  
    let [array, setArray] = useState([]);
    
    let [step, setStep] = useState([]);
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);
    const [amount, setAmoount] = useState(false);
  
  
  
    useEffect(()=>{
  
      setArray(bubbleSort([2,5,12,6,7,3,5,1,12,2,5,12,6,7,3,5,1,12,2,5,12,6,7,3,5,1,12,2,5,12,6,7,3,5,1,12]));
      
    },[])
  
    useEffect(()=>{ 
  
      if(array.length >0 && play==true){
  
        setStep(array[0])
        console.log("asdasdasdsad")
        console.log(array[0])
   
  
      }
  
    },[array])
  
    useEffect(() => {
      
      if(array.length >0){
        if(index < 0){
          setIndex(0);
        }
        if(index > array.length-1){
          setIndex(array.length-1);
        }
      }
      if (index < array.length && array.length >-1) {
        setStep(array[index]); // Update step
  
        if ( play == true) {
            
          const timeout = setTimeout(() => {
  
            setStep(array[index]); // Update step
            setIndex(prev => prev + 1); // Move to next index
          }, 1000); // Delay between updates
  
          return () => clearTimeout(timeout); // Cleanup on re-renders
        }
      }
    }, [index, array, play]); // Runs when `index` changes
  
  
  
  
      
    function visualizer(instruction){
  
      if(instruction.action){
        return(
          
            <div className='body'>
              <div>
              <p>{instruction.action} {instruction.left}  {instruction.right} </p>
              
  
              </div>
              <div className='bar-grid'>
  
  
                  {instruction.array.map((item, index) => {
  
                    let color = "green"; // Default color
  
                    if(index == instruction.left || index == instruction.right){
                      color = "blue"
                    }
                    
                    return(
                      
                      <div >
  
                        <DynamicBar key={index} value={item} maxValue={10} color={color} />
                      
                        
                      </div>
                    );
  
                  })
                }
              </div>
  
      
            </div>
          
        )
      }
    }
  
    const DynamicBar = ({ value, maxValue, color = 'blue', width = '15px' }) => {
      const percentage = (value / maxValue) * 100;  
      const size = (array.length-1/100)*.01
      
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
        <div className="background-color">
          
        <div class="header">
  
          <h1> Bubble Sort</h1>
        </div>
          
          <div class="btn-space">
  
            <div class="btn-group">
  
              <button onClick={()=>{setIndex(0)}}>
                skip back
              </button>
  
              <button onClick={()=>{setIndex(index-1)}}>
                step back
              </button>
  
              <button onClick={()=>{play?(setPlay(false)):(setPlay(true))}}>
                {play?("pause"):("play")}
              </button>
              
              <button onClick={()=>{setIndex(index+1)}}>
                step forward
              </button>
    
              <button onClick={()=>{setIndex(array.length-1)}}>
                skip forward
              </button>
  
            </div>
          </div>
  
          <div className='body'>   
        
                  {visualizer(step)}
   
            
          </div>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        </div>
      </div>
    );
}

export default BubbleSort
