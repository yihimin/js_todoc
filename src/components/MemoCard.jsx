import React from "react";
import TapeImage from "../assets/tape.png";

const MemoCard = ({memo, onClick, isEditing, isChecked, onCheck}) => {
    return (
        <div>
            <div
                className={`relative p-4 w-[160px] h-[160px] bg-white shadow-lg cursor-pointer ${
                    isEditing ? "border-2 border-gray-300" : ""
                }`}
                onClick={!isEditing ? onClick : undefined}>
                {/* 체크박스 (편집 모드일 때만) */}
                {isEditing && (
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onCheck}
                        className="absolute top-2 left-2"/>
                )}
                {/* 포스트잇 테이프 이미지 (편집 모드가 아닐 때만) */}
                {!isEditing && (
                    <img
                        src={TapeImage}
                        alt="Tape"
                        className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-12"/>
                )}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600 line-clamp-5">{memo.content}</p>
                </div>
                </div>
                <div className="text-center mt-8">
                    <h3 className="text-xl font-semibold mt-6">{memo.title}</h3>
                    <p className="text-base text-[#8a8a8a] mt-[10px]">
                        {memo.author} · {memo.genre}
                    </p>
                </div>
            </div>
            );
            };

            export default MemoCard;
