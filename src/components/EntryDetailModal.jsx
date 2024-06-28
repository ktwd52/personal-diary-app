// src/EntryDetailModal.jsx
import React from "react";
import Modal from "react-modal";

const EntryDetailModal = ({ entry, closeModal }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Entry Details"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
      <img
        className="w-full rounded mb-4"
        src={entry.imageUrl}
        alt="Diary entry"
      />
      <p className="text-gray-600 mb-4">
        {new Date(entry.date).toLocaleDateString()}
      </p>
      <p>{entry.content}</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default EntryDetailModal;
