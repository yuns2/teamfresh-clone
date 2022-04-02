import React, { useRef, useState } from "react";
import { useHistory, useLocation, Link } from 'react-router-dom';
import Modal from "./Modal";
import axios from "axios";

import "./EnterForm.css";

/* component */
import CantDelyver from './CantDelyver';
import CanDelyver from './CanDelyver';

/* font-awesome */
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function EnterForm () {
    const addrInput = useRef();
    const extraAddrInput = useRef();
    const location = useLocation();

    const item = location.state;

    /* modal */
    const [modalOpen, setModalOpen] = useState(false);
    const [delyverResult, updateResult] = useState("");
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };

    /* style */
    const SecLineStyle = {
        "height": "5px",
        "margin" : "10px 0 30px 0"
    }
    const codeStyle = {
        "width" : "120px"
    }


    const getInfo = (value) => {
        axios({
            url: 'https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
            method: 'post',
            data: {
                addrBasic: value
            }
        })
        .then(function (response) {
            const { data :
                    { result :
                        { delyverResult }
                    }
                } = response;

            switch (delyverResult) {
                case "배송가능" :
                    updateResult("배송가능");
            }

        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        const addr = addrInput.current.value;
        const extraAddr = extraAddrInput.current.value;
        const fullAddr = addr.concat(" ", extraAddr);

        getInfo(fullAddr);
    }

    return (
        <div>
            <div className="addr-form__wrapper">
                <div className="addr-form__top-box">
                    <Link to = {{
                        pathname : `/search?address=${item.address}`
                    }}>
                        <FontAwesomeIcon icon={faLeftLong} size="2x"/>
                    </Link>
                    <h3>주소 다시 검색하기</h3>
                </div>
                <hr className ="addr-form__section-line" style={SecLineStyle}/>
                <form className="addr-form" onSubmit={ HandleSubmit }>
                    <input type="text" defaultValue={item.zonecode} style={codeStyle} readOnly ></input>
                    <input type="text" defaultValue={item.address} ref={addrInput} readOnly></input>
                    <input type="text" placeholder="나머지 주소를 입력하세요." ref={extraAddrInput}></input>
                    <button onClick={ openModal }>주소 입력</button>
                </form>
                <div className="addr-form__notice">
                    <div className="notice__notice">
                        <strong>새벽배송 지역 중 배송 불가 장소 안내</strong>
                        <p>관공서/학교/병원/시장/공단/도서산간지역</p>
                    </div>
                    <hr className="addr-form__section-line"/>
                    <div className="notice__list">
                        <p>
                            가락동농수산물도매시장<br/>
                            가천대학교
                        </p>
                    </div>
                </div>
            </div>
            <Modal open={modalOpen} close={ closeModal } header="배송가능지역">
                {delyverResult === "배송불가" ? <CantDelyver/> : <CanDelyver/>}
            </Modal>
        </div>
    )
}
export default EnterForm;