import { AppRouter } from "./routers/AppRouter"
import {AuthContext} from '../src/auth/authContext'
import {authReducer} from '../src/auth/authReducer'
import { useReducer } from "react"
import { useEffect } from 'react'
 

export const HeroesApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || {logged: false}
    }
 
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        
        if(!user) return;

        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])

    return (
        <AuthContext.Provider value={
            {
                user,
                dispatch
            }
        }>
            <AppRouter/>
        </AuthContext.Provider>
        
    )
}
