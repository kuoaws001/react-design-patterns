import React from 'react'
import '@/styles/index.css'
// import CharactersContainer from './components/CharactersContainer'
// import Auth from './components/Auth'
// import Header from './components/Header'
// import Avatar from './components/Avatar'
// import withLoading from './hoc/withLoading'
// import Toggle from './components/Toggle'
// import CustomDemo from './components/CustomDemo'

import Ex1 from './example/Ex1';
import Ex2 from './example/Ex2';
import Ex3 from './example/Ex3';
import Ex4 from './example/Ex4';
import TodoList from './components/TodoList/TodoList';

const App = () => {

    // const AvatarWithLoading = withLoading(Avatar)

    // return (
    //     <>
    //         <Header />
    //         <div className="content">
    //             {/* <CharactersContainer /> */}
    //             {/* <Auth /> */}
    //             {/* <AvatarWithLoading name='orange' loading={true} /> */}
    //             <div className='section'>
    //                 <Toggle>
    //                     <Toggle.On>
    //                         <div>ON</div>
    //                     </Toggle.On>
    //                     <Toggle.Off>
    //                         <div>OFF</div>
    //                     </Toggle.Off>
    //                     <Toggle.Button text='toggle' />
    //                 </Toggle>
    //             </div>
    //             <div className='section'>
    //                 <CustomDemo />
    //             </div>
    //         </div>
    //         <div className="footer"></div>
    //     </>
    // )

    return (
        // <Ex1 />
        // <Ex2 />
        // <Ex3 />
        // <Ex4 />
        <TodoList />
    )
}

export default App;