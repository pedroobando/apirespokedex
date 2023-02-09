"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const pokemon_entity_1 = require("../pokemon/entities/pokemon.entity");
const adapters_1 = require("../common/adapters");
const config_1 = require("@nestjs/config");
let SeedService = class SeedService {
    constructor(pokemonModel, http, configService) {
        this.pokemonModel = pokemonModel;
        this.http = http;
        this.configService = configService;
        this.enviroment = configService.get('enviroment');
    }
    async executeSeed() {
        if (this.enviroment !== 'dev') {
            throw new common_1.BadRequestException('This endpoint is for use in development');
        }
        const { results } = await this.http.get('https://pokeapi.co/api/v2/pokemon?limit=650');
        const pokemonInserted = results.map(({ name, url }) => {
            const segments = url.split('/');
            const no = +segments[segments.length - 2];
            return { name, no };
        });
        await this.pokemonModel.deleteMany();
        const totInserted = await this.pokemonModel.insertMany(pokemonInserted);
        return { statusCode: 200, message: `created ${totInserted.length}` };
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        adapters_1.AxiosAdapter,
        config_1.ConfigService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map