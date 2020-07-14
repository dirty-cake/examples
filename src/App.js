import React from 'react';
import './App.css';
import Modal from "./hooks/Modal";

function App() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal</h1>
        <p>
          <span>bla bla bla </span>
        </p>
        <button onClick={() => modalRef.current.close()}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default App;