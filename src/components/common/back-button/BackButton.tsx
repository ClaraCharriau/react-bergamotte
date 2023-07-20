import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = (): void => {
        navigate(-1);
    }
    return <button className={style.backButton} onClick={goBack}>Retour</button>;
}

export default BackButton;
