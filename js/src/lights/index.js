//
// This file auto-generated with generate-wrappers.js
// Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT)
//
// Load all three.js python wrappers
var loadedModules = [
    require('./AmbientLight.autogen.js'),
    require('./DirectionalLight.autogen.js'),
    require('./HemisphereLight.autogen.js'),
    require('./Light.autogen.js'),
    require('./LightShadow.autogen.js'),
    require('./PointLight.autogen.js'),
    require('./SpotLight.autogen.js'),
];

for (var i in loadedModules) {
    if (loadedModules.hasOwnProperty(i)) {
        var loadedModule = loadedModules[i];
        for (var target_name in loadedModule) {
            if (loadedModule.hasOwnProperty(target_name)) {
                module.exports[target_name] = loadedModule[target_name];
            }
        }
    }
}
