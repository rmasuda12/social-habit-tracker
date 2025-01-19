import './HabitEdit.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitEdit({setEditHabitData, setIsEditOpen, editHabitData}) {
    const user_id = 1;
    const baseURL = import.meta.env.VITE_API_URL

    function closeModal() {
        setIsEditOpen(false);
    }

    function handleFormChange(event) {
        const {name, value} = event.target;
        setEditHabitData((editHabitData)=>({...editHabitData, [name]: value}));
    }
    async function addSubmitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.put(`${baseURL}/habits/${user_id}/edit`, editHabitData);
            console.log(response);
            closeModal(); 
        } catch (error) {
            console.log(error);
            
        }
    }

    console.log(editHabitData)

    return(
        <>
        <div className="add-edit__background">
            <div className="add-edit__content">
                <div className='add-edit__header'>
                    <p className='add-edit__cancel' onClick={closeModal}>Cancel</p>
                    <h1 className="add-edit__title">Edit Habit</h1>
                </div>
                <form className='add-edit__form' onSubmit={addSubmitHandler}>
                    <label className='add-edit__label'>NAME</label>
                    <input 
                        id="habitName"
                        className='add-edit__input'
                        name="habit_name"
                        type='text'
                        onChange={handleFormChange}
                        value={editHabitData.habit_name}
                        required
                    />
                <div className='add-edit__container'>
                    <button type='submit' className="add-edit__button add-edit__button--delete" >Save</button>                    
                </div>     
                </form>

            </div>
        </div>
        </>
    )
}

export default HabitEdit;