import './HabitTracker.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitTracker(props) {
    //example data
    const user_id = 1;
    const dates = ["2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05", "2025-01-06", "2025-01-07"];

    const [habitData, setHabitData] = useState([]);
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
        setHabitData(response.data)
    }

    useEffect(()=> {
        getHabitData();
    },[props.isModalOpen, props.isEditOpen])

    function habitClickHandler(habitIndex, date) {
        const newHabitData = [...habitData];
        console.log("this is the habit clicked on",habitData[habitIndex].habit_name )

        if (habitData[habitIndex].completion_dates.includes(date)){
            const index = habitData[habitIndex].completion_dates.indexOf(date);
            newHabitData[habitIndex].completion_dates.splice(index, 1);
            setHabitData(newHabitData);
        } else {
            console.log('running else');
            newHabitData[habitIndex].completion_dates.push(date);
            setHabitData(newHabitData);
        }
    }

    function nameClickHandler(habitIndex) {
        const {user_id, id, habit_name} = habitData[habitIndex]
        const habitInfo = {
            user_id: user_id,
            id: id,
            habit_name: habit_name
        }
        props.setEditHabitData(habitInfo);
        props.setIsEditOpen(true);
    }

    async function updateCompletionHandler() {
        try {
            const response = await axios.put(`${baseURL}/habits/${user_id}`,habitData); 
            getHabitData()
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

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
          {habitData.map((habit, habitIndex) => (
            <tr key={habitIndex}>
              <th className='habit__habit' onClick={() => nameClickHandler(habitIndex)}>{habit.habit_name}</th>
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