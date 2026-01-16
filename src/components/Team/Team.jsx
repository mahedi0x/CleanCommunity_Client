import React from 'react';

const Team = () => {
    const team = [
        { name: "Mahedi Hassan", role: "Project Lead", img: "https://i.pravatar.cc/150?u=mahedi" },
        { name: "Ayesha Siddiqua", role: "Community Manager", img: "https://i.pravatar.cc/150?u=ayesha" },
        { name: "Karim Uddin", role: "Tech Lead", img: "https://i.pravatar.cc/150?u=karim" },
        { name: "Nusrat Jahan", role: "Design Head", img: "https://i.pravatar.cc/150?u=nusrat" },
    ];

    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 dark:text-gray-400">The passionate individuals behind CleanBD.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-green-600 transition-colors">{member.name}</h3>
                            <p className="text-sm text-slate-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
