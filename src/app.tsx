import React from 'react'
import '@/styles/index.css'
import CharactersContainer from './components/CharactersContainer'
import Auth from './components/Auth'
import Header from './components/Header'
import Avatar from './components/Avatar'
import withLoading from './hoc/withLoading'
import Toggle from './components/Toggle'

const App = () => {

    const AvatarWithLoading = withLoading(Avatar)

    return (
        <>
            <Header />
            <div className="content">
                {/* <CharactersContainer /> */}
                {/* <Auth /> */}
                {/* <AvatarWithLoading name='orange' loading={true} /> */}
                <div>
                    <Toggle>
                        <Toggle.On>
                            <div>ON</div>
                        </Toggle.On>
                        <Toggle.Off>
                            <div>OFF</div>
                        </Toggle.Off>
                        <Toggle.Button text='toggle' />
                    </Toggle>
                </div>
            </div>
            <div className="footer"></div>
        </>
    )
}

export default App;