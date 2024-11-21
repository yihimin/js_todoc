// DataApi 클래스: FakeClient와 ApiClient를 통합하여 데이터를 제공합니다.
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
}
