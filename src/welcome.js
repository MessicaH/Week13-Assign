import React, {Component} from "react"

// Insert the copy/paste section from Part 2 below:
let date = new Date()
let currentUser = {
  name: '${userName}', /* This would be stored in an API somewhere and then imported/input here */
  today: date.toLocaleDateString(),
  time: date.toLocaleTimeString(),
}

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome container">
                <h3>Login</h3>
                <p>Today's date is: {currentUser.today}<i class="bi bi-clock"></i>
                <br/>{currentUser.time}</p>
          </div>
        )
    }
}