import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Message Sent!',
            text: 'We will get back to you shortly.',
            icon: 'success',
            confirmButtonColor: '#10B981',
            background: '#fff',
            customClass: {
                title: 'text-slate-800 font-bold',
                popup: 'rounded-3xl'
            }
        });
        e.target.reset();
    };

    return (
        <div className="font-sans min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-white pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 rounded-3xl overflow-hidden bg-gray-50 dark:bg-slate-800 shadow-2xl border border-gray-100 dark:border-slate-700">

                    {/* Left: Contact Info */}
                    <div className="bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Let's talk.</h1>
                            <p className="text-slate-400 text-lg mb-12">Whether you have a question about reporting features, partnerships, or just want to say hi, our team is ready to answer all your questions.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <Mail size={20} className="text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                        <p className="text-slate-300">support@cleanbd.org</p>
                                        <p className="text-slate-300">partners@cleanbd.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <Phone size={20} className="text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                        <p className="text-slate-300">+880 1712 345 678</p>
                                        <p className="text-xs text-slate-500 mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                                        <MapPin size={20} className="text-green-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                                        <p className="text-slate-300 max-w-xs leading-relaxed">Level 4, Khan Plaza, 123 Green Road, Dhaka 1205, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 relative z-10">
                            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 text-white">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="p-8 md:p-12 lg:p-16 bg-white dark:bg-slate-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label text-xs font-bold uppercase text-slate-400 tracking-wide">First Name</label>
                                    <input type="text" className="input input-lg bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:border-green-500 focus:outline-none rounded-xl" placeholder="John" required />
                                </div>
                                <div className="form-control">
                                    <label className="label text-xs font-bold uppercase text-slate-400 tracking-wide">Last Name</label>
                                    <input type="text" className="input input-lg bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:border-green-500 focus:outline-none rounded-xl" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase text-slate-400 tracking-wide">Email Address</label>
                                <input type="email" className="input input-lg bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:border-green-500 focus:outline-none rounded-xl" placeholder="john@example.com" required />
                            </div>

                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase text-slate-400 tracking-wide">Topic</label>
                                <select className="select select-lg bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:border-green-500 focus:outline-none rounded-xl w-full">
                                    <option>General Inquiry</option>
                                    <option>Report a Bug</option>
                                    <option>Partnership</option>
                                    <option>Press</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase text-slate-400 tracking-wide">Message</label>
                                <textarea className="textarea textarea-lg bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 focus:border-green-500 focus:outline-none rounded-xl h-32" placeholder="Tell us how we can help..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-lg w-full bg-green-600 hover:bg-green-700 text-white border-none rounded-xl font-bold shadow-lg shadow-green-500/20 mt-4">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
