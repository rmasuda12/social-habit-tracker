import './HabitTracker.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitTracker() {
    //example data
    const user_id = 1;
    const dates = ["2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05", "2025-01-06", "2025-01-07"];

    const [completedDates, setCompletedDates] = useState([]);
    // [
    //     {
    //     "completion_dates": ["2025-01-01", "2025-01-02", "2025-01-03"],
    //     "habit_name": "Drink Water",
    //     "id": 1,
    //     "user_id": 1
    //     }

    // ]
    async function getHabitData() {
        const response = await axios.get(`${baseURL}/habits/${user_id}`);
        console.log(response.data)
        setCompletedDates(response.data)
    }

    useEffect(()=> {
        getHabitData();
    },[])

    function habitClickHandler(habitIndex, date) {
        const newCompletedDates = [...completedDates];
        console.log("this is the habit clickec on",completedDates[habitIndex].habit_name )

        if (completedDates[habitIndex].completion_dates.includes(date)){
            const index = completedDates[habitIndex].completion_dates.indexOf(date);
            newCompletedDates[habitIndex].completion_dates.splice(index, 1);
            setCompletedDates(newCompletedDates);
        } else {
            console.log('running else');
            newCompletedDates[habitIndex].completion_dates.push(date);
            setCompletedDates(newCompletedDates);
        }
    }

    async function updateCompletionHandler() {
        try {
            const response = await axios.put(`${baseURL}/habits/${user_id}`,completedDates); 
            getHabitData()
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(completedDates);

    return(
        <>
        <div className='habit'>
        <table className='habit__tracker'>
        <thead className='habit__head'>
            <tr>
            <th></th>
                {dates.map((date, index) => {
                    const dateData = new Date(date);
                    const day = dateData.getUTCDate(); 
                    return(
                    <th key={index} className='habit__date'>{day}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody className='habit__body'>
          {completedDates.map((habit, habitIndex) => (
            <tr key={habitIndex}>
              <th className='habit__habit'>{habit.habit_name}</th>
              {dates.map((date, dateIndex) => (

                <td className='' key={dateIndex}>
                    <div 
                    className={habit.completion_dates.includes(date)? 'habit__clicker habit__clicker--filled': 'habit__clicker habit__clicker--empty'}
                    onClick={()=> {habitClickHandler(habitIndex, date); updateCompletionHandler()} }>


                    </div>
                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={updateCompletionHandler}>submit</button> */}
    </div>
    </>
    )
    
}

export default HabitTracker