import { useEffect, useState } from "react";

export default function Section2 (props) {
    const mainBoxsArrDefault = [];

    for( let i = 0; i < props.x * props.x; i++ ) {
        mainBoxsArrDefault.push('');
    }
    const [mainBoxsArr, setMainBoxsArr]  = useState()
   useEffect(()=>{
    setMainBoxsArr(  mainBoxsArrDefault.map((value,index) => {
        return  props.x ===3 ? <span key={index} className="main_boxs3">{value}</span> :
                props.x ===4 ? <span key={index} className="main_boxs4">{value}</span> :  
                <span key={index} className="main_boxs5">{value}</span> 
      })
    )
   },[props.x])
    return(
        <div className="section2">
            <div className="section2_header">
                <div className="rate"></div>
                <div className="section2_diamond">
                    <div className="diamond"></div>
                    <div className="dimond_count">{props.x}</div>
                </div>
            </div>
            <div className="section2_main">
                {mainBoxsArr}
            </div>
        </div>
    )
}