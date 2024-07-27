import React from "react"

export const Memo=()=>{
    const [value,setValue]=React.useState("")
    return (
        <div>
            <input 
            type="text"
             value={value}
              onClick={(e)=>{
                setValue(e.target.value)
            }}/>
        </div>
    )
}