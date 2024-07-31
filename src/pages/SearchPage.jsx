import React, {useState} from 'react';
import SearchNav from '../components/SearchNav';
import SearchIcon from "../assets/search_icon2.svg";
import DownIcon from "../assets/down_icon.svg";

const SearchPage = () => {
    const [isDownClicked, setIsDownClicked] = useState(false);

    const handleDownClick = () => {
        setIsDownClicked(!isDownClicked);
    };

    const articles = [
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
        {
            category: "소설",
            title: "피프티 피플",
            content: "담당 교수 위에 업지도 없이 서 있던 젊은 실사가 뒤를 올리다며 고객의 제도를 조금씩 계속 바꾸었다. 수상을 받아바...",
            likes: 100
        },
    ];

    return (
        <div>
            <SearchNav/>
            <div className="mt-[176px] flex justify-center items-start">
                <div
                    className="w-[483px] h-[56px] rounded-[10px] border border-[#90a36b] flex justify-between items-center p-[7px_27px]">
                    <div
                        className="w-[96px] text-[#0f0f0f] p-[11px_18px] text-xs font-bold flex justify-between leading-relaxed">전체
                        <div className="flex">
                            <img
                                src={DownIcon}
                                alt="DownIcon"
                                onClick={handleDownClick}/>
                            {isDownClicked && (
                                <ul className="absolute bg-white border border-gray-200 rounded-md shadow-lg">
                                    {[
                                        "전체",
                                        "소설",
                                        "인문학",
                                        "칼럼",
                                        "시",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="ml-1 mr-1 w-[305px] text-[#8a8a8a] text-sm">찾고 싶은 글을 검색해보세요.</div>
                    <img
                        src={SearchIcon}
                        alt="SearchIcon"/>
                </div>
            </div>
                <div className="mt-[86px] flex flex-col justify-center items-center">
                    {articles.map((article, index) => (
                        <div className="w-[984px] h-[132px] mb-[30px] relative"
                             key={index}>
                            <div className="h-full pl-12 flex flex-col items-start justify-center">
                                <div className="pr-[140px]">
                                <div
                                    className="inline-block px-[13px] bg-[#8A8A8A] py-px rounded-[45px] text-stone-50 text-[15px] font-normal">{article.category}
                                </div>
                                <div
                                    className="text-stone-950 text-xl font-semibold">{article.title}
                                </div>
                                <div
                                    className="text-zinc-500 text-[15px]">{article.content}
                                </div>
                                </div>
                                <div
                                    className="absolute right-14 top-1/2 transform -translate-y-1/2 text-right text-zinc-500 text-xl font-medium">♡ {article.likes}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default SearchPage;