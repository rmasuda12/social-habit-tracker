import './HabitEdit.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';
import HabitDelete from '../HabitDelete/HabitDelete.jsx';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitEdit({setEditHabitData, setIsEditOpen, editHabitData}) {
    const user_id = 1;
    const baseURL = import.meta.env.VITE_API_URL;
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    function deleteClickHandler() {
        console.log('clicked')
        console.log(isDeleteOpen)
        setIsDeleteOpen(!isDeleteOpen);
    }

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


    return(
        <>
        {isDeleteOpen? <HabitDelete setIsEditOpen={setIsEditOpen} editHabitData={editHabitData} deleteClickHandler={deleteClickHandler}/>: ""}
        <div className="add-edit__background">
            <div className="add-edit__content">
                <div className='add-edit__header'>
                    <p className='add-edit__cancel' onClick={closeModal}>Cancel</p>
                    <h1 className="add-edit__title">Edit Habit</h1>
                </div>
                <form className='add-edit__form' onSubmit={addSubmitHandler}>
                    <label className='add-edit__label'>NAME</label>
                    <div className='add-edit__function'>
                    <input 
                        id="habitName"
                        className='add-edit__input'
                        name="habit_name"
                        type='text'
                        onChange={handleFormChange}
                        value={editHabitData.habit_name}
                        required
                    />
                    <svg onClick={deleteClickHandler} className='add-edit__delete' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#C94525"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
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