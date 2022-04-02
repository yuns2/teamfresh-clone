import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "./global.css";
import logoPath from "../src_assets/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function Header () {
    const navRef = useRef(null);
    const navWrapperRef = useRef(null);
    const [toggle, setToggle] = useState(false);
    const handleToggle = (e) => {
        e.preventDefault();
        if (toggle === true) {
            setToggle(false);
            navRef.current.style.top = "-300px";
            navWrapperRef.current.style.height = "0";
        }else {
            setToggle(true);
            navRef.current.style.top ="0";
            navWrapperRef.current.style.height = "100vh";
        }
    }
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logoPath} alt=""/>
                </Link>
            </div>
            <div className="header__nav__wrapper" ref={navWrapperRef}>
                <ul className="header__nav" ref={navRef}>
                    <li>
                        <a href="#!">회사소개</a>
                        <ul className="header__sub-menu">
                            <li><a href="#!">회사소개</a></li>
                            <li><a href="#!">협력사 소개</a></li>
                            <li><a href="#!">고객 소개</a></li>
                            <li><a href="#!">오시는 길</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!">사업소개</a>
                        <ul className="header__sub-menu">
                            <li><a href="#!">새벽배송</a></li>
                            <li><a href="#!">화물주선</a></li>
                            <li><a href="#!">풀필먼트</a></li>
                            <li><a href="#!">그로서리</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!">공지사항</a>
                        <ul className="header__sub-menu">
                            <li><a href="#!">공지사항</a></li>
                            <li><a href="#!">인재채용</a></li>
                            <li><a href="#!">서비스소개</a></li>
                        </ul>
                    </li>
                    <li><a href="#!">보도자료</a></li>
                    <li>
                        <Link to="/search" target="_blank">배송지역검색</Link>
                    </li>
                </ul>
            </div>
            
            {/* <div className="header__toggle_nav"></div> */}
            <button className="header__nav-drawer__wrapper"
                    onClick = { handleToggle } >
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </div>
    )
}

export default Header;