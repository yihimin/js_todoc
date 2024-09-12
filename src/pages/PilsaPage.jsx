import React, {useState, useEffect} from "react";
import { useNavigate, useBlocker } from 'react-router-dom';
import SearchNav from "../components/SearchNav";
import PilsaComponent from "../components/PilsaComponent";
import bookInfo from "../data/bookInfo.json";
import Modal from '../modal/Modal';

// HeartButton 컴포넌트: 하트 버튼과 좋아요 수 표시
const HeartButton = ({isLiked, likeCount, onHeartClick}) => {
    return (
        <div className="flex items-center mt-2">
            <button className="text-2xl" onClick={onHeartClick}>
                {isLiked ? "❤️" : "🤍"}
            </button>
            <span className="ml-2 text-lg">{likeCount}</span>
        </div>
    );
};

const PilsaPage = () => {
    const navigate = useNavigate();

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(100);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
        actionButton: '',
        closeButton: ''
    });

    const [value,setValue] = useState(''); // PilsaComponent의 상태를 여기서 관리해야하는 문제가 있음...

    const openModal = ({
                           title = '정말로 나갈까요?',
                           message = '저장하지 않은 내용은 사라집니다.',
                           actionButton = '나가기',
                           closeButton = '돌아가기'
                       }) => {
        setModalContent({title, message, actionButton, closeButton});
        setIsModalOpen(true);
    };

    const handlePageOut = () => {
        navigate("/main");
    };

    const closeModal = () => setIsModalOpen(false);

    const handleHeartClick = () => {
        setIsLiked(!isLiked);
        setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
    };

    const blocker = useBlocker(
        ({currentLocation,nextLocation}) =>
            value !== '' &&
            currentLocation.pathname !== nextLocation.pathname
    );

    useEffect(() => {
        if (blocker.state === 'blocked') {
            openModal({
                title: '정말로 나갈까요?',
                message: '저장하지 않은 내용은 사라집니다.',
                actionButton: '나가기',
                closeButton: '돌아가기'
            });
        }
    }, [blocker.state]);

    return (
        <div className="mb-6">
            <SearchNav/>
            <PilsaComponent/>
            <div className="flex items-center mx-10">
                <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}></textarea>
                {/* JSON 파일에서 불러온 이미지 사용 */}
                <img
                    src={bookInfo.image}
                    alt={bookInfo.title}
                    className="w-[100px] h-[150px] mr-5"
                />
                <div className="flex-1 font-normal">
                    {/* JSON 파일에서 불러온 책 정보 사용 */}
                    <h2 className="mb-2 font-semibold">{bookInfo.title}</h2>
                    <p>저자: {bookInfo.author}</p>
                    <p>장르: {bookInfo.genre}</p>
                    <p>길이: 3장</p>
                    <HeartButton
                        isLiked={isLiked}
                        likeCount={likeCount}
                        onHeartClick={handleHeartClick}
                    />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    closeModal();
                    blocker.reset();
                }}
                onAction={() => blocker.proceed()}
                title={modalContent.title}
                message={modalContent.message}
                actionButton={modalContent.actionButton}
                closeButton={modalContent.closeButton}>
            </Modal>
        </div>
    );
};

export default PilsaPage;
