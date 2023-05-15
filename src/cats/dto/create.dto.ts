export class CreateCatsDto {
  name: string;
  age: number;
  breed: string;
}

export class CatsRes {
  success: boolean;
  result: CreateCatsDto;
}
