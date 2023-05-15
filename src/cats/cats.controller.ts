import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './dto/create.dto';

@Controller('cats')
@UseFilters(new HttpExceptionFilter()) // Exception filter to whole cat's routes
export class CatsController {
  constructor(private catServices: CatsService) { }

  @Post('create')
  create(@Body() cat: CreateCatsDto) {
    try {
      return this.catServices.create(cat);
    } catch (error) {
      throw new ForbiddenException()
    }
  }

  @Get('get-cats')
  async findAll() {
    try {
      return this.catServices.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'FAIL to create new cat',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
