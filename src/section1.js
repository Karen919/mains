import { useState } from "react"
import Section2 from "./section2";

export default function Section1 () {
    const [bomb,setBomb] = useState(2);
    const [x,setx] = useState(3);
    const [bid,setBid] = useState(0)

    function clickBombMinus() {
        bomb===1 ?  setBomb(bomb) : setBomb(bomb-1)
    }
    function clickBombPlus() {
        bomb >= 8 && x === 3 ? setBomb(8) : bomb >= 15 && x === 4 ? setBomb(15) : bomb >= 24 && x === 5  ? setBomb(24) : setBomb(bomb + 1);
    }
    function x3() {
        setx(3);
        setBomb(1)
        document.getElementById('x3').className = 'section1_intro_btn_click';
        document.getElementById('x4').className = "section1_intro_btn";
        document.getElementById('x5').className = "section1_intro_btn";
    }
    function x4() {
        setx(4);
        setBomb(3);
        document.getElementById('x4').className = 'section1_intro_btn_click';
        document.getElementById('x3').className = "section1_intro_btn";
        document.getElementById('x5').className = "section1_intro_btn";
    }
    function x5() {
        setx(5);
        setBomb(6);
        document.getElementById('x5').className = 'section1_intro_btn_click';
        document.getElementById('x4').className = "section1_intro_btn";
        document.getElementById('x3').className = "section1_intro_btn";
    }
    return(
    <div className="conteiner">
        <div className="section1">
            <div className="section1_intro_conteiner">
                <div className="section1_intro-header">
                    <div className="section1_intro_x">
                        <span className="section1_intro_btn" id="x3" onClick={x3}>3x3</span>
                        <span className="section1_intro_btn" id="x4" onClick={x4}>4x4</span>
                        <span className="section1_intro_btn" id='x5' onClick={x5}>5x5</span>
                    </div>
                    <div className="section1_intro_bomb_count">
                        <span className="count_plus_minus" onClick={clickBombMinus}>-</span>
                        <span className="count">
                            <span>Ռումբեր</span>
                            <span>{bomb}</span>
                        </span>
                        <span className="count_plus_minus" onClick={clickBombPlus}>+</span>
                    </div>
                </div>
                <div className="section1_intro_main_conteiner">
                    <div className="section1_intro_bid_count">
                        <span className="count_plus_minus" onClick={()=> bid > 0 ? setBid(bid-10) : setBid(bid)}>-</span>
                        <span className="count">{bid}</span>
                        <span className="count_plus_minus" onClick={()=> setBid(bid+10)}>+</span>
                    </div>
                    <div className="section1_intro_main_bids">
                        <span className="section1_intro_btn" onClick={()=> setBid(bid+50)}>+50</span>
                        <span className="section1_intro_btn" onClick={()=> setBid(bid+250)}>+250</span>
                        <span className="section1_intro_btn" onClick={()=> setBid(bid*2)}>2x</span>
                    </div>
                </div>
                <div className="start">Խաղալ</div>
            </div>
        </div>
       <Section2 x={x} setX={setx} />
    </div>
    )
}