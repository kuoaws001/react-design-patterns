import React from 'react'
import '@/styles/index.css'
import CharactersContainer from './components/CharactersContainer'
import Auth from './components/Auth'

const App = () => {

    return (
        <>
            <div className="header"></div>
            <div className="content">
                {/* <CharactersContainer /> */}
                <Auth />
            </div>
            <div className="footer"></div>
        </>
    )
}

export default App;