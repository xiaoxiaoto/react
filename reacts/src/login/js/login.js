/**
 * Created by Administrator on 2017/1/18.
 */
import React, {Component} from 'react';

import logo from '../images/logo.svg';
import '../../dist/bootstrap-3.3.5-dist/css/bootstrap.css';
import '../css/login.css';
class LoginFrom extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:props.userName,
            password:props.password,
            isRemember:true,
            userNameError:"请输入用户名！",
            passwordError:"请输入密码！"
        }
    }
    listenTextChange(inputName,event){
        this.setState({
            [`${inputName}`]: event.target.value
        });
    }
    listenRememberCheck(event){
        let isChecked = event.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    }
    handleSubmit(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                userNameError: "* 用户名不能为空"
            })
        }
        if(this.state.password === ""||this.state.password === null){
            this.setState({
                passwordError: "* 密码不能为空"
            })
        }
        var user={"name":this.state.userName,"pwd":this.state.password,"remember":this.state.isRemember}
        alert(user);
    }
    componentWillMount(){
       // alert("componentWillMount");
    }
    componentDidMount(){
        //alert("componentDidMount");
    }
    /*componentWillReceiveProps(){
        alert("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        alert("shouldComponentUpdate");
    }
    componentWillUpdate(){
        alert("componentWillUpdate");
    }
    componentDidUpdate(){
        alert("componentDidUpdate");
    }
    componentWillUnmount(){
        alert("componentWillUnmount");
    }*/
    render() {
        return (
            <div className="login-from-container col-sm-6">
                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label for="firstname" className="col-sm-2 control-label">姓名</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={event=>{this.listenTextChange("userName",event)}} value={this.state.userName} placeholder={this.state.userNameError}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="lastname" className="col-sm-2 control-label">密码</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"onChange={event=>{this.listenTextChange("password",event)}} value={this.state.password} placeholder={this.state.passwordError}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" checked={this.state.isRemember} onClick={event=>{this.listenRememberCheck(event)}}/>请记住我
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={event=>{this.handleSubmit()}}>登录</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
class LoginLogo extends Component {
    render() {
        return (
            <div className="login-logo-container col-sm-6">
                <img src={logo} className="login-logo" alt="logo"/>
            </div>
        )
    }
}
class LoginModule extends Component {
    constructor(props){
        super(props);
        this.state={
            userEntity:props.userEntity
        }
    }
    /*static defaultProps = {
        userName: '小希',
        password:'111111'
    };*/

    render() {
        return (
            <div className="login-container col-sm-12">
                <LoginLogo />
                <LoginFrom userName={this.props.userEntity.userName} password={this.props.userEntity.password}/>
            </div>
        )
    }
}
export default LoginModule;