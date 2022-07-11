import React, { useState } from "react";

const Form  = () => {
    const [fstate, setFstate] = useState({
        fname: "",
        lname: "",
        message: "",
        carBrand:  "",
        isChecked: false,
        gender: "",
        price: 0,
    });

    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFstate({
            ...fstate,
            [e.target.name]: value,
        });
    }
    return(
        <div>
            <h1>React Form Handling</h1>
            <form>
                <label>
                    First Name: <input type="text" name="fname" value={fstate.fname} onChange={handleChange}/>
                </label>
                <label>
                    Last Name: <input type="text" name="lname" value={fstate.lname} onChange={handleChange}/>
                </label>
                <label>
                    Last Name: <textarea name="message" value={fstate.message} onChange={handleChange}/>
                </label>
                <label>
                    Pick your favorite car brand:
                    <select name="carBrand" value={fstate.carBrand} onChange={handleChange}>
                        <option value="mercedes">Mercedes</option>
                        <option value="bmw">BMW</option>
                        <option value="maserati">Maserati</option>
                        <option value="infinity">Infinity</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" name="isChecked" checked={fstate.isChecked} onChange={handleChange}/> isChecked ?
                </label>
                <label >
                    <input type="radio" name="gender" value="female" checked={fstate.gender === "female"} onChange={handleChange} /> Female
                    <input type="radio" name="gender" value="male" checked={fstate.gender === "male"} onChange={handleChange} /> Male
                </label>
                <label>
                    Price (between 0 and 50) <input type="range" name="price" min="0" max="50" value={fstate.price} onChange={handleChange}/>
                </label>
            </form>
            <h5>First Name: {fstate.fname}</h5>
            <h5>Last Name: {fstate.lname}</h5>
            <h5>My favourite car brand: {fstate.carBrand.toUpperCase()}</h5>
            <p>Message : {fstate.message}</p>
            <h5>Is it checked ? : {fstate.isChecked ? "Yes": "No"}</h5>
            <p>Price {fstate.price}</p>
        </div>
    )
}

export default Form;