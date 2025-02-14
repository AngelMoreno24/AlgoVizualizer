import React from 'react' 
import '../App.css';
import { bubbleSort } from '../algorithms/bubbleSort';
import { useEffect, useState } from 'react';
import '../components/bar.css'
import '../components/layout.css'
import numberGen from '../components/numberGen';
import visualizer from '../components/visualizer';
const BubbleSort = () => {
  
  
    let [array, setArray] = useState([]);
    
    let [step, setStep] = useState([]);
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);
    const [size, setSize] = useState(50);
    const [speed, setSpeed] = useState(1750);
    
  
  
    useEffect(()=>{
        
      setArray(bubbleSort(numberGen(size)));
      setIndex(0);
    },[size])
  
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
          }, 2000-speed); // Delay between updates
  
          return () => clearTimeout(timeout); // Cleanup on re-renders
        }
      }
    }, [index, array, play]); // Runs when `index` changes
  
  
  
  
    
  
  
    
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
        
                  {visualizer(step,size)}
   
            
          </div>

          <input
                type="range"
                min="10"
                max="100"
                value={size}
                className="slider"
                id="myRange"
                onChange={(e) => setSize(Number(e.target.value))}
                />
      <p>Value: {size}</p>

      
      <input
                type="range"
                min="1500"
                max="2000"
                value={speed}
                className="slider"
                id="myRange"
                onChange={(e) => setSpeed(Number(e.target.value))}
                />
      <p>Speed: {speed}</p>
        </div>
      </div>
    );
}

export default BubbleSort
