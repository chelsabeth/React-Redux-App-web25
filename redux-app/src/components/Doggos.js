import React from "react"
import { connect } from "react-redux";
import { getDoggos } from "../actions";

const Doggos = props => {
    console.log(props);
    return (
        <div>
            <h1>Never Enough Doggos! <span role="img" aria-label="Dog with tongue out">🐶</span></h1>
            <p>Beware of Pitbulls, they will steal your heart <span role="img" aria-label="Red heart">❤️</span></p>
            {props.doggos && props.doggos.map(e => (<div key={e}><img alt="pitbull dog" src={e} className="doggo-pic"/></div>))}
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