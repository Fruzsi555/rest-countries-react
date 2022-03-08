import React, { useState } from "react";

const ThemeContext = React.createContext(
    {userTheme: "", toggleStyle: () => {}}
);

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark");
    function toggleStyleHandler() {
        setTheme(theme => (theme === "light" ? "dark" : "light"));
    };
    const context = {
        userTheme: theme,
        toggleStyle: toggleStyleHandler,
    };
    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;