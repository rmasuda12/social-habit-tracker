import "./Homepage.scss";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useState } from "react";

import HabitTracker from "../../components/HabitTracker/HabitTracker";
import HabitAdd from "../../components/HabitAdd/HabitAdd";
import HabitEdit from "../../components/HabitEdit/HabitEdit";
import HabitWeek from "../../components/HabitWeek/HabitWeek";

function HomePage() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    function addClickHandler() {
        setIsModalOpen(true);
    }

    const [editHabitData, setEditHabitData] = useState({
    })

    const [currentWeekStart, setCurrentWeekStart] = useState(dayjs().startOf('week'));

    console.log(currentWeekStart)

    const [weekDays, setWeekDays] = useState([]);
    
    useEffect(()=> {
        const weekDates = Array.from({ length: 7 }, (_, i) =>
            currentWeekStart.add(i, 'day').format('YYYY-MM-DD')
          );
        setWeekDays(weekDates);
    },[currentWeekStart])

    return(
        <>
        <section className="home__header">
            <h2 className="home__title">Habits</h2>
            <svg className="home__icon" onClick={addClickHandler} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
        </section>

        <HabitWeek weekDays={weekDays} setCurrentWeekStart={setCurrentWeekStart}/>

        <section className="home__data">
            <HabitTracker isModalOpen={isModalOpen} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} editHabitData={editHabitData} setEditHabitData={setEditHabitData} weekDays={weekDays}/>
        </section>
        {isModalOpen? <HabitAdd setIsModalOpen={setIsModalOpen}/>: ''}
        {isEditOpen? <HabitEdit setIsEditOpen={setIsEditOpen} editHabitData={editHabitData} setEditHabitData={setEditHabitData}/>: ""}
        </>
    )
};

export default HomePage;
