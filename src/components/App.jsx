import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import Header from "./Header";
import InputField from "./InputField";
import Note from "./Note";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import Loader from "./Loader";
import env from "react-dotenv";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addNotes, setAddNotes] = useState({
    title: "",
    content: "",
  });

  const fetchNotes = () => {
    axios
      .get(`${env.LOCAL_URL}/api/notes`)
      .then((response) => {
        setNotes(response.data.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const addNote = (note) => {
    if (!note.title) {
      return toast.error("Please Add Title");
    }
    if (!note.content) {
      return toast.error("Please Add Content");
    }
    setLoading(true);
    axios
      .post(`${env.LOCAL_URL}/api/notes`, note)
      .then((response) => {
        setAddNotes({
          title: "",
          content: "",
        });
        setLoading(false);
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const deleteNote = (id) => {
    setLoading(true);
    axios
      .delete(`${env.LOCAL_URL}/api/notes/${id}`)
      .then((response) => {
        setLoading(false);
        toast.error(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, [loading]);
  return (
    <>
      <div>
        <Header />
        <InputField
          onAdd={addNote}
          addNote={addNotes}
          setNote={setAddNotes}
          loading={loading}
        />
        <Footer />

        {notes &&
          notes.map((note) => (
            <Note
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              timestamp={note.timestamp}
              onDelete={deleteNote}
              loading={loading}
            />
          ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading && <Loader />}
    </>
  );
}

export default App;
