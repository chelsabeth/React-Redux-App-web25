import axios from "axios";

export const FETCH_DOGGOS_START = "FETCH_DOGGOS_START";
export const FETCH_DOGGOS_SUCCESS = "FETCH_DOGGOS_SUCCESS";
export const FETCH_DOGGOS_FAIL = "FETCH_DOGGOS_FAIL";

export const getDoggos = () => dispatch => {
    dispatch({ type: FETCH_DOGGOS_START });
    axios
        .get("https://dog.ceo/api/breed/pitbull/images")
        .then(res => {
            console.log("Data from API", res.data.message);
            dispatch({ type: FETCH_DOGGOS_SUCCESS, payload: res.data.message });
        })
        .catch(err => {
            console.log("this is the error", err)
            dispatch({ type: FETCH_DOGGOS_FAIL, payload: err.response })
        })
}