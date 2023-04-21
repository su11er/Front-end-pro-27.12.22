import React, { useState } from 'react';

const initialEmojis = [
  { id: 1, image: '😀', count: 0 },
  { id: 2, image: '😍', count: 0 },
  { id: 3, image: '🤔', count: 0 },
  { id: 4, image: '😂', count: 0 },
  { id: 5, image: '🥰', count: 0 },
];

const EmojiList = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [emojis, setEmojis] = useState(initialEmojis);

  const handleVote = (id) => {
    const updatedEmojis = emojis.map((emoji) =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    setSelectedEmoji(id);
    setEmojis(updatedEmojis);
  };

  const handleShowResults = () => {
    const winningEmoji = emojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    setShowResults(true);
    setSelectedEmoji(winningEmoji.id);
  };

  return (
    <div>
      <h2>Emoji List</h2>
      {emojis.map((emoji) => (
        <div key={emoji.id} onClick={() => handleVote(emoji.id)}>
          <span style={{ fontSize: '2rem' }}>{emoji.image}</span>
          <span style={{ marginLeft: '1rem' }}>{emoji.count}</span>
          {selectedEmoji === emoji.id && <span>✔️</span>}
        </div>
      ))}
      <button onClick={handleShowResults}>Show Results</button>
      {showResults && (
        <div>
          <h3>Winning Emoji:</h3>
          <span style={{ fontSize: '2rem' }}>
            {emojis.find((emoji) => emoji.id === selectedEmoji)?.image}
          </span>
        </div>
      )}
    </div>
  );
};

export default EmojiList;