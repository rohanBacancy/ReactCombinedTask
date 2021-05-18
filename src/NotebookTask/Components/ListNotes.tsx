import React from 'react'
import NoteCard, { INote } from './NoteCard'

interface IProps{
    notes:INote[],
    editHandler: (id:string) => void,
    deleteHandler: (id:string) => void,
}

const ListNotes:React.FC<IProps> = ({ notes,editHandler,deleteHandler }) => {
    return (
        <>
            {
                notes.map(note => 
                <NoteCard
                    key={note.id} 
                    note={note} 
                    editHandler={editHandler} 
                    deleteHandler={deleteHandler}/>)
            }
        </>
    )
}

export default ListNotes
