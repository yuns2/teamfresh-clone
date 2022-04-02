import React from "react";
import noMark from "../src_assets/no_mark.png";
function CantDelyver () {
    return (
        <div className="modal_content-box">
            <div className="modal_img-wrapper">
                <img src= {noMark} alt=""/>
            </div>
            <h1>새벽배송불가 지역입니다.</h1>
            <p className="content__main">
                지번주소(구 주소)로 검색하셨다면<br/>
                도로명 주소로 다시 시도해 주세요.
            </p>
        </div>
    )
}

export default CantDelyver;