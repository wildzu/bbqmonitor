export default (state, action) => {
    
    switch (action.type) {
        case 'temperature_update':
            //console.log('action :' + JSON.stringify(action));
            
            if (action.hasOwnProperty('error')) {
                console.warn('An error exists in temperature update');
                return {...state, error:action.error};
            } else {
            
                let temperature = {
                    smoker: action.payload.smoker,
                    meat: action.payload.meat
                }
                let newState = {...state};
                delete newState.error;
                return {newState, temperature};
            }
        
        case 'text_clicked':
            return {...state, text_highlight: !state.text_highlight};

        default:
            console.warn('Unknown action (' + action.type + ') !');
            return state;
    }
}