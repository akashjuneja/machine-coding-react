import React from 'react'
import foldersAndFiles from '../assets/mock_data/folder_data'
import Folder from './Folder.jsx'

const FolderTree=()=>{
    const [folders,setFolders]=React.useState(foldersAndFiles)
    console.log(folders)
    return (
        <div>
            {
                folders.map((data,idx)=>{
                    return (
                        <Folder key={idx} node={data} />
                    )
                })
            }
        </div>
    )
}

export default FolderTree