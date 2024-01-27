import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Post()
  createUser(@Body() newUser: UserDto) {
    return this.userService.createUser(newUser.email, newUser.username, newUser.password)
  }
}
