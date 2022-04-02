import React, { useState, useEffect, useRef } from "react";
import "./Slide.css";

import background1 from "../src_assets/background1.png";
import background2 from "../src_assets/background2.png";
import background3 from "../src_assets/background3.png";

function Slide (){
    const wrapItems = useRef(null);
    let [currentIndex, changeIndex] = useState(0);
    const [loop, setLoop] = useState(null);
    const cardCount = 5;

    // 버튼 동작
    const paintPrev = () => {}
    const paintNext = () => {
    }

    

    const swipeToNext = () => {
        if (currentIndex === 0) {
            wrapItems.current.style.transform = `translateX(-100vw)`;
            wrapItems.current.style.transition = "none";
        }else{
            wrapItems.current.style.transform = `translateX(-${currentIndex*100}vw)`
            wrapItems.current.style.transition = "all ease-in-out 1.3s";
        }
    }

////

useEffect(() => {
    wrapItems.current.style.width = `${cardCount * 100}vw`;
    // wrapItems.current.style.transform = `translateX(-100vw)`;
})

useEffect(() => {
    const slideLoop = setTimeout(() => {
        changeIndex((currentIndex) => {
            if( currentIndex < cardCount - 1 ){ // 4가 아니면
                currentIndex = currentIndex + 1;
                return currentIndex
            } else return 0; // 4이면
        });
}, 4000)
    setLoop(slideLoop);
    } , [currentIndex, changeIndex]);

useEffect(() => {
    swipeToNext();
})

        return (
            <div className="slide__container">
                <div className="slide__items-wrapper" ref={wrapItems}>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>제목1</h1>
                            <h3>설명1</h3>
                        </div>
                        <img src={background1} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>제목2</h1>
                            <h3>설명2</h3>
                        </div>
                        <img src={background2} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>제목3</h1>
                            <h3>설명3</h3>
                        </div>
                        <img src={background3} alt=""/>
                    </div>
                    {/* 버튼 */}
                </div>
                {/* <button onClick = { paintPrev } className="slide__button prev-button">Prev</button>
                <button onClick = { paintNext } className="slide__button next-button">Next</button> */}
            </div>
        )
}

export default Slide; 