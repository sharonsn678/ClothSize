export const sizeReducer = (state, action) => {
    //state ==={width: length: unit:}
    //action === unitToChange to 'in' or 'cm'

    if (action.unitToChange == true) {
            if (state.unit == "in") {
                const newWidth = Math.round(state.width * 2.54)
                const newLength = Math.round(state.length * 2.54)
                return{...state, width: newWidth, length: newLength, unit: "cm" }
            }
            else {
                const newWidth = Math.round(state.width * 0.3937)
                const newLength =  Math.round(state.length * 0.3937)
                
                return {...state, width: newWidth, length: newLength, unit: "in"}
            }
    }
    else{
        return state
    }
};
