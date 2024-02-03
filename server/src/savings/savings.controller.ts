import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { CreateSavingDto } from './dto/create-saving.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('savings')
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createSavingDto: CreateSavingDto, @Req() req) {
    return this.savingsService.create(createSavingDto, +req.user.id);
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.savingsService.findAll(+req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.savingsService.remove(+id);
  }
}
