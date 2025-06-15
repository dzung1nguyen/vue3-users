import { ApiService } from './apiService';

export class BaseService {
  protected apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
  }
}
