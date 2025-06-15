import type { UserModel } from '@/types/models';
import type { QueryParam } from './apiService';
import { BaseService } from './baseService';

class UserService extends BaseService {
  async getUsers(params?: QueryParam) {
    return this.apiService.get<UserModel[]>('https://jsonplaceholder.typicode.com/users', params);
  }
}

export default new UserService();
