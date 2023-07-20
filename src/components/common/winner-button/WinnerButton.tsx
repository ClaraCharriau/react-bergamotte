import style from "./WinnerButton.module.css";

const WinnerButton = () => {

    const hover = () => {
        console.log("VAS Y CLIQUE");
    }

    const dontGo = () => {
        alert("ne part pas 😭😭😭😭😭😭");
    }

    const trap = () => {
        console.log("Donne moi tes codes bancaire pour que je puisse te passer les 1000€");
    }

    return <button className={style.rainbowButton} onClick={trap} onMouseEnter={hover} onMouseLeave={dontGo}>Clique pour gagner 1000€</button>;
}

export default WinnerButton;
