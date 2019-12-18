import React from 'react'
import { Route, Redirect } from "react-router-dom"

function ProtectedRoute(props) {
    const {component: Component, ...rest} = props

    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props}/>
                }
                else {
                    return<Redirect to="/login"/>
                }
            }}
        />
    )
}
export default ProtectedRoute;