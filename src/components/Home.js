import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const { isSignedIn, name } = useSelector(state => state.auth)
    const renderMessage = () => {
       return isSignedIn ? `Welcome ${name}` : "Generic Home page"
    }
    return (
        <div>
            {renderMessage()}
        </div>
    )
}

export default Home
