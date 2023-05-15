import { Injectable } from '@nestjs/common';
import { Cats } from './interface/cats.interface';
import { CatsRes, CreateCatsDto } from './dto/create.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = [];

  create(cat: CreateCatsDto): CatsRes {
    this.cats.push(cat);
    return {
      success: true,
      result: cat,
    };
  }

  findAll(): Cats[] {
    return this.cats;
  }
}
