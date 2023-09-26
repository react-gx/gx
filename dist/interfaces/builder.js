"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const builderCase_js_1 = require("./builderCase.js");
class Builder {
    constructor() {
        this._builderCase = new builderCase_js_1.BuilderCase();
    }
    use(asyncAction) {
        this._builderCase.asyncAction = asyncAction;
        return this._builderCase;
    }
}
exports.Builder = Builder;
//# sourceMappingURL=builder.js.map