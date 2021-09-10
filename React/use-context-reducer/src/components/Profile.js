import UserContext from "../context/users/userContext"
import React, { useContext } from 'react'

const Profile = () => {
    const {selectedUser} = useContext(UserContext)
    console.log(selectedUser)
    return (
        <>
            {
                selectedUser ? (
                    <div>
                        <img src={selectedUser.avatar} alt="name" />
                        <h1>`${selectedUser.first_name} ${selectedUser.last_name}`</h1>
                    </div>
                ) : (<h1>No User</h1>)
            }
        </>
    )
}

export default Profile
