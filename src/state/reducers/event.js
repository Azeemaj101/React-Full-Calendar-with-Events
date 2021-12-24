const reducer = (state=null,action)=>{
    if(action.type==='event')
    {
        return state=action.payload
    }
    else{
        return state
    }
}

export default reducer