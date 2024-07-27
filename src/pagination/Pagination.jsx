import React from"react"
import PaginatedData from "./PaginatedData"

const Pagination=()=>{
    const [show,setShow]=React.useState(false)
    return (
        <div>
            <button 
            onClick={()=>{
                setShow(!show)
            }}
            style={{
                display:'flex',
                backgroundColor:'red',
                color:'white',
                padding:'5px',
                padding:'10px 20px',
                justifyContent:'center',
                alignItems:'center',
                cursor:'pointer',
                fontStyle:'italic',
                border:'none'
            }}
             >
                Show Pagination Component
            </button>
            {
                show && (
                    <PaginatedData/>
                )
            }
        </div>
    )
}

export default Pagination