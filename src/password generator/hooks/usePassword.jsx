import React from 'react'

const usePassword = () => {
  const [password ,setPassword]=React.useState('')
    const [error,setError]=React.useState('')
  const generatePassword=(data)=>{
    let generatedPassword=''
    let charset=''
    console.log(data)
    if(data?.length===0){
      setError('Please select no of charcters')
      return 
    }
    if(!data?.checkbox?.map((data)=> data.state)?.includes(true)){
      setError('Please choose atleast a option to continue')
      return 
    }
    data?.checkbox?.map((ele)=>{
      if(ele.state){
      switch(ele.title){
        case "Including Uppercase":
          charset+="ABCDEFGHIJKLOMNOPQRSTVUWXYZ";
          break;

        case "Including Lowercase":
          charset+="abcdefghijklmnopqrstvuwxyz";
          break;

        case "Special Characters":
          charset+="!@#$%^&*()_+=-></|";
          break;

        case "Including Numbers":
          charset+="0123456789"
          break;

        default:
        break;
      }
    }})
    
    for(let i=0;i<data.length;i++){
      generatedPassword+=charset[Math.floor(Math.random() * charset.length)]
    }
    setPassword(generatedPassword);
    setError('');
  }
  return {password,error,generatePassword}
}

export default usePassword