import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) alert('Message sent successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label>
                <label>Email: <input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></label>
                <label>Message: <textarea onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea></label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;

