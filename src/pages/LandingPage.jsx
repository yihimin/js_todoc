import React from 'react';
import LandingBackground from "../assets/landing_background.svg";
import PilsaComponent from '../components/PilsaComponent';
import SignUpNav from "../components/SignupNav";

const LandingPage = () => {
    return (
        <div className="h-screen overflow-scroll snap-y snap-mandatory">
                <div className="flex flex-col">
                    <SignUpNav/>
                    <div className="relative flex-grow snap-center" style={{paddingTop: '72.22%'}}>
                        <img
                            src={LandingBackground}
                            alt="LandingBackground"
                            className="absolute z-20 mt-[30.12px] top-0 left-0 w-full h-full"
                        />
                    </div>
                    <div className="mt-[700px] flex justify-center items-center snap-center">
                        <p className="text-[56px] text-[#0f0f0f] font-black">
                            한번 써볼까요?
                        </p>
                    </div>
                    <div className="flex-grow">
                        <PilsaComponent/>
                    </div>
                </div>
        </div>
    );
};

export default LandingPage;
