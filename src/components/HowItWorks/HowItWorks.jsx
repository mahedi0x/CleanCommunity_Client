import React from 'react';
import { Camera, UploadCloud, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        { icon: Camera, title: "1. Snap a Photo", desc: "See garbage or a maintenance issue? Take a clear photo of the problem area." },
        { icon: UploadCloud, title: "2. Report Issue", desc: "Upload the photo, add a location, and describe the issue on our platform." },
        { icon: CheckCircle, title: "3. Get Resolved", desc: "Authorities are notified, and you get updates until the issue is fixed." },
    ];

    return (
        <div className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">How It Works</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Three simple steps to make your community cleaner and safer.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-slate-700 -z-10 -translate-y-1/2 transform scale-x-75"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3 text-slate-800 dark:text-white">{step.title}</h3>
                            <p className="text-center text-slate-600 dark:text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
