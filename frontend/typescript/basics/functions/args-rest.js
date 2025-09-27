"use strict";
(() => {
    const fullName = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map