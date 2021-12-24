export const Month = (month)=>{
    return (dispatch)=>{ 
        dispatch({ 
        type : 'month',
        payload: month
     })
    }
}
export const Year = (year)=>{
    return (dispatch)=>{ 
        dispatch({ 
        type : 'year',
        payload: year
     })
    }
}
export const Country = (country)=>{
    return (dispatch)=>{ 
        dispatch({ 
        type : 'country',
        payload: country
     })
    }
}
export const Event = (event)=>{
    return (dispatch)=>{ 
        dispatch({ 
        type : 'event',
        payload: event
     })
    }
}