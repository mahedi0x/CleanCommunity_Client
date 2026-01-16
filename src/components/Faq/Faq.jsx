import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { q: "Is this service free to use?", a: "Yes, reporting issues and tracking them is completely free for all citizens." },
        { q: "How long does it take to resolve an issue?", a: "It depends on the complexity and the relevant authority, but most issues are acknowledged within 48 hours." },
        { q: "Can I report issues anonymously?", a: "Yes, you can choose to remain anonymous when submitting a report, though providing contact info helps us verify the issue." },
        { q: "Is there a mobile app available?", a: "We are currently working on a dedicated mobile app. For now, our website is fully responsive on all mobile devices." },
    ];

    return (
        <div className="py-20 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600 dark:text-gray-400">Common questions about CleanBD and how we operate.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(requestIdx => requestIdx === idx ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === idx ? 'text-green-600' : 'text-slate-700 dark:text-gray-200'}`}>{faq.q}</span>
                                {openIndex === idx ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-gray-400" />}
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-slate-800">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
