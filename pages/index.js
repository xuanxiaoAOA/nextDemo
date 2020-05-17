import React, { Component } from 'react';
import { Col, message } from 'antd';
import axios from 'axios';


class LoginComponent extends Component {
    state = {
      userName: '',
      pwd: '',
    };

    componentDidMount() {

    }

    render() {
      const { userName, pwd } = this.state;
      console.log;
      return (
        <Col className="login-container">
          <div className="main_container">
            <div className="main_content">
              <input
                name="userName"
                onChange={this.handelChange.bind(this)}
                placeholder="请输入登录帐号"
                type="text"
                value={this.state.userName}
              />
              <input
                maxLength="12"
                name="pwd"
                onChange={this.handelChange.bind(this)}
                type="password"
                value={this.state.pwd}
              />
              <button className="login_btn" onClick={this.login}>
                登录
              </button>
            </div>
          </div>
        </Col>
      );
    }

    handelChange(event) {
      console.log(event.target);
      const { name } = event.target;
      const { value } = event.target;
      this.setState({
        [name]: value,
      });
    }

    login() {
      // axios.post('/api/user/1')
      // .then(function (response) {
      //     console.log(response);
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
      // 为给定 ID 的 user 创建请求
      axios.get('/api/user/login?name=cxp&password=123455')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
}

export default LoginComponent;
