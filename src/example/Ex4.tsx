// HOC 

import React from 'react'
import withLoading from '../hoc/withLoading'
import Avatar from '../components/Avatar'

const Ex4 = () => {

    const AvatarWithLoading = withLoading(Avatar)
    return (
        <div>
            <AvatarWithLoading loading={true} name='orange' />
        </div>
    )
}

export default Ex4