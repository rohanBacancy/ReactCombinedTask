import React, { useEffect, useState } from 'react'
import { Button, Input } from 'reactstrap'
import {Inotes} from '../Container/notes';

interface Props {
    notes: Inotes[]
}

const Search:React.FC<Props> = ({notes}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState<Array<Inotes>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const results = notes.filter(note => note.title.toLowerCase().includes(searchTerm))
        setSearchResults([...results])
    }, [searchTerm,notes])

    return (
        <>
            <div className="d-flex flex-row">
                <Input
                    className="w-25 mx-2"
                    type="text"
                    placeholder="Search notes"
                    name="search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <Button type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
            </div>
            <ul>
                {
                    searchResults.map(note => (
                        <li>{note}</li>
                    ))
                }
            </ul>
        </>

    )
}

export default Search