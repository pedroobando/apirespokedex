/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon, PokemonDocument } from './entities/pokemon.entity';
export declare class PokemonService {
    private readonly pokemonModel;
    private readonly configService;
    private readonly defaulLimit;
    constructor(pokemonModel: Model<PokemonDocument>, configService: ConfigService);
    create(createPokemonDto: CreatePokemonDto): Promise<Pokemon>;
    findAll(paginationDto: PaginationDto): Promise<Pokemon[]>;
    findOne(term: string): Promise<import("mongoose").Document<unknown, any, Pokemon> & Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(term: string, updatePokemonDto: UpdatePokemonDto): Promise<{
        no: number;
        name: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, Pokemon> & Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    private handleExceptions;
}
