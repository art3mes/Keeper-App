import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]); //empty array
  const baseURL="http://localhost:4000/";
  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNotes(response.data);
    });
  }, []);

  function deleteNote(id) {
    setNotes((preValues) => {
      return preValues.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDeleteProp={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
