import { Injectable } from '@nestjs/common';
import { user } from 'src/model/user.model';
import { UserCreationBody } from 'src/types/userType';

@Injectable()
export class UserService {
  async getUsers(): Promise<any> {
    try {
      const allUsers = await user.find();
      return {
        success: true,
        users: allUsers,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async createUser(userBody: UserCreationBody) {
    try {
      const newUser = await user.create(userBody);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
}
