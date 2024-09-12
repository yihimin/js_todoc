import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, onClose2, title, message, button1, button2, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="w-[500px] h-[282px] bg-white rounded-lg pt-[77px] shadow-lg flex flex-col items-center">
                {title && <h2 className="text-[#0f0f0f] text-xl font-bold leading-9">{title}</h2>}
                {message && <p className="mt-[8px] text-[#8a8a8a] text-lg font-normal leading-[32.98px]">{message}</p>}
                {children}
                <div className="mt-[42px]">
                    <button
                        className="w-[171px] h-[55px] bg-[#B0B0B0] text-[#f9f9f9] text-xl font-semibold rounded-[10px]"
                        onClick={onClose}>
                        {button1}
                    </button>
                    <button
                        className="ml-[17px] w-[171px] h-[55px] bg-[#869F58] text-[#f9f9f9] text-xl font-semibold rounded-[10px]"
                        onClick={onClose2}>
                        {button2}
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
