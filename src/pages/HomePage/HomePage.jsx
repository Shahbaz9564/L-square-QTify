import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
//import Card from "../../components/Card/Card";
export default function HomePage() {
  const { data } = useOutletContext() || {};
  const { newAlbums = [], topAlbums = [], songs = [], genres = [] } = data;

  console.log("genres", genres, "newAlbums", newAlbums, "topAlbums",topAlbums, "songs", songs );

  return (
    <>
      <Hero />

          <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} genres={genres} type="song" />
      </div>
    </>
  );
}