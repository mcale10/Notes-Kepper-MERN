import React, {useState} from 'react';
import axios from 'axios';

function Note(props) {


    const [readMore, setReadMore] = useState(false);
    const linkName = readMore ? 'Read Less << ':'Read More >> ';

   

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p className="extra-content">
      {props.content.substring(0,100)}
      {readMore && props.content.substring(100)}
    {(props.content.length > 100) && <a className="read-more-link" onClick={() => {setReadMore(!readMore)}}><br/>{linkName}</a>}
      </p>
      
      {/* Edit button to be implemented */}
      {/* <button className="edit-button">EDIT</button> */}
      <button
        className='delete-button'
        onClick={() => {
          axios
            .delete('http://localhost:5000/notes/' + props.id)
            .then((res) => {
              if (res.status === 200) {
                props.onChecked(props.id);
              }
            });
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;