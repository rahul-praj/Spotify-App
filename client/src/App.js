import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchArtist } from './Search';
import { SongCards } from './Card'
import React, { useState, useEffect } from 'react';

function App() {

  const background = {
    background: 'linear-gradient(to right, rgb(29,185,84), rgb(179,179,179))',
    backgroundSize: 'cover'
  }

  const clientId = "2138c1861b7e4422ab51e8c31bd54109";
  const clientSecret = "b1b58e1799d74fab92a1e330a321ad0e";
  const endpoint = "https://accounts.spotify.com/api/token"

  const [token, setToken] = useState("BQC-iWWcf5t8dqpIXWRrj1I-siQgOMyN0qSYcaapjUxuuVqCEuc51xdP4r3RZUNvvglnX_sWpOEsJUHNzTJdEiOd1TOV2sSrzcchRDIMNr7yGBVFj14")
  const [artist, setArtist] = useState("")
  const [tracks, setTracks] = useState([])
  
  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    }

    fetch(endpoint, authParameters)
    .then(response => response.json())
    .then(data => setToken(data.access_token))

  }, [])

  const getResults = async () => {

    console.log(`Search for ${artist}`)
    const artistProcessed = artist.replace(/ /g, "+");
    let endpoint = "https://api.spotify.com/v1/search?q=" + artistProcessed + '&type=artist'
    const searchedArtist = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    const artistId = await fetch(endpoint, searchedArtist)
    .then(response => response.json())
    .then(returnedResponse => { return returnedResponse.artists.items[0].id })


    endpoint = "https://api.spotify.com/v1/artists/" + artistId + "/top-tracks"
    const trackCall = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const trackList = await fetch(endpoint, trackCall)
    .then(response => response.json())
    .then(trackArray => { 
      return trackArray
     })

     setTracks(trackList)
     console.log(tracks)

  }


  return (
    <div className="App" style={background}>
      <h1>Jammming</h1>
      <SearchArtist artist={artist} setArtist={setArtist} getResults={getResults} />
      <SongCards tracks={tracks} />
    </div>
  );
}

export default App;
