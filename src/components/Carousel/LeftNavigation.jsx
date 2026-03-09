import React from "react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from "../../assets/LeftArrow.svg"
import styles from "./LeftNavigation.module.css"
export default function LeftNavigation (){
const swiper= useSwiper();
const [isBegining, setisBegining]=useState(swiper.isBeginning);

swiper.on("slideChange", function (){
    setisBegining(swiper.isBeginning);
});

return (
<div className={styles.leftNavigation}  >
    {!isBegining && <LeftArrow width={50} height={"auto"} onClick={()=> swiper.slidePrev()}  /> }
</div>
)

}