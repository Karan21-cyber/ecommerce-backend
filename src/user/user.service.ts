import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: {
    email: string;
    name: string;
    phone: string; // Add the 'phone' property and remove the '?' to make it required
    gender: string;
    dob: string;
    role: string;
    verified: boolean;
    password: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }

  async getUsers() {
    const response = {
      status: 'success',
      message: 'User data retrieved successfully',
      data: await this.prisma.user.findMany(),
    };

    return response;
  }

  async userRoute() {
    return 'User Route Serveris running!';
  }
}
