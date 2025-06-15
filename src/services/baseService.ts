import { ApiService } from './apiService';

export default class BaseService {
  protected apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
  }
}
