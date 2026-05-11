import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { HeroBlock } from '../components/Blocks';
import { MailboxIcon } from '@phosphor-icons/react';

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
                contentColor1="lime-400"
                contentColor2="teal-400"
                bgColor1="sky-300"
                bgColor2="teal-900"
                imageSrc="/forest.jpg"
            />

            <div className="py-16 px-6 md:px-8">
                <div className="relative max-w-5xl mx-auto pt-28 md:pt-14">
                    <div className="absolute left-0 top-0 z-20 w-full md:w-[42%] bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-11 w-11 rounded-full bg-white/20 flex items-center justify-center">
                                <MailboxIcon size={24} weight="duotone" />
                            </div>
                            <h2 className="text-2xl font-semibold">We&apos;re Grateful You&apos;re Here</h2>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-amber-50">
                            We would be incredibly grateful for anyone reaching out. Whether you have feedback,
                            partnership ideas, or just want to say hello, your message means a lot to us.
                        </p>
                    </div>

                    <div className="relative z-10 ml-0 md:ml-36 lg:ml-52 bg-white dark:bg-stone-800 shadow-2xl rounded-2xl p-8 md:p-10">
                        <h3 className="text-2xl font-semibold text-black dark:text-sky-400">Get in Touch</h3>
                        <p className="mt-2 text-black dark:text-white">
                            Please fill out the form below, and our team will respond promptly.
                        </p>

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
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:text-white dark:border-stone-600 focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
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
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:text-white dark:border-stone-600 focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
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
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:text-white dark:border-stone-600 focus:ring-primary focus:border-primary accent-amber-500 caret-sky-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-shadow-lg bg-sky-500 text-white py-3 px-6 rounded-md font-medium hover:bg-sky-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;