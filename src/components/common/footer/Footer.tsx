import ContainerFlexAround from "../container-flex-around/ContainerFlexAround"
import style from "./Footer.module.css"

const Partners = [
    {
        id: 1,
        url: "",
        linkName: "Microsoft"
    },
    {
        id: 2,
        url: "",
        linkName: "Apple"
    },
    {
        id: 3,
        url: "",
        linkName: "Meta"
    },
    {
        id: 4,
        url: "",
        linkName: "Amazon"
    },
    {
        id: 5,
        url: "",
        linkName: "Alphabet"
    }
];

const Footer = () => {
    return <footer className={style.footer}>
        <ContainerFlexAround title="Partenaires">
        { Partners.map((partner) => <li key={partner.id}><a href={ partner.url }>{ partner.linkName }</a></li>) }
        </ContainerFlexAround>
    </footer>
}

export default Footer;