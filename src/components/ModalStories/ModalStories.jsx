import React from 'react';
import './ModalStories.css';

function ModalStories({isOpen}) {
  console.log(isOpen);
  return (
    <div className={`${isOpen ? "open" : ""} ModalStories`}>ModalStories</div>
  );
}

export default ModalStories;