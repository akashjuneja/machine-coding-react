import React, { useEffect } from "react"
import usePassword from './hooks/usePassword'
const PasswordGenerator=()=>{
    const [length,setLength]=React.useState(0)
    
    let checkboxData=[{
        title:"Including Uppercase",state:false
    },
    {
        title:"Including Lowercase",state:false
    },
    {
        title:"Special Characters",state:false
    },
    {
        title:"Including Numbers",state:false
    }]
    const [copied,setCopied]=React.useState(false)
    const {password,error,generatePassword}=usePassword()

    const [checkbox ,setCheckbox]=React.useState(checkboxData)
    const handleCheckoxData=(i)=>{
        const newCheckbox = checkbox.map((data, index) => {
            if (index === i) {
                return { ...data, state: !data.state };
            }
            return data;
        });
        setCheckbox(newCheckbox);
    }
    useEffect(()=>{
        if(copied){
            setTimeout(()=>{
                setCopied(!copied)

            },1000)
        }
    },[copied])
    const handleGneratePassword=()=>{
        const data={
            length,
            checkbox
        }
         generatePassword(data)
    }

    const copy=()=>{
        navigator.clipboard.writeText(password)
        setCopied(true)
    }
    
    return (
        <div style={{width:'50%',
         border:'1px solid black',
         display:'flex',
         flexDirection:'column',
         padding:'20px',
         backgroundColor:'#c77dff'
         }}>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                <div style={{fontWeight:'bold',color:'#240046',fontSize:'20px'}}>
                {password}
                </div>
                <button style={{backgroundColor:'#240046',padding:'5px 10px',color:'#fff',border:'none'}} onClick={()=>{
                    copy()
                }}>{copied? "Copied Password":"Copy Password"}</button>   
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px',fontWeight:'bold'}}>
            <div>Charcater Length</div>
            {length}
            </div>
            <input type="range"  min={0} max={20} value={length} onChange={(e)=>{
                setLength(parseInt(e.target.value))
            }}/>

            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginBottom:'10px'}}>
                {
                    checkbox.map((data,index)=>{
                        return (
                            <div key={index} style={{display:'flex',gap:'5px'}}>
                                <input type="checkbox" checked={data.state} onChange={()=>{
                                    handleCheckoxData(index)
                                }} />
                                <label>{data.title}</label>
                                </div>
                        )
                    })
                }
        
                
        </div>
        {error && (<div style={{color:'red'}}>{error}</div>)}

        <button style={{backgroundColor:'aqua',padding:'5px 10px' ,border:'none'}} onClick={()=>{
handleGneratePassword()
        }}>Gnerate Password</button>
        </div>
    )
}

export default PasswordGenerator