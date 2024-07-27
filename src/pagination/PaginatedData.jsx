import React, { useEffect } from 'react'
import { GrPrevious } from "react-icons/gr";
import { IoChevronForwardSharp } from "react-icons/io5";

const PaginatedData=()=>{
    const [data,setData]=React.useState([])
    const [page,setPage]=React.useState(0)
    const [paginatedData,setPaginatedData]=React.useState([])
    const limit =10
    const apiLimit=100
    const url=`https://dummyjson.com/products?limit=${apiLimit}`
    const getData=async ()=>{
        const res= await fetch(url)
        const rdata =await res.json();
        setData(rdata.products)
    }   
    console.log(data)

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        const start=page*limit;
        const end=start+limit;
        setPaginatedData(data.slice(start,end))

    },[page,data])
    const GoPrevious=()=>{
        if(page>0){
            setPage(page-1)
                     
        }
        
    }
    const GoNext=()=>{
        console.log((page+1)+limit)
        if(((page+1)*limit)<data.length){
           setPage(page+1)
        }
        
    }
    return (
        <div>
            <h1>Paginated Data</h1>
            {
                paginatedData.map((dat)=>{
                    return <div>{dat.title}</div>
                })
            }
            <div style={{display:'flex',gap:'10px'}}>
            <GrPrevious onClick={
                GoPrevious
            }/>
            {
                [...Array(Math.ceil(data.length/limit))].map((_,i)=>(
                    <div onClick={()=>setPage(i)} style={{color:i===page ?'blue':'black' }}>{i+1}</div>
                ))
            }
            <IoChevronForwardSharp onClick={
                GoNext
            }/>
            </div>
        </div>
    )
}

export default PaginatedData