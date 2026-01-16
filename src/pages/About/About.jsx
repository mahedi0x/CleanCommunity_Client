import React from 'react';
import { Target, Users, Globe, Shield, Heart, Award } from 'lucide-react';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="font-sans text-slate-800 dark:text-white pb-20 overflow-hidden">
            {/* --- Hero Section --- */}
            <div className="relative bg-slate-900 text-white pt-32 pb-24 md:pt-40 md:pb-32 px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 text-sm font-bold tracking-widest uppercase mb-6 border border-green-500/30">
                        Who We Are
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Empowering Citizens, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Transforming Communities.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light">
                        CleanBD is a technology-driven platform bridging the gap between citizens and authorities to create cleaner, safer, and smarter neighborhoods across Bangladesh.
                    </p>
                </div>
            </div>

            {/* --- Stats Section --- */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 p-8 md:p-12">
                    <div className="text-center">
                        <h3 className="text-4xl md:text-5xl font-black text-green-600 mb-2"><CountUp end={50} suffix="K+" duration={2.5} /></h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Reports Filed</p>
                    </div>
                    <div className="text-center border-l border-gray-100 dark:border-slate-700">
                        <h3 className="text-4xl md:text-5xl font-black text-teal-600 mb-2"><CountUp end={95} suffix="%" duration={2.5} /></h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Resolution Rate</p>
                    </div>
                    <div className="text-center border-l border-gray-100 dark:border-slate-700">
                        <h3 className="text-4xl md:text-5xl font-black text-orange-500 mb-2"><CountUp end={120} suffix="+" duration={2.5} /></h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Partners</p>
                    </div>
                    <div className="text-center border-l border-gray-100 dark:border-slate-700">
                        <h3 className="text-4xl md:text-5xl font-black text-indigo-500 mb-2"><CountUp end={10} suffix="K" duration={2.5} /></h3>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Volunteers</p>
                    </div>
                </div>
            </div>

            {/* --- Mission & Vision --- */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                                <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            To provide a transparent, efficient, and accessible platform where every citizen contributes to the maintenance and improvement of their environment. We believe that small actions, when aggregated, lead to massive change.
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-xl">
                                <Globe className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            A Bangladesh where civic sense is second nature, and technology serves as the backbone for sustainable urban development and community well-being.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-teal-400 rounded-[3rem] transform rotate-3 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop"
                            alt="Vision"
                            className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* --- Core Values --- */}
            <div className="bg-slate-50 dark:bg-slate-900/50 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Driven By Values</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Our core principles guide every decision we make and every feature we build.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "We ensure data accuracy and transparent processes in every report handled." },
                            { icon: Users, title: "Collaboration", desc: "Building bridges between the public, government, and private sectors." },
                            { icon: Award, title: "Excellence", desc: "Striving for the highest standards in user experience and impact resolution." },
                            { icon: Heart, title: "Empathy", desc: "Understanding the needs of our diverse communities." },
                            { icon: Globe, title: "Sustainability", desc: "Promoting eco-friendly practices for a greener future." },
                            { icon: Target, title: "Action", desc: "Turning complaints into completed tasks efficiently." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-700 group">
                                <div className="w-14 h-14 bg-gray-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to make a difference?</h2>
                    <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto relative z-10">Join thousands of citizens who are actively shaping the future of their city.</p>
                    <button className="btn bg-white text-green-700 hover:bg-green-50 px-10 border-none rounded-full font-bold text-lg shadow-lg relative z-10">
                        Join CleanBD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
