const foldersAndFiles=[
    {
        name:'src',
        isFolder:true,
        childrens:[
            {
                name:'assets',
                isFolder:true,
                childrens:[{
                    name:'mock_data',
                    isFolder:true,
                    childrens:[{
                        name:'country_data.js',
                        isFolder:false,
                        childrens:[]
                    }]
                }]
            },
            {
                name:"app",
                isFolder:true,
                childrens:[{
                    name:'App.jsx',
                    isFolder:false,
                    childrens:[]

                },{
                    name:"components",
                    isFolder:true,
                    childrens:[{
                        name:'Button.jsx',
                        isFolder:false,
                        childrens:[]

                    }]
                }]
            },
            {
                name:'index.css',
                isFolder:false,
                childrens:[]

            },
            {
                name:'data.js',
                isFolder:false,
                childrens:[]

            },
            {
                name:'App.css',
                isFolder:false,
                childrens:[]

            },
            {
                name:'App.jsx',
                isFolder:false,
                childrens:[]

            },
            {
                name:'index.css',
                isFolder:false,
                childrens:[]

            }
        ]
    }
]

export default foldersAndFiles