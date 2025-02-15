import React from 'react'
 
      
function visualizer(instruction,size){
  
    if(instruction.action){
      return(
        
          <div className='body'>
            <div>
            <p>{instruction.action} {instruction.left}  {instruction.right} {instruction.pivot}</p>
            

            </div>
            <div className='bar-grid'>


                {instruction.array.map((item, index) => {

                  let color = "black"; // Default color

                  if(index == instruction.left || index == instruction.right){
                    color = "red"
                  }
                  
                  if(index == instruction.pivot){
                    color = "green"
                  }
                  let value = "";
                  if(size<30){

                      value = item;
                  }
                  return(
                    
                    <div >

                      <DynamicBar key={index} value={item} maxValue={100} color={color} totalBars={instruction.array.length}/>
                    

                    <p>{value}</p>
                      
                    </div>
                  );

                })
              }
            </div>

    
          </div>
        
      )
    }
  }

  const DynamicBar = ({ value, maxValue, color = 'red', totalBars  }) => {
    const percentage = (value / maxValue) * 320;  
    const containerWidth = 600; // Set a fixed container width in pixels

      const barWidth = Math.max(4, containerWidth / totalBars) + "px"; // Ensures bars are at least 5px wide
    
    const barStyle = {
      width: barWidth,
      height:  percentage ,
      backgroundColor: color, 
      transition: 'width 0.3s ease-in-out', // Optional: for smooth transitions
    };
  
    return ( 
        <div style={barStyle}></div>  
    );
  };
export default visualizer
