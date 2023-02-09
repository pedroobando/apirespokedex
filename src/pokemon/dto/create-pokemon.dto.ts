import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  readonly no: number;

  @IsString()
  @MinLength(2, { message: 'pokemon name must be greater than two' })
  name: string;
}
