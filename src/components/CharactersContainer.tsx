import React, { useEffect, useState } from 'react'
import CharacterList from './CharacterList'
import { ICharacter } from '../model'


const CharactersContainer = () => {

    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const getCharacters = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://akabab.github.io/starwars-api/api/all.json')
            const data = await response.json()
            setIsLoading(false)
            if (!data) return;
            setCharacters(data)
        } catch (err) {
            setError(true)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return <CharacterList loading={isLoading} error={error} users={characters} />
}

export default CharactersContainer