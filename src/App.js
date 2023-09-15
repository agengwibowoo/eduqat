import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routing";
import Layout from "./components/layout/Layout";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/Global";

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Router>
                <Layout>
                    <Routing />
                </Layout>
            </Router>
        </Theme>
    );
}

export default App;
