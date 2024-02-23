import { useStore } from "../store"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import * as auth from '../utils/authenticate'

function Profile() {
    const { user } = useStore()
    const navigate = useNavigate()

    // This doesn't work bc useEffect does not wait for localStorage to finish retreiving the token. 
    // https://stackoverflow.com/questions/61178240/useeffect-does-not-listen-for-localstorage
    useEffect(() => {
        if (!auth.loggedIn()) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <section className="profile mt-10">
            {user && (
                <h1 className="font-bold mt-4 mb-4 text-center">{user.username}'s Profile</h1>
            )}
        </section>
    )
}

export default Profile