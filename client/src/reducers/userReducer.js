const initialState = []

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_USER':{
            return state.concat(action.payload)
        }
        case 'RESET_USER':{
            return state.concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}

export default userReducer