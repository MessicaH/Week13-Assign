import React, {Component} from "react"


export default class Login extends Component {
    render() {
        return (
            <form className="card container">
                <div>
                    <label for="username">Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password"/>
                </div>
                <div>
                    <button className="btn btn-dark login-btn">Enter</button>
                </div>
        </form>
        )
    }
}

/* <i className="bi bi-key"></i> in/next to text of "Enter" button - once I learn how to properly install and use Bootstrap Icons */