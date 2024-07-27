import React from "react"
import { FcFolder,FcFile } from "react-icons/fc";
import { AiFillFolderAdd } from "react-icons/ai";
import { RiFileAddFill } from "react-icons/ri";


import './folder.css'
const Folder=({node})=>{
    const [open,setOpen]=React.useState(false)
    const handleFolderClick=(node)=>{
        const newFolder={
            name:'New Folder',
            isFolder:true,
            childrens:[]
        }
        node.childrens.unshift(newFolder)
        setOpen(true)
    }

    const handleFileClick=()=>{
        const newFile={
            name:'New File',
            isFolder:false,
        }
        node.childrens.unshift(newFile)
        setOpen(true)

    }
    return (
        <div style={{marginLeft:'20px'}}>
        <div onClick={()=>setOpen(!open)} className="folder">
            <div style={{display:'flex',gap:'5px'}}>
            <span>{node.isFolder ? <FcFolder /> : <FcFile />}</span>
            {node.name}
            </div>
            <div>
                {
                    node.isFolder && (
                        <div>
                        <AiFillFolderAdd onClick={()=>{
                            handleFolderClick(node)
                        }}/>
                        <RiFileAddFill onClick={()=>{
                            handleFileClick(node)
                        }}/>
                        </div>
                    )
                }
            </div>
        </div>
        {
            open && node.isFolder && node.childrens.map((data,idx)=>{
                return (
                    <Folder key={idx} node={data}/>
                )
            })
        }
        </div>
        
    )
}

export default Folder