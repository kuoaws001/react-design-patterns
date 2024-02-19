import React from 'react'
import '@/styles/index.css'
import CharactersContainer from './components/CharactersContainer'

const App = () => {

    return (
        <>
            <div className="header"></div>
            <div className="content">
                <CharactersContainer />
            </div>
            <div className="footer"></div>
        </>
    )
}

export default App;