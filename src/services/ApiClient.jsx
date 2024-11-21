// ApiClient 클래스
import axios from 'axios';

export default class ApiClient {
  constructor() {
    // axios를 사용하여 HTTP 요청을 보낼 기본 설정을 정의합니다.
    this.httpClient = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL + '/api', // .env에서 설정된 기본 URL을 사용
      headers: {
        Accept: '*/*', // 모든 응답 타입을 허용
      },
    });
  }

  // /users 엔드포인트에서 사용자 데이터를 가져옵니다.
  async getUsers() {
    console.log('ApiClient > getUsers');
    return this.httpClient.get('/users').then((res) => res.data);
  }

  // /books 엔드포인트에서 전체 책 데이터를 가져옵니다.
  async getBooks() {
    console.log('ApiClient > getBooks');
    return this.httpClient.get('/books').then((res) => res.data);
  }

  // /books/{id} 엔드포인트에서 특정 ID에 해당하는 책 데이터를 가져옵니다.
  async getBookById(id) {
    console.log(`ApiClient > getBookById(${id})`);
    return this.httpClient.get(`/books/${id}`).then((res) => res.data);
  }

  // /sentences 엔드포인트에서 문장 데이터를 가져옵니다.
  async getSentences() {
    console.log('ApiClient > getSentences');
    return this.httpClient.get('/sentences').then((res) => res.data);
  }

  // 특정 책 ID에 해당하는 문장 데이터를 가져옵니다.
  async getSentencesByBookId(bookId) {
    console.log(`ApiClient > getSentencesByBookId(${bookId})`);
    return this.httpClient.get(`/sentences?bookId=${bookId}`).then((res) => res.data);
  }

  // /recommended-articles 엔드포인트에서 추천 글 데이터를 가져옵니다.
  async getRecommendedArticles() {
    console.log('ApiClient > getRecommendedArticles');
    return this.httpClient.get('/recommended-articles').then((res) => res.data);
  }

  // /editors-pick 엔드포인트에서 에디터 추천 데이터를 가져옵니다.
  async getEditorsPick() {
    console.log('ApiClient > getEditorsPick');
    return this.httpClient.get('/editors-pick').then((res) => res.data);
  }
}
