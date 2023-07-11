import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function Note(props) {
  async function sendData() {
    try {
      const res = await axios.post("http://localhost:4000/delete", {
        title: props.title
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  function deleteNote() {
    
    console.log(props.title); 
    sendData();
    props.onDeleteProp(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
