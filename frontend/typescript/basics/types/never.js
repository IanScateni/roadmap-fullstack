"use strict";
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('help me');
    console.log('after');
})();
//# sourceMappingURL=never.js.map