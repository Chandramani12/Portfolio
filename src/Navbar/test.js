import { useEffect, useState } from "react"

export default function Data(){

    const[ResourceType,setResourceType]=useState('posts')
    const[items,setItems]=useState([])
    console.log('render')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${ResourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[ResourceType])
    return(
        <>
            <div>
                <button onClick={()=>setResourceType('posts')}>posts</button>
                <button onClick={()=>setResourceType('users')}>users</button>
                <button onClick={()=>setResourceType('comments')}>comments</button>
            </div>
            <h1>{ResourceType}</h1>
            {items.map(item=>{
                    return <pre>
                        {JSON.stringify(item)}
                    </pre>
            })}
        </>
    )
    
}

