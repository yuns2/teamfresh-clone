import React from "react";

import "./Footer.css";

function Footer () {

return (
    <div className="footer">
        <div className="footer__top-box">
            <div className="footer__content-box">
                <hr/>
                <h5>Timf</h5>
                <hr className="box_bottom-line"/>
                <p>상호명: (주)팀프레시</p>
                <p>사업자등록번호: 561-88-01138</p>
                <p>대표자: 이성일</p>
            </div>
            <div className="footer__content-box">
                <hr/>   
                <h5>Contact us</h5>
                <hr className="box_bottom-line"/>
                <p>Tel: 02-423-0525</p>
                <p>Fax: 02-3432-0525</p>
                <p>E-mail: info@timf.co.kr</p>
                <p>서울특별시 송파구 위례성대로 12길 15-1</p>
                <br></br>
                <p>영업 및 제휴 문의:</p>
                <p>E-mail: sales@timf.co.kr</p>
            </div>
            <div className="footer__content-box">
                <hr/>  
                <h5>Others</h5>
                <hr className="box_bottom-line"/>
                <a href="#!">인재채용</a>
                <a href="#!">서비스 소개</a>
                <a href="#!">개인정보 처리방침</a>
                <a href="#!">위치기반 서비스 이용약관</a>
            </div>
        </div>
        <div className="footer__bottom-box">
            <hr></hr>
            <p>© TeamFresh All right reserved</p>
        </div>
    </div>
)
}

export default Footer;