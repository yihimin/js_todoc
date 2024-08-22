import React from 'react';
import SearchNav from '../components/SearchNav';
import PilsaComponent from '../components/PilsaComponent';
import LandingBackground from "../assets/landing_background.svg";

const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-col h-screen">
                <div className="relative" style={{paddingTop: '72.22%'}}>
                    <img
                        src={LandingBackground}
                        alt="LandingBackground"
                        className="absolute z-20 mt-[30.12px] top-0 left-0 w-full h-full"/>
                </div>
                <div className="mt-[700px] flex justify-center items-center">
                    <p className="text-[56px] text-[#0f0f0f] font-black">
                        한번 써볼까요?
                    </p>
                </div>
                <div className="">
                    <PilsaComponent/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
