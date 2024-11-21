// FakeClient 클래스
export default class FakeClient {
  // users.json에서 사용자 데이터를 가져옵니다.
  async getUsers() {
    console.log('FakeClient > getUsers');
    return fetch('/data/users.json')
      .then((res) => res.json());
  }

  // books_info.json에서 책 데이터를 가져옵니다.
  async getBooks() {
    console.log('FakeClient > getBooks');
    return fetch('/data/books_info.json')
      .then((res) => res.json());
  }

  // books_info.json에서 특정 ID에 해당하는 책 데이터를 필터링하여 반환합니다.
  async getBookById(id) {
    console.log(`FakeClient > getBookById(${id})`);
    return fetch('/data/books_info.json')
      .then((res) => res.json())
      .then((data) => data.find((book) => book.id === id));
  }

  // memos.json에서 문장 데이터를 가져옵니다.
  async getSentences() {
    console.log('FakeClient > getSentences');
    return fetch('/data/memos.json')
      .then((res) => res.json());
  }

  // 특정 책 ID에 해당하는 문장 데이터를 가져옵니다.
  async getSentencesByBookId(bookId) {
    console.log(`FakeClient > getSentencesByBookId(${bookId})`);
    return fetch('/data/pilsa.json')
      .then((res) => res.json())
      .then((data) => data.find((item) => item.bookId === bookId));
  }

  // recommended_articles.json에서 추천 글 데이터를 가져옵니다.
  async getRecommendedArticles() {
    console.log('FakeClient > getRecommendedArticles');
    return fetch('/data/recommended_articles.json')
      .then((res) => res.json());
  }

  // editors_pick.json에서 에디터 추천 데이터를 가져옵니다.
  async getEditorsPick() {
    console.log('FakeClient > getEditorsPick');
    return fetch('/data/editors_pick.json')
      .then((res) => res.json());
  }
}
