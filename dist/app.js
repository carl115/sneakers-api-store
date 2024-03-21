"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
function App() {
    const app = (0, express_1.default)();
    //Settings
    app.set('port', 3000);
    //Middlewares
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)());
    //Routes
    app.get('/', (req, res) => {
        res.send('Hello');
    });
    app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
}
exports.default = App;
