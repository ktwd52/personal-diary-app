// src/App.jsx
import React, { useState, useEffect } from "react";
import DiaryEntryCard from "./components/DiaryEntryCard";
import EntryFormModal from "./components/EntryFormModal";
import EntryDetailModal from "./components/EntryDetailModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    storedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(storedEntries);
  }, []);

  const addEntry = (entry) => {
    const updatedEntries = [entry, ...entries];
    updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  const openDetailModal = (entry) => {
    setSelectedEntry(entry);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedEntry(null);
    setIsDetailModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Personal Diary</h1>
      <button
        onClick={() => setIsFormModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add Entry
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <DiaryEntryCard
            key={entry.id}
            entry={entry}
            onClick={() => openDetailModal(entry)}
          />
        ))}
      </div>
      {isFormModalOpen && (
        <EntryFormModal
          closeModal={() => setIsFormModalOpen(false)}
          addEntry={addEntry}
        />
      )}
      {isDetailModalOpen && selectedEntry && (
        <EntryDetailModal entry={selectedEntry} closeModal={closeDetailModal} />
      )}
    </div>
  );
};

export default App;
