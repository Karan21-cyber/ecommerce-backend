import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Insert comma after PrismaService
  exports: [PrismaService], // Insert comma after PrismaService
})
export class PrismaModule {}
