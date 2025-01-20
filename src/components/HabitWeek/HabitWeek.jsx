import "./HabitWeek.scss";
import dayjs from "dayjs";

function HabitWeek({weekDays, setCurrentWeekStart}) {

    function nextWeekHander() {
        const nextWeek = dayjs(weekDays[0]).add(3, 'days')
        setCurrentWeekStart(nextWeek);
    }

    function lastWeekHander() {
        const nextWeek = dayjs(weekDays[0]).subtract(3, 'days')
        setCurrentWeekStart(nextWeek);
    }

    return (
        <>
        <section className="week-view"> 
        <div className="week-view__container">
        <p className="week-view__title">Week</p>
        <p className="week-view__date">{dayjs(weekDays[0]).format('MMM D')} - {dayjs(weekDays[6]).format('MMM D')}</p>
        </div>
        <div>
        <svg onClick={lastWeekHander}  className="week-view__chev" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        <svg onClick={nextWeekHander} className="week-view__chev" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
        </section>
        </>
    )
}

export default HabitWeek