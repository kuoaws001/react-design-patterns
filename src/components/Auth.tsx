import React, { useReducer } from 'react'

enum ActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

interface AuthAction {
    type: ActionType;
    payload?: any;
}

interface AuthState {
    loggedIn: boolean;
    user: any;
    token: any;
}

const initState: AuthState = {
    loggedIn: false,
    user: null,
    token: null
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;

    switch (type) {
        case ActionType.LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: payload.user,
                token: payload.token
            }

        case ActionType.LOGOUT:
            return initState

        default:
            return state;
    }
}

const Auth = () => {
    const [state, dispatch] = useReducer(authReducer, initState)

    const logIn = () => {
        dispatch({
            type: ActionType.LOGIN,
            payload: {
                user: { name: 'orange' },
                token: 'xxx123456'
            }
        })
    }

    const logOut = () => {
        dispatch({ type: ActionType.LOGOUT })
    }

    return (
        <div>
            {state.loggedIn ? (
                <div>
                    <p>Welcome {state.user.name}</p>
                    <button onClick={logOut}>logOut</button>
                </div>
            ) : (
                <>
                    <input type="text" />
                    <input type="password" />
                    <button onClick={logIn}>logIn</button>
                </>
            )}
        </div>
    )
}

export default Auth