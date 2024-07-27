import React, { useEffect } from 'react'
const LoanCalculator=()=>{
    const [cost,setCost]=React.useState(0)
    const [loanAmount,setLoanAmount]=React.useState(0)
    const [downPayment,setDownPayment]=React.useState(0)
    const [interest,setInterest]=React.useState(0)
    const [fee,setFee]=React.useState(0)
    useEffect(()=>{
        setFee(cost*0.01)
        setDownPayment(cost*0.02+fee)
        setLoanAmount(cost-downPayment)
    },[cost])

    useEffect(()=>{
        // setDownPayment(downPayment+fee)
        setLoanAmount(cost-downPayment)


    },[downPayment])

    const handleLoanAmount=()=>{
        if(cost && downPayment && interest){

        }
    }
    return (
        <div style={{width:'50%',border:'1px solid black', display:'flex',flexDirection:'column',padding:'20px'}}>
            <h1>Loan Calculator</h1>
            <label for="loan">Total Cost of Asset</label>
            <input type='number' placeholder='Cost of Asset' value={cost} onChange={(e)=>{
                setCost(e.target.value)
            }} />

            <label for="loan">Interest Rate(%)</label>
            <input type='number' placeholder='Enter Interest' value={interest} onChange={(e)=>{
                setInterest(e.target.value)
            }} />

            <label for="loan">Processing Fee(%)</label>
            <input type='number' placeholder='Enter Processing Fee' value={fee} onChange={(e)=>{
                setFee(e.target.value)
            }} />
            <h4>Total Down Payment: {downPayment}</h4>
           <label for="loan">Down Payment</label>
            <input type='range' min={0} max={cost} value={downPayment} onChange={(e)=>{
                setDownPayment(e.target.value)
            }} />
            <h4>Total Loan Amount: {loanAmount}</h4>
            <label for="loan">Loan Amount per month</label>
            <input type='range' min={0} max={cost} value={loanAmount} onChange={(e)=>{
                setLoanAmount(e.target.value)
            }} />

<label for="loan">Tenure</label>


           

            
        </div>
    )
}

export default LoanCalculator