import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './MainPage.css';
import SearchNav from '../components/SearchNav';
import 'react-horizontal-scrolling-menu/dist/styles.css';

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

    return (
        <div>
            <SearchNav/>
            <div className="main-page">
                <section className="recommended-articles">
                    <div className="text-stone-950 text-[32px] font-bold">이런 글은 어때요?</div>
                    <div className="article-list">
                        {articles.map((article, index) => (
                            <div className="article-item" key={index}>
                                <span className="category">{article.category}</span>
                                <h3 className="title">{article.title}</h3>
                                <p className="content">{article.content}</p>
                                <div className="likes">❤ {article.likes}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="current-writing">
                    <div className="text-stone-950 text-[32px] font-bold">지금 이런 글을 필사하고 있어요</div>
                    <div className="writing-list flex gap-4" style={{ display: 'flex', flexDirection: 'row' }}>
                        {writings.map((writing, index) => (
                            <div className="w-[212.74px] h-[386.87px] flex flex-col justify-start items-start gap-[5px]"
                                 key={index}>
                                <div className="w-[212.74px] h-[386.87px] relative">
                                    <div
                                        className={`w-[212.74px] h-[309.87px] left-[1px] top-0 absolute bg-rose-300 rounded-[10px]`}/>
                                    <div
                                        className="left-0 top-[325.37px] absolute text-stone-950 text-[22px] font-semibold">
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

                <section className="editors-pick">
                    <div className="text-stone-950 text-[32px] font-bold">에디터의 PICK</div>
                    <div className="pick-list">
                        <div className="pick-item">
                            <p>“어쩌구저쩌구해서저쩌구저쩌구 하면 대단듯이 올라갑니다. 저쩌구저쩌구저쩌구”</p>
                            <span>- 에디터 레몬</span>
                        </div>
                        <div className="pick-item">
                            <p>“어쩌구저쩌구해서저쩌구저쩌구 하면 대단듯이 올라갑니다. 저쩌구저쩌구저쩌구”</p>
                            <span>- 에디터 레몬</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainPage;
