
let initialState = {
    likes: 0,
    text: ' ',
    darkMode: false,
    thangs: []
}

export const reducer = (prevState=initialState, action) => {
    console.log('INSIDE REDUCER', prevState, action)
    switch(action.type){
        case 'LIKE':
          return { ...prevState, likes: prevState.likes + 1 }
        case 'DISLIKE':
          return { ...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE_DARK':
          return { ...prevState, darkMode: !prevState.darkMode }
        case 'HANDLE_CHANGE':
          return { ...prevState, text: action.payload.value } 
        case 'ADD_TEXT':
          return { ...prevState, 
            text: '',
            thangs: [prevState.text, ...prevState.thangs]
          }
        default:
          return {...prevState}
    }
}