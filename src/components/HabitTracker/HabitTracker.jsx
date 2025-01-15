import './HabitTracker.scss'
import { useState , useEffect} from 'react';

function HabitTracker() {
    //example data
    const habits = ["Exercise", "Water", "Hugs", "Diet", "Meditate"];
    const dates = [1, 2, 3, 4, 5, 6, 7];

    const [completedDates, setCompletedDates] = useState( {
        "Exercise": [1],
        "Water": [1,2,3,4,5,6,7],
        "Hugs": [],
        "Diet": [1,5,7],
        "Meditate": [1,2,3]
    }
);

    // useEffect(()=>{
    //     setCompletedDates({
    //         "Exercise": [1],
    //         "Water": [1,2,3,4,5,6,7],
    //         "Hugs": [],
    //         "Diet": [1,5,7],
    //         "Meditate": [1,2,3]
    //       })
    // },[])

    //need a click handler to change the color and state
    //need to use useState? to rerender
    // const [habitData, setHabitData] = useState(
    //     habits.map(() => Array(dates.length).fill(0))
    //   );
    
      // Toggle cell value
    function habitClickHandler(habitName, date) {
        console.log("completed Dates[habit]",completedDates[habitName]);
        console.log("before splice", completedDates);
        const newCompletedDates = {...completedDates};

        if (completedDates[habitName].includes(date)) {
            const index = completedDates[habitName].indexOf(date);
            newCompletedDates[habitName].splice(index, 1);
            setCompletedDates(newCompletedDates);
        } else {
            newCompletedDates[habitName].push(date);
            setCompletedDates(newCompletedDates);
        }
    }


    return(
        <>
        <div className='habit'>
        <table className='habit__tracker'>
        <thead className='habit__head'>
            <tr>
            <th className='habit__month'>January</th>
            {dates.map((date) => (
              <th key={date}>{date}</th>
            ))}
            </tr>
        </thead>
        <tbody className='habit__body'>
          {Object.keys(completedDates).map((habitName, habitIndex) => (
            <tr key={habitIndex}>
              <th className='habit__habit'>{habitName}</th>
              {dates.map((date, dateIndex) => (

                <td className='' key={dateIndex}>
                    <div 
                    className={completedDates[habitName].includes(date)? 'habit__clicker habit__clicker--filled': 'habit__clicker habit__clicker--empty'}
                    onClick={()=>habitClickHandler(habitName, date)}>

                    </div>
                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    )
    
}

export default HabitTracker