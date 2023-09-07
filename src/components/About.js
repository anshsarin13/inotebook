import React, { useEffect } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/Notes/NoteContext';


export default function About() {
  const a =useContext(NoteContext);
  useEffect(()=>{
    a.update()
    // eslint-disable-next-line
  },[])
  return (
    <div>
      this is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}
