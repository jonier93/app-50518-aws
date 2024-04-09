
import React from "react";

class Register extends React.Component {
    render () {
        return(
            <div>
                <h1> Register User </h1>
                <form>
                    <label> Name </label> <input /> <br/> <br/>
                    <label> Lastname </label> <input /> <br/> <br/>
                    <label> Id </label> <input /> <br/> <br/>
                    <button> Register </button>
                </form>
            </div>
        )
    }
}

export {Register}