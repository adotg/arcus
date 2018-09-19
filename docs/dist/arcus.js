(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("arcus", [], factory);
	else if(typeof exports === 'object')
		exports["arcus"] = factory();
	else
		root["arcus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(75);

Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_create).default;
  }
});

var _creator = __webpack_require__(8);

Object.defineProperty(exports, "creator", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_creator).default;
  }
});

var _local = __webpack_require__(76);

Object.defineProperty(exports, "local", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_local).default;
  }
});

var _matcher = __webpack_require__(33);

Object.defineProperty(exports, "matcher", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_matcher).default;
  }
});

var _mouse = __webpack_require__(77);

Object.defineProperty(exports, "mouse", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mouse).default;
  }
});

var _namespace = __webpack_require__(16);

Object.defineProperty(exports, "namespace", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespace).default;
  }
});

var _namespaces = __webpack_require__(17);

Object.defineProperty(exports, "namespaces", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_namespaces).default;
  }
});

var _point = __webpack_require__(9);

Object.defineProperty(exports, "clientPoint", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_point).default;
  }
});

var _select = __webpack_require__(34);

Object.defineProperty(exports, "select", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_select).default;
  }
});

var _selectAll = __webpack_require__(78);

Object.defineProperty(exports, "selectAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectAll).default;
  }
});

var _index = __webpack_require__(1);

Object.defineProperty(exports, "selection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _selector = __webpack_require__(19);

Object.defineProperty(exports, "selector", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selector).default;
  }
});

var _selectorAll = __webpack_require__(38);

Object.defineProperty(exports, "selectorAll", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_selectorAll).default;
  }
});

var _style = __webpack_require__(37);

Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function get() {
    return _style.styleValue;
  }
});

var _touch = __webpack_require__(106);

Object.defineProperty(exports, "touch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touch).default;
  }
});

var _touches = __webpack_require__(107);

Object.defineProperty(exports, "touches", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touches).default;
  }
});

var _window = __webpack_require__(21);

Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_window).default;
  }
});

var _on = __webpack_require__(18);

Object.defineProperty(exports, "event", {
  enumerable: true,
  get: function get() {
    return _on.event;
  }
});
Object.defineProperty(exports, "customEvent", {
  enumerable: true,
  get: function get() {
    return _on.customEvent;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = undefined;
exports.Selection = Selection;

var _select = __webpack_require__(101);

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(102);

var _selectAll2 = _interopRequireDefault(_selectAll);

var _filter = __webpack_require__(90);

var _filter2 = _interopRequireDefault(_filter);

var _data = __webpack_require__(84);

var _data2 = _interopRequireDefault(_data);

var _enter = __webpack_require__(35);

var _enter2 = _interopRequireDefault(_enter);

var _exit = __webpack_require__(89);

var _exit2 = _interopRequireDefault(_exit);

var _merge = __webpack_require__(94);

var _merge2 = _interopRequireDefault(_merge);

var _order = __webpack_require__(97);

var _order2 = _interopRequireDefault(_order);

var _sort = __webpack_require__(104);

var _sort2 = _interopRequireDefault(_sort);

var _call = __webpack_require__(81);

var _call2 = _interopRequireDefault(_call);

var _nodes = __webpack_require__(96);

var _nodes2 = _interopRequireDefault(_nodes);

var _node = __webpack_require__(95);

var _node2 = _interopRequireDefault(_node);

var _size = __webpack_require__(103);

var _size2 = _interopRequireDefault(_size);

var _empty = __webpack_require__(88);

var _empty2 = _interopRequireDefault(_empty);

var _each = __webpack_require__(87);

var _each2 = _interopRequireDefault(_each);

var _attr = __webpack_require__(80);

var _attr2 = _interopRequireDefault(_attr);

var _style = __webpack_require__(37);

var _style2 = _interopRequireDefault(_style);

var _property = __webpack_require__(98);

var _property2 = _interopRequireDefault(_property);

var _classed = __webpack_require__(82);

var _classed2 = _interopRequireDefault(_classed);

var _text = __webpack_require__(105);

var _text2 = _interopRequireDefault(_text);

var _html = __webpack_require__(91);

var _html2 = _interopRequireDefault(_html);

var _raise = __webpack_require__(99);

var _raise2 = _interopRequireDefault(_raise);

var _lower = __webpack_require__(93);

var _lower2 = _interopRequireDefault(_lower);

var _append = __webpack_require__(79);

var _append2 = _interopRequireDefault(_append);

var _insert = __webpack_require__(92);

var _insert2 = _interopRequireDefault(_insert);

var _remove = __webpack_require__(100);

var _remove2 = _interopRequireDefault(_remove);

var _clone = __webpack_require__(83);

var _clone2 = _interopRequireDefault(_clone);

var _datum = __webpack_require__(85);

var _datum2 = _interopRequireDefault(_datum);

var _on = __webpack_require__(18);

var _on2 = _interopRequireDefault(_on);

var _dispatch = __webpack_require__(86);

var _dispatch2 = _interopRequireDefault(_dispatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = exports.root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  data: _data2.default,
  enter: _enter2.default,
  exit: _exit2.default,
  merge: _merge2.default,
  order: _order2.default,
  sort: _sort2.default,
  call: _call2.default,
  nodes: _nodes2.default,
  node: _node2.default,
  size: _size2.default,
  empty: _empty2.default,
  each: _each2.default,
  attr: _attr2.default,
  style: _style2.default,
  property: _property2.default,
  classed: _classed2.default,
  text: _text2.default,
  html: _html2.default,
  raise: _raise2.default,
  lower: _lower2.default,
  append: _append2.default,
  insert: _insert2.default,
  remove: _remove2.default,
  clone: _clone2.default,
  datum: _datum2.default,
  on: _on2.default,
  dispatch: _dispatch2.default
};

exports.default = selection;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = undefined;

exports.default = function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

exports.init = init;
exports.set = set;
exports.get = get;

var _d3Dispatch = __webpack_require__(51);

var _d3Timer = __webpack_require__(39);

var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "interrupt");
var emptyTween = [];

var CREATED = exports.CREATED = 0;
var SCHEDULED = exports.SCHEDULED = 1;
var STARTING = exports.STARTING = 2;
var STARTED = exports.STARTED = 3;
var RUNNING = exports.RUNNING = 4;
var ENDING = exports.ENDING = 5;
var ENDED = exports.ENDED = 6;

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0, _d3Timer.timeout)(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          delete schedules[i];
        }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0, _d3Timer.timeout)(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = Transition;
exports.default = transition;
exports.newId = newId;

var _d3Selection = __webpack_require__(0);

var _attr = __webpack_require__(115);

var _attr2 = _interopRequireDefault(_attr);

var _attrTween = __webpack_require__(116);

var _attrTween2 = _interopRequireDefault(_attrTween);

var _delay = __webpack_require__(117);

var _delay2 = _interopRequireDefault(_delay);

var _duration = __webpack_require__(118);

var _duration2 = _interopRequireDefault(_duration);

var _ease = __webpack_require__(119);

var _ease2 = _interopRequireDefault(_ease);

var _filter = __webpack_require__(120);

var _filter2 = _interopRequireDefault(_filter);

var _merge = __webpack_require__(121);

var _merge2 = _interopRequireDefault(_merge);

var _on = __webpack_require__(122);

var _on2 = _interopRequireDefault(_on);

var _remove = __webpack_require__(123);

var _remove2 = _interopRequireDefault(_remove);

var _select = __webpack_require__(124);

var _select2 = _interopRequireDefault(_select);

var _selectAll = __webpack_require__(125);

var _selectAll2 = _interopRequireDefault(_selectAll);

var _selection = __webpack_require__(126);

var _selection2 = _interopRequireDefault(_selection);

var _style = __webpack_require__(127);

var _style2 = _interopRequireDefault(_style);

var _styleTween = __webpack_require__(128);

var _styleTween2 = _interopRequireDefault(_styleTween);

var _text = __webpack_require__(129);

var _text2 = _interopRequireDefault(_text);

var _transition = __webpack_require__(130);

var _transition2 = _interopRequireDefault(_transition);

var _tween = __webpack_require__(10);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0, _d3Selection.selection)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = _d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select2.default,
  selectAll: _selectAll2.default,
  filter: _filter2.default,
  merge: _merge2.default,
  selection: _selection2.default,
  transition: _transition2.default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on2.default,
  attr: _attr2.default,
  attrTween: _attrTween2.default,
  style: _style2.default,
  styleTween: _styleTween2.default,
  text: _text2.default,
  remove: _remove2.default,
  tween: _tween2.default,
  delay: _delay2.default,
  duration: _duration2.default,
  ease: _ease2.default
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(11);

Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});
Object.defineProperty(exports, "rgb", {
  enumerable: true,
  get: function get() {
    return _color.rgb;
  }
});
Object.defineProperty(exports, "hsl", {
  enumerable: true,
  get: function get() {
    return _color.hsl;
  }
});

var _lab = __webpack_require__(50);

Object.defineProperty(exports, "lab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});
Object.defineProperty(exports, "hcl", {
  enumerable: true,
  get: function get() {
    return _lab.hcl;
  }
});
Object.defineProperty(exports, "lch", {
  enumerable: true,
  get: function get() {
    return _lab.lch;
  }
});
Object.defineProperty(exports, "gray", {
  enumerable: true,
  get: function get() {
    return _lab.gray;
  }
});

var _cubehelix = __webpack_require__(49);

Object.defineProperty(exports, "cubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var resolver = exports.resolver = function resolver(frames, config) {
    var frameMap = {};
    for (var i = 0, frame; frame = frames[i++];) {
        frameMap[frame.source.name] = {
            inst: frame,
            nodeMap: frame.nodes.reduce(function (store, node) {
                store[node.name] = {
                    inst: node
                };
                return store;
            }, {})
        };
    }

    return function (path) {
        path = path.split(config.delimiter);
        return frameMap[path[0]].nodeMap[path[1]].inst;
    };
};

var EdgeDirection = exports.EdgeDirection = {
    FORWARD: 1,
    BACKWARD: -1
};

var edgeOrderCode = exports.edgeOrderCode = function edgeOrderCode(edge) {
    if (edge.to.pOrder - edge.from.pOrder === 0) {
        if (edge.to.order - edge.from.order > 0) {
            return EdgeDirection.FORWARD;
        }

        return EdgeDirection.BACKWARD;
    } else if (edge.to.pOrder - edge.from.pOrder > 0) {
        return EdgeDirection.FORWARD;
    }

    return EdgeDirection.BACKWARD;
};

var hashCode = exports.hashCode = function hashCode(str) {
    var hash = 0;
    var i = void 0;
    var chr = void 0;
    if (str.length === 0) {
        return hash;
    }

    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};

var difference = exports.difference = function difference(obj, subsetKey, pluck) {
    var arr = [];
    for (var key in obj) {
        if (key === subsetKey) {
            continue;
        }

        arr.push.apply(arr, _toConsumableArray(obj[key][pluck]));
    }

    return arr;
};

var union = exports.union = function union(obj, pluck) {
    var arr = [];
    for (var key in obj) {
        arr.push.apply(arr, _toConsumableArray(obj[key][pluck]));
    }

    return arr;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hue = hue;
exports.gamma = gamma;
exports.default = nogamma;

var _constant = __webpack_require__(28);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : (0, _constant2.default)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0, _constant2.default)(isNaN(a) ? b : a);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return a + b * t;
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var fullname = (0, _namespace2.default)(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

var _namespace = __webpack_require__(16);

var _namespace2 = _interopRequireDefault(_namespace);

var _namespaces = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces.xhtml && document.documentElement.namespaceURI === _namespaces.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0, _schedule.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

exports.tweenValue = tweenValue;

var _schedule = __webpack_require__(2);

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = (0, _schedule.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function () {
    var schedule = (0, _schedule.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function (node) {
    return (0, _schedule.get)(node, id).value[name];
  };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brighter = exports.darker = undefined;
exports.Color = Color;
exports.default = color;
exports.rgbConvert = rgbConvert;
exports.rgb = rgb;
exports.Rgb = Rgb;
exports.hslConvert = hslConvert;
exports.hsl = hsl;

var _define = __webpack_require__(12);

var _define2 = _interopRequireDefault(_define);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Color() {}

var _darker = 0.7;
exports.darker = _darker;
var _brighter = 1 / _darker;

exports.brighter = _brighter;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0, _define2.default)(Color, color, {
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: function hex() {
    return this.rgb().hex();
  },
  toString: function toString() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Rgb, rgb, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: function hex() {
    return "#" + _hex(this.r) + _hex(this.g) + _hex(this.b);
  },
  toString: function toString() {
    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function _hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hsl, hsl, (0, _define.extend)(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

exports.extend = extend;
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) {
    prototype[key] = definition[key];
  }return prototype;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _value = __webpack_require__(15);

Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_value).default;
  }
});

var _array = __webpack_require__(26);

Object.defineProperty(exports, "interpolateArray", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_array).default;
  }
});

var _basis = __webpack_require__(14);

Object.defineProperty(exports, "interpolateBasis", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basis).default;
  }
});

var _basisClosed = __webpack_require__(27);

Object.defineProperty(exports, "interpolateBasisClosed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_basisClosed).default;
  }
});

var _date = __webpack_require__(29);

Object.defineProperty(exports, "interpolateDate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_date).default;
  }
});

var _number = __webpack_require__(7);

Object.defineProperty(exports, "interpolateNumber", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_number).default;
  }
});

var _object = __webpack_require__(30);

Object.defineProperty(exports, "interpolateObject", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_object).default;
  }
});

var _round = __webpack_require__(69);

Object.defineProperty(exports, "interpolateRound", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_round).default;
  }
});

var _string = __webpack_require__(32);

Object.defineProperty(exports, "interpolateString", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _index = __webpack_require__(71);

Object.defineProperty(exports, "interpolateTransformCss", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformCss;
  }
});
Object.defineProperty(exports, "interpolateTransformSvg", {
  enumerable: true,
  get: function get() {
    return _index.interpolateTransformSvg;
  }
});

var _zoom = __webpack_require__(73);

Object.defineProperty(exports, "interpolateZoom", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_zoom).default;
  }
});

var _rgb = __webpack_require__(31);

Object.defineProperty(exports, "interpolateRgb", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rgb).default;
  }
});
Object.defineProperty(exports, "interpolateRgbBasis", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasis;
  }
});
Object.defineProperty(exports, "interpolateRgbBasisClosed", {
  enumerable: true,
  get: function get() {
    return _rgb.rgbBasisClosed;
  }
});

var _hsl = __webpack_require__(65);

Object.defineProperty(exports, "interpolateHsl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hsl).default;
  }
});
Object.defineProperty(exports, "interpolateHslLong", {
  enumerable: true,
  get: function get() {
    return _hsl.hslLong;
  }
});

var _lab = __webpack_require__(66);

Object.defineProperty(exports, "interpolateLab", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lab).default;
  }
});

var _hcl = __webpack_require__(64);

Object.defineProperty(exports, "interpolateHcl", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hcl).default;
  }
});
Object.defineProperty(exports, "interpolateHclLong", {
  enumerable: true,
  get: function get() {
    return _hcl.hclLong;
  }
});

var _cubehelix = __webpack_require__(63);

Object.defineProperty(exports, "interpolateCubehelix", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cubehelix).default;
  }
});
Object.defineProperty(exports, "interpolateCubehelixLong", {
  enumerable: true,
  get: function get() {
    return _cubehelix.cubehelixLong;
  }
});

var _piecewise = __webpack_require__(67);

Object.defineProperty(exports, "piecewise", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_piecewise).default;
  }
});

var _quantize = __webpack_require__(68);

Object.defineProperty(exports, "quantize", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_quantize).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basis = basis;

exports.default = function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
    var t = typeof b === "undefined" ? "undefined" : _typeof(b),
        c;
    return b == null || t === "boolean" ? (0, _constant2.default)(b) : (t === "number" ? _number2.default : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgb2.default) : _string2.default : b instanceof _d3Color.color ? _rgb2.default : b instanceof Date ? _date2.default : Array.isArray(b) ? _array2.default : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object2.default : _number2.default)(a, b);
};

var _d3Color = __webpack_require__(4);

var _rgb = __webpack_require__(31);

var _rgb2 = _interopRequireDefault(_rgb);

var _array = __webpack_require__(26);

var _array2 = _interopRequireDefault(_array);

var _date = __webpack_require__(29);

var _date2 = _interopRequireDefault(_date);

var _number = __webpack_require__(7);

var _number2 = _interopRequireDefault(_number);

var _object = __webpack_require__(30);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(32);

var _string2 = _interopRequireDefault(_string);

var _constant = __webpack_require__(28);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces2.default.hasOwnProperty(prefix) ? { space: _namespaces2.default[prefix], local: name } : name;
};

var _namespaces = __webpack_require__(17);

var _namespaces2 = _interopRequireDefault(_namespaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xhtml = exports.xhtml = "http://www.w3.org/1999/xhtml";

exports.default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (typename, value, capture) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, capture));
  }return this;
};

exports.customEvent = customEvent;
var filterEvents = {};

var event = exports.event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function (event) {
    var related = event.relatedTarget;
    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function (event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    exports.event = event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name: name };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function (d, i, group) {
    var on = this.__on,
        o,
        listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  exports.event = event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event = event0;
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
};

function none() {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var current = _on.event,
      source;
  while (source = current.sourceEvent) {
    current = source;
  }return current;
};

var _on = __webpack_require__(18);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node // node is a Window
    || node.defaultView; // node is a Document
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.now = now;
exports.Timer = Timer;
exports.timer = timer;
exports.timerFlush = timerFlush;
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead,
      e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bezier = __webpack_require__(132);

var _bezier2 = _interopRequireDefault(_bezier);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var flattenToLine = function flattenToLine(path) {
    path = path.split(/\s+/);

    for (var i = 4, l = path.length; i < l; i++) {
        if (!(i % 2)) {
            path[i] = 0;
        }
    }

    return path.join(' ');
};

var Edge = function () {
    function Edge(from, to, key, meta) {
        _classCallCheck(this, Edge);

        this.from = from;
        this.to = to;
        this.key = key;
        this.meta = meta;
        this.sequence = null;
        this.shift = null;

        var path = meta.path;
        this._seqStr = path[0] + '-' + path[1];
        this._seqHash = (0, _utils.hashCode)(this._seqStr);
        this._options = {
            path: this.constructor.pathOptions()
        };
        this._partOf = null;
        this._target = null;
        this.pathHist = [];
    }

    _createClass(Edge, [{
        key: 'seqStr',
        value: function seqStr() {
            return this._seqStr;
        }
    }, {
        key: 'seqHash',
        value: function seqHash() {
            return this._seqHash;
        }
    }, {
        key: 'partOf',
        value: function partOf() {
            if (arguments.length) {
                this._partOf = arguments.length <= 0 ? undefined : arguments[0];
                return this;
            }

            return this._partOf;
        }
    }, {
        key: 'pathOptions',
        value: function pathOptions() {
            if (arguments.length) {
                this._options.path = Object.assign({}, this._options.path, arguments.length <= 0 ? undefined : arguments[0]);
                return this;
            }

            return this._options.path;
        }
    }, {
        key: 'jump',
        value: function jump() {
            return Math.abs(this.to.absOrder - this.from.absOrder);
        }
    }, {
        key: 'path',
        value: function path() {
            var control = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { breathingSpace: 0 };

            var expFact = this._options.path.expansionFactor;
            var movement = this.sequence * expFact;
            var fpx = this.from.px();
            var tpx = this.to.px();
            var r = (tpx - fpx) * 0.75 + movement + control.breathingSpace + this.shift * 8;

            var inst = new _bezier2.default(0, fpx, r, fpx, r, tpx, 0, tpx);
            var path = inst.toSVG();
            var hist = this.pathHist;

            if (hist.length === 0) {
                hist[0] = { path: flattenToLine(path) };
            } else {
                hist[0] = hist[1];
            }
            hist[1] = { path: path, inst: inst };

            return [path, this];
        }
    }, {
        key: 'r',
        value: function r() {
            var control = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { breathingSpace: 0 };

            var expFact = this._options.path.expansionFactor;
            var movement = this.sequence * expFact;
            var fpx = this.from.px();
            var tpx = this.to.px();
            return (tpx - fpx) * 0.75 + movement + control.breathingSpace + this.shift * 8;
        }
    }, {
        key: 'reversePath',
        value: function reversePath() {
            var control = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { breathingSpace: 0 };

            var expFact = this._options.path.expansionFactor;
            var movement = this.sequence * expFact;
            var fpx = this.from.px();
            var tpx = this.to.px();
            var r = (tpx - fpx) * 0.75 + movement + control.breathingSpace + this.shift * 8;

            return [new _bezier2.default(0, tpx, r, tpx, r, fpx, 0, fpx).toSVG(), this];
        }
    }, {
        key: 'distance',
        value: function distance(point) {
            return this.pathHist[1].inst.project({
                x: point[0],
                y: point[1]
            });
        }
    }], [{
        key: 'pathOptions',
        value: function pathOptions() {
            return {
                expansionFactor: 8,
                focus: Edge.FocusMode.NA,
                select: Edge.SelectMode.NA
            };
        }
    }]);

    return Edge;
}();

exports.default = Edge;


Edge.FocusMode = {
    FOCUSED: 1,
    UNFOCUSED: -1,
    NA: 0
};

Edge.SelectMode = {
    ON: 1,
    OFF: -1,
    NA: 0
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deg2rad = exports.deg2rad = Math.PI / 180;
var rad2deg = exports.rad2deg = 180 / Math.PI;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linear = __webpack_require__(59);

Object.defineProperty(exports, "easeLinear", {
  enumerable: true,
  get: function get() {
    return _linear.linear;
  }
});

var _quad = __webpack_require__(61);

Object.defineProperty(exports, "easeQuad", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});
Object.defineProperty(exports, "easeQuadIn", {
  enumerable: true,
  get: function get() {
    return _quad.quadIn;
  }
});
Object.defineProperty(exports, "easeQuadOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadOut;
  }
});
Object.defineProperty(exports, "easeQuadInOut", {
  enumerable: true,
  get: function get() {
    return _quad.quadInOut;
  }
});

var _cubic = __webpack_require__(56);

Object.defineProperty(exports, "easeCubic", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});
Object.defineProperty(exports, "easeCubicIn", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicIn;
  }
});
Object.defineProperty(exports, "easeCubicOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicOut;
  }
});
Object.defineProperty(exports, "easeCubicInOut", {
  enumerable: true,
  get: function get() {
    return _cubic.cubicInOut;
  }
});

var _poly = __webpack_require__(60);

Object.defineProperty(exports, "easePoly", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});
Object.defineProperty(exports, "easePolyIn", {
  enumerable: true,
  get: function get() {
    return _poly.polyIn;
  }
});
Object.defineProperty(exports, "easePolyOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyOut;
  }
});
Object.defineProperty(exports, "easePolyInOut", {
  enumerable: true,
  get: function get() {
    return _poly.polyInOut;
  }
});

var _sin = __webpack_require__(62);

Object.defineProperty(exports, "easeSin", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});
Object.defineProperty(exports, "easeSinIn", {
  enumerable: true,
  get: function get() {
    return _sin.sinIn;
  }
});
Object.defineProperty(exports, "easeSinOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinOut;
  }
});
Object.defineProperty(exports, "easeSinInOut", {
  enumerable: true,
  get: function get() {
    return _sin.sinInOut;
  }
});

var _exp = __webpack_require__(58);

Object.defineProperty(exports, "easeExp", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});
Object.defineProperty(exports, "easeExpIn", {
  enumerable: true,
  get: function get() {
    return _exp.expIn;
  }
});
Object.defineProperty(exports, "easeExpOut", {
  enumerable: true,
  get: function get() {
    return _exp.expOut;
  }
});
Object.defineProperty(exports, "easeExpInOut", {
  enumerable: true,
  get: function get() {
    return _exp.expInOut;
  }
});

var _circle = __webpack_require__(55);

Object.defineProperty(exports, "easeCircle", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});
Object.defineProperty(exports, "easeCircleIn", {
  enumerable: true,
  get: function get() {
    return _circle.circleIn;
  }
});
Object.defineProperty(exports, "easeCircleOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleOut;
  }
});
Object.defineProperty(exports, "easeCircleInOut", {
  enumerable: true,
  get: function get() {
    return _circle.circleInOut;
  }
});

var _bounce = __webpack_require__(54);

Object.defineProperty(exports, "easeBounce", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceIn", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceIn;
  }
});
Object.defineProperty(exports, "easeBounceOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceInOut", {
  enumerable: true,
  get: function get() {
    return _bounce.bounceInOut;
  }
});

var _back = __webpack_require__(53);

Object.defineProperty(exports, "easeBack", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});
Object.defineProperty(exports, "easeBackIn", {
  enumerable: true,
  get: function get() {
    return _back.backIn;
  }
});
Object.defineProperty(exports, "easeBackOut", {
  enumerable: true,
  get: function get() {
    return _back.backOut;
  }
});
Object.defineProperty(exports, "easeBackInOut", {
  enumerable: true,
  get: function get() {
    return _back.backInOut;
  }
});

var _elastic = __webpack_require__(57);

Object.defineProperty(exports, "easeElastic", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticIn", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticIn;
  }
});
Object.defineProperty(exports, "easeElasticOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticInOut", {
  enumerable: true,
  get: function get() {
    return _elastic.elasticInOut;
  }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = (0, _value2.default)(a[i], b[i]);
  }for (; i < nb; ++i) {
    c[i] = b[i];
  }return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }return c;
  };
};

var _value = __webpack_require__(15);

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0, _basis.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
};

var _basis = __webpack_require__(14);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var d = new Date();
  return a = +a, b -= a, function (t) {
    return d.setTime(a + b * t), d;
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
  if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0, _value2.default)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }return c;
  };
};

var _value = __webpack_require__(15);

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbBasisClosed = exports.rgbBasis = undefined;

var _d3Color = __webpack_require__(4);

var _basis = __webpack_require__(14);

var _basis2 = _interopRequireDefault(_basis);

var _basisClosed = __webpack_require__(27);

var _basisClosed2 = _interopRequireDefault(_basisClosed);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function rgbGamma(y) {
  var color = (0, _color.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
}(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;
    for (i = 0; i < n; ++i) {
      color = (0, _d3Color.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = exports.rgbBasis = rgbSpline(_basis2.default);
var rgbBasisClosed = exports.rgbBasisClosed = rgbSpline(_basisClosed2.default);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: (0, _number2.default)(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }return s.join("");
  });
};

var _number = __webpack_require__(7);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var matcher = function matcher(selector) {
  return function () {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
    matcher = function matcher(selector) {
      return function () {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

exports.default = matcher;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([[document.querySelector(selector)]], [document.documentElement]) : new _index.Selection([[selector]], _index.root);
};

var _index = __webpack_require__(1);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._enter || this._groups.map(_sparse2.default), this._parents);
};

exports.EnterNode = EnterNode;

var _sparse = __webpack_require__(36);

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (update) {
  return new Array(update.length);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};

exports.styleValue = styleValue;

var _window = __webpack_require__(21);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name) || (0, _window2.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
};

function empty() {
  return [];
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(22);

Object.defineProperty(exports, "now", {
  enumerable: true,
  get: function get() {
    return _timer.now;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function get() {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "timerFlush", {
  enumerable: true,
  get: function get() {
    return _timer.timerFlush;
  }
});

var _timeout = __webpack_require__(109);

Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeout).default;
  }
});

var _interval = __webpack_require__(108);

Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interval).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;continue;
    }
    active = schedule.state > _schedule.STARTING && schedule.state < _schedule.ENDING;
    schedule.state = _schedule.ENDED;
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
};

var _schedule = __webpack_require__(2);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, b) {
    var c;
    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
};

var _d3Color = __webpack_require__(4);

var _d3Interpolate = __webpack_require__(13);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
	value: true
});
var lib = {
	init: function init(win) {
		var doc = win.document,
		    nav = win.navigator,
		    userAgent = nav.userAgent,
		    DIV = 'DIV',
		    ceil = Math.ceil,
		    floor = Math.floor,
		    containerInstanceCount = 0,
		    clsNameSpace = 'fusioncharts-smartlabel-',
		    containerClass = clsNameSpace + 'container',
		    classNameWithTag = clsNameSpace + 'tag',
		    classNameWithTagBR = clsNameSpace + 'br';

		lib = {
			win: win,

			containerClass: containerClass,

			classNameWithTag: classNameWithTag,

			classNameWithTagBR: classNameWithTagBR,

			maxDefaultCacheLimit: 500,

			classNameReg: new RegExp('\b' + classNameWithTag + '\b'),

			classNameBrReg: new RegExp('\b' + classNameWithTagBR + '\b'),

			spanAdditionRegx: /(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig,

			spanAdditionReplacer: '$1<span class="' + classNameWithTag + '">$2</span>',

			spanRemovalRegx: new RegExp('\\<span[^\\>]+?' + classNameWithTag + '[^\\>]{0,}\\>(.*?)\\<\\/span\\>', 'ig'),

			xmlTagRegEx: new RegExp('<[^>][^<]*[^>]+>', 'i'),

			ltgtRegex: /&lt;|&gt;/g,

			brReplaceRegex: /<br\/>/ig,

			testStrAvg: 'WgI',

			// This style is applied over the parent smartlabel container. The container is kept hidden from the viewport
			parentContainerStyle: {
				position: 'absolute',
				top: '-9999em',
				whiteSpace: 'nowrap',
				padding: '0px',
				width: '1px',
				height: '1px',
				overflow: 'hidden'
			},

			// All the style which might affect the text metrics
			supportedStyle: {
				font: 'font',
				fontFamily: 'font-family',
				'font-family': 'font-family',
				fontWeight: 'font-weight',
				'font-weight': 'font-weight',
				fontSize: 'font-size',
				'font-size': 'font-size',
				lineHeight: 'line-height',
				'line-height': 'line-height',
				fontStyle: 'font-style',
				'font-style': 'font-style'
			},

			// Get the support list for html the document where the text calcution is to be done.
			getDocumentSupport: function getDocumentSupport() {
				var childRetriverFn, childRetriverString, noClassTesting;

				if (doc.getElementsByClassName) {
					childRetriverFn = 'getElementsByClassName';
					childRetriverString = classNameWithTag;
					noClassTesting = true;
				} else {
					childRetriverFn = 'getElementsByTagName';
					childRetriverString = 'span';
					noClassTesting = false;
				}

				return {
					isIE: /msie/i.test(userAgent) && !win.opera,
					hasSVG: Boolean(win.SVGAngle || doc.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')),
					isHeadLess: new RegExp(' HtmlUnit').test(userAgent),
					isWebKit: new RegExp(' AppleWebKit/').test(userAgent),
					childRetriverFn: childRetriverFn,
					childRetriverString: childRetriverString,
					noClassTesting: noClassTesting
				};
			},

			/*
    * Create a html div element and attach it with a parent. All the subsequent operations are performed
    * by upding this dom tree only.
    *
    * @param {HTMLElement} - The html element where the newly created div is to be attached. If not passed,
    *                      the new div is appended on the body.
    */
			createContainer: function createContainer(containerParent) {
				var body, container;

				if (containerParent && (containerParent.offsetWidth || containerParent.offsetHeight)) {
					if (containerParent.appendChild) {
						containerParent.appendChild(container = doc.createElement(DIV));
						container.className = containerClass;
						container.setAttribute('aria-hidden', 'true');
						container.setAttribute('role', 'presentation');
						return container;
					}
				} else {
					body = doc.getElementsByTagName('body')[0];

					if (body && body.appendChild) {
						container = doc.createElement(DIV);
						container.className = containerClass;
						container.setAttribute('aria-hidden', 'true');
						container.setAttribute('role', 'presentation');
						containerInstanceCount += 1;
						body.appendChild(container);
						return container;
					}
				}
			},

			// Finds a approximate position where the text is to be broken
			getNearestBreakIndex: function getNearestBreakIndex(text, maxWidth, sl) {
				if (!text || !text.length) {
					return 0;
				}

				var difference,
				    getWidth = sl._getWidthFn(),
				    charLen = 0,
				    increment = 0,
				    oriWidth = getWidth(text),
				    avgWidth = oriWidth / text.length;

				difference = maxWidth;
				charLen = ceil(maxWidth / avgWidth);

				if (oriWidth < maxWidth) {
					return text.length - 1;
				}

				if (charLen > text.length) {
					difference = maxWidth - oriWidth;
					charLen = text.length;
				}

				while (difference > 0) {
					difference = maxWidth - getWidth(text.substr(0, charLen));
					increment = floor(difference / avgWidth);
					if (increment) {
						charLen += increment;
					} else {
						return charLen;
					}
				}

				while (difference < 0) {
					difference = maxWidth - getWidth(text.substr(0, charLen));
					increment = floor(difference / avgWidth);
					if (increment) {
						charLen += increment;
					} else {
						return charLen;
					}
				}
				return charLen;
			},

			/*
    * Determine lineheight of a text for a given style. It adds propery lineHeight to the style passed
    *
    * @param {Object} - The style based on which the text's metric needs to be calculated. The calculation happens
    *                  based on fontSize property, if its not present a default font size is assumed.
    *
    * @return {Object} - The style that was passed with lineHeight as a named propery set on the object.
    */
			setLineHeight: function setLineHeight(styleObj) {
				var fSize = styleObj.fontSize = styleObj.fontSize || '12px';
				styleObj.lineHeight = styleObj.lineHeight || styleObj['line-height'] || parseInt(fSize, 10) * 1.2 + 'px';
				return styleObj;
			}
		};

		return lib;
	}
};

exports['default'] = lib;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var _lib = __webpack_require__(42);

var _lib2 = _interopRequireDefault(_lib);

var _containerManager = __webpack_require__(131);

var _containerManager2 = _interopRequireDefault(_containerManager);

var slLib = _lib2['default'].init(typeof window !== "undefined" ? window : undefined),
    doc = slLib.win.document,
    M = slLib.win.Math,
    max = M.max,
    round = M.round,
    BLANK = '',
    htmlSplCharSpace = { ' ': '&nbsp;' },
    documentSupport = slLib.getDocumentSupport(),
    SVG_BBOX_CORRECTION = documentSupport.isWebKit ? 0 : 4.5;

/*
 * Create new instance of SmartLabelManager.
 *
 * SmartLabelManager controls the lifetime of the execution space where the text's metrics will be calculated.
 * This takes a string for a given style and returns the height, width.
 * If a bound box is defined it wraps the text and returns the wrapped height and width.
 * It allows to append ellipsis at the end if the text is truncated.
 *
 * @param {String | Number} id - Id of the instance. If the same id is passed, it disposes the old instance and
 *                              save the new one;
 * @param {String | HTMLElement} container - The id or the instance of the container where the intermediate dom
 *                              elements are to be attached. If not passed, it appends in div
 *
 * @param {Boolean} useEllipses - This decides if a ellipses to be appended if the text is truncated.
 * @param {Object} options - Control options
 *                          {
 *                              maxCacheLimit: No of letter to be cached. Default: 500.
 *                          }
 * @constructor
 */
function SmartLabelManager(id, container, useEllipses, options) {
    var wrapper,
        prop,
        max,
        prevInstance,
        isBrowserLess = false,
        store = SmartLabelManager.store;

    if (typeof id === 'undefined' || (typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
        return;
    }

    if (prevInstance = store[id]) {
        prevInstance.dispose();
    }

    store[id] = this;
    options = options || {};
    options.maxCacheLimit = isFinite(max = options.maxCacheLimit) ? max : slLib.maxDefaultCacheLimit;

    if (typeof container === 'string') {
        container = doc.getElementById(container);
    }

    wrapper = slLib.createContainer(container);
    wrapper.innerHTML = slLib.testStrAvg;

    if (documentSupport.isHeadLess || !documentSupport.isIE && !wrapper.offsetHeight && !wrapper.offsetWidth) {
        isBrowserLess = true;
    }

    wrapper.innerHTML = '';
    for (prop in slLib.parentContainerStyle) {
        wrapper.style[prop] = slLib.parentContainerStyle[prop];
    }

    this.id = id;
    this.parentContainer = wrapper;

    this._containerManager = new _containerManager2['default'](wrapper, isBrowserLess, 10);
    this._showNoEllipses = !useEllipses;
    this._init = true;
    this.style = {};
    this.options = options;

    this.setStyle();
}

/*
 * getSmartText returns the text separated by <br/> whenever a break is necessary. This is to recgonize one
 * generalized format independent of the implementation (canvas based solution, svg based solution). This method
 * converts the output of getSmartText().text to array of lines if the text is wrapped. It sets a named property
 * `lines` on the object passed as parameter.
 *
 * @param {Object} smartlabel - the object returned by getSmartText based on which line arr which to be formed.
 *
 * @return {Object} - The same object which was passed in the arguments. Also a named property `lines` is set.
 */
SmartLabelManager.textToLines = function (smartlabel) {
    smartlabel = smartlabel || {};

    if (!smartlabel.text) {
        smartlabel.text = '';
    } else if (typeof smartlabel.text !== 'string') {
        smartlabel.text = smartlabel.text.toString();
    }

    smartlabel.lines = smartlabel.text.split(/\n|<br\s*?\/?>/ig);
    return smartlabel;
};

// Saves all the instance created so far
SmartLabelManager.store = {};

// Calculates space taken by a character with an approximation value which is calculated by repeating the
// character by string length times.
SmartLabelManager.prototype._calCharDimWithCache = function (text, calculateDifference, length) {
    if (!this._init) {
        return false;
    }

    var size,
        csArr,
        tw,
        twi,
        cachedStyle,
        asymmetricDifference,
        maxAdvancedCacheLimit = this.options.maxCacheLimit,
        container = this._container,
        style = this.style || {},
        cache = this._advancedCache || (this._advancedCache = {}),
        advancedCacheKey = this._advancedCacheKey || (this._advancedCacheKey = []),
        cacheName = text + (style.fontSize || BLANK) + (style.fontFamily || BLANK) + (style.fontWeight || BLANK) + (style.fontStyle || BLANK),
        cacheInitName = text + 'init' + (style.fontSize || BLANK) + (style.fontFamily || BLANK) + (style.fontWeight || BLANK) + (style.fontStyle || BLANK);

    htmlSplCharSpace[text] && (text = htmlSplCharSpace[text]);

    if (!calculateDifference) {
        asymmetricDifference = 0;
    } else {
        if ((asymmetricDifference = cache[cacheInitName]) === undefined) {
            container.innerHTML = text.repeat ? text.repeat(length) : Array(length + 1).join(text); // jshint ignore:line
            tw = container.offsetWidth;

            container.innerHTML = text;
            twi = container.offsetWidth;

            asymmetricDifference = cache[cacheInitName] = (tw - length * twi) / (length + 1);
            advancedCacheKey.push(cacheInitName);
            if (advancedCacheKey.length > maxAdvancedCacheLimit) {
                delete cache[advancedCacheKey.shift()];
            }
        }
    }

    if (cachedStyle = cache[cacheName]) {
        csArr = cachedStyle.split(',');
        return {
            width: parseFloat(csArr[0], 10),
            height: parseFloat(csArr[1], 10)
        };
    }

    container.innerHTML = text;

    size = {
        height: container.offsetHeight,
        width: container.offsetWidth + asymmetricDifference
    };

    cache[cacheName] = size.width + ',' + size.height;
    advancedCacheKey.push(cacheName);
    if (advancedCacheKey.length > maxAdvancedCacheLimit) {
        delete cache[advancedCacheKey.shift()];
    }

    return size;
};

// Provide function to calculate the height and width based on the environment and available support from dom.
SmartLabelManager.prototype._getWidthFn = function () {
    var contObj = this._containerObj,
        container = this._container,
        svgText = contObj.svgText;

    if (svgText) {
        return function (str) {
            var bbox, width;

            svgText.textContent = str;
            bbox = svgText.getBBox();
            width = bbox.width - SVG_BBOX_CORRECTION;
            if (width < 1) {
                width = bbox.width;
            }

            return width;
        };
    } else {
        return function (str) {
            container.innerHTML = str;
            return container.offsetWidth;
        };
    }
};

/*
 * Sets the style based on which the text's metrics to be calculated.
 *
 * @param {Object} style - The style object which affects the text size
 *                      {
 *                          fontSize / 'font-size' : MUST BE FOLLOWED BY PX (10px, 11px)
 *                          fontFamily / 'font-family'
 *                          fontWeight / 'font-weight'
 *                          fontStyle / 'font-style'
 *                      }
 *
 * @return {SmartLabelManager} - Current instance of SmartLabelManager
 */
SmartLabelManager.prototype.setStyle = function (style) {
    if (!this._init) {
        return this;
    }

    var sCont;

    if (style === this.style && !this._styleNotSet) {
        return;
    }

    if (!style) {
        style = this.style;
    }

    slLib.setLineHeight(style);
    this.style = style;

    this._containerObj = sCont = this._containerManager.get(style);

    if (this._containerObj) {
        this._container = sCont.node;
        this._context = sCont.context;
        this._cache = sCont.charCache;
        this._lineHeight = sCont.lineHeight;
        this._styleNotSet = false;
    } else {
        this._styleNotSet = true;
    }

    return this;
};

/*
 * Decides whether ellipses to be shown if the node is truncated
 *
 * @param {Boolean} useEllipses - decides if a ellipses to be appended if the text is truncated. Default: false
 *
 * @return {SmartLabelManager} - Current instance of SmartLabelManager
 */
SmartLabelManager.prototype.useEllipsesOnOverflow = function (useEllipses) {
    if (!this._init) {
        return this;
    }
    this._showNoEllipses = !useEllipses;
    return this;
};

/*
 * Get wrapped or truncated text if a bound box is defined around it. The result text would be separated by <br/>
 * if wrapped
 *
 * @param {String} text - the subject text
 * @param {Number} maxWidth - width in px of the the bound box
 * @param {Number} maxHeight - height in px of the the bound box
 * @param {Boolean} noWrap - whether the text to be wrapped. Default false.
 *
 * @return {Object} - The metrics of the text bounded by the box
 *                  {
 *                      height : height of the wrapped text
 *                      width : width of the wrapped text
 *                      isTruncated : whether the text is truncated
 *                      maxHeight : Maximum height given
 *                      maxWidth : Maximum width given
 *                      oriText : Original text sent
 *                      oriTextHeight : Original text height
 *                      oriTextWidth : Original text width
 *                      text : SMART TEXT
 *                  }
 */
SmartLabelManager.prototype.getSmartText = function (text, maxWidth, maxHeight, noWrap) {
    if (!this._init) {
        return false;
    }

    if (text === undefined || text === null) {
        text = '';
    } else if (typeof text !== 'string') {
        text = text.toString();
    }

    var len,
        trimStr,
        tempArr,
        tmpText,
        maxWidthWithEll,
        toolText,
        oriWidth,
        oriHeight,
        newCharIndex,
        nearestChar,
        tempChar,
        getWidth,
        initialLeft,
        initialTop,
        getOriSizeImproveObj,
        spanArr,
        x,
        y,
        minWidth,
        elem,
        chr,
        elemRightMostPoint,
        elemLowestPoint,
        lastBR,
        removeFromIndex,
        removeFromIndexForEllipses,
        hasHTMLTag = false,
        maxStrWidth = 0,
        lastDash = -1,
        lastSpace = -1,
        lastIndexBroken = -1,
        strWidth = 0,
        strHeight = 0,
        oriTextArr = [],
        i = 0,
        ellipsesStr = this._showNoEllipses ? '' : '...',
        lineHeight = this._lineHeight,
        context = this._context,
        container = this._container,
        sCont = this._containerObj,
        ellipsesWidth = sCont.ellipsesWidth,
        dotWidth = sCont.dotWidth,
        characterArr = [],
        dashIndex = -1,
        spaceIndex = -1,
        lastLineBreak = -1,
        fastTrim = function fastTrim(str) {
        str = str.replace(/^\s\s*/, '');
        var ws = /\s/,
            i = str.length;
        while (ws.test(str.charAt(i -= 1))) {/* jshint noempty:false */}
        return str.slice(0, i + 1);
    },
        smartLabel = {
        text: text,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        width: null,
        height: null,
        oriTextWidth: null,
        oriTextHeight: null,
        oriText: text,
        isTruncated: false
    };

    getWidth = this._getWidthFn();

    // In some browsers, offsetheight of a single-line text is getting little (1 px) heigher value of the
    // lineheight. As a result, smartLabel is unable to return single-line text.
    // To fix this, increase the maxHeight a little amount. Hence maxHeight =  lineHeight * 1.2
    if (maxHeight === lineHeight) {
        maxHeight *= 1.2;
    }

    if (container) {
        if (!documentSupport.isBrowserLess) {
            hasHTMLTag = slLib.xmlTagRegEx.test(text);
            if (!hasHTMLTag) {
                // Due to support of <,> for xml we convert &lt;, &gt; to <,> respectively so to get the correct
                // width it is required to convert the same before calculation for the new improve version of the
                // get text width.
                tmpText = text.replace(slLib.ltgtRegex, function (match) {
                    return match === '&lt;' ? '<' : '>';
                });
                getOriSizeImproveObj = this.getOriSize(tmpText, true);

                smartLabel.oriTextWidth = oriWidth = getOriSizeImproveObj.width;
                smartLabel.oriTextHeight = oriHeight = getOriSizeImproveObj.height;
            } else {
                container.innerHTML = text;
                smartLabel.oriTextWidth = oriWidth = container.offsetWidth;
                smartLabel.oriTextHeight = oriHeight = container.offsetHeight;
            }

            if (oriHeight <= maxHeight && oriWidth <= maxWidth) {
                smartLabel.width = smartLabel.oriTextWidth = oriWidth;
                smartLabel.height = smartLabel.oriTextHeight = oriHeight;
                return smartLabel;
            }

            if (lineHeight > maxHeight) {
                smartLabel.text = '';
                smartLabel.width = smartLabel.oriTextWidth = 0;
                smartLabel.height = smartLabel.oriTextHeight = 0;
                return smartLabel;
            }
        }

        // Calculate width with ellipses
        text = fastTrim(text).replace(/(\s+)/g, ' ');
        maxWidthWithEll = this._showNoEllipses ? maxWidth : maxWidth - ellipsesWidth;

        if (!hasHTMLTag) {
            oriTextArr = text.split('');
            len = oriTextArr.length;
            trimStr = '', tempArr = [];
            tempChar = oriTextArr[0];

            if (this._cache[tempChar]) {
                minWidth = this._cache[tempChar].width;
            } else {
                minWidth = getWidth(tempChar);
                this._cache[tempChar] = { width: minWidth };
            }

            if (maxWidthWithEll > minWidth) {
                tempArr = text.substr(0, slLib.getNearestBreakIndex(text, maxWidthWithEll, this)).split('');
                i = tempArr.length;
            } else if (minWidth > maxWidth) {
                smartLabel.text = '';
                smartLabel.width = smartLabel.oriTextWidth = smartLabel.height = smartLabel.oriTextHeight = 0;
                return smartLabel;
            } else if (ellipsesStr) {
                maxWidthWithEll = maxWidth - 2 * dotWidth;
                if (maxWidthWithEll > minWidth) {
                    ellipsesStr = '..';
                } else {
                    maxWidthWithEll = maxWidth - dotWidth;
                    if (maxWidthWithEll > minWidth) {
                        ellipsesStr = '.';
                    } else {
                        maxWidthWithEll = 0;
                        ellipsesStr = '';
                    }
                }
            }

            strWidth = getWidth(tempArr.join(''));
            strHeight = this._lineHeight;

            if (noWrap) {
                for (; i < len; i += 1) {
                    tempChar = tempArr[i] = oriTextArr[i];
                    if (this._cache[tempChar]) {
                        minWidth = this._cache[tempChar].width;
                    } else {
                        if (!getOriSizeImproveObj || !(minWidth = getOriSizeImproveObj.detailObj[tempChar])) {
                            minWidth = getWidth(tempChar);
                        }
                        this._cache[tempChar] = {
                            width: minWidth
                        };
                    }
                    strWidth += minWidth;
                    if (strWidth > maxWidthWithEll) {
                        if (!trimStr) {
                            trimStr = tempArr.slice(0, -1).join('');
                        }
                        if (strWidth > maxWidth) {
                            smartLabel.text = fastTrim(trimStr) + ellipsesStr;
                            smartLabel.tooltext = smartLabel.oriText;
                            smartLabel.width = getWidth(smartLabel.text);
                            smartLabel.height = this._lineHeight;
                            return smartLabel;
                        }
                    }
                }

                smartLabel.text = tempArr.join('');
                smartLabel.width = strWidth;
                smartLabel.height = this._lineHeight;
                return smartLabel;
            } else {
                for (; i < len; i += 1) {
                    tempChar = tempArr[i] = oriTextArr[i];
                    if (tempChar === ' ' && !context) {
                        tempChar = '&nbsp;';
                    }

                    if (this._cache[tempChar]) {
                        minWidth = this._cache[tempChar].width;
                    } else {
                        if (!getOriSizeImproveObj || !(minWidth = getOriSizeImproveObj.detailObj[tempChar])) {
                            minWidth = getWidth(tempChar);
                        }
                        this._cache[tempChar] = {
                            width: minWidth
                        };
                    }
                    strWidth += minWidth;

                    if (strWidth > maxWidthWithEll) {
                        if (!trimStr) {
                            trimStr = tempArr.slice(0, -1).join('');
                        }
                        if (strWidth > maxWidth) {
                            /** @todo use regular expressions for better performance. */
                            lastSpace = text.substr(0, tempArr.length).lastIndexOf(' ');
                            lastDash = text.substr(0, tempArr.length).lastIndexOf('-');
                            if (lastSpace > lastIndexBroken) {
                                strWidth = getWidth(tempArr.slice(lastIndexBroken + 1, lastSpace).join(''));
                                tempArr.splice(lastSpace, 1, '<br/>');
                                lastIndexBroken = lastSpace;
                                newCharIndex = lastSpace + 1;
                            } else if (lastDash > lastIndexBroken) {
                                if (lastDash === tempArr.length - 1) {
                                    strWidth = getWidth(tempArr.slice(lastIndexBroken + 1, lastSpace).join(''));
                                    tempArr.splice(lastDash, 1, '<br/>-');
                                } else {
                                    strWidth = getWidth(tempArr.slice(lastIndexBroken + 1, lastSpace).join(''));
                                    tempArr.splice(lastDash, 1, '-<br/>');
                                }
                                lastIndexBroken = lastDash;
                                newCharIndex = lastDash + 1;
                            } else {
                                tempArr.splice(tempArr.length - 1, 1, '<br/>' + oriTextArr[i]);
                                lastLineBreak = tempArr.length - 2;
                                strWidth = getWidth(tempArr.slice(lastIndexBroken + 1, lastLineBreak + 1).join(''));
                                lastIndexBroken = lastLineBreak;
                                newCharIndex = i;
                            }
                            strHeight += this._lineHeight;
                            if (strHeight > maxHeight) {
                                smartLabel.text = fastTrim(trimStr) + ellipsesStr;
                                smartLabel.tooltext = smartLabel.oriText;
                                // The max width among all the lines will be the width of the string.
                                smartLabel.width = maxWidth;
                                smartLabel.height = strHeight - this._lineHeight;
                                return smartLabel;
                            } else {
                                maxStrWidth = max(maxStrWidth, strWidth);
                                trimStr = null;
                                nearestChar = slLib.getNearestBreakIndex(text.substr(newCharIndex), maxWidthWithEll, this);
                                strWidth = getWidth(text.substr(newCharIndex, nearestChar || 1));
                                if (tempArr.length < newCharIndex + nearestChar) {
                                    tempArr = tempArr.concat(text.substr(tempArr.length, newCharIndex + nearestChar - tempArr.length).split(''));
                                    i = tempArr.length - 1;
                                }
                            }
                        }
                    }
                }

                maxStrWidth = max(maxStrWidth, strWidth);

                smartLabel.text = tempArr.join('');
                smartLabel.width = maxStrWidth;
                smartLabel.height = strHeight;
                return smartLabel;
            }
        } else {
            toolText = text.replace(slLib.spanAdditionRegx, '$2');
            text = text.replace(slLib.spanAdditionRegx, slLib.spanAdditionReplacer);
            text = text.replace(/(<br\s*\/*\>)/g, '<span class="' + [slLib.classNameWithTag, ' ', slLib.classNameWithTagBR].join('') + '">$1</span>');

            container.innerHTML = text;

            spanArr = container[documentSupport.childRetriverFn](documentSupport.childRetriverString);

            for (x = 0, y = spanArr.length; x < y; x += 1) {
                elem = spanArr[x];
                //chech whether this span is temporary inserted span from it's class
                if (documentSupport.noClassTesting || slLib.classNameReg.test(elem.className)) {
                    chr = elem.innerHTML;
                    if (chr !== '') {
                        if (chr === ' ') {
                            spaceIndex = characterArr.length;
                        } else if (chr === '-') {
                            dashIndex = characterArr.length;
                        }

                        characterArr.push({
                            spaceIdx: spaceIndex,
                            dashIdx: dashIndex,
                            elem: elem
                        });
                        oriTextArr.push(chr);
                    }
                }
            }

            i = 0;
            len = characterArr.length;
            minWidth = characterArr[0].elem.offsetWidth;

            if (minWidth > maxWidth) {
                smartLabel.text = '';
                smartLabel.width = smartLabel.oriTextWidth = smartLabel.height = smartLabel.oriTextHeight = 0;

                return smartLabel;
            } else if (minWidth > maxWidthWithEll && !this._showNoEllipses) {

                maxWidthWithEll = maxWidth - 2 * dotWidth;
                if (maxWidthWithEll > minWidth) {
                    ellipsesStr = '..';
                } else {
                    maxWidthWithEll = maxWidth - dotWidth;
                    if (maxWidthWithEll > minWidth) {
                        ellipsesStr = '.';
                    } else {
                        maxWidthWithEll = 0;
                        ellipsesStr = '';
                    }
                }
            }

            initialLeft = characterArr[0].elem.offsetLeft;
            initialTop = characterArr[0].elem.offsetTop;

            if (noWrap) {
                for (; i < len; i += 1) {
                    elem = characterArr[i].elem;
                    elemRightMostPoint = elem.offsetLeft - initialLeft + elem.offsetWidth;

                    if (elemRightMostPoint > maxWidthWithEll) {
                        if (!removeFromIndexForEllipses) {
                            removeFromIndexForEllipses = i;
                        }
                        if (container.offsetWidth > maxWidth) {
                            removeFromIndex = i;
                            i = len;
                        }
                    }
                }
            } else {
                for (; i < len; i += 1) {
                    elem = characterArr[i].elem;
                    elemLowestPoint = elem.offsetHeight + (elem.offsetTop - initialTop);
                    elemRightMostPoint = elem.offsetLeft - initialLeft + elem.offsetWidth;

                    lastBR = null;

                    if (elemRightMostPoint > maxWidthWithEll) {
                        if (!removeFromIndexForEllipses) {
                            removeFromIndexForEllipses = i;
                        }

                        if (elemRightMostPoint > maxWidth) {
                            lastSpace = characterArr[i].spaceIdx;
                            lastDash = characterArr[i].dashIdx;
                            if (lastSpace > lastIndexBroken) {
                                characterArr[lastSpace].elem.innerHTML = '<br/>';
                                lastIndexBroken = lastSpace;
                            } else if (lastDash > lastIndexBroken) {
                                if (lastDash === i) {
                                    // in case the overflowing character itself is the '-'
                                    characterArr[lastDash].elem.innerHTML = '<br/>-';
                                } else {
                                    characterArr[lastDash].elem.innerHTML = '-<br/>';
                                }
                                lastIndexBroken = lastDash;
                            } else {
                                elem.parentNode.insertBefore(lastBR = doc.createElement('br'), elem);
                            }

                            //check whether this break made current element outside the area height
                            if (elem.offsetHeight + elem.offsetTop > maxHeight) {
                                //remove the lastly inserted line break
                                if (lastBR) {
                                    lastBR.parentNode.removeChild(lastBR);
                                } else if (lastIndexBroken === lastDash) {
                                    characterArr[lastDash].elem.innerHTML = '-';
                                } else {
                                    characterArr[lastSpace].elem.innerHTML = ' ';
                                }
                                removeFromIndex = i;
                                //break the looping condition
                                i = len;
                            } else {
                                removeFromIndexForEllipses = null;
                            }
                        }
                    } else {
                        //check whether this break made current element outside the area height
                        if (elemLowestPoint > maxHeight) {
                            removeFromIndex = i;
                            i = len;
                        }
                    }
                }
            }

            if (removeFromIndex < len) {
                //set the trancated property of the smartlabel
                smartLabel.isTruncated = true;

                /** @todo is this really needed? */
                removeFromIndexForEllipses = removeFromIndexForEllipses ? removeFromIndexForEllipses : removeFromIndex;

                for (i = len - 1; i >= removeFromIndexForEllipses; i -= 1) {
                    elem = characterArr[i].elem;
                    //chech whether this span is temporary inserted span from it's class
                    elem.parentNode.removeChild(elem);
                }

                for (; i >= 0; i -= 1) {
                    elem = characterArr[i].elem;
                    if (slLib.classNameBrReg.test(elem.className)) {
                        //chech whether this span is temporary inserted span from it's class
                        elem.parentNode.removeChild(elem);
                    } else {
                        i = 0;
                    }
                }
            }

            //get the smart text
            smartLabel.text = container.innerHTML.replace(slLib.spanRemovalRegx, '$1').replace(/\&amp\;/g, '&');
            if (smartLabel.isTruncated) {
                smartLabel.text += ellipsesStr;
                smartLabel.tooltext = toolText;
            }
        }

        smartLabel.height = container.offsetHeight;
        smartLabel.width = container.offsetWidth;

        return smartLabel;
    } else {
        smartLabel.error = new Error('Body Tag Missing!');
        return smartLabel;
    }
};

/*
 * Get the height and width of a text.
 *
 * @param {String} text - Text whose metrics to be measured
 * @param {Boolean} Optional detailedCalculationFlag - this flag if set it calculates per letter position
 *                          information and returns it. Ideally you dont need it unless you want to post process the
 *                          string. And its an EXPENSIVE OPERATION.
 *
 * @return {Object} - If detailedCalculationFlag is set to true the returned object would be
 *                  {
 *                      height: height of the text
 *                      width: width of the text
 *                      detailObj: detail calculation of letters in the format {lettername: width}
 *                  }
 *                  If detailedCalculationFlag is set to false the returned object wont have the detailObj prop.
 */
SmartLabelManager.prototype.getOriSize = function (text, detailedCalculationFlag) {
    if (!this._init) {
        return false;
    }

    var textArr,
        letter,
        lSize,
        i,
        l,
        cumulativeSize = 0,
        height = 0,
        indiSizeStore = {};

    if (!detailedCalculationFlag) {
        return this._calCharDimWithCache(text);
    }

    // Calculate the width of every letter with an approximation
    textArr = text.split('');
    for (i = 0, l = textArr.length; i < l; i++) {
        letter = textArr[i];
        lSize = this._calCharDimWithCache(letter, true, textArr.length);
        height = max(height, lSize.height);
        cumulativeSize += lSize.width;
        indiSizeStore[letter] = lSize.width;
    }

    return {
        width: round(cumulativeSize),
        height: height,
        detailObj: indiSizeStore
    };
};

/*
 * Dispose the container and object allocated by the smartlabel
 */
SmartLabelManager.prototype.dispose = function () {
    if (!this._init) {
        return this;
    }

    this._containerManager && this._containerManager.dispose && this._containerManager.dispose();

    delete this._container;
    delete this._context;
    delete this._cache;
    delete this._containerManager;
    delete this._containerObj;
    delete this.id;
    delete this.style;
    delete this.parentContainer;
    delete this._showNoEllipses;

    return this;
};

exports['default'] = SmartLabelManager;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formatter = function formatter(conn) {
    var sample = conn.edges[0];
    return '\n        <div class=\'norm-pad\'>\n            <div style="font-weight: 700">' + sample.key + '</div>\n            <div style="font-weight: 300; padding-top: 8px;">' + sample.meta.inf.summary + '</div>\n            <div style="font-weight: 300; font-size: 14px; padding: 8px 0px;">\n                <span>Assignee: ' + sample.meta.inf.assignee + '</span>\n                <span style="margin-left: 20px">Story Point: ' + sample.meta.inf.sp + '</span>\n            </div>\n        </div>\n    ';
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this._mount = null;
        this._listeners = [formatter];
        this._data = null;
    }

    _createClass(_class, [{
        key: 'mount',
        value: function mount() {
            var arg = void 0;
            if (arguments.length) {
                arg = arguments.length <= 0 ? undefined : arguments[0];
                this._mount = arg.append('div').classed('arcus-tooltip', true).style('display', 'none');

                return this;
            }

            return this._mount;
        }
    }, {
        key: 'data',
        value: function data(_data) {
            this._data = _data;
            return this;
        }
    }, {
        key: 'registerListener',
        value: function registerListener(fn) {
            var _this = this;

            this._listeners[0] = fn;
            return function () {
                return _this._listeners[0] = formatter;
            };
        }
    }, {
        key: 'action',
        value: function action(payload) {
            if (!payload.affectedSet) {
                this._mount.style('display', 'none');
                return;
            }
            var coord = payload.point;
            var content = formatter(payload.affectedSet);
            this._mount.html(content).style('display', 'inline-block').style('left', coord[0] + 100 + 'px').style('top', coord[1] + 50 + 'px');
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3Selection = __webpack_require__(0);

var _d3Transition = __webpack_require__(110);

var _d3Ease = __webpack_require__(25);

var _edge = __webpack_require__(23);

var _edge2 = _interopRequireDefault(_edge);

var _connection = __webpack_require__(133);

var _connection2 = _interopRequireDefault(_connection);

var _shadow = __webpack_require__(135);

var _shadow2 = _interopRequireDefault(_shadow);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* global document */

var addTranslate = function addTranslate(node, newTranslate) {
    var translate = node.attr('transform');
    var matchedVal = translate.match(/(\d+)\s*,\s*(\d+)/);
    matchedVal = matchedVal.slice(0).map(function (val) {
        return parseInt(val, 0);
    });

    return [matchedVal[0] + newTranslate[0], matchedVal[1] + newTranslate[1]];
};

var adjustEdges = function adjustEdges(edges) {
    var flowMap = {};
    var history = [];
    var maxJump = Number.NEGATIVE_INFINITY;
    var map = void 0;
    var entries = void 0;
    var backTrackLevel = void 0;
    var c1 = void 0;
    var c2 = [];
    var c3 = void 0;
    var shift = void 0;
    var fwdStart = void 0;

    // @warn currently backward edges are not adjusted.
    edges.filter(function (_) {
        return (0, _utils.edgeOrderCode)(_) === _utils.EdgeDirection.FORWARD;
    }).forEach(function (edge) {
        var jump = edge.jump();
        map = flowMap[edge.from.absOrder] = flowMap[edge.from.absOrder] || {};
        map = map[jump] = map[jump] || { edges: [] };
        map.edges.push(edge);

        if (jump > maxJump) {
            maxJump = jump;
        }
    });

    // For each level <- jump starting with 1
    for (var level = 1; level <= maxJump; level++) {
        // For each entry in flowmap. Entry here is the start of an edge, jump is recorded in the outer loop
        for (var start in flowMap) {
            // If an edge with specified jump is not present for this node then continue
            if (!(level in flowMap[start])) {
                continue;
            }

            start = +start;
            c2.length = 0;

            entries = flowMap[start][level];
            // Count of edges which start form same node and goes to same node
            entries.cardinality = entries.edges.length;
            entries.cumulativeCardinality = 0;

            // Update edge shift of current level with the previous level by finding covered area

            // c1 <- Find out the covered area by collecting for the same start point by doning (level--) till
            // level > 1. This takes care of all the levels coming from same start node for a frame.
            backTrackLevel = level;
            while (--backTrackLevel >= 1) {
                if (!(backTrackLevel in flowMap[start])) {
                    continue;
                }
                c1 = flowMap[start][backTrackLevel].cardinality + flowMap[start][backTrackLevel].cumulativeCardinality;
                break;
            }

            // c2 <- Find out the covered area under the jurisdiction of a different frame by collecting the nodes from
            // the condition (start + level < maxStart + maxLevel) by maximizing maxStart and maxLevel where maxStart is
            // another start in flowMap and maxLevel is maximum level in separate jurisdiction.
            fwdStart = start;
            backTrackLevel = level;
            while (++fwdStart) {
                if (fwdStart >= start + level) {
                    break;
                }

                while (--backTrackLevel >= 1) {
                    if (!(fwdStart in flowMap && backTrackLevel in flowMap[fwdStart])) {
                        continue;
                    }

                    // If the current position is already covered earlier during longer jump, then ignore
                    if (!!history.filter(function (_) {
                        return _.start + _.level >= fwdStart + backTrackLevel;
                    }).length) {
                        continue;
                    }

                    history.push({ start: fwdStart, level: backTrackLevel });
                    c2.push(flowMap[fwdStart][backTrackLevel].cardinality);
                    c2.push(flowMap[fwdStart][backTrackLevel].cardinality + flowMap[fwdStart][backTrackLevel].cumulativeCardinality);
                }
            }

            c3 = c2.concat([c1 || 0]);
            shift = Math.max.apply(Math, _toConsumableArray(c3));
            entries.cumulativeCardinality = shift;
            entries.edges.forEach(function (_) {
                return _.shift = shift;
            });
        }
    }
};

var connectionResolver = function connectionResolver(edges) {
    var connectionPool = {};
    var conns = [];
    var key = void 0;
    for (var i = 0, edge; edge = edges[i++];) {
        if ((key = edge.key) in connectionPool) {
            connectionPool[key].push(edge);
        } else {
            connectionPool[key] = [edge];
        }
    }

    for (key in connectionPool) {
        conns.push(new _connection2.default(connectionPool[key]));
    }

    return conns;
};

var shadowResolver = function shadowResolver(edges) {
    var shadowPool = {};
    var seq = void 0;
    var conns = {};

    for (var i = 0, edge; edge = edges[i++];) {
        if ((seq = edge.seqHash()) in shadowPool) {
            shadowPool[seq].push(edge);
        } else {
            shadowPool[seq] = [edge];
        }
    }

    for (var key in shadowPool) {
        conns[key] = new _shadow2.default(shadowPool[key]);
    }

    return conns;
};

var minDist = function minDist(dists) {
    var min = { d: Number.POSITIVE_INFINITY, index: -1 };
    for (var i = 0, dist; dist = dists[i++];) {
        if (min.d > dist.d) {
            min.d = dist.d;
            min.index = i - 1;
        }
    }

    return dists[min.index];
};

var applySequence = function applySequence(edges) {
    var seqMap = {};
    var seqStr = void 0;
    var seqNo = void 0;

    for (var i = 0, edge; edge = edges[i++];) {
        seqStr = edge.seqStr();
        if (seqStr in seqMap) {
            seqNo = ++seqMap[seqStr];
            edge.sequence = seqNo;
        } else {
            seqMap[seqStr] = 0;
            edge.sequence = 0;
        }
    }
};

var EdgeManager = function () {
    function EdgeManager(edges, frames, referrer) {
        _classCallCheck(this, EdgeManager);

        this.edges = edges;
        this.frames = frames;
        this._referrer = referrer;

        applySequence(edges);
        adjustEdges(this.edges);

        this.connections = connectionResolver(edges);
        this.shadows = shadowResolver(edges);
        this._transitionTime = 300;
        this.transition = (0, _d3Transition.transition)().duration(this._transitionTime).ease(_d3Ease.easeCubic);

        this._evtRecords = {};
    }

    _createClass(EdgeManager, [{
        key: 'draw',
        value: function draw(mount, baseMount, config) {
            var _this = this;

            var backwardShadowR = void 0;
            var circumstance = this._referrer._circumstance;
            var body = (0, _d3Selection.select)(document.body);

            var selMarkG = mount.selectAll('g.arcus-edge-sel-mark').data([1]);
            selMarkG.exit().remove();
            selMarkG = selMarkG.enter().append('g').attr('class', 'arcus-edge-sel-mark').attr('transform', 'translate(' + config.labelBBox.width + ', 0)');

            var sel = mount.selectAll('g.arcus-edges').data([1]);

            sel.exit().remove();
            sel = sel.enter().append('g').attr('class', 'arcus-edges').attr('transform', 'translate(' + config.labelBBox.width + ', 0)');

            var _drawConnections = this.__drawConnections(sel, this.connections, this.shadows),
                _drawConnections2 = _slicedToArray(_drawConnections, 2),
                shadowSel = _drawConnections2[1];

            var maxBackwardShadow = Object.values(this.shadows).filter(function (shadow) {
                return shadow.direction === _utils.EdgeDirection.BACKWARD;
            }).reduce(function (store, shadow) {
                return store.spread() > shadow.spread() ? store : shadow;
            }, { spread: function spread() {
                    return Number.NEGATIVE_INFINITY;
                }, edges: [{ r: function r() {
                        return 0;
                    }, pathOptions: function pathOptions() {} }] });

            var maxForwardShadow = Object.values(this.shadows).filter(function (shadow) {
                return shadow.direction === _utils.EdgeDirection.FORWARD;
            }).reduce(function (store, shadow) {
                return store.spread() > shadow.spread() ? store : shadow;
            }, { spread: function spread() {
                    return Number.NEGATIVE_INFINITY;
                } });

            var backwardShadowEnd = maxBackwardShadow.edges[maxBackwardShadow.edges.length - 1];
            var forwardShadowEnd = maxForwardShadow.edges[maxForwardShadow.edges.length - 1];

            [backwardShadowEnd, forwardShadowEnd].map(function (edge) {
                return edge.pathOptions({ expansionFactor: 16 });
            });

            var cumulativeTranslate = addTranslate(mount, [-(backwardShadowR = backwardShadowEnd.r()), 0]);
            mount.attr('transform', 'translate(' + cumulativeTranslate[0] + ', ' + cumulativeTranslate[1] + ')');

            shadowSel.on('mouseover', function () {
                var el = (0, _d3Selection.select)(_d3Selection.event.target);
                var hash = el.attr('class').split(/\s+/)[2];
                var edges = _this.shadows[hash].edges;
                var point = (0, _d3Selection.mouse)(sel.node());

                _this._evtRecords.transitionMutationLock = true;
                clearTimeout(_this._evtRecords.outTimer);
                _this._evtRecords.overTimer = setTimeout(function () {
                    _this._evtRecords.overTimer = null;

                    _this._evtRecords.transitionMutationLock = false;
                    var distances = edges.map(function (edge, i) {
                        var dist = edge.distance(point);
                        dist.i = i;
                        return dist;
                    });
                    var nearest = minDist(distances);
                    _this.__showSelector(selMarkG, nearest);
                }, 100);
            });
            shadowSel.on('mousemove', function () {
                if (_this._evtRecords.transitionMutationLock) {
                    return;
                }

                var el = (0, _d3Selection.select)(_d3Selection.event.target);
                var hash = el.attr('class').split(/\s+/)[2];
                var edges = _this.shadows[hash].edges;
                var point = (0, _d3Selection.mouse)(sel.node());
                var distances = edges.map(function (edge, i) {
                    var dist = edge.distance(point);
                    dist.i = i;
                    return dist;
                });
                var nearest = minDist(distances);
                _this.__showSelector(selMarkG, nearest);
            });
            shadowSel.on('click', function () {
                if (_this._evtRecords.transitionMutationLock) {
                    return;
                }

                var el = (0, _d3Selection.select)(_d3Selection.event.target);
                var hash = el.attr('class').split(/\s+/)[2];
                var edges = _this.shadows[hash].edges;
                var point = (0, _d3Selection.mouse)(sel.node());
                var distances = edges.map(function (edge, i) {
                    var dist = edge.distance(point);
                    dist.i = i;
                    return dist;
                });
                var nearest = minDist(distances);
                var nearestEdge = edges[nearest.i];
                var conn = nearestEdge.partOf();

                _this.edges.map(function (edge) {
                    return edge.pathOptions({ select: _edge2.default.SelectMode.OFF });
                });
                conn.edges.map(function (edge) {
                    return edge.pathOptions({ select: _edge2.default.SelectMode.ON });
                });

                circumstance.action({
                    action: 'click',
                    affectedSet: conn,
                    point: (0, _d3Selection.mouse)(baseMount.node())
                });

                _this.__drawConnections(sel, _this.connections, _this.shadows);

                _d3Selection.event.stopPropagation();
            });
            body.on('click', function () {
                _this.edges.map(function (edge) {
                    return edge.pathOptions({ select: _edge2.default.SelectMode.NA });
                });
                circumstance.action({
                    action: 'click',
                    affectedSet: null
                });
                _this.__drawConnections(sel, _this.connections, _this.shadows);
            });
            shadowSel.on('mouseout', function () {
                clearTimeout(_this._evtRecords.overTimer);
                _this._evtRecords.outTimer = setTimeout(function () {
                    _this._evtRecords.outTimer = null;
                    _this._evtRecords.transitionMutationLock = false;

                    _this.__showSelector(selMarkG, null);
                }, 0);
            });

            return [Math.abs(backwardShadowR) + Math.abs(forwardShadowEnd.r()), { shiftX: backwardShadowR }];
        }
    }, {
        key: '__showSelector',
        value: function __showSelector(mount, pos) {
            var sel = mount.selectAll('circle').data(pos ? [pos] : []);
            sel.exit().remove();
            sel = sel.enter().append('circle').merge(sel).attr('r', 4).attr('cx', function (d) {
                return d.x;
            }).attr('cy', function (d) {
                return d.y;
            });
            return sel;
        }
    }, {
        key: '__drawConnections',
        value: function __drawConnections(mount, connections, shadows) {
            // Draw the paths
            var conPath = connections.map(function (con) {
                return con.path();
            });
            var flattenConPath = { forward: [], backward: [] };
            for (var i = 0, path; path = conPath[i++];) {
                var _flattenConPath$forwa, _flattenConPath$backw;

                (_flattenConPath$forwa = flattenConPath.forward).push.apply(_flattenConPath$forwa, _toConsumableArray(path.forward));
                (_flattenConPath$backw = flattenConPath.backward).push.apply(_flattenConPath$backw, _toConsumableArray(path.backward));
            }

            mount.selectAll('path.arcus-edge').interrupt();
            var edgeSel = mount.selectAll('path.arcus-edge').data([].concat(_toConsumableArray(flattenConPath.forward), _toConsumableArray(flattenConPath.backward)));
            edgeSel.exit().remove();
            edgeSel = edgeSel.enter().append('path').classed('arcus-edge', true).attr('class', function (d) {
                var cls = (0, _d3Selection.select)(this).attr('class');
                cls += ' ' + d[1].seqHash();
                return cls;
            }).merge(edgeSel).style('stroke', function (d) {
                return d[1].to.config.color;
            }).attr('d', function (d) {
                return d[1].pathHist[0].path;
            }).style('opacity', function (d) {
                var options = d[1].pathOptions();

                if (options.select === _edge2.default.SelectMode.ON) {
                    return 1;
                } else if (options.select === _edge2.default.SelectMode.OFF) {
                    return 0.02;
                }

                return 0.35;
            }).transition(this.transition).attr('d', function (d) {
                return d[0];
            });

            // Draw shadows for interaction
            conPath = [];
            for (var key in shadows) {
                conPath.push(shadows[key].path());
            }

            var shadowSel = mount.selectAll('path.arcus-edge-shadow').data(conPath);
            shadowSel.exit().remove();
            shadowSel = shadowSel.enter().append('path').classed('arcus-edge-shadow', true).classed('shadow', true).attr('class', function (d) {
                var cls = (0, _d3Selection.select)(this).attr('class');
                cls += ' ' + d[1].seqHash();
                return cls;
            }).merge(shadowSel).attr('d', function (d) {
                return d[0];
            });

            return [edgeSel, shadowSel];
        }
    }]);

    return EdgeManager;
}();

exports.default = EdgeManager;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrameManager = function () {
    function FrameManager(frames) {
        _classCallCheck(this, FrameManager);

        this.frames = frames;
    }

    _createClass(FrameManager, [{
        key: 'size',
        value: function size() {
            return this.frames.length;
        }
    }, {
        key: 'draw',
        value: function draw(mount, config) {
            var sel = mount.selectAll('g').data(this.frames);

            sel.exit().remove();
            sel.enter().append('g').attr('class', function (e, i) {
                return 'arcus-frame-' + i;
            }).attr('transform', function (e, i) {
                return 'translate(0, ' + i * (config.frameLength + config.frameSpacing) + ')';
            });

            var labelsSize = this.frames.map(function (frame) {
                return frame.getLabelSize();
            });
            config.labelBBox = { width: Math.min(Math.max.apply(Math, _toConsumableArray(labelsSize)), config.maxFrameLabelLength) + 20 /* mandatory padding */
            };
            this.frames.forEach(function (frame, i) {
                return frame.draw(mount.select('.arcus-frame-' + i), config);
            });

            return [config.labelBBox.width];
        }
    }, {
        key: 'postDrawingAdjust',
        value: function postDrawingAdjust(adjustment) {
            this.frames.forEach(function (frame) {
                return frame.postDrawingAdjust(adjustment);
            });
        }
    }]);

    return FrameManager;
}();

exports.default = FrameManager;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var drawText = function drawText(mount, text, options) {
    var sel = mount.selectAll('text.' + options.cls).data([text]);
    sel.exit().remove();
    sel = sel.enter().append('text').classed(options.cls, true).attr('y', options.shiftY ? options.shiftY : 0);

    sel = sel.selectAll('tspan').data(function (d) {
        return d;
    });
    sel.exit().remove();
    sel.enter().append('tspan').attr('dy', 16).attr('x', 0).merge(sel).text(function (d) {
        return d;
    });

    return 16 * text.length;
};

var drawMarks = function drawMarks(mount, nodes, config) {
    var sel = mount.selectAll('line').data([config.frameLength]);
    sel.exit().remove();
    sel = sel.enter().append('line').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', function (d) {
        return d;
    }).classed('arcus-frame-line', true);

    sel = mount.selectAll('circle').data(nodes);
    sel.exit().remove();
    sel = sel.enter().append('circle').attr('cx', 0).attr('cy', function (d, i) {
        return i * config.nodeSpacing;
    }).attr('r', function (node) {
        return node.config.size;
    }).classed('arcus-frame-node', true).style('fill', function (d) {
        return d.config.color;
    });
    return sel;
};

var Frame = function () {
    function Frame(source, nodes, order, dependencies) {
        var _this = this;

        _classCallCheck(this, Frame);

        this.source = source;
        this.nodes = nodes;
        this.order = order;
        this.offset = null;
        this._mount = null;
        this._dep = dependencies;

        nodes.forEach(function (node) {
            node.association = _this;
            node.pOrder = order;
            node.absOrder = order * _this.nodes.length + node.order;
        });

        var sl = this._dep.sl;

        this._dims = {};

        sl.setStyle({
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            fontStyle: 'normal'
        });
        this._dims.head = sl.getOriSize(source.name);

        sl.setStyle({
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            fontStyle: 'normal'
        });
        this._dims.desc = sl.getOriSize(source.desc || '');
    }

    _createClass(Frame, [{
        key: 'getLabelSize',
        value: function getLabelSize() {
            return Math.max(this._dims.head.width, this._dims.desc.width);
        }
    }, {
        key: 'draw',
        value: function draw(mount, config) {
            var sl = this._dep.sl;
            var source = this.source;
            this._mount = mount;
            var labelCls = 'arcus-frame-label';

            var sel = mount.selectAll('g.' + labelCls).data([1]);
            sel.exit().remove();
            sel = sel.enter().append('g').classed(labelCls, true);

            // Draw header
            var lines = sl.constructor.textToLines(sl.getSmartText(source.name, config.labelBBox.width)).lines;
            var height = drawText(sel, lines, { cls: labelCls + '-head' });

            // Draw desc
            lines = sl.constructor.textToLines(sl.getSmartText(source.desc, config.labelBBox.width)).lines;
            drawText(sel, lines, { cls: labelCls + '-desc', shiftY: height + 8 /* mandatory padding */ });

            sel = mount.selectAll('g.arcus-frame-marks').data([1]);
            sel.exit().remove();
            sel = sel.enter().append('g').classed('arcus-frame-marks', true).attr('transform', 'translate(' + config.labelBBox.width + ', 0)');

            drawMarks(sel, this.nodes, config);
        }
    }, {
        key: 'postDrawingAdjust',
        value: function postDrawingAdjust(adjustment) {
            this._mount.selectAll('g.arcus-frame-label').attr('transform', 'translate(' + adjustment.offsetX + ', 0)');
        }
    }]);

    return Frame;
}();

exports.default = Frame;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(name, order, config) {
        _classCallCheck(this, Node);

        this.name = name;
        this.association = null;
        this.config = config;
        this.frameOffset = null;
        this.offsetY = null;
        this.order = order;
        this.pOrder = null;
        this.absOrder = null;
    }

    _createClass(Node, [{
        key: "px",
        value: function px() {
            return this.frameOffset + this.offsetY;
        }
    }]);

    return Node;
}();

exports.default = Node;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cubehelix;
exports.Cubehelix = Cubehelix;

var _define = __webpack_require__(12);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(11);

var _math = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _color.darker : Math.pow(_color.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gray = gray;
exports.default = lab;
exports.Lab = Lab;
exports.lch = lch;
exports.hcl = hcl;
exports.Hcl = Hcl;

var _define = __webpack_require__(12);

var _define2 = _interopRequireDefault(_define);

var _color = __webpack_require__(11);

var _math = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math.deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
      x,
      z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define2.default)(Lab, lab, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function darker(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function rgb() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math.rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define2.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
  brighter: function brighter(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function darker(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function rgb() {
    return labConvert(this).rgb();
  }
}));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dispatch = __webpack_require__(52);

Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dispatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = { value: function value() {} };

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: name };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      }return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;
    for (var t in _) {
      copy[t] = _[t].slice();
    }return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name: name, value: callback });
  return type;
}

exports.default = dispatch;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var overshoot = 1.70158;

var backIn = exports.backIn = function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
}(overshoot);

var backOut = exports.backOut = function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
}(overshoot);

var backInOut = exports.backInOut = function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
}(overshoot);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounceIn = bounceIn;
exports.bounceOut = bounceOut;
exports.bounceInOut = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleIn = circleIn;
exports.circleOut = circleOut;
exports.circleInOut = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicIn = cubicIn;
exports.cubicOut = cubicOut;
exports.cubicInOut = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = exports.elasticIn = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticIn.period = function (p) {
    return custom(a, p);
  };

  return elasticIn;
}(amplitude, period);

var elasticOut = exports.elasticOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticOut.period = function (p) {
    return custom(a, p);
  };

  return elasticOut;
}(amplitude, period);

var elasticInOut = exports.elasticInOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function (a) {
    return custom(a, p * tau);
  };
  elasticInOut.period = function (p) {
    return custom(a, p);
  };

  return elasticInOut;
}(amplitude, period);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expIn = expIn;
exports.expOut = expOut;
exports.expInOut = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;
function linear(t) {
  return +t;
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var exponent = 3;

var polyIn = exports.polyIn = function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
}(exponent);

var polyOut = exports.polyOut = function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
}(exponent);

var polyInOut = exports.polyInOut = function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
}(exponent);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quadIn = quadIn;
exports.quadOut = quadOut;
exports.quadInOut = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sinIn = sinIn;
exports.sinOut = sinOut;
exports.sinInOut = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubehelixLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h),
          s = (0, _color2.default)(start.s, end.s),
          l = (0, _color2.default)(start.l, end.l),
          opacity = (0, _color2.default)(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  }(1);
}

exports.default = cubehelix(_color.hue);
var cubehelixLong = exports.cubehelixLong = cubehelix(_color2.default);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hclLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hcl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hcl)(start)).h, (end = (0, _d3Color.hcl)(end)).h),
        c = (0, _color2.default)(start.c, end.c),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hcl(_color.hue);
var hclLong = exports.hclLong = hcl(_color2.default);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslLong = undefined;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hsl(hue) {
  return function (start, end) {
    var h = hue((start = (0, _d3Color.hsl)(start)).h, (end = (0, _d3Color.hsl)(end)).h),
        s = (0, _color2.default)(start.s, end.s),
        l = (0, _color2.default)(start.l, end.l),
        opacity = (0, _color2.default)(start.opacity, end.opacity);
    return function (t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  };
}

exports.default = hsl(_color.hue);
var hslLong = exports.hslLong = hsl(_color2.default);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lab;

var _d3Color = __webpack_require__(4);

var _color = __webpack_require__(6);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lab(start, end) {
  var l = (0, _color2.default)((start = (0, _d3Color.lab)(start)).l, (end = (0, _d3Color.lab)(end)).l),
      a = (0, _color2.default)(start.a, end.a),
      b = (0, _color2.default)(start.b, end.b),
      opacity = (0, _color2.default)(start.opacity, end.opacity);
  return function (t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = piecewise;
function piecewise(interpolate, values) {
  var i = 0,
      n = values.length - 1,
      v = values[0],
      I = new Array(n < 0 ? 0 : n);
  while (i < n) {
    I[i] = interpolate(v, v = values[++i]);
  }return function (t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) {
    samples[i] = interpolator(i / (n - 1));
  }return samples;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  return a = +a, b -= a, function (t) {
    return Math.round(a + b * t);
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var degrees = 180 / Math.PI;

var identity = exports.identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateTransformSvg = exports.interpolateTransformCss = undefined;

var _number = __webpack_require__(7);

var _number2 = _interopRequireDefault(_number);

var _parse = __webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function (t) {
      var i = -1,
          n = q.length,
          o;
      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }return s.join("");
    };
  };
}

var interpolateTransformCss = exports.interpolateTransformCss = interpolateTransform(_parse.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = exports.interpolateTransformSvg = interpolateTransform(_parse.parseSvg, ", ", ")", ")");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCss = parseCss;
exports.parseSvg = parseSvg;

var _decompose = __webpack_require__(70);

var _decompose2 = _interopRequireDefault(_decompose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssNode, cssRoot, cssView, svgNode;

function parseCss(value) {
  if (value === "none") return _decompose.identity;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return (0, _decompose2.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose.identity;
  value = value.matrix;
  return (0, _decompose2.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (p0, p1) {
  var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function i(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  }

  // General case.
  else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function i(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }

  i.duration = S * 1000;

  return i;
};

var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (x) {
  return function () {
    return x;
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return (0, _select2.default)((0, _creator2.default)(name).call(document.documentElement));
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = local;
var nextId = 0;

function local() {
  return new Local();
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function get(node) {
    var id = this._;
    while (!(id in node)) {
      if (!(node = node.parentNode)) return;
    }return node[id];
  },
  set: function set(node, value) {
    return node[this._] = value;
  },
  remove: function remove(node) {
    return this._ in node && delete node[this._];
  },
  toString: function toString() {
    return this._;
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node) {
  var event = (0, _sourceEvent2.default)();
  if (event.changedTouches) event = event.changedTouches[0];
  return (0, _point2.default)(node, event);
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (selector) {
    return typeof selector === "string" ? new _index.Selection([document.querySelectorAll(selector)], [document.documentElement]) : new _index.Selection([selector == null ? [] : selector], _index.root);
};

var _index = __webpack_require__(1);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _namespace2.default)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

var _namespace = __webpack_require__(16);

var _namespace2 = _interopRequireDefault(_namespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;
    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;
  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function (d) {
      data[++j] = d;
    });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0, _constant2.default)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
        previous._next = next || null;
      }
    }
  }

  update = new _index.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var _index = __webpack_require__(1);

var _enter = __webpack_require__(35);

var _constant = __webpack_require__(74);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

var _window = __webpack_require__(21);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(node, type, params) {
  var window = (0, _window2.default)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return !this.node();
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _index.Selection(this._exit || this._groups.map(_sparse2.default), this._parents);
};

var _sparse = __webpack_require__(36);

var _sparse2 = _interopRequireDefault(_sparse);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _matcher2.default)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(1);

var _matcher = __webpack_require__(33);

var _matcher2 = _interopRequireDefault(_matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, before) {
  var create = typeof name === "function" ? name : (0, _creator2.default)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0, _selector2.default)(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

var _creator = __webpack_require__(8);

var _creator2 = _interopRequireDefault(_creator);

var _selector = __webpack_require__(19);

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constantNull() {
  return null;
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(lower);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Selection(merges, this._parents);
};

var _index = __webpack_require__(1);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nodes = new Array(this.size()),
      i = -1;
  this.each(function () {
    nodes[++i] = this;
  });
  return nodes;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(raise);
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.each(remove);
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selector2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index.Selection(subgroups, this._parents);
};

var _index = __webpack_require__(1);

var _selector = __webpack_require__(19);

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  if (typeof select !== "function") select = (0, _selectorAll2.default)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index.Selection(subgroups, parents);
};

var _index = __webpack_require__(1);

var _selectorAll = __webpack_require__(38);

var _selectorAll2 = _interopRequireDefault(_selectorAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var size = 0;
  this.each(function () {
    ++size;
  });
  return size;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index.Selection(sortgroups, this._parents).order();
};

var _index = __webpack_require__(1);

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = (0, _sourceEvent2.default)().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return (0, _point2.default)(node, touch);
    }
  }

  return null;
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, touches) {
  if (touches == null) touches = (0, _sourceEvent2.default)().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = (0, _point2.default)(node, touches[i]);
  }

  return points;
};

var _sourceEvent = __webpack_require__(20);

var _sourceEvent2 = _interopRequireDefault(_sourceEvent);

var _point = __webpack_require__(9);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer(),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? (0, _timer.now)() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(22);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback, delay, time) {
  var t = new _timer.Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var _timer = __webpack_require__(22);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interrupt = exports.active = exports.transition = undefined;

var _index = __webpack_require__(3);

Object.defineProperty(exports, "transition", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _active = __webpack_require__(111);

Object.defineProperty(exports, "active", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_active).default;
  }
});

var _interrupt = __webpack_require__(40);

Object.defineProperty(exports, "interrupt", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interrupt).default;
  }
});

__webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _schedule.SCHEDULED && schedule.name === name) {
        return new _index.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(2);

var root = [null];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d3Selection = __webpack_require__(0);

var _interrupt = __webpack_require__(113);

var _interrupt2 = _interopRequireDefault(_interrupt);

var _transition = __webpack_require__(114);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_d3Selection.selection.prototype.interrupt = _interrupt2.default;
_d3Selection.selection.prototype.transition = _transition2.default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return this.each(function () {
    (0, _interrupt2.default)(this, name);
  });
};

var _interrupt = __webpack_require__(40);

var _interrupt2 = _interopRequireDefault(_interrupt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  var id, timing;

  if (name instanceof _index.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0, _index.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0, _schedule2.default)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id);
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(2);

var _schedule2 = _interopRequireDefault(_schedule);

var _d3Ease = __webpack_require__(25);

var _d3Timer = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: _d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = (0, _d3Timer.now)(), defaultTiming;
    }
  }
  return timing;
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var fullname = (0, _d3Selection.namespace)(name),
      i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolate2.default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tween.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
};

var _d3Interpolate = __webpack_require__(13);

var _d3Selection = __webpack_require__(0);

var _tween = __webpack_require__(10);

var _interpolate = __webpack_require__(41);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00, interpolate0;
  return function () {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00, interpolate0;
  return function () {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00, value10, interpolate0;
  return function () {
    var value0,
        value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00, value10, interpolate0;
  return function () {
    var value0,
        value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = (0, _d3Selection.namespace)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

var _d3Selection = __webpack_require__(0);

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _schedule.get)(this.node(), id).delay;
};

var _schedule = __webpack_require__(2);

function delayFunction(id, value) {
  return function () {
    (0, _schedule.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.init)(this, id).delay = value;
  };
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _schedule.get)(this.node(), id).duration;
};

var _schedule = __webpack_require__(2);

function durationFunction(id, value) {
  return function () {
    (0, _schedule.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    (0, _schedule.set)(this, id).duration = value;
  };
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var id = this._id;

  return arguments.length ? this.each(easeConstant(id, value)) : (0, _schedule.get)(this.node(), id).ease;
};

var _schedule = __webpack_require__(2);

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    (0, _schedule.set)(this, id).ease = value;
  };
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (match) {
  if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, this._name, this._id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index.Transition(merges, this._parents, this._name, this._id);
};

var _index = __webpack_require__(3);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, listener) {
  var id = this._id;

  return arguments.length < 2 ? (0, _schedule.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

var _schedule = __webpack_require__(2);

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? _schedule.init : _schedule.set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.on("end.remove", removeFunction(this._id));
};

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;
    for (var i in this.__transition) {
      if (+i !== id) return;
    }if (parent) parent.removeChild(this);
  };
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selector)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0, _schedule2.default)(subgroup[i], name, id, i, subgroup, (0, _schedule.get)(node, id));
      }
    }
  }

  return new _index.Transition(subgroups, this._parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(2);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0, _schedule.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0, _schedule2.default)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index.Transition(subgroups, parents, name, id);
};

var _d3Selection = __webpack_require__(0);

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(2);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new Selection(this._groups, this._parents);
};

var _d3Selection = __webpack_require__(0);

var Selection = _d3Selection.selection.prototype.constructor;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name, value, priority) {
    var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolate2.default;
    return value == null ? this.styleTween(name, styleRemove(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction(name, i, (0, _tween.tweenValue)(this, "style." + name, value)) : styleConstant(name, i, value + ""), priority);
};

var _d3Interpolate = __webpack_require__(13);

var _d3Selection = __webpack_require__(0);

var _tween = __webpack_require__(10);

var _interpolate = __webpack_require__(41);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function styleRemove(name, interpolate) {
    var value00, value10, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name),
            value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
    };
}

function styleRemoveEnd(name) {
    return function () {
        this.style.removeProperty(name);
    };
}

function styleConstant(name, interpolate, value1) {
    var value00, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name);
        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
    };
}

function styleFunction(name, interpolate, value) {
    var value00, value10, interpolate0;
    return function () {
        var value0 = (0, _d3Selection.style)(this, name),
            value1 = value(this);
        if (value1 == null) value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
    };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function styleTween(name, value, priority) {
  function tween() {
    var node = this,
        i = value.apply(node, arguments);
    return i && function (t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return this.tween("text", typeof value === "function" ? textFunction((0, _tween.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

var _tween = __webpack_require__(10);

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var name = this._name,
      id0 = this._id,
      id1 = (0, _index.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0, _schedule.get)(node, id0);
        (0, _schedule2.default)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index.Transition(groups, this._parents, name, id1);
};

var _index = __webpack_require__(3);

var _schedule = __webpack_require__(2);

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var _lib = __webpack_require__(42);

var _lib2 = _interopRequireDefault(_lib);

var slLib = _lib2['default'].init(typeof window !== "undefined" ? window : undefined),
    doc = slLib.win.document,
    documentSupport = slLib.getDocumentSupport(),
    SVG_BBOX_CORRECTION = documentSupport.isWebKit ? 0 : 4.5;

function ContainerManager(parentContainer, isBrowserLess, maxContainers) {
    var svg;

    maxContainers = maxContainers > 5 ? maxContainers : 5;
    maxContainers = maxContainers < 20 ? maxContainers : 20;

    this.maxContainers = maxContainers;
    this.first = null;
    this.last = null;
    this.containers = {};
    this.length = 0;
    this.rootNode = parentContainer;

    if (isBrowserLess) {
        svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttributeNS('http://www.w3.org/2000/svg', 'xlink', 'http://www.w3.org/1999/xlink');
        svg.setAttributeNS('http://www.w3.org/2000/svg', 'height', '0');
        svg.setAttributeNS('http://www.w3.org/2000/svg', 'width', '0');
        this.svgRoot = svg;
        this.rootNode.appendChild(svg);
    }
}

ContainerManager.prototype.get = function (style) {
    var diff,
        key,
        containerObj,
        containers = this.containers,
        len = this.length,
        max = this.maxContainers,
        keyStr = '';

    for (key in slLib.supportedStyle) {
        if (style[key] !== undefined) {
            keyStr += slLib.supportedStyle[key] + ':' + style[key] + ';';
        }
    }

    if (!keyStr) {
        return false;
    }

    if (containerObj = containers[keyStr]) {
        if (this.first !== containerObj) {
            containerObj.prev && (containerObj.prev.next = containerObj.next);
            containerObj.next && (containerObj.next.prev = containerObj.prev);
            containerObj.next = this.first;
            containerObj.next.prev = containerObj;
            this.last === containerObj && (this.last = containerObj.prev);
            containerObj.prev = null;
            this.first = containerObj;
        }
    } else {
        if (len >= max) {
            diff = len - max + 1;
            // +1 is to remove an extra entry to make space for the new container to be added.
            while (diff--) {
                this.removeContainer(this.last);
            }
        }
        containerObj = this.addContainer(keyStr);
    }

    return containerObj;
};

ContainerManager.prototype.addContainer = function (keyStr) {
    var node, container;

    this.containers[keyStr] = container = {
        next: null,
        prev: null,
        node: null,
        ellipsesWidth: 0,
        lineHeight: 0,
        dotWidth: 0,
        avgCharWidth: 4,
        keyStr: keyStr,
        charCache: {}
    };

    // Since the container objects are arranged from most recent to least recent order, we need to add the new
    // object at the beginning of the list.
    container.next = this.first;
    container.next && (container.next.prev = container);
    this.first = container;
    if (!this.last) {
        this.last = container;
    }
    this.length += 1;

    node = container.node = doc.createElement('div');
    this.rootNode.appendChild(node);

    if (documentSupport.isIE && !documentSupport.hasSVG) {
        node.style.setAttribute('cssText', keyStr);
    } else {
        node.setAttribute('style', keyStr);
    }

    node.setAttribute('aria-hidden', 'true');
    node.setAttribute('role', 'presentation');
    node.style.display = 'inline-block';

    node.innerHTML = slLib.testStrAvg; // A test string.
    container.lineHeight = node.offsetHeight;
    container.avgCharWidth = node.offsetWidth / 3;

    if (documentSupport.isBrowserLess) {
        node = container.svgText = doc.createElementNS('http://www.w3.org/2000/svg', 'text');
        node.setAttribute('style', keyStr);
        this.svgRoot.appendChild(node);

        node.textContent = slLib.testStrAvg; // A test string.
        container.lineHeight = node.getBBox().height;
        container.avgCharWidth = (node.getBBox().width - SVG_BBOX_CORRECTION) / 3;

        node.textContent = '...';
        container.ellipsesWidth = node.getBBox().width - SVG_BBOX_CORRECTION;
        node.textContent = '.';
        container.dotWidth = node.getBBox().width - SVG_BBOX_CORRECTION;
    } else {
        node.innerHTML = '...';
        container.ellipsesWidth = node.offsetWidth;
        node.innerHTML = '.';
        container.dotWidth = node.offsetWidth;
        node.innerHTML = '';
    }

    return container;
};

ContainerManager.prototype.removeContainer = function (cObj) {
    var keyStr = cObj.keyStr;

    if (!keyStr || !this.length || !cObj) {
        return;
    }
    this.length -= 1;

    cObj.prev && (cObj.prev.next = cObj.next);
    cObj.next && (cObj.next.prev = cObj.prev);
    this.first === cObj && (this.first = cObj.next);
    this.last === cObj && (this.last = cObj.prev);

    cObj.node.parentNode.removeChild(cObj.node);

    delete this.containers[keyStr];
};

ContainerManager.prototype.dispose = function () {
    var key,
        containers = this.containers;

    this.maxContainers = null;
    for (key in containers) {
        this.removeContainer(containers[key]);
    }

    this.rootNode.parentNode.removeChild(this.rootNode);

    this.rootNode = null;
    this.first = null;
    this.last = null;
};

module.exports = ContainerManager;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Bezier = function (t) {
  function r(i) {
    if (n[i]) return n[i].exports;var e = n[i] = { exports: {}, id: i, loaded: !1 };return t[i].call(e.exports, e, e.exports, r), e.loaded = !0, e.exports;
  }var n = {};return r.m = t, r.c = n, r.p = "", r(0);
}([function (t, r, n) {
  "use strict";
  t.exports = n(1);
}, function (t, r, n) {
  "use strict";
  var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  };!function () {
    function r(t, r, n, i, e) {
      "undefined" == typeof e && (e = .5);var o = l.projectionratio(e, t),
          s = 1 - o,
          u = { x: o * r.x + s * i.x, y: o * r.y + s * i.y },
          a = l.abcratio(e, t),
          f = { x: n.x + (n.x - u.x) / a, y: n.y + (n.y - u.y) / a };return { A: f, B: n, C: u };
    }var e = Math.abs,
        o = Math.min,
        s = Math.max,
        u = Math.cos,
        a = Math.sin,
        f = Math.acos,
        c = Math.sqrt,
        h = Math.PI,
        x = { x: 0, y: 0, z: 0 },
        l = n(2),
        p = n(3),
        y = function y(t) {
      var r = t && t.forEach ? t : [].slice.call(arguments),
          n = !1;if ("object" === i(r[0])) {
        n = r.length;var o = [];r.forEach(function (t) {
          ["x", "y", "z"].forEach(function (r) {
            "undefined" != typeof t[r] && o.push(t[r]);
          });
        }), r = o;
      }var s = !1,
          u = r.length;if (n) {
        if (n > 4) {
          if (1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");s = !0;
        }
      } else if (6 !== u && 8 !== u && 9 !== u && 12 !== u && 1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");var a = !s && (9 === u || 12 === u) || t && t[0] && "undefined" != typeof t[0].z;this._3d = a;for (var f = [], c = 0, h = a ? 3 : 2; u > c; c += h) {
        var x = { x: r[c], y: r[c + 1] };a && (x.z = r[c + 2]), f.push(x);
      }this.order = f.length - 1, this.points = f;var p = ["x", "y"];a && p.push("z"), this.dims = p, this.dimlen = p.length, function (t) {
        for (var r = t.order, n = t.points, i = l.align(n, { p1: n[0], p2: n[r] }), o = 0; o < i.length; o++) {
          if (e(i[o].y) > 1e-4) return void (t._linear = !1);
        }t._linear = !0;
      }(this), this._t1 = 0, this._t2 = 1, this.update();
    },
        v = n(4);y.SVGtoBeziers = function (t) {
      return v(y, t);
    }, y.quadraticFromPoints = function (t, n, i, e) {
      if ("undefined" == typeof e && (e = .5), 0 === e) return new y(n, n, i);if (1 === e) return new y(t, n, n);var o = r(2, t, n, i, e);return new y(t, o.A, i);
    }, y.cubicFromPoints = function (t, n, i, e, o) {
      "undefined" == typeof e && (e = .5);var s = r(3, t, n, i, e);"undefined" == typeof o && (o = l.dist(n, s.C));var u = o * (1 - e) / e,
          a = l.dist(t, i),
          f = (i.x - t.x) / a,
          c = (i.y - t.y) / a,
          h = o * f,
          x = o * c,
          p = u * f,
          v = u * c,
          d = { x: n.x - h, y: n.y - x },
          m = { x: n.x + p, y: n.y + v },
          g = s.A,
          z = { x: g.x + (d.x - g.x) / (1 - e), y: g.y + (d.y - g.y) / (1 - e) },
          b = { x: g.x + (m.x - g.x) / e, y: g.y + (m.y - g.y) / e },
          _ = { x: t.x + (z.x - t.x) / e, y: t.y + (z.y - t.y) / e },
          w = { x: i.x + (b.x - i.x) / (1 - e), y: i.y + (b.y - i.y) / (1 - e) };return new y(t, _, w, i);
    };var d = function d() {
      return l;
    };y.getUtils = d, y.PolyBezier = p, y.prototype = { getUtils: d, valueOf: function valueOf() {
        return this.toString();
      }, toString: function toString() {
        return l.pointsToString(this.points);
      }, toSVG: function toSVG(t) {
        if (this._3d) return !1;for (var r = this.points, n = r[0].x, i = r[0].y, e = ["M", n, i, 2 === this.order ? "Q" : "C"], o = 1, s = r.length; s > o; o++) {
          e.push(r[o].x), e.push(r[o].y);
        }return e.join(" ");
      }, update: function update() {
        this.dpoints = [];for (var t = this.points, r = t.length, n = r - 1; r > 1; r--, n--) {
          for (var i, e = [], o = 0; n > o; o++) {
            i = { x: n * (t[o + 1].x - t[o].x), y: n * (t[o + 1].y - t[o].y) }, this._3d && (i.z = n * (t[o + 1].z - t[o].z)), e.push(i);
          }this.dpoints.push(e), t = e;
        }this.computedirection();
      }, computedirection: function computedirection() {
        var t = this.points,
            r = l.angle(t[0], t[this.order], t[1]);this.clockwise = r > 0;
      }, length: function length() {
        return l.length(this.derivative.bind(this));
      }, _lut: [], getLUT: function getLUT(t) {
        if (t = t || 100, this._lut.length === t) return this._lut;this._lut = [], t--;for (var r = 0; t >= r; r++) {
          this._lut.push(this.compute(r / t));
        }return this._lut;
      }, on: function on(t, r) {
        r = r || 5;for (var n, i = this.getLUT(), e = [], o = 0, s = 0; s < i.length; s++) {
          n = i[s], l.dist(n, t) < r && (e.push(n), o += s / i.length);
        }return e.length ? o /= e.length : !1;
      }, project: function project(t) {
        var r = this.getLUT(),
            n = r.length - 1,
            i = l.closest(r, t),
            e = i.mdist,
            o = i.mpos;if (0 === o || o === n) {
          var s = o / n,
              u = this.compute(s);return u.t = s, u.d = e, u;
        }var a,
            s,
            f,
            c,
            h = (o - 1) / n,
            x = (o + 1) / n,
            p = .1 / n;for (e += 1, s = h, a = s; x + p > s; s += p) {
          f = this.compute(s), c = l.dist(t, f), e > c && (e = c, a = s);
        }return f = this.compute(a), f.t = a, f.d = e, f;
      }, get: function get(t) {
        return this.compute(t);
      }, point: function point(t) {
        return this.points[t];
      }, compute: function compute(t) {
        if (0 === t) return this.points[0];if (1 === t) return this.points[this.order];var r = this.points,
            n = 1 - t;if (1 === this.order) return f = { x: n * r[0].x + t * r[1].x, y: n * r[0].y + t * r[1].y }, this._3d && (f.z = n * r[0].z + t * r[1].z), f;if (this.order < 4) {
          var i,
              e,
              o,
              s = n * n,
              u = t * t,
              a = 0;2 === this.order ? (r = [r[0], r[1], r[2], x], i = s, e = n * t * 2, o = u) : 3 === this.order && (i = s * n, e = s * t * 3, o = n * u * 3, a = t * u);var f = { x: i * r[0].x + e * r[1].x + o * r[2].x + a * r[3].x, y: i * r[0].y + e * r[1].y + o * r[2].y + a * r[3].y };return this._3d && (f.z = i * r[0].z + e * r[1].z + o * r[2].z + a * r[3].z), f;
        }for (var c = JSON.parse(JSON.stringify(this.points)); c.length > 1;) {
          for (var h = 0; h < c.length - 1; h++) {
            c[h] = { x: c[h].x + (c[h + 1].x - c[h].x) * t, y: c[h].y + (c[h + 1].y - c[h].y) * t }, "undefined" != typeof c[h].z && (c[h] = c[h].z + (c[h + 1].z - c[h].z) * t);
          }c.splice(c.length - 1, 1);
        }return c[0];
      }, raise: function raise() {
        for (var t, r, n, i = this.points, e = [i[0]], o = i.length, t = 1; o > t; t++) {
          r = i[t], n = i[t - 1], e[t] = { x: (o - t) / o * r.x + t / o * n.x, y: (o - t) / o * r.y + t / o * n.y };
        }return e[o] = i[o - 1], new y(e);
      }, derivative: function derivative(t) {
        var r,
            n,
            i = 1 - t,
            e = 0,
            o = this.dpoints[0];2 === this.order && (o = [o[0], o[1], x], r = i, n = t), 3 === this.order && (r = i * i, n = i * t * 2, e = t * t);var s = { x: r * o[0].x + n * o[1].x + e * o[2].x, y: r * o[0].y + n * o[1].y + e * o[2].y };return this._3d && (s.z = r * o[0].z + n * o[1].z + e * o[2].z), s;
      }, inflections: function inflections() {
        return l.inflections(this.points);
      }, normal: function normal(t) {
        return this._3d ? this.__normal3(t) : this.__normal2(t);
      }, __normal2: function __normal2(t) {
        var r = this.derivative(t),
            n = c(r.x * r.x + r.y * r.y);return { x: -r.y / n, y: r.x / n };
      }, __normal3: function __normal3(t) {
        var r = this.derivative(t),
            n = this.derivative(t + .01),
            i = c(r.x * r.x + r.y * r.y + r.z * r.z),
            e = c(n.x * n.x + n.y * n.y + n.z * n.z);r.x /= i, r.y /= i, r.z /= i, n.x /= e, n.y /= e, n.z /= e;var o = { x: n.y * r.z - n.z * r.y, y: n.z * r.x - n.x * r.z, z: n.x * r.y - n.y * r.x },
            s = c(o.x * o.x + o.y * o.y + o.z * o.z);o.x /= s, o.y /= s, o.z /= s;var u = [o.x * o.x, o.x * o.y - o.z, o.x * o.z + o.y, o.x * o.y + o.z, o.y * o.y, o.y * o.z - o.x, o.x * o.z - o.y, o.y * o.z + o.x, o.z * o.z],
            a = { x: u[0] * r.x + u[1] * r.y + u[2] * r.z, y: u[3] * r.x + u[4] * r.y + u[5] * r.z, z: u[6] * r.x + u[7] * r.y + u[8] * r.z };return a;
      }, hull: function hull(t) {
        var r,
            n = this.points,
            i = [],
            e = [],
            o = 0,
            s = 0,
            u = 0;for (e[o++] = n[0], e[o++] = n[1], e[o++] = n[2], 3 === this.order && (e[o++] = n[3]); n.length > 1;) {
          for (i = [], s = 0, u = n.length - 1; u > s; s++) {
            r = l.lerp(t, n[s], n[s + 1]), e[o++] = r, i.push(r);
          }n = i;
        }return e;
      }, split: function split(t, r) {
        if (0 === t && r) return this.split(r).left;if (1 === r) return this.split(t).right;var n = this.hull(t),
            i = { left: new y(2 === this.order ? [n[0], n[3], n[5]] : [n[0], n[4], n[7], n[9]]), right: new y(2 === this.order ? [n[5], n[4], n[2]] : [n[9], n[8], n[6], n[3]]), span: n };if (i.left._t1 = l.map(0, 0, 1, this._t1, this._t2), i.left._t2 = l.map(t, 0, 1, this._t1, this._t2), i.right._t1 = l.map(t, 0, 1, this._t1, this._t2), i.right._t2 = l.map(1, 0, 1, this._t1, this._t2), !r) return i;r = l.map(r, t, 1, 0, 1);var e = i.right.split(r);return e.left;
      }, extrema: function extrema() {
        var t,
            r,
            n = this.dims,
            i = {},
            e = [];return n.forEach(function (n) {
          r = function r(t) {
            return t[n];
          }, t = this.dpoints[0].map(r), i[n] = l.droots(t), 3 === this.order && (t = this.dpoints[1].map(r), i[n] = i[n].concat(l.droots(t))), i[n] = i[n].filter(function (t) {
            return t >= 0 && 1 >= t;
          }), e = e.concat(i[n].sort(l.numberSort));
        }.bind(this)), e = e.sort(l.numberSort).filter(function (t, r) {
          return e.indexOf(t) === r;
        }), i.values = e, i;
      }, bbox: function bbox() {
        var t = this.extrema(),
            r = {};return this.dims.forEach(function (n) {
          r[n] = l.getminmax(this, n, t[n]);
        }.bind(this)), r;
      }, overlaps: function overlaps(t) {
        var r = this.bbox(),
            n = t.bbox();return l.bboxoverlap(r, n);
      }, offset: function offset(t, r) {
        if ("undefined" != typeof r) {
          var n = this.get(t),
              i = this.normal(t),
              e = { c: n, n: i, x: n.x + i.x * r, y: n.y + i.y * r };return this._3d && (e.z = n.z + i.z * r), e;
        }if (this._linear) {
          var o = this.normal(0),
              s = this.points.map(function (r) {
            var n = { x: r.x + t * o.x, y: r.y + t * o.y };return r.z && i.z && (n.z = r.z + t * o.z), n;
          });return [new y(s)];
        }var u = this.reduce();return u.map(function (r) {
          return r.scale(t);
        });
      }, simple: function simple() {
        if (3 === this.order) {
          var t = l.angle(this.points[0], this.points[3], this.points[1]),
              r = l.angle(this.points[0], this.points[3], this.points[2]);if (t > 0 && 0 > r || 0 > t && r > 0) return !1;
        }var n = this.normal(0),
            i = this.normal(1),
            o = n.x * i.x + n.y * i.y;this._3d && (o += n.z * i.z);var s = e(f(o));return h / 3 > s;
      }, reduce: function reduce() {
        var t,
            r,
            n = 0,
            i = 0,
            o = .01,
            s = [],
            u = [],
            a = this.extrema().values;for (-1 === a.indexOf(0) && (a = [0].concat(a)), -1 === a.indexOf(1) && a.push(1), n = a[0], t = 1; t < a.length; t++) {
          i = a[t], r = this.split(n, i), r._t1 = n, r._t2 = i, s.push(r), n = i;
        }return s.forEach(function (t) {
          for (n = 0, i = 0; 1 >= i;) {
            for (i = n + o; 1 + o >= i; i += o) {
              if (r = t.split(n, i), !r.simple()) {
                if (i -= o, e(n - i) < o) return [];r = t.split(n, i), r._t1 = l.map(n, 0, 1, t._t1, t._t2), r._t2 = l.map(i, 0, 1, t._t1, t._t2), u.push(r), n = i;break;
              }
            }
          }1 > n && (r = t.split(n, 1), r._t1 = l.map(n, 0, 1, t._t1, t._t2), r._t2 = t._t2, u.push(r));
        }), u;
      }, scale: function scale(t) {
        var r = this.order,
            n = !1;if ("function" == typeof t && (n = t), n && 2 === r) return this.raise().scale(n);var i = this.clockwise,
            e = n ? n(0) : t,
            o = n ? n(1) : t,
            s = [this.offset(0, 10), this.offset(1, 10)],
            u = l.lli4(s[0], s[0].c, s[1], s[1].c);if (!u) throw new Error("cannot scale this curve. Try reducing it first.");var a = this.points,
            f = [];return [0, 1].forEach(function (t) {
          var n = f[t * r] = l.copy(a[t * r]);n.x += (t ? o : e) * s[t].n.x, n.y += (t ? o : e) * s[t].n.y;
        }.bind(this)), n ? ([0, 1].forEach(function (e) {
          if (2 !== this.order || !e) {
            var o = a[e + 1],
                s = { x: o.x - u.x, y: o.y - u.y },
                h = n ? n((e + 1) / r) : t;n && !i && (h = -h);var x = c(s.x * s.x + s.y * s.y);s.x /= x, s.y /= x, f[e + 1] = { x: o.x + h * s.x, y: o.y + h * s.y };
          }
        }.bind(this)), new y(f)) : ([0, 1].forEach(function (t) {
          if (2 !== this.order || !t) {
            var n = f[t * r],
                i = this.derivative(t),
                e = { x: n.x + i.x, y: n.y + i.y };f[t + 1] = l.lli4(n, e, u, a[t + 1]);
          }
        }.bind(this)), new y(f));
      }, outline: function outline(t, r, n, i) {
        function e(t, r, n, i, e) {
          return function (o) {
            var s = i / n,
                u = (i + e) / n,
                a = r - t;return l.map(o, 0, 1, t + s * a, t + u * a);
          };
        }r = "undefined" == typeof r ? t : r;var o,
            s = this.reduce(),
            u = s.length,
            a = [],
            f = [],
            c = 0,
            h = this.length(),
            x = "undefined" != typeof n && "undefined" != typeof i;s.forEach(function (o) {
          _ = o.length(), x ? (a.push(o.scale(e(t, n, h, c, _))), f.push(o.scale(e(-r, -i, h, c, _)))) : (a.push(o.scale(t)), f.push(o.scale(-r))), c += _;
        }), f = f.map(function (t) {
          return o = t.points, o[3] ? t.points = [o[3], o[2], o[1], o[0]] : t.points = [o[2], o[1], o[0]], t;
        }).reverse();var y = a[0].points[0],
            v = a[u - 1].points[a[u - 1].points.length - 1],
            d = f[u - 1].points[f[u - 1].points.length - 1],
            m = f[0].points[0],
            g = l.makeline(d, y),
            z = l.makeline(v, m),
            b = [g].concat(a).concat([z]).concat(f),
            _ = b.length;return new p(b);
      }, outlineshapes: function outlineshapes(t, r, n) {
        r = r || t;for (var i = this.outline(t, r).curves, e = [], o = 1, s = i.length; s / 2 > o; o++) {
          var u = l.makeshape(i[o], i[s - o], n);u.startcap.virtual = o > 1, u.endcap.virtual = s / 2 - 1 > o, e.push(u);
        }return e;
      }, intersects: function intersects(t, r) {
        return t ? t.p1 && t.p2 ? this.lineIntersects(t) : (t instanceof y && (t = t.reduce()), this.curveintersects(this.reduce(), t, r)) : this.selfintersects(r);
      }, lineIntersects: function lineIntersects(t) {
        var r = o(t.p1.x, t.p2.x),
            n = o(t.p1.y, t.p2.y),
            i = s(t.p1.x, t.p2.x),
            e = s(t.p1.y, t.p2.y),
            u = this;return l.roots(this.points, t).filter(function (t) {
          var o = u.get(t);return l.between(o.x, r, i) && l.between(o.y, n, e);
        });
      }, selfintersects: function selfintersects(t) {
        var r,
            n,
            i,
            e,
            o = this.reduce(),
            s = o.length - 2,
            u = [];for (r = 0; s > r; r++) {
          i = o.slice(r, r + 1), e = o.slice(r + 2), n = this.curveintersects(i, e, t), u = u.concat(n);
        }return u;
      }, curveintersects: function curveintersects(t, r, n) {
        var i = [];t.forEach(function (t) {
          r.forEach(function (r) {
            t.overlaps(r) && i.push({ left: t, right: r });
          });
        });var e = [];return i.forEach(function (t) {
          var r = l.pairiteration(t.left, t.right, n);r.length > 0 && (e = e.concat(r));
        }), e;
      }, arcs: function arcs(t) {
        t = t || .5;var r = [];return this._iterate(t, r);
      }, _error: function _error(t, r, n, i) {
        var o = (i - n) / 4,
            s = this.get(n + o),
            u = this.get(i - o),
            a = l.dist(t, r),
            f = l.dist(t, s),
            c = l.dist(t, u);return e(f - a) + e(c - a);
      }, _iterate: function _iterate(t, r) {
        var n,
            i = 0,
            e = 1;do {
          n = 0, e = 1;var o,
              s,
              f,
              c,
              h,
              x = this.get(i),
              p = !1,
              y = !1,
              v = e,
              d = 1,
              m = 0;do {
            y = p, c = f, v = (i + e) / 2, m++, o = this.get(v), s = this.get(e), f = l.getccenter(x, o, s), f.interval = { start: i, end: e };var g = this._error(f, x, i, e);if (p = t >= g, h = y && !p, h || (d = e), p) {
              if (e >= 1) {
                if (f.interval.end = d = 1, c = f, e > 1) {
                  var z = { x: f.x + f.r * u(f.e), y: f.y + f.r * a(f.e) };f.e += l.angle({ x: f.x, y: f.y }, z, this.get(1));
                }break;
              }e += (e - i) / 2;
            } else e = v;
          } while (!h && n++ < 100);if (n >= 100) break;c = c ? c : f, r.push(c), i = d;
        } while (1 > e);return r;
      } }, t.exports = y;
  }();
}, function (t, r, n) {
  "use strict";
  !function () {
    var r = Math.abs,
        i = Math.cos,
        e = Math.sin,
        o = Math.acos,
        s = Math.atan2,
        u = Math.sqrt,
        a = Math.pow,
        f = function f(t) {
      return 0 > t ? -a(-t, 1 / 3) : a(t, 1 / 3);
    },
        c = Math.PI,
        h = 2 * c,
        x = c / 2,
        l = 1e-6,
        p = Number.MAX_SAFE_INTEGER || 9007199254740991,
        y = Number.MIN_SAFE_INTEGER || -9007199254740991,
        v = { Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213], Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872], arcfn: function arcfn(t, r) {
        var n = r(t),
            i = n.x * n.x + n.y * n.y;return "undefined" != typeof n.z && (i += n.z * n.z), u(i);
      }, between: function between(t, r, n) {
        return t >= r && n >= t || v.approximately(t, r) || v.approximately(t, n);
      }, approximately: function approximately(t, n, i) {
        return r(t - n) <= (i || l);
      }, length: function length(t) {
        var r,
            n,
            i = .5,
            e = 0,
            o = v.Tvalues.length;for (r = 0; o > r; r++) {
          n = i * v.Tvalues[r] + i, e += v.Cvalues[r] * v.arcfn(n, t);
        }return i * e;
      }, map: function map(t, r, n, i, e) {
        var o = n - r,
            s = e - i,
            u = t - r,
            a = u / o;return i + s * a;
      }, lerp: function lerp(t, r, n) {
        var i = { x: r.x + t * (n.x - r.x), y: r.y + t * (n.y - r.y) };return r.z && n.z && (i.z = r.z + t * (n.z - r.z)), i;
      }, pointToString: function pointToString(t) {
        var r = t.x + "/" + t.y;return "undefined" != typeof t.z && (r += "/" + t.z), r;
      }, pointsToString: function pointsToString(t) {
        return "[" + t.map(v.pointToString).join(", ") + "]";
      }, copy: function copy(t) {
        return JSON.parse(JSON.stringify(t));
      }, angle: function angle(t, r, n) {
        var i = r.x - t.x,
            e = r.y - t.y,
            o = n.x - t.x,
            u = n.y - t.y,
            a = i * u - e * o,
            f = i * o + e * u;return s(a, f);
      }, round: function round(t, r) {
        var n = "" + t,
            i = n.indexOf(".");return parseFloat(n.substring(0, i + 1 + r));
      }, dist: function dist(t, r) {
        var n = t.x - r.x,
            i = t.y - r.y;return u(n * n + i * i);
      }, closest: function closest(t, r) {
        var n,
            i,
            e = a(2, 63);return t.forEach(function (t, o) {
          i = v.dist(r, t), e > i && (e = i, n = o);
        }), { mdist: e, mpos: n };
      }, abcratio: function abcratio(t, n) {
        if (2 !== n && 3 !== n) return !1;if ("undefined" == typeof t) t = .5;else if (0 === t || 1 === t) return t;var i = a(t, n) + a(1 - t, n),
            e = i - 1;return r(e / i);
      }, projectionratio: function projectionratio(t, r) {
        if (2 !== r && 3 !== r) return !1;if ("undefined" == typeof t) t = .5;else if (0 === t || 1 === t) return t;var n = a(1 - t, r),
            i = a(t, r) + n;return n / i;
      }, lli8: function lli8(t, r, n, i, e, o, s, u) {
        var a = (t * i - r * n) * (e - s) - (t - n) * (e * u - o * s),
            f = (t * i - r * n) * (o - u) - (r - i) * (e * u - o * s),
            c = (t - n) * (o - u) - (r - i) * (e - s);return 0 == c ? !1 : { x: a / c, y: f / c };
      }, lli4: function lli4(t, r, n, i) {
        var e = t.x,
            o = t.y,
            s = r.x,
            u = r.y,
            a = n.x,
            f = n.y,
            c = i.x,
            h = i.y;return v.lli8(e, o, s, u, a, f, c, h);
      }, lli: function lli(t, r) {
        return v.lli4(t, t.c, r, r.c);
      }, makeline: function makeline(t, r) {
        var i = n(1),
            e = t.x,
            o = t.y,
            s = r.x,
            u = r.y,
            a = (s - e) / 3,
            f = (u - o) / 3;return new i(e, o, e + a, o + f, e + 2 * a, o + 2 * f, s, u);
      }, findbbox: function findbbox(t) {
        var r = p,
            n = p,
            i = y,
            e = y;return t.forEach(function (t) {
          var o = t.bbox();r > o.x.min && (r = o.x.min), n > o.y.min && (n = o.y.min), i < o.x.max && (i = o.x.max), e < o.y.max && (e = o.y.max);
        }), { x: { min: r, mid: (r + i) / 2, max: i, size: i - r }, y: { min: n, mid: (n + e) / 2, max: e, size: e - n } };
      }, shapeintersections: function shapeintersections(t, r, n, i, e) {
        if (!v.bboxoverlap(r, i)) return [];var o = [],
            s = [t.startcap, t.forward, t.back, t.endcap],
            u = [n.startcap, n.forward, n.back, n.endcap];return s.forEach(function (r) {
          r.virtual || u.forEach(function (i) {
            if (!i.virtual) {
              var s = r.intersects(i, e);s.length > 0 && (s.c1 = r, s.c2 = i, s.s1 = t, s.s2 = n, o.push(s));
            }
          });
        }), o;
      }, makeshape: function makeshape(t, r, n) {
        var i = r.points.length,
            e = t.points.length,
            o = v.makeline(r.points[i - 1], t.points[0]),
            s = v.makeline(t.points[e - 1], r.points[0]),
            u = { startcap: o, forward: t, back: r, endcap: s, bbox: v.findbbox([o, t, r, s]) },
            a = v;return u.intersections = function (t) {
          return a.shapeintersections(u, u.bbox, t, t.bbox, n);
        }, u;
      }, getminmax: function getminmax(t, r, n) {
        if (!n) return { min: 0, max: 0 };var i,
            e,
            o = p,
            s = y;-1 === n.indexOf(0) && (n = [0].concat(n)), -1 === n.indexOf(1) && n.push(1);for (var u = 0, a = n.length; a > u; u++) {
          i = n[u], e = t.get(i), e[r] < o && (o = e[r]), e[r] > s && (s = e[r]);
        }return { min: o, mid: (o + s) / 2, max: s, size: s - o };
      }, align: function align(t, r) {
        var n = r.p1.x,
            o = r.p1.y,
            u = -s(r.p2.y - o, r.p2.x - n),
            a = function a(t) {
          return { x: (t.x - n) * i(u) - (t.y - o) * e(u), y: (t.x - n) * e(u) + (t.y - o) * i(u) };
        };return t.map(a);
      }, roots: function roots(t, r) {
        r = r || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };var n = t.length - 1,
            e = v.align(t, r),
            s = function s(t) {
          return t >= 0 && 1 >= t;
        };if (2 === n) {
          var a = e[0].y,
              c = e[1].y,
              x = e[2].y,
              l = a - 2 * c + x;if (0 !== l) {
            var p = -u(c * c - a * x),
                y = -a + c,
                d = -(p + y) / l,
                m = -(-p + y) / l;return [d, m].filter(s);
          }return c !== x && 0 === l ? [(2 * c - x) / 2 * (c - x)].filter(s) : [];
        }var g = e[0].y,
            z = e[1].y,
            b = e[2].y,
            _ = e[3].y,
            l = -g + 3 * z - 3 * b + _,
            a = 3 * g - 6 * z + 3 * b,
            c = -3 * g + 3 * z,
            x = g;if (v.approximately(l, 0)) {
          if (v.approximately(a, 0)) return v.approximately(c, 0) ? [] : [-x / c].filter(s);var w = u(c * c - 4 * a * x),
              E = 2 * a;return [(w - c) / E, (-c - w) / E].filter(s);
        }a /= l, c /= l, x /= l;var M,
            d,
            S,
            j,
            k,
            e = (3 * c - a * a) / 3,
            O = e / 3,
            w = (2 * a * a * a - 9 * a * c + 27 * x) / 27,
            T = w / 2,
            C = T * T + O * O * O;if (0 > C) {
          var L = -e / 3,
              N = L * L * L,
              A = u(N),
              B = -w / (2 * A),
              F = -1 > B ? -1 : B > 1 ? 1 : B,
              I = o(F),
              q = f(A),
              P = 2 * q;return S = P * i(I / 3) - a / 3, j = P * i((I + h) / 3) - a / 3, k = P * i((I + 2 * h) / 3) - a / 3, [S, j, k].filter(s);
        }if (0 === C) return M = 0 > T ? f(-T) : -f(T), S = 2 * M - a / 3, j = -M - a / 3, [S, j].filter(s);var Q = u(C);return M = f(-T + Q), d = f(T + Q), [M - d - a / 3].filter(s);
      }, droots: function droots(t) {
        if (3 === t.length) {
          var r = t[0],
              n = t[1],
              i = t[2],
              e = r - 2 * n + i;if (0 !== e) {
            var o = -u(n * n - r * i),
                s = -r + n,
                a = -(o + s) / e,
                f = -(-o + s) / e;return [a, f];
          }return n !== i && 0 === e ? [(2 * n - i) / (2 * (n - i))] : [];
        }if (2 === t.length) {
          var r = t[0],
              n = t[1];return r !== n ? [r / (r - n)] : [];
        }
      }, inflections: function inflections(t) {
        if (t.length < 4) return [];var r = v.align(t, { p1: t[0], p2: t.slice(-1)[0] }),
            n = r[2].x * r[1].y,
            i = r[3].x * r[1].y,
            e = r[1].x * r[2].y,
            o = r[3].x * r[2].y,
            s = 18 * (-3 * n + 2 * i + 3 * e - o),
            u = 18 * (3 * n - i - 3 * e),
            a = 18 * (e - n);if (v.approximately(s, 0)) {
          if (!v.approximately(u, 0)) {
            var f = -a / u;if (f >= 0 && 1 >= f) return [f];
          }return [];
        }var c = u * u - 4 * s * a,
            h = Math.sqrt(c),
            o = 2 * s;return v.approximately(o, 0) ? [] : [(h - u) / o, -(u + h) / o].filter(function (t) {
          return t >= 0 && 1 >= t;
        });
      }, bboxoverlap: function bboxoverlap(t, n) {
        var i,
            e,
            o,
            s,
            u,
            a = ["x", "y"],
            f = a.length;for (i = 0; f > i; i++) {
          if (e = a[i], o = t[e].mid, s = n[e].mid, u = (t[e].size + n[e].size) / 2, r(o - s) >= u) return !1;
        }return !0;
      }, expandbox: function expandbox(t, r) {
        r.x.min < t.x.min && (t.x.min = r.x.min), r.y.min < t.y.min && (t.y.min = r.y.min), r.z && r.z.min < t.z.min && (t.z.min = r.z.min), r.x.max > t.x.max && (t.x.max = r.x.max), r.y.max > t.y.max && (t.y.max = r.y.max), r.z && r.z.max > t.z.max && (t.z.max = r.z.max), t.x.mid = (t.x.min + t.x.max) / 2, t.y.mid = (t.y.min + t.y.max) / 2, t.z && (t.z.mid = (t.z.min + t.z.max) / 2), t.x.size = t.x.max - t.x.min, t.y.size = t.y.max - t.y.min, t.z && (t.z.size = t.z.max - t.z.min);
      }, pairiteration: function pairiteration(t, r, n) {
        var i = t.bbox(),
            e = r.bbox(),
            o = 1e5,
            s = n || .5;if (i.x.size + i.y.size < s && e.x.size + e.y.size < s) return [(o * (t._t1 + t._t2) / 2 | 0) / o + "/" + (o * (r._t1 + r._t2) / 2 | 0) / o];var u = t.split(.5),
            a = r.split(.5),
            f = [{ left: u.left, right: a.left }, { left: u.left, right: a.right }, { left: u.right, right: a.right }, { left: u.right, right: a.left }];f = f.filter(function (t) {
          return v.bboxoverlap(t.left.bbox(), t.right.bbox());
        });var c = [];return 0 === f.length ? c : (f.forEach(function (t) {
          c = c.concat(v.pairiteration(t.left, t.right, s));
        }), c = c.filter(function (t, r) {
          return c.indexOf(t) === r;
        }));
      }, getccenter: function getccenter(t, r, n) {
        var o,
            u = r.x - t.x,
            a = r.y - t.y,
            f = n.x - r.x,
            c = n.y - r.y,
            l = u * i(x) - a * e(x),
            p = u * e(x) + a * i(x),
            y = f * i(x) - c * e(x),
            d = f * e(x) + c * i(x),
            m = (t.x + r.x) / 2,
            g = (t.y + r.y) / 2,
            z = (r.x + n.x) / 2,
            b = (r.y + n.y) / 2,
            _ = m + l,
            w = g + p,
            E = z + y,
            M = b + d,
            S = v.lli8(m, g, _, w, z, b, E, M),
            j = v.dist(S, t),
            k = s(t.y - S.y, t.x - S.x),
            O = s(r.y - S.y, r.x - S.x),
            T = s(n.y - S.y, n.x - S.x);return T > k ? ((k > O || O > T) && (k += h), k > T && (o = T, T = k, k = o)) : O > T && k > O ? (o = T, T = k, k = o) : T += h, S.s = k, S.e = T, S.r = j, S;
      }, numberSort: function numberSort(t, r) {
        return t - r;
      } };t.exports = v;
  }();
}, function (t, r, n) {
  "use strict";
  !function () {
    var r = n(2),
        i = function i(t) {
      this.curves = [], this._3d = !1, t && (this.curves = t, this._3d = this.curves[0]._3d);
    };i.prototype = { valueOf: function valueOf() {
        return this.toString();
      }, toString: function toString() {
        return "[" + this.curves.map(function (t) {
          return r.pointsToString(t.points);
        }).join(", ") + "]";
      }, addCurve: function addCurve(t) {
        this.curves.push(t), this._3d = this._3d || t._3d;
      }, length: function length() {
        return this.curves.map(function (t) {
          return t.length();
        }).reduce(function (t, r) {
          return t + r;
        });
      }, curve: function curve(t) {
        return this.curves[t];
      }, bbox: function e() {
        for (var t = this.curves, e = t[0].bbox(), n = 1; n < t.length; n++) {
          r.expandbox(e, t[n].bbox());
        }return e;
      }, offset: function o(t) {
        var o = [];return this.curves.forEach(function (r) {
          o = o.concat(r.offset(t));
        }), new i(o);
      } }, t.exports = i;
  }();
}, function (t, r, n) {
  "use strict";
  function i(t, r, n) {
    if ("Z" !== r) {
      if ("M" === r) return void (s = { x: n[0], y: n[1] });var i = [!1, s.x, s.y].concat(n),
          e = t.bind.apply(t, i),
          o = new e(),
          u = n.slice(-2);return s = { x: u[0], y: u[1] }, o;
    }
  }function e(t, r) {
    for (var n, e, s, u = o(r).split(" "), a = new RegExp("[MLCQZ]", ""), f = [], c = { C: 6, Q: 4, L: 2, M: 2 }; u.length;) {
      n = u.splice(0, 1)[0], a.test(n) && (s = u.splice(0, c[n]).map(parseFloat), e = i(t, n, s), e && f.push(e));
    }return new t.PolyBezier(f);
  }var o = n(5),
      s = { x: !1, y: !1 };t.exports = e;
}, function (t, r) {
  "use strict";
  function n(t) {
    t = t.replace(/,/g, " ").replace(/-/g, " - ").replace(/-\s+/g, "-").replace(/([a-zA-Z])/g, " $1 ");var r,
        n,
        i,
        e,
        o,
        s,
        u = t.replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
        a = u.length,
        f = [],
        c = 0,
        h = 0,
        x = 0,
        l = 0,
        p = 0,
        y = 0,
        v = 0,
        d = 0,
        m = "";for (r = 1; a > r; r++) {
      if (n = u[r], i = n.substring(0, 1), e = i.toLowerCase(), f = n.replace(i, "").trim().split(" "), f = f.filter(function (t) {
        return "" !== t;
      }).map(parseFloat), o = f.length, "m" === e) {
        if (m += "M ", "m" === i ? (x += f[0], l += f[1]) : (x = f[0], l = f[1]), c = x, h = l, m += x + " " + l + " ", o > 2) for (s = 0; o > s; s += 2) {
          "m" === i ? (x += f[s], l += f[s + 1]) : (x = f[s], l = f[s + 1]), m += ["L", x, l, ""].join(" ");
        }
      } else if ("l" === e) for (s = 0; o > s; s += 2) {
        "l" === i ? (x += f[s], l += f[s + 1]) : (x = f[s], l = f[s + 1]), m += ["L", x, l, ""].join(" ");
      } else if ("h" === e) for (s = 0; o > s; s++) {
        "h" === i ? x += f[s] : x = f[s], m += ["L", x, l, ""].join(" ");
      } else if ("v" === e) for (s = 0; o > s; s++) {
        "v" === i ? l += f[s] : l = f[s], m += ["L", x, l, ""].join(" ");
      } else if ("q" === e) for (s = 0; o > s; s += 4) {
        "q" === i ? (p = x + f[s], y = l + f[s + 1], x += f[s + 2], l += f[s + 3]) : (p = f[s], y = f[s + 1], x = f[s + 2], l = f[s + 3]), m += ["Q", p, y, x, l, ""].join(" ");
      } else if ("t" === e) for (s = 0; o > s; s += 2) {
        p = x + (x - p), y = l + (l - y), "t" === i ? (x += f[s], l += f[s + 1]) : (x = f[s], l = f[s + 1]), m += ["Q", p, y, x, l, ""].join(" ");
      } else if ("c" === e) for (s = 0; o > s; s += 6) {
        "c" === i ? (p = x + f[s], y = l + f[s + 1], v = x + f[s + 2], d = l + f[s + 3], x += f[s + 4], l += f[s + 5]) : (p = f[s], y = f[s + 1], v = f[s + 2], d = f[s + 3], x = f[s + 4], l = f[s + 5]), m += ["C", p, y, v, d, x, l, ""].join(" ");
      } else if ("s" === e) for (s = 0; o > s; s += 4) {
        p = x + (x - v), y = l + (l - d), "s" === i ? (v = x + f[s], d = l + f[s + 1], x += f[s + 2], l += f[s + 3]) : (v = f[s], d = f[s + 1], x = f[s + 2], l = f[s + 3]), m += ["C", p, y, v, d, x, l, ""].join(" ");
      } else "z" === e && (m += "Z ", x = c, l = h);
    }return m.trim();
  }t.exports = n;
}]);

exports.default = Bezier;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var orderEdges = function orderEdges(edges) {
    var resp = { forward: [], backward: [] };
    edges.forEach(function (edge) {
        var status = (0, _utils.edgeOrderCode)(edge);
        if (status === _utils.EdgeDirection.FORWARD) {
            resp.forward.push(edge);
        } else {
            resp.backward.push(edge);
        }
    });

    return resp;
};

var Connection = function () {
    function Connection(edges) {
        var _this = this;

        _classCallCheck(this, Connection);

        edges.forEach(function (edge) {
            return edge.partOf(_this);
        });
        this.edges = edges;
        this.directions = orderEdges(edges);
        this.sequence = null;
    }

    _createClass(Connection, [{
        key: 'path',
        value: function path() {
            return {
                forward: this.directions.forward.map(function (edge) {
                    return edge.path();
                }),
                backward: this.directions.backward.map(function (edge) {
                    return edge.path();
                })
            };
        }
    }]);

    return Connection;
}();

exports.default = Connection;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* global requestAnimationFrame */

var _d3Selection = __webpack_require__(0);

var _fusionchartsSmartlabel = __webpack_require__(43);

var _fusionchartsSmartlabel2 = _interopRequireDefault(_fusionchartsSmartlabel);

var _node = __webpack_require__(48);

var _node2 = _interopRequireDefault(_node);

var _frame = __webpack_require__(47);

var _frame2 = _interopRequireDefault(_frame);

var _frameManager = __webpack_require__(46);

var _frameManager2 = _interopRequireDefault(_frameManager);

var _edge = __webpack_require__(23);

var _edge2 = _interopRequireDefault(_edge);

var _edgeManager = __webpack_require__(45);

var _edgeManager2 = _interopRequireDefault(_edgeManager);

var _utils = __webpack_require__(5);

var _circumstance = __webpack_require__(44);

var _circumstance2 = _interopRequireDefault(_circumstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _render = function _render(self) {
    return function () {
        var body = self.bodyEl();
        var frameSize = self._frames.size();
        self.config.frameLength = (self._data.nodes.length - 1) * self.config.nodeSpacing;

        var sel = body.selectAll('g').data([1]);

        sel.exit().remove();
        sel = sel.enter().append('g').attr('transform', 'translate(' + self.config.padding[0] + ', ' + (self.config.padding[1] + self.config.nodeSize * 0.5) + ')');

        var _self$_frames$draw = self._frames.draw(sel, self.config),
            _self$_frames$draw2 = _slicedToArray(_self$_frames$draw, 1),
            frameElWidth = _self$_frames$draw2[0];

        var _self$_edges$draw = self._edges.draw(sel, (0, _d3Selection.select)(self._mount), self.config),
            _self$_edges$draw2 = _slicedToArray(_self$_edges$draw, 2),
            edgeWidth = _self$_edges$draw2[0],
            settings = _self$_edges$draw2[1];

        self._frames.postDrawingAdjust({ offsetX: settings.shiftX });

        body.attr('height', frameSize * self.config.frameLength + (frameSize - 1) * self.config.frameSpacing + 2 * self.config.padding[1] + self.config.nodeSize + 'px');

        body.attr('width', frameElWidth + edgeWidth + self.config.padding[0] + 'px');
    };
};

var Arcus = function () {
    function Arcus(config) {
        _classCallCheck(this, Arcus);

        this.height = null;
        this.width = null;
        this.config = Object.assign(Object.assign({}, this.constructor.defaultConfig()), config);

        this._mount = null;
        this._bodyEl = null;
        this._data = null;
        this._frames = null;
        this._edges = null;
        this._slManager = new _fusionchartsSmartlabel2.default(+new Date());
        this._circumstance = new _circumstance2.default();
    }

    _createClass(Arcus, [{
        key: 'mount',
        value: function mount() {
            var el = void 0;
            var dim = void 0;
            if (arguments.length) {
                this._mount = el = arguments.length <= 0 ? undefined : arguments[0];
                dim = arguments.length <= 1 ? undefined : arguments[1];
                this._bodyEl = (0, _d3Selection.select)(el).append('svg').attr('version', '1.1').classed('arcus-root', true);
                this.width = dim[0];
                this.height = dim[1];
                return this;
            }
            return this._mount;
        }
    }, {
        key: 'contextInf',
        value: function contextInf(cb) {
            var ctx = this._circumstance;
            ctx.mount((0, _d3Selection.select)(this._mount));
            return ctx.registerListener(cb);
        }
    }, {
        key: 'bodyEl',
        value: function bodyEl() {
            return this._bodyEl;
        }
    }, {
        key: 'data',
        value: function data() {
            var _this = this;

            if (arguments.length) {
                var data = void 0;

                this._data = data = arguments.length <= 0 ? undefined : arguments[0];
                this._frames = new _frameManager2.default(data.frames.map(function (frame, i) {
                    var offset = i * ((data.nodes.length - 1) * _this.config.nodeSpacing + _this.config.frameSpacing);
                    var inst = new _frame2.default(frame, data.nodes.map(function (node, ii) {
                        var nInst = new _node2.default(node.name, ii, Object.assign({ size: _this.config.nodeSize }, node.config));
                        nInst.frameOffset = offset;
                        nInst.offsetY = ii * _this.config.nodeSpacing;
                        return nInst;
                    }), i, { sl: _this._slManager });

                    inst.offset = offset;
                    return inst;
                }));
                var resolve = (0, _utils.resolver)(this._frames.frames, this.config);

                this._edges = new _edgeManager2.default(data.edges.map(function (edge) {
                    return new _edge2.default(resolve(edge.from), resolve(edge.to), edge.key, {
                        inf: edge.inf,
                        path: [edge.from, edge.to]
                    });
                }), this._frames, this);

                this._circumstance.data(arguments.length <= 0 ? undefined : arguments[0]);
                return this;
            }
            return this._data;
        }
    }, {
        key: 'render',
        value: function render() {
            requestAnimationFrame(_render(this));
            return this;
        }
    }], [{
        key: 'defaultConfig',
        value: function defaultConfig() {
            return {
                nodeSpacing: 50,
                frameSpacing: 80,
                nodeSize: 4,
                maxFrameLabelLength: 250,
                padding: [20, 20],
                delimiter: '.'
            };
        }
    }]);

    return Arcus;
}();

exports.default = Arcus;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var direction = function direction(edges) {
    return (0, _utils.edgeOrderCode)(edges[0]);
};

var Shadow = function () {
    function Shadow(edges) {
        _classCallCheck(this, Shadow);

        this.edges = edges;
        this.direction = direction(edges);
    }

    _createClass(Shadow, [{
        key: 'spread',
        value: function spread() {
            return Math.abs(this.edges[this.edges.length - 1].r());
        }
    }, {
        key: 'path',
        value: function path() {
            var edges = this.edges;
            return [[edges[0].path()[0], edges[edges.length - 1].reversePath({ breathingSpace: 8 })[0].replace(/M/g, 'L'), 'Z'].join(' '), edges[0]];
        }
    }]);

    return Shadow;
}();

exports.default = Shadow;

/***/ })
/******/ ]);
});
//# sourceMappingURL=arcus.js.map