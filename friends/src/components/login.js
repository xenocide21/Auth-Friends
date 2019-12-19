import React from 'react'

export default class Login extends React.Component {
    userRef = React.createRef()
    passwordRef = React.createRef()

    onLogin = () => {
        const username = this.userRef.current.value
        const password = this.passwordRef.current.value
        this.props.login(username, password)
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <form
                    onSubmit={() => {
                        this.onLogin()
                    }}
                >
                    <input type="text" ref={this.userRef} />
                    <input type="text" ref={this.passwordRef} />
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}