import { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';


const Header = (props) => {

    const { value, toggleStyle } = useContext(ThemeContext);
    const [buttonText, setButtonText] = useState("Light Mode");

    function changeText() {
        setButtonText(buttonText => (buttonText === "Dark Mode" ? "Light Mode" : "Dark Mode"));
    }

    return (
        <header className="header" cssstyle={value}>
            <h2>{props.title}</h2>
            <button className="theme-btn" onClick={() => {
                toggleStyle();
                changeText();
            }}>{buttonText}</button>
        </header>
    )
}

export default Header;