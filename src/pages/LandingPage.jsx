import React from 'react';
import LandingBackground from "../assets/landing_background.svg";
import PilsaComponent from '../components/PilsaComponent';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative flex-grow" style={{paddingTop: '72.22%'}}>
                <img
                    src={LandingBackground}
                    alt="LandingBackground"
                    className="absolute z-20 mt-[30.12px] top-0 left-0 w-full h-full"
                />
            </div>
            <div className="mt-[700px] flex justify-center items-center">
                <p className="text-[56px] text-[#0f0f0f] font-black">
                    한번 써볼까요?
                </p>
            </div>
            <div className="flex-grow">
                <PilsaComponent/>
            </div>
        </div>
    );
};

export default LandingPage;
