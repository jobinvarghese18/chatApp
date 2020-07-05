const initialState = []

const chatReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_CHAT':{
            return state.concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}

export default chatReducer