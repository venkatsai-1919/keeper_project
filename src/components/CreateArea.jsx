import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { Zoom } from '@mui/material';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  var [state,setState] = useState(false);
   
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    // setNote({
    //   title: "",
    //   content: ""
    // });
    console.log(event.target);
    // event.preventDefault();
    
  }

  function handleClick(){
    setState(true);
  }

  return (
    <div>
      <form className="create-note" method="post" action="/">
        {state && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick = {handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows= {state ? '3' : '1'}
        />
        {state && <Zoom in={true} >
        <Fab onClick={submitNote} type="submit">
        <AddIcon/>
        </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
