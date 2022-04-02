import React from "react";
import "./Main.css";
import "./global.css";

/* component */
import Slide from "./Slide"; 

/* image */
import card1 from "../src_assets/main_card1.png";
import card2 from "../src_assets/main_card2.png";
import card3 from "../src_assets/main_card3.jpg";
import card4 from "../src_assets/main_card4.jpg";

/* font-aweosme */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Main () {
    /* style */
    const faPlusStyle = {
        "fontSize" : "1.3rem",
        "color" : "rgba(0,0,0,.2)",
        "marginLeft" : ".8rem"
    }
    const faClockStyle = {
        "marginRight" : ".5rem"
    }

    return (
        <div>
            <Slide />
            <div className="jumbotron">
                <h3>대한민국 No.1 Cold-Chain Platform</h3>
                <p>팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.</p>
            </div>
            <div className="bussiness">
                <div className="bussiness__title-box">
                    <h2>TIMF BUSINESS</h2>
                    <hr/>
                </div>
                <div className="bussiness__content-box">
                    <div className="bussiness__content">
                        <div className="bussiness__content__img-box">
                            <img src={card1} alt=""/>      
                        </div>
                        <div className="bussiness__content__text-box">
                            <h3>새벽배송</h3>
                            <p>팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.</p>
                            <a href="#!">더 알아보기</a>
                        </div>
                    </div>
                    <div className="bussiness__content">
                        <div className="bussiness__content__img-box">
                            <img src={card2} alt=""/>  
                        </div>
                        <div className="bussiness__content__text-box">
                            <h3>화물주선</h3>
                            <p>화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.</p>
                            <a href="#!">더 알아보기</a>
                        </div>
                    </div>
                    <div className="bussiness__content">
                        <div className="bussiness__content__img-box">
                            <img src={card3} alt=""/>  
                        </div>
                        <div className="bussiness__content__text-box">
                            <h3>풀필먼트</h3>
                            <p>풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.<br/>각 화주사별 요구사항을 매뉴얼화해 관리합니다.</p>
                            <a href="#!">더 알아보기</a>
                        </div>
                    </div>
                    <div className="bussiness__content">
                        <div className="bussiness__content__img-box">
                            <img src={card4} alt="" />
                        </div>
                        <div className="bussiness__content__text-box">
                            <h3>그로서리</h3>
                            <p>급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.</p>
                            <a href="#!">더 알아보기</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className ="section-line"/>
            <div className="board">
                <div className="board__wrapper">
                    <div className="board__notice">
                        <div className="board__title">공지사항</div>   
                        <div className="board__table">
                            <div className="table_sub-title">
                                <h5>Notice</h5>
                                <a href="#!">
                                    <FontAwesomeIcon icon={faPlus} style={faPlusStyle}/>    
                                </a>
                            </div>

                            <hr className ="table__section-line"/>

                            <table className="table_list">
                                <tbody>
                                        <tr>
                                            <td><a href="#!">[공고] 신주발행 공고(제3자 배정방식)</a></td>
                                            <td>
                                                <FontAwesomeIcon icon={faClock} style={faClockStyle}/>   
                                                2022-03-22
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#!">[공고] 신주발행 공고(제3자 배정방식)</a></td>
                                            <td>
                                                <FontAwesomeIcon icon={faClock} style={faClockStyle}/>
                                                2022-03-15
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#!">[공고] 합병에 따른 채권자이의 및 주권제출공고</a></td>
                                            <td>
                                                <FontAwesomeIcon icon={faClock} style={faClockStyle}/>       
                                                2022-02-28
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="board__news">  
                        <div className="board__title">보도자료</div>   
                        <div className="board__table">
                            <div className="table_sub-title">
                                <h5>TimF News</h5>
                                <a href="#!">
                                    <FontAwesomeIcon icon={faPlus} style={faPlusStyle}/>
                                </a>
                            </div>
                            <hr className ="table__section-line"/>
                            <table className="table_list">
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="section-line"/>
            <div className="connect">
                <h2>Connect</h2>
                <div className="connect__channels">
                    <div className="facebook">
                        <a href="#!"> </a>
                    </div>
                    <div className="youtube">
                        <a href="#!"> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;