"use strict";
function userprofile() {
    let name = "Ramisa";
    let age = 18;
    return {
        displayInfo: function () {
            console.log(`name: ${name},age: ${age}`);
        }
    };
}
let profile = userprofile();
profile.displayInfo();
