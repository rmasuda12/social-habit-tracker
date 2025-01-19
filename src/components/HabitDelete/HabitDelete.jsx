import './HabitAddEdit.scss'
import { useState , useEffect} from 'react';
import axios from 'axios';

//dotenv import
const baseURL = import.meta.env.VITE_API_URL;

function HabitAddEdit() {
    const baseURL = import.meta.env.VITE_API_URL
    // function closeModal() {
    //     prop.setIsModalOpen(false);
    // }

    // async function deleteWarehouse() {
    //     try {
    //         const deleted = await axios.delete(`${baseURL}/warehouses/${prop.warehouseInfo.id}`);
    //         prop.setIsModalOpen(false); 
    //     } catch (error) {
    //         console.log("error: warehouse could not be deleted")
    //     }
    // }

    return(
        <>
        <div className="modal__background">
            <div className="modal__content">
                <div className="modal__header">
                    <img className="modal__closer" src={`${baseURL}/close-24px.svg`} onClick={closeModal}/>
                </div>
                <h1 className="modal__title">Delete {prop.warehouseInfo.warehouse_name} warehouse?</h1>
                <p className="modal__text p1">Please confirm that you'd like to delete the {prop.warehouseInfo.warehouse_name} from the list of warehouses. You won't be able to undo this action.</p>
                <div className="modal__container">
                    <button className="modal__button modal__button--cancel" onClick={closeModal}>Cancel</button>
                    <button className="modal__button modal__button--delete" onClick={deleteWarehouse}>Delete</button>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default HabitAddEdit;