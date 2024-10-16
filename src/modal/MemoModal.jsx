import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import useOutSideClick from './useOutSideClick';
import MemoModalPng from '../assets/memo_modal.png'

const MemoModal = ({ isOpen, onClose, date, title, author, message}) => {
    const modalRef = useRef(null);

    useOutSideClick(modalRef, onClose);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div ref={modalRef}
                 className="relative pt-[77px] flex flex-col items-center">
            <img src={MemoModalPng}
                 className="w-[347px] h-[600px]"/>
                <div className="absolute w-full h-full flex flex-col">
                {date && <h2 className="mt-[147.2px] ml-[70px]">{date}</h2>}
                {title && <h2 className="ml-[70px]">{title}</h2>}
                {author && <h2 className="ml-[82px]">{author}</h2>}
                {message && <h2 className="mt-[30px] ml-[35px] w-[282px] h-[270px]">{message}</h2>}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default MemoModal;
