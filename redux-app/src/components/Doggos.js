import React from "react"
import { connect } from "react-redux";

const Doggos = props => {
    return (
        <div>
            <h1>Never Enough Doggos! <span role="img" aria-label="Dog with tongue out">🐶</span></h1>
            <p>Beware of Pitbulls, they will steal your heart <span role="img" aria-label="Red heart">❤️</span></p>
            <button>Fetch Doggos!</button>
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

export default connect(mapStateToProps, {})(Doggos);