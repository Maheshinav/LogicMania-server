"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb://localhost/logicmania")
    .then(() => {
    console.log("Connected to the database");
})
    .catch((err) => {
    console.error("Can't connect to the database - ERROR:", err);
});
