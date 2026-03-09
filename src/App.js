import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./API/Api";

function App() {
  const [data, setData] = useState({
    topAlbums: [],
    newAlbums: [],
    songs: [],
    genres: [],
  });

  
  const loadData = async () => {
    try {
      const [topAlbumsRes, newAlbumsRes, songsRes, genresRes] = await Promise.all([
        fetchTopAlbums(),
        fetchNewAlbums(),
        fetchSongs(),
        fetchFilters(),
      ]);

      setData({
        topAlbums: topAlbumsRes || [],
        newAlbums: newAlbumsRes || [],
        songs: songsRes || [],
        genres: genresRes?.data || [],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...data.topAlbums, ...data.newAlbums]} />
      <Outlet context={{ data }} />
    </StyledEngineProvider>
  );
}

export default App;