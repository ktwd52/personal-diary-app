// src/DiaryEntryCard.jsx
import React from "react";

const DiaryEntryCard = ({ entry, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full rounded mb-4"
        src={entry.imageUrl}
        alt="Diary entry"
      />
      <h2 className="font-bold text-xl mb-2">{entry.title}</h2>
      <p className="text-gray-600">
        {new Date(entry.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default DiaryEntryCard;
