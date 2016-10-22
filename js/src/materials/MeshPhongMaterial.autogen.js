//
// This file auto-generated with generate-wrappers.js
// Date: Fri Oct 21 2016 17:17:07 GMT-0700 (PDT)
//

var _ = require('underscore');
var widgets = require('jupyter-js-widgets');

var MaterialModel = require('./Material').MaterialModel;
var MaterialView = require('./Material').MaterialView;

var TextureModel = require('../textures/Texture').TextureModel;
var TextureView = require('../textures/Texture').TextureView;

var MeshPhongMaterialModel = MaterialModel.extend({

    defaults: _.extend({}, MaterialModel.prototype.defaults, {

        _view_name: 'MeshPhongMaterialView',
        _model_name: 'MeshPhongMaterialModel',

        color: "#ffffff",
        specular: "#111111",
        shininess: 30,
        map: null,
        lightMap: null,
        lightMapIntensity: 1,
        aoMap: null,
        aoMapIntensity: 1,
        emissive: "#000000",
        emissiveMap: null,
        emissiveIntensity: 1,
        bumpMap: null,
        bumpScale: 1,
        normalMap: null,
        normalScale: [1,1],
        displacementMap: null,
        displacementScale: 1,
        displacementBias: 0,
        specularMap: null,
        alphaMap: null,
        envMap: null,
        combine: "MultiplyOperation",
        reflectivity: 1,
        refractionRatio: 0.98,
        fog: false,
        shading: "SmoothShading",
        wireframe: false,
        wireframeLinewidth: 1,
        wireframeLinecap: "round",
        wireframeLinejoin: "round",
        vertexColors: "NoColors",
        skinning: false,
        morphTargets: false,
        morphNormals: false,

    }),

    constructThreeObject: function() {

        return new THREE.MeshPhongMaterial(
            {
                color: this.get('color'),
                specular: this.convertColorModelToThree(this.get('specular'), 'specular'),
                shininess: this.get('shininess'),
                map: this.convertThreeTypeModelToThree(this.get('map'), 'map'),
                lightMap: this.convertThreeTypeModelToThree(this.get('lightMap'), 'lightMap'),
                lightMapIntensity: this.get('lightMapIntensity'),
                aoMap: this.convertThreeTypeModelToThree(this.get('aoMap'), 'aoMap'),
                aoMapIntensity: this.get('aoMapIntensity'),
                emissive: this.convertColorModelToThree(this.get('emissive'), 'emissive'),
                emissiveMap: this.convertThreeTypeModelToThree(this.get('emissiveMap'), 'emissiveMap'),
                emissiveIntensity: this.get('emissiveIntensity'),
                bumpMap: this.convertThreeTypeModelToThree(this.get('bumpMap'), 'bumpMap'),
                bumpScale: this.get('bumpScale'),
                normalMap: this.convertThreeTypeModelToThree(this.get('normalMap'), 'normalMap'),
                normalScale: this.convertVectorModelToThree(this.get('normalScale'), 'normalScale'),
                displacementMap: this.convertThreeTypeModelToThree(this.get('displacementMap'), 'displacementMap'),
                displacementScale: this.get('displacementScale'),
                displacementBias: this.get('displacementBias'),
                specularMap: this.convertThreeTypeModelToThree(this.get('specularMap'), 'specularMap'),
                alphaMap: this.convertThreeTypeModelToThree(this.get('alphaMap'), 'alphaMap'),
                envMap: this.convertThreeTypeModelToThree(this.get('envMap'), 'envMap'),
                combine: this.convertEnumModelToThree(this.get('combine'), 'combine'),
                reflectivity: this.get('reflectivity'),
                refractionRatio: this.get('refractionRatio'),
                fog: this.get('fog'),
                shading: this.convertEnumModelToThree(this.get('shading'), 'shading'),
                wireframe: this.get('wireframe'),
                wireframeLinewidth: this.get('wireframeLinewidth'),
                wireframeLinecap: this.get('wireframeLinecap'),
                wireframeLinejoin: this.get('wireframeLinejoin'),
                vertexColors: this.convertEnumModelToThree(this.get('vertexColors'), 'vertexColors'),
                skinning: this.get('skinning'),
                morphTargets: this.get('morphTargets'),
                morphNormals: this.get('morphNormals'),
            }
        );

    },

    createPropertiesArrays: function() {

        MaterialModel.prototype.createPropertiesArrays.call(this);
        this.three_properties.push('map');
        this.three_properties.push('lightMap');
        this.three_properties.push('aoMap');
        this.three_properties.push('emissiveMap');
        this.three_properties.push('bumpMap');
        this.three_properties.push('normalMap');
        this.three_properties.push('displacementMap');
        this.three_properties.push('specularMap');
        this.three_properties.push('alphaMap');
        this.three_properties.push('envMap');
        
        this.props_created_by_three['uuid'] = true;
        this.props_created_by_three['type'] = true;
        this.enum_property_types['combine'] = 'Operations';
        this.enum_property_types['shading'] = 'Shading';
        this.enum_property_types['vertexColors'] = 'Colors';

        this.property_converters['color'] = null;
        this.property_converters['specular'] = 'convertColor';
        this.property_converters['shininess'] = null;
        this.property_converters['map'] = 'convertThreeType';
        this.property_converters['lightMap'] = 'convertThreeType';
        this.property_converters['lightMapIntensity'] = null;
        this.property_converters['aoMap'] = 'convertThreeType';
        this.property_converters['aoMapIntensity'] = null;
        this.property_converters['emissive'] = 'convertColor';
        this.property_converters['emissiveMap'] = 'convertThreeType';
        this.property_converters['emissiveIntensity'] = null;
        this.property_converters['bumpMap'] = 'convertThreeType';
        this.property_converters['bumpScale'] = null;
        this.property_converters['normalMap'] = 'convertThreeType';
        this.property_converters['normalScale'] = 'convertVector';
        this.property_converters['displacementMap'] = 'convertThreeType';
        this.property_converters['displacementScale'] = null;
        this.property_converters['displacementBias'] = null;
        this.property_converters['specularMap'] = 'convertThreeType';
        this.property_converters['alphaMap'] = 'convertThreeType';
        this.property_converters['envMap'] = 'convertThreeType';
        this.property_converters['combine'] = 'convertEnum';
        this.property_converters['reflectivity'] = null;
        this.property_converters['refractionRatio'] = null;
        this.property_converters['fog'] = null;
        this.property_converters['shading'] = 'convertEnum';
        this.property_converters['wireframe'] = null;
        this.property_converters['wireframeLinewidth'] = null;
        this.property_converters['wireframeLinecap'] = null;
        this.property_converters['wireframeLinejoin'] = null;
        this.property_converters['vertexColors'] = 'convertEnum';
        this.property_converters['skinning'] = null;
        this.property_converters['morphTargets'] = null;
        this.property_converters['morphNormals'] = null;

    },

}, {

    serializers: _.extend({
        map: { deserialize: widgets.unpack_models },
        lightMap: { deserialize: widgets.unpack_models },
        aoMap: { deserialize: widgets.unpack_models },
        emissiveMap: { deserialize: widgets.unpack_models },
        bumpMap: { deserialize: widgets.unpack_models },
        normalMap: { deserialize: widgets.unpack_models },
        displacementMap: { deserialize: widgets.unpack_models },
        specularMap: { deserialize: widgets.unpack_models },
        alphaMap: { deserialize: widgets.unpack_models },
        envMap: { deserialize: widgets.unpack_models },
    }, MaterialModel.serializers),
    
});

var MeshPhongMaterialView = MaterialView.extend({});

module.exports = {
    MeshPhongMaterialView: MeshPhongMaterialView,
    MeshPhongMaterialModel: MeshPhongMaterialModel,
};