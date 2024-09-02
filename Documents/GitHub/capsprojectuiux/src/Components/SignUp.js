
import React, {useState} from 'react';
import Header from "../Components/Header";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../Components/Footer";
import "./Styles/BookingContent.css";


function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name required!"
        }
        if (formData.email === "") {
            err.email = "* Email required!"
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email)) {
                err.email = "Email not valid!"
            }
        }

        if (formData.telephone === "") {
            err.telephone = "* Phone number required!"
        }else{
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number not valid!"
            }
        }


        if (formData.guests === "") {
            err.guests = "* Please specify number of guests!"
        }
        if (formData.date === "") {
            err.date = "* Please specify date and time!"
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Submitted")
        }
    }


    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="text">
                    <h2>Experience the perfect balance of tradition and luxury.</h2>
                    <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                    <p>Book a table with us to share in this experience.</p>
                </div>
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                    <form onSubmit={onSubmitHandler}>
                        <fieldset>
                            <div className="field">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    name="name"
                                    onChange={onChangeHandler}
                                />
                                <div data-testid="non-valid"><span>{formError.name}</span></div>
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="text@email.com"
                                    name="email"
                                    onChange={onChangeHandler}
                                />
                                <div data-testid="non-valid"><span>{formError.email}</span></div>
                            </div>
                            <div className="field">
                                <label htmlFor="telephone">Telephone</label>
                                <input
                                    type="tel"
                                    placeholder="(123)-456-7890"
                                    name="telephone"
                                    onChange={onChangeHandler}
                                />
                                <div data-testid="non-valid"><span>{formError.telephone}</span></div>
                            </div>
                            <div className="guestsdate">
                                <div className="field occasion">
                                    <label htmlFor="occasion">Occasion (optional)</label>
                                    <div className="options">
                                        <select name="occasion" onChange={onChangeHandler}>
                                            <option value="select">Select occasion</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="engagement">Engagement</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <textarea className='othertext' placeholder='Please specify'></textarea>
                                </div>
                                <div className="field guest">
                                    <label htmlFor="guests">Guests</label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        name="guests"
                                        onChange={onChangeHandler}
                                    />
                                    <div data-testid="non-valid"><span>{formError.guests}</span></div>
                                </div>
                            </div>
                            <div className="field">
                                    <label htmlFor="date">Date and Time</label>
                                    <input
                                        type="datetime-local"
                                        name="date"
                                        onChange={onChangeHandler}
                                    />
                                    <div data-testid="non-valid"><span>{formError.date}</span></div>
                                </div>
                            <button className="reserve-btn" type="submit">Reserve</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default SignUp