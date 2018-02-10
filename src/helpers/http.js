class http {
  static get baseUrl() {
    return 'http://localhost:8080/api';
  }
  static post(path, payload) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
      }),
    });
  }
  static get(path) {
    return fetch(`${this.baseUrl}${path}`, {
      headers: new Headers({
        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
      }),
    });
  }
  static delete(path) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
      }),
    });
  }
}

export default http;
