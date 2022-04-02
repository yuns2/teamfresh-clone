import React, { useState, useEffect, useRef } from "react";
import "./Slide.css";

import background1 from "../src_assets/background1.png";
import background2 from "../src_assets/background2.png";
import background3 from "../src_assets/background3.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Slide (){
    const cardCount = 5;
    const testArr = [background1, background2, background3];

    const slideTrack = useRef(null);
    
    // useState
    const [currentIndex, setCurrentIndex] = useState(1);
    // const [auto, setAuto] = useState(true);

    const [style, setStyle] = useState({
        transform: `translateX(-${currentIndex}00vw)`,
        transition: `all 0.4s ease-in-out`,
    });


    // 버튼 동작
    const paintPrev = () => {
        setCurrentIndex(currentIndex - 1);
        setStyle({
            transform: `translateX(-${currentIndex - 1}00vw)`,
            transition: `all 0.4s ease-in-out`,
        });
    }

    const paintNext = () => {
        setCurrentIndex(currentIndex + 1);
        setStyle({
            transform: `translateX(-${currentIndex + 1}00vw)`,
            transition: `all 0.4s ease-in-out`,
        });
    }

    const onCurrent = (index) => {
        setCurrentIndex(index+1);
        setStyle({
            transform: `translateX(-${index+1}00vw)`,
            transition: `all 0.4s ease-in-out`,
        });
    }

    useEffect(() => {
        slideTrack.current.style.width = `${cardCount * 100}vw`;
    })

    useEffect(() => {
        if (currentIndex === 0) {
            setCurrentIndex(cardCount - 2);
            setTimeout(
                function () {
                    setStyle({
                        transform: `translateX(-${cardCount - 2}00vw)`,
                        transition: '0ms',
                    });
                }, 500);
        }

        if (currentIndex >= cardCount - 1) {
            setCurrentIndex(1);
            setTimeout(() => {
                setStyle({
                    transform: `translateX(-${1}00vw)`,
                    transition: '0ms',
                });
            }, 500);
        }
    }, [currentIndex, cardCount]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentIndex(currentIndex + 1);
    //         setStyle({
    //             transform: `translateX(-${currentIndex + 1}00vw)`,
    //             transition: `all 0.4s ease-in-out`,
    //         });
    //     }, 3000)
    //     return clearTimeout();
    // }, [auto, currentIndex])

        return (
            <div className="slide__container">
                <div className="slide__item__track" ref={slideTrack} style={style}>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>COMMERCE TREND</h1>
                            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
                        </div>
                        <img src={background3} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>대한민국 NO.1</h1>
                            <h3>Cold Chain Platform</h3>
                        </div>
                        <img src={background1} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>TIMF</h1>
                            <h3>Connect Freshness</h3>
                        </div>
                        <img src={background2} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>COMMERCE TREND</h1>
                            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
                        </div>
                        <img src={background3} alt=""/>
                    </div>
                    <div className="slide__item">
                        <div className="slide__item-caption">
                            <h1>대한민국 NO.1</h1>
                            <h3>Cold Chain Platform</h3>
                        </div>
                        <img src={background1} alt=""/>
                    </div>
                </div>
                
                {/* 버튼구현 */}
                <a onClick = { paintPrev } className="slide__button prev-button">
                    <FontAwesomeIcon icon={faAngleLeft}/>    
                </a>
                <a onClick = { paintNext } className="slide__button next-button">
                    <FontAwesomeIcon icon={faAngleRight}/> 
                </a>
                
                <ul className="slide__pagination">
                    {
                        testArr.map((_,index) => {
                            return (
                                <li key={index} onClick = {() => onCurrent(index)} 
                                className= {(index === currentIndex - 1) ? 'active' : 'noActive' }
                                />
                            )}
                        )   
                    }
                </ul>
            </div>
        )
}

export default Slide; 