import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { HeroBlock, TitleBlock, PureContentBlock } from '../components/Blocks';
import { MapPinIcon } from '@phosphor-icons/react';

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
            time: new Date().toLocaleString(),
            message: formData.message,
            email: formData.email,
            reply_to: formData.email,
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
                console.error('EmailJS Error:', error);
                alert('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <div className="bg-stone-300 dark:bg-stone-900">
            <HeroBlock
                title="Contact Us"
                content="Have questions or need assistance? We'd love to hear from you!"
                contentColor1="sky-300"
                contentColor2="teal-900"
                bgColor1="sky-300"
                bgColor2="teal-900"
                imageSrc="/forest.jpg"
            />

            <div className="py-16 px-8">
                <div className="max-w-2xl mx-auto bg-white dark:bg-stone-800 shadow-lg rounded-lg p-8">
                    <TitleBlock
                        title="Get in Touch"
                        bgColor="bg-transparent"
                        textColor="text-black dark:text-sky-400"
                        icon={<MapPinIcon />}
                    />
                    <PureContentBlock
                        content="We value your feedback and inquiries. Please fill out the form below, and our team will respond promptly."
                        textColor="text-black dark:text-white"
                        bgColor="bg-transparent"
                    />

                    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:text-white focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:text-white focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:text-white focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
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
            </div>
        </div>
    );
}

export default ContactUs;