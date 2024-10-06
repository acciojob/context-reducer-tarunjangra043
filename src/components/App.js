import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const App = () => {
  const { user, login, signout } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue) {
      setItems([...items, { id: Date.now(), name: inputValue }]);
      setInputValue("");
    } else {
      alert("Please enter an item.");
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <div>
      <button id="login-btn" onClick={login}>
        Login
      </button>
      <button id="signout" onClick={signout}>
        Signout
      </button>

      <div id="current-user">
        Current user: {user.name}, isAuthenticated:{" "}
        {user.isAuthenticated ? "Yes" : "No"}
      </div>

      <input
        id="shopping-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button id="add-item" onClick={addItem}>
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              id={`remove-${item.name}`}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <button id="clear-list" onClick={clearItems}>
        Clear
      </button>
    </div>
  );
};

export default App;
