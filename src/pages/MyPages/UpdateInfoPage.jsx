import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import SearchNav from '../../components/SearchNav';
import ProfileImg from "../../assets/profile_img2.svg";
import ChangeImg from "../../assets/change_bg.svg";
import Modal from '../../modal/Modal';

const UpdateInfoPage = () => {
    const navigate = useNavigate();

    const nicknames = [
        "바다소년",
        "하늘여우",
        "달빛냥이",
        "초록숲",
        "붉은노을",
        "푸른강",
        "별빛기사",
        "노을빛",
        "고양이마녀",
        "흰구름"
    ];

    const [nickname, setNickname] = useState("");
    const [error, setError] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
        actionName: '',
        closeName: ''
    });

    const openModal = ({title = '회원을 탈퇴하시겠습니까?', message = '탈퇴 시 모든 데이터가 삭제되며, 복구가 불가능합니다.', actionName = '탈퇴하기', closeName = '유지하기'}) => {
        setModalContent({ title, message, actionName, closeName });
        setIsModalOpen(true);
    };

    const handleMemberShipCancle = () => {
        navigate("/");
        // 회원 탈퇴 API 연결 필요
    }

    const closeModal = () => setIsModalOpen(false);


    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    }

    const handleNickname = () => {
        if (!nickname || nickname.length < 2) {
            setError("닉네임은 2자 이상이어야 합니다.");
            return;
        }
        else if (nicknames.includes(nickname)){
            setError("이미 사용 중인 닉네임입니다.");
            return;
        }
        else {
            setError("사용 가능한 닉네임입니다.");
            return;
        }
    }

    const saveNotify = () => toast.success("모든 내용이 저장되었습니다.");

    return (
        <div>
            <SearchNav/>
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="w-[374px]">
                    <div className="text-black text-lg font-bold">
                        <p>이메일</p>
                    </div>
                    <div className="text-black text-[15px] font-normal mt-[16px]">
                        <p>xxxxxx@gmail.com</p>
                    </div>
                    <div className="text-black text-lg font-bold mt-[36.21px]">
                        <p>프로필 이미지</p>
                        </div>
                        <button className="flex flex-col justify-center items-start relative mt-[16px]">
                            <img src={ProfileImg} alt="ProfileImg"/>
                            <img
                                src={ChangeImg}
                                alt="ChangeImg"
                                className="absolute mt-[97.92px] ml-[107.93px]"/>
                        </button>
                    <div className="text-black text-lg font-bold mt-[36.21px]">
                        <p>닉네임</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-[16px]">
                        <input
                            id="nickname"
                            type="text"
                            value={nickname}
                            onChange={handleNicknameChange}
                            className="w-[256px] h-[55px] rounded-[10px] border border-[#8a8a8a] text-[#8a8a8a] text-sm flex justify-between items-center p-[15px_16px]"
                            placeholder="닉네임(2자 이상)">
                        </input>
                        <button className="w-[102px] h-[55px] rounded-[10px] bg-[#869e57] text-white text-[15px]"
                                onClick={handleNickname}>
                            중복 확인
                        </button>
                    </div>
                    <div className={`text-sm mt-[8px] min-h-[20px] ${error === "사용 가능한 닉네임입니다." ? "text-[#16b94c]" : "text-[#e52222]"}`}>
                        <p>{error}</p>
                    </div>
                    <div>
                        <div className="text-black text-lg font-bold mt-[32.67px]">
                            <p>비밀번호</p>
                        </div>
                        <button
                            className="w-[102px] h-[55px] rounded-[10px] border border-[#8a8a8a] text-[#8a8a8a] text-[15px] mt-[16px]">변경 하기
                        </button>
                    </div>
                    <button
                        className="w-[374px] h-[55px] rounded-[10px] bg-[#b0b0b0] hover:bg-[#869F58] text-[#f9f9f9] text-xl font-bold mt-[24.34px]"
                        onClick={saveNotify}>저장하기
                    </button>
                    <div className="flex justify-end">
                        <button className="text-sm text-[#b0b0b0] underline mt-[17.87px]"
                                onClick={openModal}>
                            회원 탈퇴하기
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onAction={handleMemberShipCancle}
                title={modalContent.title}
                message={modalContent.message}
                actionName={modalContent.actionName}
                closeName={modalContent.closeName}/>
        </div>
    );
};

export default UpdateInfoPage;