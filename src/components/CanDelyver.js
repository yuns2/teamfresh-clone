import React from "react";
import okMark from "../src_assets/ok_mark.png";
function CanDelyver () {
    return (
        <div className="modal_content-box">
            <div className="modal_img-wrapper">
                <img src= {okMark} alt=""/>
            </div>
            <h1>새벽배송가능 지역입니다.</h1>
            <p className="content__main">다음날 아침 7시 이전에 도착합니다.</p>
            <p className="content__caution">(관공서/학교/병원/시장/공단/도서산간지역 배송불가)</p>
        </div>
    )
}

export default CanDelyver;