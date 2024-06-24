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
    return this.prisma.user.findMany();
  }

  async helloServer() {
    return 'Hello Server is running!';
  }
}
