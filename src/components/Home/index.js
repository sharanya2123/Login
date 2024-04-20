// Write your code here
import '.index.css'

import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  ChangeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEle
    let btnEle

    if (isLogin) {
      messageEle = <Message content="Welcome User" />
      btnEle = <Login ChangeStatus={this.ChangeStatus} />
    } else {
      messageEle = <Message content="Please Login" />
      btnEle = <Logout ChangeStatus={this.ChangeStatus} />
    }

    return (
      <div className="Login-bg">
        <div className="Login-card">
          {messageEle}
          {btnEle}
        </div>
      </div>
    )
  }
}
export default Home
