import { Model } from 'mongoose';
import { PokemonDocument } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters';
import { ConfigService } from '@nestjs/config';
export declare class SeedService {
    private pokemonModel;
    private readonly http;
    private readonly configService;
    private enviroment;
    constructor(pokemonModel: Model<PokemonDocument>, http: AxiosAdapter, configService: ConfigService);
    executeSeed(): Promise<{
        statusCode: number;
        message: string;
    }>;
}
