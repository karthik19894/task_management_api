"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleRouter = express_1.Router();
exampleRouter.get('/', (req, res) => {
    res.send('Example Route Works!!!');
});
exports.default = exampleRouter;
//# sourceMappingURL=example.js.map