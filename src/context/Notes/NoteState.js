import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const s1={
        "name":"harry",
        "class":"5b"
    }
    const [state,setState]=useState(s1);
    const update=()=>{
        setTimeout(() => {
            setState({"name":"ansh",
            "class":"10cb"})
        }, 2000);
    }

    const notesInitial=[
        {
          "_id": "64f4aca3f5770228fef7070c",
          "user": "64f1d59337c9f51f630af462",
          "title": "my title234",
          "description": " ANSH ANSH please wake up ear",
          "tag": "personal id",
          "date": "2023-09-03T15:56:19.283Z",
          "__v": 0
        },
        {
          "_id": "64f617530739f69de1febfc6",
          "user": "64f1d59337c9f51f630af462",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-09-04T17:43:47.984Z",
          "__v": 0
        },
        {
          "_id": "64f617580739f69de1febfc8",
          "user": "64f1d59337c9f51f630af462",
          "title": "my title",
          "description": "please wake up early okay",
          "tag": "personal",
          "date": "2023-09-04T17:43:52.592Z",
          "__v": 0
        }
      ]

      const[notes,setNotes]=useState(notesInitial)
    return (
        <NoteContext.Provider value={{state,update,notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;