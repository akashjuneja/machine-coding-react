import React from "react"
import DATA  from "../assets/mock_data/country_data"
import './country.css'
const Country=()=>{
   
    const countries=Object.keys(DATA).map((country)=>{
        return country
    })
    const capitals=Object.values(DATA).map((capital)=>{
        return capital
    })
    const allCountryAndCapital=[...countries,...capitals]
    allCountryAndCapital.sort(()=>Math.random()-0.5)
    const [cities,setCities]=React.useState(allCountryAndCapital)
    const [isSuccess,setSucess]=React.useState(false)

    

    const removeValues=(val1,val2)=>{
        const cities2=cities.filter((country)=>{
            return country!==val1 && country!==val2
        })
        setCities(cities2)
        setFirstTurn('')
        setSecondTurn('')
        setSucess(false)
    }
    const [firstTurn,setFirstTurn]=React.useState('')
    const handleFirstTurn=(country)=>{
        setFirstTurn(country)
        
    }
    const [secondTurn,setSecondTurn]=React.useState('')
    const handleSecondTurn=(country)=>{
        setSecondTurn(country)
        if(country in DATA){
            if(DATA[country]===firstTurn){
                setSucess(true)
                setTimeout(()=>{
                    removeValues(country,firstTurn)
                },1000)
                    
            }else{
                setSucess(false)
                resetKeys()


            }
        }else{
            const key =Object.entries(DATA).find(([key, val]) => val === country)?.[0];
            if(key===firstTurn){
                setSucess(true)
                setTimeout(()=>{
                    removeValues(country,key)
                },1000)
            }else{
                setSucess(false)
                resetKeys()
            }
        }
    }

    const resetKeys=()=>{
        setFirstTurn('')
        setSecondTurn('')
    }

    if(cities.length===0){
        return(
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h1>Game Over</h1>
            </div>
        )
    }
    

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="game-box">
            {
                cities.map((country,idx)=>{
                    return (
                        <div className="country-box" 
                        style={{border:country === firstTurn || country === secondTurn ? (isSuccess ? '3px solid #76ff03' : '3px solid #303f9f'):'1px solid black' }} 
                        key={idx} 
                        onClick={()=>{
                            firstTurn? handleSecondTurn(country):handleFirstTurn(country)
                        }}>
                            {country}
                        </div>
                    )
                })
            }
        </div>
        </div>
    )

}

export default Country