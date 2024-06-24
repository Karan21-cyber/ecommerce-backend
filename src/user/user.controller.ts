import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body()
    createUserDTO: {
      email: string;
      name: string;
      phone: string;
      gender: string;
      dob: string;
      role: string;
      verified: boolean; // Add the 'verified' property
      password: string; // Add the 'password' property
    },
  ) {
    return this.userService.createUser(createUserDTO);
  }

  @Get()
  async findAll() {
    return this.userService.getUsers();
  }

  @Get('route')
  async hello() {
    return this.userService.userRoute();
  }
}
