import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"; import App from "./App";
import CountryInfo from "./components/CountryInfo";
import { ThemeContextProvider } from "./components/ThemeContext";

const rootElement = document.getElementById("root");
render(
    <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:countryName" element={<CountryInfo />} />
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>,
    rootElement
);
