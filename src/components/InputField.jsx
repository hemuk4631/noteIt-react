import React from "react";

function InputField({ onAdd, addNote, setNote, loading }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNotes) => ({
      ...prevNotes,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <form className="inputArea bg-white p-3 rounded shadow">
        <div className="form-group">
          <input
            onChange={handleChange}
            value={addNote.title}
            name="title"
            className="form-control"
            placeholder="Title"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            value={addNote.content}
            name="content"
            className="form-control"
            placeholder="Write Note"
          ></textarea>
        </div>
        <button
          disabled={loading}
          onClick={() => onAdd(addNote)}
          className="btn"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default InputField;
