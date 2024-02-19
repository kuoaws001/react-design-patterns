import React from 'react'
import { ICharacter } from '../model'

interface CharacterListProps {
    loading: boolean;
    error: boolean;
    users: ICharacter[];
}

const CharacterList = ({ loading, error, users }: CharacterListProps) => {

    if (loading && !error) return <div>Loading...</div>
    if (!loading && error) return <div>error occurred. unable to load characters</div>
    if (!users) return null;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default CharacterList