// DataApi 클래스
export default class DataApi {
  constructor(client) {
    // FakeClient 또는 ApiClient 인스턴스를 주입받습니다.
    this.client = client;
  }

  // 사용자 데이터를 가져옵니다.
  async getUsers() {
    return this.client.getUsers();
  }

  // 책 데이터를 가져옵니다.
  async getBooks() {
    return this.client.getBooks();
  }

  // 특정 ID의 책 데이터를 가져옵니다.
  async getBookById(id) {
    return this.client.getBookById(id);
  }

  // 문장 데이터를 가져옵니다.
  async getSentences() {
    return this.client.getSentences();
  }

  // 특정 책 ID에 해당하는 문장 데이터를 가져옵니다.
  async getSentencesByBookId(bookId) {
    return this.client.getSentencesByBookId(bookId);
  }

  // 추천 글 데이터를 가져옵니다.
  async getRecommendedArticles() {
    return this.client.getRecommendedArticles();
  }

  // 에디터 추천 데이터를 가져옵니다.
  async getEditorsPick() {
    return this.client.getEditorsPick();
  }
}
