import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function SearchArtist({ artist, setArtist, getResults }) {

    const handleInputChange = ({target}) => {
        setArtist(target.value);
      };

    // Function to handle focus (when user clicks on the search bar)
    const handleFocus = () => {
        if (artist === '') {
            setArtist('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission
        getResults(); // Calls the getResults function passed as a prop
      };

    const searchStyle = {
        padding: 10,
        width: 300,
        border: "1px solid #ccc",
        borderRadius: 5,
        outline: "none"
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search_artist"></label>
            <input 
            type="search" 
            id="search_artist" 
            name="search_artist"
            value={artist}
            placeholder="Search artist"
            onChange={handleInputChange}
            onFocus={handleFocus}
            style={searchStyle}
            />
            <button type="submit" onClick={() => {console.log(artist)}}>Search</button>
        </form>
    )
}