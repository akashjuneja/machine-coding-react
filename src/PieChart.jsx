const PieChart=({data})=>{
    const radius = 150; // Radius of the pie chart
    const diameter = radius * 2;
    const center = radius;
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  <div className="pie"></div>
   const calculateCoordinates = (angle) => {
     const radians = (angle * Math.PI) / 180;
     const x = center + radius * Math.cos(radians);
     const y = center + radius * Math.sin(radians);
     return { x, y };
   };

   // Function to create the path for each segment
   const createPath = (startAngle, endAngle) => {
     const start = calculateCoordinates(startAngle);
     const end = calculateCoordinates(endAngle);
     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
     return `M${center},${center} L${start.x},${start.y} A${radius},${radius} 0 ${largeArcFlag},1 ${end.x},${end.y} Z`;
   };

   let cumulativeAngle = 0;

   return (
     <svg width={diameter} height={diameter}>
       {data.map((segment, index) => {
         const startAngle = cumulativeAngle;
         const endAngle = startAngle + (segment.value / totalValue) * 360;
         const pathData = createPath(startAngle, endAngle);
         cumulativeAngle = endAngle;
         return (
           <path
             key={index}
             d={pathData}
             fill={segment.colour}
             stroke="black"
             strokeWidth="1"
           />
         );
       })}
     </svg>
   );

}
export default PieChart
