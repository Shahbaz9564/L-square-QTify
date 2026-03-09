import React from "react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from "../../assets/RightArrow.svg"
import styles from "./RightNavigation.module.css"
export default function RightNavigation (){
const swiper= useSwiper();
const [isEnd, setisEnd]=useState(swiper.isEnd);

swiper.on("slideChange", function (){
    setisEnd(swiper.isEnd);
});

return (
<div className={styles.rightNavigation}  >
    {!isEnd && <RightArrow width={50} height={"auto"} onClick={()=> swiper.slideNext()}  /> }
</div>
)

}