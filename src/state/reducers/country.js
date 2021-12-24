const reducer = (state='PK',action)=>{
    if(action.type==='country')
    {
        return state=action.payload
    }
    else{
        return state
    }
}

export default reducer