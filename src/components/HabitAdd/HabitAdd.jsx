import './HabitAdd.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitAdd(props) {
    const user_id = 1;
    const baseURL = import.meta.env.VITE_API_URL
    const [formData, setFormData] = useState(
        {
            habit_name: ""
        })
        
    function closeModal() {
        props.setIsModalOpen(false);
    }

    function handleFormChange(event) {
        const {name, value} = event.target;
        setFormData((formData)=>({...formData, [name]: value}));
    }
    async function addSubmitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/habits/${user_id}`, formData);
            console.log(response);
            closeModal(); 
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <div className="add-edit__background">
            <div className="add-edit__content">
                <div className='add-edit__header'>
                    <p className='add-edit__cancel' onClick={closeModal}>Cancel</p>
                    <h1 className="add-edit__title">Add Habit</h1>
                </div>
                <form className='add-edit__form' onSubmit={addSubmitHandler}>
                    <label className='add-edit__label'>NAME</label>
                    <div className='add-edit__function'>
                        <input 
                        id="habitName"
                        className='add-edit__input'
                        name="habit_name"
                        type='text'
                        placeholder='Add habit name'
                        onChange={handleFormChange}
                        required
                    />
                    </div>
                    
                <div className='add-edit__container'>
                    <button type='submit' className="add-edit__button add-edit__button--delete" >Add Habit</button>                    
                </div>     
                </form>

            </div>
        </div>
    )
}

export default HabitAdd;