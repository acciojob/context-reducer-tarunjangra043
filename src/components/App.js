//cypress test cases not running
// App.js
import React, { useState, useContext } from 'react';


const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [items, setItems] = useState([]);


    const login = () => {
        setCurrentUser('rohan');
        setIsAuthenticated(true);
    };

    const logout = () => {
        setCurrentUser('');
        setIsAuthenticated(false);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (item) => {
        setItems(items.filter(i => i !== item));
    };

    const clearItems = () => {
        setItems([]);
    };


    const handleAdd = () => {
        if (inputValue.trim()) {
            addItem(inputValue.trim());
            setInputValue('');
        }
    };


    return (
        <div>
            <div>
                <button id="login-btn" onClick={login}>Login</button>
                <button id="signout" onClick={logout}>Signout</button>
            </div>
            <div id="current-user">
                {`Current user: ${currentUser}, isAuthenticated: ${isAuthenticated ? 'Yes' : 'No'}`}
            </div>
            <input
                id="shopping-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <button id="clear-list" onClick={clearItems}>Clear List</button>
            <ul>
                {items.map(item => (
                    <li key={item} id={`item-${item}`}>
                        {item}
                        <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;