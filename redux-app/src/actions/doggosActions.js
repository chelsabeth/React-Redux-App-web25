import axios from "axios";

export const FETCH_DOGGOS_START = "FETCH_DOGGOS_START";
export const FETCH_DOGGOS_SUCCESS = "FETCH_DOGGOS_SUCCESS";
export const FETCH_DOGGOS_FAIL = "FETCH_DOGGOS_FAIL";

export const getDoggos = () => dispatch => {
    dispatch({ type: FETCH_DOGGOS_START });
    axios
        .get("https://dog.ceo/api/breed/pitbull/images")
        .then(res => {
            dispatch({ type: FETCH_DOGGOS_SUCCESS, payload: res.data.value });
        })
        .catch(err => {
            dispatch({ type: FETCH_DOGGOS_FAIL, payload: err.response })
        })
}