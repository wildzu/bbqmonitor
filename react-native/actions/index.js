export const setTemperature = newTemperature => {
    let retVal = {};
    try {
        retVal = {
            type: 'temperature_update',
            payload: {
                smoker: newTemperature.smoker,
                meat: newTemperature.meat
            }
        }
    } catch(e) {
        retVal = {
            type: 'temperature_update',
            payload: {
                smoker: 0,
                meat: 0
            }, 
            error : e
        }
    }

    return retVal;
}

export const textClick = () => {
    return {
        type: 'text_clicked'
    }
}