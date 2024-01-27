import { Injectable } from '@nestjs/common';
import { User } from './user.entity'
import { v4 } from 'uuid'

@Injectable()
export class UserService {

  private users: User[] = [
    {
      id: "1",
      email: "Diego",
      username: "diegonina",
      password: "1234",
    }
  ]

  getAllUsers() {
    return this.users
  }

  createUser(email: string, username: string, password: string): User {
    const user = {
      id: v4(),
      email,
      username,
      password,
    }
    this.users.push(user)
    return user
  }


}
