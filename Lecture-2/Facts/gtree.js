let root ={
    data:10,
    children:[{
        data:20,
        children:[{
            data:50,
            children:[]},
            {data:60,
            children:[]
        }]},{
        data:30,
        children:[{
            data:70,
            children:[90,80]
        }
        ],
        data:40,
        children:[78,3],

    
        }]

}
function DisplaygTree(root){
    let str= ""+ root.data +"=>";
    for(let i=0;i<root.children.length;i++){
        str+=root.children[i].data+",";
    }
    console.log(str);
    for(let i=0;i<root.children.length;i++){
        DisplaygTree(root.children[i]);
    }
}
DisplaygTree(root);

