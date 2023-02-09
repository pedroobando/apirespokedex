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
exports.PokemonService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pokemon_entity_1 = require("./entities/pokemon.entity");
let PokemonService = class PokemonService {
    constructor(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        this.defaulLimit = configService.get('defaultLimit');
    }
    async create(createPokemonDto) {
        try {
            const createdProkemon = await this.pokemonModel.create(createPokemonDto);
            return createdProkemon;
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = this.defaulLimit, offset = 0 } = paginationDto;
        return await this.pokemonModel.find({}).limit(limit).skip(offset).sort({ no: 1 }).select('-__v');
    }
    async findOne(term) {
        let pokemon;
        if (!isNaN(+term)) {
            pokemon = await this.pokemonModel.findOne({ no: term });
        }
        if (!pokemon && (0, mongoose_2.isValidObjectId)(term)) {
            pokemon = await this.pokemonModel.findById(term);
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase().trim() });
        }
        if (!pokemon)
            throw new common_1.NotFoundException(`Pokemon with id, name, no "${term}" not found`);
        return pokemon;
    }
    async update(term, updatePokemonDto) {
        const pokemon = await this.findOne(term);
        if (updatePokemonDto.name)
            updatePokemonDto.name = updatePokemonDto.name.toLowerCase().trim();
        try {
            await pokemon.updateOne(updatePokemonDto);
            return Object.assign(Object.assign({}, pokemon.toJSON()), updatePokemonDto);
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    async remove(id) {
        const removePokemon = await this.pokemonModel.findByIdAndDelete(id);
        if (!removePokemon)
            throw new common_1.BadRequestException(`Pokemon with id "${id}" not found`);
        return removePokemon;
    }
    handleExceptions(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Pokemon exist in db ${JSON.stringify(error.keyValue)}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException(`Can't create Pokemon in db - Check server logs`);
    }
};
PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map