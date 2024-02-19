import React from 'react'

interface AvatarProps {
    name: string;
}

const Avatar = ({ name }: AvatarProps) => {
    return (
        <div>{name}</div>
    )
}

export default Avatar