import Pokedex from "../assets/pokedex.png";
import styles from "./loadingScreen.module.css";
import React from "react";

function LoadingScreen() {
    return (
        <div className={styles.loadingScreen}>
            <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex"/>
        </div>
    );
}

export default LoadingScreen;
