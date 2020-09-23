import {addAList} from "../actions/data";
const {
    REACT_APP_ENDPOINT
} = process.env;
export const initiateGetResult = ( data ) => {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: data })
            };
            fetch(REACT_APP_ENDPOINT, requestOptions)
                .then(response => response.json())
                .then( res => {
                    dispatch(
                        addAList(res),
                    )
                })
        } catch (error) {
            console.log('error', error);
        }
    };
};

