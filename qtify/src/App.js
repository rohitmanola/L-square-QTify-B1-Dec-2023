// import logo from './logo.svg';
// import './App.css';

// import Button from "./components/Button/Button";
// import Search from "./components/Search/Search";

import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import { StyledEngineProvider } from '@mui/material';


function App () {
  const [searchData, useSearchData] = useState();
  const[data, setData] = useState({}); 

 
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      });
    });
  };


  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  })


  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData = {[...topAlbums, ...newAlbums]} />
        <Outlet context={{data: {topAlbums, newAlbums, songs} }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
