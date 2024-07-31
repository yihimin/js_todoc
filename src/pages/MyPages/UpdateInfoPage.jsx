import React, {useState} from 'react';
import SearchNav from '../../components/SearchNav';
import ProfileImg from "../../assets/profile_img2.svg";

const UpdateInfoPage = () => {

    return (
        <div>
            <SearchNav/>
            <div className="ml-[533.03px] mt-[148.64px] flex flex-col justify-center items-start relative">
                <div className="text-black text-lg font-bold">이메일</div>
                <div className="text-black text-[15px] font-normal mt-[16px]">xxxxxx@gmail.com</div>
                <div className="text-black text-lg font-bold mt-[36.21px]">프로필 이미지</div>
            </div>
            <div className="flex flex-col justify-center items-center">
            </div>
        </div>
    );
};

export default UpdateInfoPage;