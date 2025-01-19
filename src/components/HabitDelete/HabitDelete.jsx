import './HabitDelete.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitDelete(props) {
    const baseURL = import.meta.env.VITE_API_URL

    async function deleteHabitHandler() {
        try {
            const response = await axios.delete(`${baseURL}/habits/${props.editHabitData.user_id}/${props.editHabitData.id}`);
            console.log(response.data);
            props.setIsEditOpen(false);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="delete__background">
            <div className="delete__content">
                <div className='delete__header'>
                    <p className='delete__cancel' onClick={props.deleteClickHandler}>Cancel</p>
                    <h1 className="delete__title">Delete Habit</h1>
                </div>
                <p className='delete__text'>Please confirm that you’d like to delete <b>{props.editHabitData.habit_name}</b> from your habit list. You won’t be able to undo this action.</p>
                <div className='delete__container'>
                    <button type='submit' className="delete__button delete__button--delete" onClick={deleteHabitHandler}>Delete</button>                    
                </div>     

            </div>
        </div>
        </>
    )
}

export default HabitDelete;