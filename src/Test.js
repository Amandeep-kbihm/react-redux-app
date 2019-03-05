import React from 'react'
import {connect} from 'react-redux'

class Test extends React.Component{

    render(){
        return(
            <div>
                {/* <h2>this is testing</h2> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}

export default connect(mapStateToProps)(Test)