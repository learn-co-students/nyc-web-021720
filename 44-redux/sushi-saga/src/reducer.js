// 1. intiial state
// 2. create reducer
import { sushis } from './sushis'

let initialState = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    startIndex: 0
}



export const reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'UPDATE_INDEX':
            let nextIndex = prevState.startIndex + 4 
            if( nextIndex >= prevState.sushis.length ){
                nextIndex = 0
            }
            return {...prevState, startIndex: nextIndex}
        case 'FETCH_SUSHIS':
            return {...prevState, sushis: action.payload.sushis}
        case 'EAT_SUSHI':
            let {id, price, eaten} = action.payload
            if(price <= prevState.budget && !eaten){  
                let newSushis = prevState.sushis.map(sushi => {  
                    if(sushi.id === id){  
                        sushi.eaten = true  
                    }
                    return sushi  
                })
                return {
                    ...prevState,
                    sushis: newSushis,
                    eatenSushis: [...prevState.eatenSushis, id],
                    budget: prevState.budget - price 
                }
            } else {
                return {...prevState}
            }
        default:
            return {...prevState}
    }
}

/** ACTIONS BELOW */

export const updateIndexCreator = () => ({type: 'UPDATE_INDEX'})
export const fetchSushisCreator = () => {
    return dispatch => {
        fetch( "http://localhost:3000/sushis")
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {

                dispatch( {type: 'FETCH_SUSHIS', payload: { sushis: data } })
            }, 3000)
        })
    }
}
export const eatSushisCreator = (id, price, eaten) => ({type: 'EAT_SUSHI', payload: { id, price, eaten }})