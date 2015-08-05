'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function wrapAttached(viewModelClass) {

    var original = viewModelClass.prototype.attached;

    viewModelClass.prototype.attached = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        original.call.apply(original, [this].concat(args));
        console.log.apply(console, ['in custom decorator, rawr!'].concat(args));
    };

    console.log('decoratingTwice');
}

function materialize(viewModelClass) {

    if ('attached' in viewModelClass.prototype) {
        //console.error(`MATERIAL DECORATOR: ${viewModelClass.name} already has an ATTACHED handler; use {materializeHandler} decorator instead`);
        wrapAttached(viewModelClass);
    } else viewModelClass.prototype.attached = setupMDL;
}

var MyModel = (function () {
    function MyModel() {
        _classCallCheck(this, _MyModel);
    }

    _createClass(MyModel, [{
        key: 'attached',
        value: function attached(a, b) {
            console.log('in viewmodel attached:', a, b);
        }
    }]);

    var _MyModel = MyModel;
    MyModel = materialize(MyModel) || MyModel;
    return MyModel;
})();

var mm = new MyModel();
mm.attached('hi', 'there');