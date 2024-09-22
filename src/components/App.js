import React, { useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const App = () => {
  const { user, login, signout } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
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
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>
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
