import React from "react"
import Data from '../assets/mock_data/sidebar_data'
import TreeNode from "./TreeNode"

const Sidebar=()=>{
    const [data,setData]=React.useState(Data)
    console.log(data)
    return (
        <div>
            {
                data.map((data,index)=>(
                    
                        <TreeNode key={index} node={data}/>
                        
                    
                ))
            }
        </div>
    )
}

export default Sidebar