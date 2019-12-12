import React from "react"
import { connect } from "react-redux";
import { getDoggos } from "../actions";

const Doggos = props => {
    return (
        <div>
            <h1>Never Enough Doggos! <span role="img" aria-label="Dog with tongue out">🐶</span></h1>
            <p>Beware of Pitbulls, they will steal your heart <span role="img" aria-label="Red heart">❤️</span></p>
            {props.doggos && <img alt="pitbull dog">{props.doggos.doggos}</img>}
            <button onClick={props.getDoggos}>Fetch Doggos!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        doggos: state.doggos,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getDoggos })(Doggos);