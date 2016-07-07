define(function( require, exports, module ){

function setOption(key, options) {
    options = options || {};

    var value = this.getOption(key) || options.default;

    if(!value && options.required)
        throw new Error("Missing required config:" + key)

    if(options.as) {
        this[as] = value;
    }
    else {
        this[key] = value;
    }
};

function proxySetOption(scope) {
    return setOption.bind(scope);
}

exports.setOption = setOption;
exports.proxySetOption = proxySetOption;

});