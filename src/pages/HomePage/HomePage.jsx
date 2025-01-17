import "./Homepage.scss";
import React from "react";
import { useState } from "react";
import HabitTracker from "../../components/HabitTracker/HabitTracker";

function HomePage() {
    return(
        <>
        <section className="home__header">
            <h2 className="home__title">Habits</h2>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
        </section>
        <section className="home__data">
            <HabitTracker/>
        </section>
        </>
    )
};

export default HomePage;
