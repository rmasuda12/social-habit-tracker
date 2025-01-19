import "./Homepage.scss";
import React from "react";
import { useState } from "react";
import HabitTracker from "../../components/HabitTracker/HabitTracker";
import HabitAdd from "../../components/HabitAdd/HabitAdd";
import HabitEdit from "../../components/HabitEdit/HabitEdit";
function HomePage() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    function addClickHandler() {
        setIsModalOpen(true);
    }

    const [editHabitData, setEditHabitData] = useState({
    })

    return(
        <>
        <section className="home__header">
            <h2 className="home__title">Habits</h2>
            <svg className="home__icon" onClick={addClickHandler} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
        </section>
        <section className="home__data">
            <HabitTracker isModalOpen={isModalOpen} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} editHabitData={editHabitData} setEditHabitData={setEditHabitData}/>
        </section>
        {isModalOpen? <HabitAdd setIsModalOpen={setIsModalOpen}/>: ''}
        {isEditOpen? <HabitEdit setIsEditOpen={setIsEditOpen} editHabitData={editHabitData} setEditHabitData={setEditHabitData}/>: ""}
        </>
    )
};

export default HomePage;
