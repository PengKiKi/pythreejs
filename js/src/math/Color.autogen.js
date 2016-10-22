//
// This file auto-generated with generate-wrappers.js
// Date: Fri Oct 21 2016 17:17:07 GMT-0700 (PDT)
//

var _ = require('underscore');
var widgets = require('jupyter-js-widgets');

var ThreeModel = require('../_base/Three').ThreeModel;
var ThreeView = require('../_base/Three').ThreeView;


var ColorModel = ThreeModel.extend({

    defaults: _.extend({}, ThreeModel.prototype.defaults, {

        _view_name: 'ColorView',
        _model_name: 'ColorModel',

        r: 1,
        g: 1,
        b: 1,

    }),

    constructThreeObject: function() {

        return new THREE.Color(
            this.get('r'),
            this.get('g'),
            this.get('b')
        );

    },

    createPropertiesArrays: function() {

        ThreeModel.prototype.createPropertiesArrays.call(this);
        

        this.property_converters['r'] = null;
        this.property_converters['g'] = null;
        this.property_converters['b'] = null;

    },

});

var ColorView = ThreeView.extend({});

module.exports = {
    ColorView: ColorView,
    ColorModel: ColorModel,
};