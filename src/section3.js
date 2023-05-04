import { useState } from "react";

function Footer() {
    const [name, setName] = useState("");
    let x = true;
    let y = true;
    const bg = ['bg1', 'bg2', 'bg3', 'bg4'];
    let z = 0;
    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        sessionStorage.setItem("username", username);
        setName(username.toUpperCase().trim());
        document.getElementById('recuest_urerName').style.display = 'none'
    }
    function toggleInfoMode () {
        x ? x = false : x = true
        x ? document.getElementById("info_mode").style.display = 'none' :
            document.getElementById("info_mode").style.display = 'inherit'
            document.getElementById("rules").style.display = 'none' 
    }

    function toggleMode() {
        document.getElementById('body').className = bg[z];
        z === 4 ? z = 0 : z++
    }

    function toggleRules () {
        y ? y = false : y = true;
        y ? document.getElementById("rules").style.display = 'none' : document.getElementById("rules").style.display = 'inherit'
    }
    return (
    <footer className="footer" id="footer">
        <div>
            <div className="username">
            <span>{name}</span>
            <span className=" material-symbols-outlined" onClick={toggleInfoMode}>
                settings
            </span>
        </div>
        <div id="info_mode">
                <div className="settings">կարգավորումներ</div>
                <div className=" material-symbols-outlined info"  onClick={toggleRules}>info <span className="kanon">-կանոններ</span></div>
                <div className=" material-symbols-outlined mode" onClick={toggleMode}>auto_mode <span className="kanon">-ռեժիմ</span></div>
            </div>
        </div>
        <div className="rules" id="rules">
            <p>HI LO խաղը անընդհատ ընթացող խաղ է, որին խաղացողները հնարավորություն ունեն միանալու ցանկացած պահի։ Խաղին մասնակցելու համար խաղացողը պետք է ընտրի խաղում տրամադրվող 20 ելքերից տարբերակներից մեկը, մուտքագրի խաղադրույքի չափը և կատարի խաղադրույք: Յուրաքանչյուր ելք ունի սույն կանոնակարգով սահմանված համապատասխան գործակից::</p>
            <p>Խաղի ժամանակ խաղաքարտի կապոցից պատահականության սկզբունքով դուրս է բերվում խաղաքարտ, յուրաքանչյուր խաղում խաղացողներին տրվում է որոշակի ժամանակ ընտրելու 19 ելքերից (տարբերակներից) մեկը և մուտքագրելու խաղադրույքի չափը:</p>
            <p>Սեղմելով ցանկալի գործակցով 20 ելքերից (տարբերակներից) մեկի համապատասխան կոճակի վրա և մուտքագրելով խաղադրույքի չափը, ապա սեղմելով «Դրույք» կոճակը` խաղադրույքը կհամարվի ընդունված, և խաղացողը պետք է սպասի, մինչև մեկնարկի խաղը: Խաղադրույքի գումարը ձեռքով չմուտքագրելու համար գոյություն ունի հատուկ հատված, որտեղ խաղացողը կարող է սեղմել առկա խաղադրույքի ցանկալի գումարի վրա, որի հիման վրա կնշվի խաղադրույքի չափը:</p>
        </div>
        {/* <div className="recuest_urerName" id="recuest_urerName">
        <div className="material-symbols-outlined close" onClick={()=>{ document.getElementById('recuest_urerName').style.display = 'none'}}>close</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div> */}
    </footer>
    );
}

export default Footer;