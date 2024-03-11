

const initialState = {
    name : "",
    quizDate : []
}

const reducer = (state=initialState,action)=> {
      switch(action.type) {
        case "Data_FETCH" : return {...state,quizDate:action.payload.data,name:action.payload.name}
        default : return state;
      }
}

export {reducer};