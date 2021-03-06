﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from 'router';

import "css!./style/iconfont.css";
import Login from "login";

class HomeTop extends React.Component {
  constructor(props) {
    super(props);

      HomeTop.changHomeTop = this.changHomeTop.bind(this);
      HomeTop.hideLogin = this.hideLogin.bind(this);
  }

  public componentDidMount() {
     
  }

  static changHomeTop(index) { }
  public changHomeTop(this,index) {
    console.log(index);
    this.setState({
      htIndex:index
    })
  }

  public showLogin() {
    this.setState({
      loginState:true
    })
  }

  static hideLogin() { };
  public hideLogin() {
    this.setState({
      loginState: false
    })
  }

  public render() {
    return (
      <div className="homeTop">
        <div className="homeTopBox">
          <div className="htLeft">
            <ul>
              <li style={{ "margin": "0 40px 0 0" }} >
                <i className="iconfont " style={{ "margin-right": "5px", "font-size": "14px" }}>&#xe83c;</i>
                <span>广州</span></li>
              <li className={this.state.htIndex == 1 ? "homtop_active" : null}
              onClick={this.changHomeTop.bind(this, 1)}>首页</li>
              <li className={this.state.htIndex == 2 ? "homtop_active" : null}
              onClick={this.changHomeTop.bind(this, 2)}>园区</li>
              <li className={this.state.htIndex == 3 ? "homtop_active" : null}
              onClick={this.changHomeTop.bind(this, 3)}>出租</li>
              <li className={this.state.htIndex == 4 ? "homtop_active" : null}
              onClick={this.changHomeTop.bind(this, 4)}>宝哥推荐</li>
              <li className={this.state.htIndex == 5 ? "homtop_active" : null}
              onClick={this.changHomeTop.bind(this, 5)}>热点资讯</li>
            </ul>
          </div>
          <div className="htRight">
            <ul>
              <li >
                <i className="iconfont " >&#xe838;</i>  400-808-3066</li>
              <li> <span onClick={this.showLogin.bind(this)}>登录</span> / 注册</li>
            </ul>
          </div>
        </div>

        {this.state.loginState == true ?
          < Login />
          :null
}

      </div>
    )
  }

  public state = {
    htIndex: 10,
    loginState: false,
   }
}

export default HomeTop;