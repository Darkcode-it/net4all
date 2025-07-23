import React from "react";
import Menu from "../components/menu/Menu"; // Importing the Menu component
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Articles from "../components/articles/Articles";

const Home = () => {
    return (
        <div>
            <Menu />
            <Header />
            {/* <Articles /> */}
            <Footer />
        </div>
    );
};

export default Home;
