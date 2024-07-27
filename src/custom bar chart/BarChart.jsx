import '../App.css'
const BarChart=({
    color,
    heigth,
    name
})=>{
    return (
        <div style={{backgroundColor:color,height:`${heigth}%`,width:'100%'}} className="bar">
            <div className='tool-tip'>{name}-{heigth}</div>
        </div>
    )

}
export default BarChart