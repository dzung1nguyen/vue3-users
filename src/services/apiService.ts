export type QueryParam = Record<string, string | number | boolean>;

export class ApiService {
  private headers: HeadersInit;

  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(endpoint: string, params?: QueryParam): Promise<T> {
    const url = new URL(endpoint);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString(), {
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
