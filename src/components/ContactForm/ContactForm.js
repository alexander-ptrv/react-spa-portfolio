import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./ContactForm.scss";

const ContactForm = () => {

    const form = useRef();

    // Field values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        // Fields
        const contactForm = document.querySelector(".contact-form");
        const nameField = document.querySelector(".contact-form input[name='user_name']");
        const emailField = document.querySelector(".contact-form input[name='user_email']");
        const messageField = document.querySelector(".contact-form textarea[name='message']");

        // Error messages
        const emptyNameError = document.querySelector(".contact-form__error--empty-name");
        const emptyEmailError = document.querySelector(".contact-form__error--empty-email");
        const emptyMessageError = document.querySelector(".contact-form__error--empty-message");

        // Success message
        const formSuccessBadge = document.querySelector(".form-success-message");

        // Adding red border and showing error message if name field value is 0,
        // removing border and message otherwise.
        if ( name.trim().length === 0 ) {
            nameField.classList.add("contact-form__text-field--is-faulty");
            emptyNameError.classList.add("contact-form__error--empty-name-active");
        } else {
            nameField.classList.remove("contact-form__text-field--is-faulty");
        }

        // Removing red border if email field is NOT empty and value has @ symbol,
        // otherwise showing error message and adding red border.
        if ( email.trim().length !== 0 && email.includes("@") ) {
            emailField.classList.remove("contact-form__text-field--is-faulty");
        } else {
            emailField.classList.add("contact-form__text-field--is-faulty");
            emptyEmailError.classList.add("contact-form__error--empty-email-active");
        }

        // Adding red border and showing error message if message field value is 0,
        // removing border and message otherwise.
        if ( message.trim().length === 0 ) {
            messageField.classList.add("contact-form__text-field--is-faulty");
            emptyMessageError.classList.add("contact-form__error--empty-message-active");
        } else {
            messageField.classList.remove("contact-form__text-field--is-faulty");
        }

        // Checking all fields, sending an email and hiding form if everything is correct.
        if ( name.trim().length !== 0 && email.includes("@") && message.trim().length !== 0 ) {
            emailjs.sendForm('service_rkp3y57', 'template_l8pn77i', form.current, 'fIk-GI2Yf9uCgnOOr');
            contactForm.classList.add("contact-form--is-hidden");
            formSuccessBadge.classList.add("form-success-message--is-active");
        } else {
            formSuccessBadge.classList.remove("form-success-message--is-active");
        }
    }


    // Dynamically showing/hiding red border and error message depending on 
    // current field value.
    useEffect(() => {
        const nameField = document.querySelector(".contact-form input[name='user_name']");
        const emptyNameError = document.querySelector(".contact-form__error--empty-name");
        if ( name.trim().length > 0 ) {
            nameField.classList.remove("contact-form__text-field--is-faulty");
            emptyNameError.classList.remove("contact-form__error--empty-name-active");
        }
    }, [name])

    useEffect(() => {
        const emailField = document.querySelector(".contact-form input[name='user_email']");
        const emptyEmailError = document.querySelector(".contact-form__error--empty-email");
        if ( email.trim().length > 0 && email.includes("@") ) {
            emailField.classList.remove("contact-form__text-field--is-faulty");
            emptyEmailError.classList.remove("contact-form__error--empty-email-active");
        }
    }, [email])

    useEffect(() => {
        const messageField = document.querySelector(".contact-form textarea[name='message']");
        const emptyMessageError = document.querySelector(".contact-form__error--empty-message");
        if ( message.trim().length > 0 ) {
            messageField.classList.remove("contact-form__text-field--is-faulty");
            emptyMessageError.classList.remove("contact-form__error--empty-message-active");
        }
    }, [message])

    return (  
        <>
            <form 
                className="contact-form"
                onSubmit={handleSubmit}
                ref={form}
                noValidate
            >
                {/* Name field */}
                <input 
                    className="contact-form__text-field"
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Name *" 
                />
                <p className="contact-form__error contact-form__error--empty-name">
                    Name is empty
                </p>
                {/* Email field */}
                <input 
                    className="contact-form__text-field"
                    name="user_email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email *" 
                />
                <p className="contact-form__error contact-form__error--empty-email">
                    Email is empty or missing an @ symbol
                </p>
                {/* Message field */}
                <textarea 
                    className="contact-form__text-field contact-form__text-field--textarea"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you? *" 
                />
                <p className="contact-form__error contact-form__error--empty-message">
                    Message is empty
                </p>
                {/* Submit button */}
                <input
                    className="contact-form__send-btn" 
                    type="submit" 
                    value="Send" 
                />
            </form>
            {/* Success message */}
            <div className="form-success-message">
                <h3 className="form-success-message__heading">I've recieved your message!</h3>
                <p className="form-success-message__text">
                    Thank you for contacting me, I'll return to you asap.
                </p>
            </div>
        </>
    );
}
 
export default ContactForm;