import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Subscribed!',
            text: 'Thank you for joining our newsletter.',
            icon: 'success',
            confirmButtonColor: '#10B981'
        });
        e.target.reset();
    };

    return (
        <div className="py-20 bg-green-600">
            <div className="container mx-auto px-4">
                <div className="bg-green-700/50 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Stay Updated</h2>
                    <p className="text-green-100 mb-10 text-lg max-w-2xl mx-auto">Get the latest news on community cleanups, success stories, and platform updates directly to your inbox.</p>

                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4 flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-lg flex-1 bg-white/10 text-white placeholder-green-200 border border-green-400/50 focus:outline-none focus:border-white rounded-2xl"
                            required
                        />
                        <button type="submit" className="btn btn-lg bg-white text-green-700 hover:bg-green-50 border-none rounded-2xl font-bold">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-sm text-green-300 mt-4">No spam, we promise. Unsubscribe anytime.</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
