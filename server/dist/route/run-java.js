"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doker_1 = require("../utils/doker");
const router = (0, express_1.Router)();
router.post('/run-java', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = req.body.code;
        const inputData = req.body.inputData;
        const executionOutput = yield (0, doker_1.runDockerProcess)(code, inputData, 'java-service');
        res.send(executionOutput);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});
exports.default = router;
