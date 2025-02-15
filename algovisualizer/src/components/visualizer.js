import React from 'react'
 
      
function visualizer(instruction, size) {
  if (instruction.action) {
    return (
      <div className="body">
        <div>
          <p>
            {instruction.action}, i={instruction.left}, j={instruction.right}, pivot={instruction.pivot}
          </p>
        </div>

        {/* Bar Grid - Ensures bars align horizontally */}
        <div className="bar-grid">
          {instruction.array.map((item, index) => {
            let color = "black"; // Default color

            if (index === instruction.left || index === instruction.right) {
              color = "red";
            }
            if (index === instruction.pivot) {
              color = "green";
            }
            if (index === instruction.pivotSwap) {
              color = "blue";
            }

            let value = size < 30 ? item : "";

            return (
              <div key={index} className="bar-container">
                <DynamicBar value={item} maxValue={100} color={color} totalBars={instruction.array.length} />
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const DynamicBar = ({ value, maxValue, color = 'red', totalBars }) => {
  const containerWidth = 600; // Fixed container width
  const barWidth = Math.max(4, containerWidth / totalBars) + "px"; // Ensures bars are at least 4px wide
  const barHeight = (value / maxValue) * 320; // Normalized height

  const barStyle = {
    width: barWidth,
    height: barHeight + "px",
    backgroundColor: color,
    transition: 'height 0.3s ease-in-out',
  };

  return <div className="dynamic-bar" style={barStyle}></div>;
};
export default visualizer
