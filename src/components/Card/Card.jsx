import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";
//import Stack from "@mui/material/Stack";

export default function Card({ data, type }) {
//console.log("0000", data);
  function getCard(type) {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={songs.length +"songs"} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.banner}>
              <img src={image} alt="" />
            </div>
            <div className={styles.chipParent}>
              <Chip
                label={`${follows} follows`}
                size="small"
                sx={{
                  height: 23,
                  borderRadius: "10px",
                  paddingTop: "4px",
                  paddingRight: "8px",
                  paddingBottom: "4px",
                  paddingLeft: "8px",
                  opacity: 1,
                  backgroundColor: "#121212",
                  color: "#ffffff",
                }}
              />
            </div>
            <div className={styles.name}>{title}</div>
          </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <>
          
            <div className={styles.wrapper}>
              <div className={styles.banner}>
                <img src={image} alt="" />
              </div>
              <div className={styles.chipParent}>
                <Chip
                  label={`${likes} likes`}
                  size="small"
                  sx={{
                    height: 23,
                    borderRadius: "10px",
                    paddingTop: "4px",
                    paddingRight: "8px",
                    paddingBottom: "4px",
                    paddingLeft: "8px",
                    opacity: 1,
                    backgroundColor: "#121212",
                    color: "#ffffff",
                  }}
                />
              </div>
              <div className={styles.name}>{title}</div>
            </div>
          </>
        );
      }
      default:
        return null;
    }
  }
  return getCard(type);
}
