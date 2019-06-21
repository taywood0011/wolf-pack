import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Auth from "../../utils/Auth";
import { Form, FormInput, FormGroup, Button } from "shards-react";


class LoginComponent extends Component {
    static contextType = UserContext;

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            Auth.logIn(username, password, (response) => {
                this.context.setUser(response);
                this.props.history.push("/");
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Wolf-Pack</h2>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <label htmlFor="username">Username</label>
                        <FormInput
                            id="username"
                            name='username'
                            placeholder="Username"
                            type="text"
                            value={this.state.username}
                            onChange={this.changeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="password">Password</label>
                        <FormInput
                            id="password"
                            type="password"
                            name='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.changeHandler} />
                    </FormGroup>
                    <Button theme="dark" type="submit">Login</Button>
                    <Button theme="dark">Create</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(LoginComponent);
