export class ApiService {
  private headers: HeadersInit;

  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: this.headers,
    });
    return this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`${response.status} ${errorText}`);
    }
    return response.json();
  }
}
