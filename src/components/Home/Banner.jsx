import React from "react";
import Image from "next/image";
const Banner = () => {
    return (
        <div className="flex items-center justify-between"  >
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Give Your Children <span className="text-primary">A Better Future</span></h2>
                <p className="">Buy Quality Products For Your Children up to 50% Discount</p>
                <button className="btn btn-primary btn-outline w-48 ">Eplore Products</button>
            </div>
            <div>
                <Image src="/assets/hero.png" alt="banner" width={500} height={400}  />

            </div>
        </div>
    );
};

export default Banner;  