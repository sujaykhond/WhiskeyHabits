import { useStore } from "../store"
import { useEffect } from 'react'

import { useNavigate } from "react-router-dom"

function Profile() {
    const { user } = useStore()
    const navigate = useNavigate()

    console.log(user)

    useEffect(() => {
        // Check if there is no user object or no token in local storage
        if (!user || !localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <section className="profile mt-10">
            {user && (
                <h1 className="font-bold mt-4 mb-4 text-center">{user.username}'s Profile</h1>
            )}
        </section>
    )
}

export default Profile