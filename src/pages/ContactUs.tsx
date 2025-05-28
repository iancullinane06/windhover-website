import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            reply_to: formData.email, // Auto-reply email
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID!,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        ).then(
            (result) => {
                alert('Message sent successfully! You will receive an auto-reply shortly.');
            },
            (error) => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <div className="bg-stone-700">
            <div className="bg-sky-400 text-black w-full py-16 flex flex-col justify-center items-center gap-4 text-center h-[400px]">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-stone-800 mb-8 w-3/5">
                    Have questions or need assistance? We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto my-16 bg-white shadow-lg rounded-lg p-8 space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full text-shadow-lg bg-amber-500 text-white py-3 px-6 rounded-md font-medium hover:bg-amber-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactUs;