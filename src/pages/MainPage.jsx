import React, {useState} from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import SearchNav from '../components/SearchNav';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
import LikeIcon from "../assets/like_icon.svg";
import BookSign from "../assets/book_sign.svg";
import EditorsPick from "../assets/editors_pick.svg";
import LeftButtonGray from "../assets/left_button_gray.svg";
import LeftButtonGreen from "../assets/left_button_green.svg";
import RightButtonGray from "../assets/right_button_gray.svg";
import RightButtonGreen from "../assets/right_button_green.svg";

const MainPage = () => {
    const articles = [
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 189
        },
        {
            category: "소설",
            title: "구의 증명",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 566
        },
        {
            category: "과학",
            title: "물고기는 존재하지 않는다",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 230
        },
    ];

    const writings = [
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "구의 증명",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "구의 증명",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "구의 증명",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "구의 증명",
            author: "정세랑",
            img: BookSign
        },
        {
            category: "소설",
            title: "구의 증명",
            author: "정세랑",
            img: BookSign
        },
    ];

    const picks = [
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: EditorsPick
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: EditorsPick
        },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = writings.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(writings.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(writings.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const prevButtonDisabled = currentPage === 1;
    const nextButtonDisabled = currentPage === totalPages;

    return (
    <div>
        <SearchNav/>
        <div className="w-4/5 mx-auto">
            <section className="flex flex-col space-y-9">
            <div className="text-[32px] font-bold mt-20">이런 글은 어때요?</div>
                    <div className="flex flex-col space-y-7">
                        {articles.map((article, index) => (
                            <div
                                className="h-[132px] relative rounded-[10px] border border-[#8a8a8a] p-[25px_60px]"
                                key={index}>
                                <div className="flex flex-row justify-between">
                                <div className="w-4/5">
                                        <div
                                            className="inline-block px-[13px] py-px bg-[#8A8A8A] rounded-[45px] text-stone-50 text-[15px] font-normal">{article.category}
                                        </div>
                                        <div
                                            className="text-stone-950 text-xl font-semibold">{article.title}
                                        </div>
                                        <div
                                            className="text-zinc-500 text-[15px] overflow-hidden whitespace-nowrap text-ellipsis">{article.content}
                                        </div>
                                </div>
                                    <div className="items-center text-[#8a8a8a] text-[15px] font-normal flex flex-row">
                                        <img
                                            src={LikeIcon}
                                            alt="LikeIcon"
                                            className="mr-[1px] mt-[5px]"/>
                                        <div className="">{article.likes}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="current-writing flex flex-col space-y-9">
                    <div className="flex flex-row mt-20 justify-between">
                        <div className="text-[32px] font-bold">지금 이런 글을 필사하고 있어요</div>
                        <div className="h-[46px] flex flex-row">
                            <img
                                src={prevButtonDisabled ? LeftButtonGray : LeftButtonGreen}
                                alt="Previous"
                                style={{ cursor: 'pointer' }}
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="mr-[32px]"/>
                            <img
                                src={nextButtonDisabled ? RightButtonGray : RightButtonGreen}
                                alt="Next"
                                style={{ cursor: 'pointer' }}
                                onClick={handleNextPage}
                                disabled={currentPage === Math.ceil(writings.length / itemsPerPage)}
                                className=""/>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 flex-row justify-between">
                    {currentItems.map((writing, index) => (
                            <div className="flex flex-col items-center gap-[5px]"
                                 key={index}>
                                <div className="w-[212.74px] h-[386.87px] relative">
                                    <img
                                        src={writing.img}
                                        alt="BookSign"
                                        className=""/>
                                    <div
                                        className="left-0 top-[325.37px] absolute text-[22px] font-semibold">
                                        {writing.title}
                                    </div>
                                    <div
                                        className="left-0 top-[358.87px] absolute text-zinc-500 text-[19px] font-normal">
                                        {writing.author} · {writing.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col">
                    <div className="text-[32px] font-bold mt-20">에디터의 PICK</div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 place-items-center">
                        {picks.map((pick, index) => (
                            <img
                                src={pick.img}
                                alt="BookSign"
                                className="mt-[54px]"
                                key={index}/>
                    ))}
                    </div>
                </section>
                <div className="mb-20"></div>
            </div>
        </div>
    );
};

export default MainPage;
