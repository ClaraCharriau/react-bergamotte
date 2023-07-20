import { useEffect, useState } from "react"

interface DisplayProps {
    children: JSX.Element | JSX.Element[];
    showButton?: string,
    hideButton?: string
}

const Display = (props : DisplayProps) => {
    const {children, showButton = "Voir", hideButton = "Cacher"} = props;
    const [visibility, setVisibility] = useState(true);

    const changeVisibility = () => {
        const isVisible = !visibility;
        setVisibility(isVisible);
    };

    useEffect(() => visibility ? console.log("tu me vois") : console.log("tu me vois plus"), [visibility]);

  return (
    <>
    {visibility && children}
    <button onClick={changeVisibility}>{visibility ? hideButton : showButton}</button>
    </>
  )
};

export default Display;
