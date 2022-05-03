import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ColorForm.css';

const ColorForm = ({ addColor }) => {

    const INITIAL_STATE = {
        name: '',
        color: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
		setFormData(INITIAL_STATE);
		history.push('/colors');
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    return (
        <form onSubmit={handleSubmit} className="ColorForm">
            <label htmlFor="name" className="ColorForm-label"> Color Name: </label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name for Color"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="color" className="ColorForm-label"> Choose Color: </label>
            <input
                id="color"
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button id="newBox">ADD COLOR</button>
            <div className="ColorForm-link">
            <Link to='/colors'> Go Back </Link>
            </div>
   
        </form>
    )
};

export default ColorForm;
