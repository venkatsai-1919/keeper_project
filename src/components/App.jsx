import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';
function App() {
  const [notes, setNotes] = useState([]);

  const URL = "http://localhost:3000";

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

   
  useEffect(()=>{
    axios.get(URL+"/")
    .then(function (response) {
      // handle success
      console.log(response);
      return setNotes(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  });

  async function deleteNote(id) {
    try {
    await axios.delete(URL+"/",{data:{id:id}});
    }
    catch(error)
    {
      axios.get("/");
    }
      // Observe the data keyword this time. Very important
      // payload is the request body
      // Do some
    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== id;
    //   });
    // });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
