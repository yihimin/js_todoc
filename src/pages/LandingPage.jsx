import React from 'react';
import SearchNav from '../components/SearchNav';
import PilsaComponent from '../components/PilsaComponent';
import LandingBackground from "../assets/landing_background.svg";
import PileOfBooks from "../assets/pile_of_books.png";

const LandingPage = () => {
    return (
        <div>
            <SearchNav/>
            <div className="flex flex-col h-screen">
                <div className="relative" style={{paddingTop: '64.24%'}}>
                    <img
                        src={LandingBackground}
                        alt="LandingBackground"
                        className="absolute z-20 mt-[30.12px] top-0 left-0 w-full h-full"
                        style={{ right: 'calc(12.54% + 10px)' }}/>
                    <img
                        src={PileOfBooks}
                        alt="PileOfBooks"
                        className="absolute z-30"/>
                </div>
                <div className="mt-[1121px]">
                    <PilsaComponent/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
