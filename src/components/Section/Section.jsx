import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Filter from "./Filter";

export default function Section({ title, data = [], genres, type }) {
  const [toggle, setToggle] = useState(false);
  const [filterData, setFilterData] = useState([{ key: "All", label: "All" }]);
  //const showFilters = filterData.length > 1;
  const [selectedFilterIndex, setselectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    if (genres) {
      setFilterData((prev) => [...prev, ...genres]);
    }
  }, [genres]);

  console.log("filterData", filterData);

  const cardToRender = data.filter((ele) =>
    filterData.length > 0 && selectedFilterIndex !== 0
      ? ele.genre.key === filterData[selectedFilterIndex].key
      : ele,
  );

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.text}>{title}</h2>
        <div className={styles.toggle} onClick={handleToggle}>
          {!genres ? <h2>{!toggle ? "Show all":"Collapse"  }</h2> : null}
        </div>
      </div>

      {
filterData && filterData.length>1 &&
(<Filter   
filterData= {filterData}  
selectedFilterIndex={selectedFilterIndex}
setselectedFilterIndex= {setselectedFilterIndex}
/>
)      }

      {toggle ? (
        <div className={styles.wrapper}>
          {cardToRender.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={cardToRender}
          renderComponent={(data) => <Card data={data} type={type} />}
        />
      )}
    </>
  );
}
