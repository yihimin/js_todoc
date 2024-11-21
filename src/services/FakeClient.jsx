// 목데이터를 가져오는 FakeClient 클래스
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
}
