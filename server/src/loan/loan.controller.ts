import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get(':type')
  @UseGuards(JwtAuthGuard)
  findTotalByType(@Req() req, @Param('type') type:string) {
    return this.loanService.findTotalByType(+req.user.id, type);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createLoanDto: CreateLoanDto, @Req() req) {
    return this.loanService.create(createLoanDto, +req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.loanService.findAll(+req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.loanService.remove(+id);
  }
}
