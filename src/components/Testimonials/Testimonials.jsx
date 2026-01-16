import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const reviews = [
        { name: "Rahim Ahmed", role: "Community Activist", text: "CleanBD has completely changed how our neighborhood manages waste. The reporting tool is so easy to use!", img: "https://i.pravatar.cc/100?u=rahim" },
        { name: "Sarah Khan", role: "Student", text: "I love being able to see my contributions. It motivates me to do more for my city.", img: "https://i.pravatar.cc/100?u=sarah" },
        { name: "John Doe", role: "Resident", text: "The response time from authorities has improved significantly since we started using this platform.", img: "https://i.pravatar.cc/100?u=john" },
        { name: "Fatima Begum", role: "Volunteer", text: "A wonderful initiative! The dashboard is very user-friendly and informative.", img: "https://i.pravatar.cc/100?u=fatima" },
    ];

    return (
        <div className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">What Our Users Say</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Hear from the community members who are making a real difference.</p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 h-full">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-gray-300 mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={review.img} alt={review.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">{review.name}</h4>
                                        <p className="text-xs text-slate-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
