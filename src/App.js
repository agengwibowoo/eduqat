import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Routing from "./Routing";
import Layout from "./components/layout/Layout";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/Global";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Theme>
                <GlobalStyles />
                <Router>
                    <Layout>
                        <Routing />
                    </Layout>
                </Router>
            </Theme>
        </ChakraProvider>
    );
}

export default App;
