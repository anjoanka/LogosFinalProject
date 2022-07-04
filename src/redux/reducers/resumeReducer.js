    
const initialState = {
    resume: {
        nameSurname: "Миколаєвич Андріана",
        age: 15,
        gmail: "andriana@gmail.com",
        phoneNumber: "0677067777",
        education: "school, Ampli IT school, Logos IT Academy"
    }
};

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESUME":
            return {
                ...state,
                resumeInfo: action.payload,
            }
        default:
            return state;
    }
}




