import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext';
import Noteitem from  './Noteitem';

const Note=()=> {
    const context=useContext(NoteContext)
    const {notes,setNotes}=context;
  
  return (
    <div>
      <div className="container my-3">
          <h1>Your Notes</h1>
          {notes.map((note)=>{
            return <Noteitem note={note}/>
          })}
        </div>
    </div>
  )
}

export default Note;