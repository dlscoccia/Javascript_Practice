import axios from 'axios'
import React, { useReducer } from 'react'
import UserContext from './userContext'
import userReducer from './userReducer'

const UserState = (props) => {

    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({ type: 'GET_USERS', payload: res.data.data })
    }
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users' + id)
        dispatch({ type: 'GET_PROFILE', payload: res.data.data })
    }


    return (
        <UserContext.Provider value={{ users: state.users, selectedUser: state.selectedUser, getUsers: getUsers, getProfile: getProfile }}>
            {
                props.children
            }
        </UserContext.Provider>
    )

}

export default UserState
