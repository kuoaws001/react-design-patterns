import React from 'react'
import '@/styles/index.css'
import CharactersContainer from './components/CharactersContainer'
import Auth from './components/Auth'
import Header from './components/Header'
import Avatar from './components/Avatar'
import withLoading from './hoc/withLoading'

const App = () => {

    const AvatarWithLoading = withLoading(Avatar)

    return (
        <>
            <Header />
            <div className="content">
                {/* <CharactersContainer /> */}
                {/* <Auth /> */}
                <AvatarWithLoading name='orange' loading={true} />
            </div>
            <div className="footer"></div>
        </>
    )
}

export default App;