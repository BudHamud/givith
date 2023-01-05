"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Bienvenido, Ahu ahu');
});
app.get('/shu', (req, res) => {
    res.send('Ana Shu Shu');
});
app.listen(port, () => {
    console.log(`Puerto ${port}`);
});
//# sourceMappingURL=index.js.map