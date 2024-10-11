import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(3)
    name:string;

    @IsNumber()
    @IsPositive()
    price:number;

    @IsString()
    @IsOptional()
    description?:string;
}
