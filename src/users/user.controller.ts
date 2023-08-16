import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreationBody } from 'src/types/userType';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() body: UserCreationBody) {
    return this.userService.createUser(body);
  }
}
