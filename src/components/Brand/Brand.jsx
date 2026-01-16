import React from 'react';
import Marquee from "react-fast-marquee";
import brand1 from "../../../src/assets/brands/amazon.png"
import brand2 from "../../../src/assets/brands/amazon.png"
import brand3 from "../../../src/assets/brands/moonstar.png"
import brand4 from "../../../src/assets/brands/star.png"
import brand5 from "../../../src/assets/brands/start_people.png"
import brand6 from "../../../src/assets/brands/randstad.png"

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const Brand = () => {
    return (
        <div className='my-15 md:py-10'>
            <h2 className='text-center text-4xl font-bold my-10 py-5'>They Always Support Us</h2>
            <Marquee pauseOnHover={true} className="flex justify-center items-center gap-10 "> 

                {
                    brands.map(brand => <img src={brand} alt="" className='mx-5 px-5'/> )
                }
            </Marquee>

            
            
        </div>
    );
};

export default Brand;