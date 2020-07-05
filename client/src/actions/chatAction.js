import axios from '../config/axios'

//--------------Post Message -----

export const startPostMessage = (data)=>{
    return(disptch)=>{
        axios.post('/user/chat',data,{
            headers:{
                "Authorization":localStorage.getItem('auth')
            }
        })
        .then((response)=>{
             console.log(response.data)
             alert('Successfull')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

///-----------------Get message -------
export const postMessage = (data)=>{
    return{type:"POST_CHAT",payload:data}
}
export const startGetMessage = (id)=>{
    return(dispatch)=>{
        axios.get(`/user/chat/${id}`,{
            headers:{
                "Authorization":localStorage.getItem('auth')
            }
        })
        .then((response)=>{
            // console.log(response.data)
            dispatch(postMessage(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
