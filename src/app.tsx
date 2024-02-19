import React from 'react'
import '@/styles/index.css'
import CharactersContainer from './components/CharactersContainer'
import Auth from './components/Auth'
import Header from './components/Header'

const App = () => {

    return (
        <>
            <Header />
            <div className="content">
                {/* <CharactersContainer /> */}
                <Auth />
            </div>
            <div className="footer"></div>
        </>
    )
}

export default App;