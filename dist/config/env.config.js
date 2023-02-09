"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV,
    defaultLimit: +process.env.DEFAULT_LIMIT || 5,
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=env.config.js.map