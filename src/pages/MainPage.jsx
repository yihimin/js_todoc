import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './MainPage.css';
import SearchNav from '../components/SearchNav';
// import 'react-horizontal-scrolling-menu/dist/styles.css';

const MainPage = () => {
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
    ];

    const writings = [
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
    ];

    const picks = [
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
        {
            category: "소설",
            title: "피프티 피플",
            author: "정세랑",
            img: ""
        },
    ];

    return (
        <div>
            <SearchNav/>
            <div className="main-page w-4/5 mx-auto">
                <section className="recommended-articles flex flex-col space-y-9">
                    <div className="text-[32px] font-bold mt-20">이런 글은 어때요?</div>
                    <div className="article-list flex flex-col space-y-7">
                        {articles.map((article, index) => (
                            <div className="h-[132px] relative bg-stone-50 rounded-[10px] border border-zinc-500"
                                 key={index}>
                                <div className="pl-12 pt-4">
                                    <div
                                        className="px-[13px] py-px bg-zinc-500 rounded-[45px] justify-start items-center gap-2.5 inline-flex">
                                        <div className="text-stone-50 text-[15px] font-normal">{article.category}
                                        </div>
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
                        ))}
                    </div>
                </section>
                <section className="current-writing flex flex-col space-y-9">
                    <div className="text-[32px] font-bold mt-20">지금 이런 글을 필사하고 있어요</div>
                    <div className="flex gap-4 flex-row justify-between">
                        {writings.map((writing, index) => (
                            <div className="flex flex-col justify-start items-start gap-[5px]"
                                 key={index}>
                                <div className="w-[212.74px] h-[386.87px] relative">
                                    <div
                                        className={`w-[212.74px] h-[309.87px] left-[1px] top-0 absolute bg-customPink rounded-[10px]`}/>
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

                <section className="editors-pick flex flex-col space-y-9">
                    <div className="text-[32px] font-bold mt-20">에디터의 PICK</div>
                    <div className="pick-list flex space-x-4 justify-between">
                        {picks.map((pick, index) => (
                            <div className="w-[460px] h-[200px] relative bg-customPink rounded-[10px]"
                                 key={index}></div>
                        ))}
                    </div>
                </section>
                <div className="mb-20"></div>
            </div>
        </div>
    );
};

export default MainPage;
