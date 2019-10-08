/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function component(config) {
    if (config === void 0) { config = {}; }
    var _a = config.tagName, tagName = _a === void 0 ? "div" : _a, style = config.style, attributes = config.attributes, events = config.events;
    var element = document.createElement(tagName);
    Object.assign(element, attributes);
    Object.assign(element.style, style);
    _addHover(element, style);
    _addEvents(element, events);
    return element;
}
function _addHover(element, style) {
    if (style.hover && Object.keys(style.hover).length) {
        var hover_1 = style.hover, styles_1 = style.styles;
        // error handling
        Object.keys(hover_1).forEach(function (key) {
            if (styles_1 && !styles_1[key]) {
                console.warn("Warning: hover style \"" + key + ":" + hover_1[key] + "\" was not defiend in style config");
            }
        });
        var hoverEvents = [
            {
                type: "mouseover",
                handler: function () { return Object.assign(element.style, __assign(__assign({}, styles_1), hover_1)); }
            },
            { type: "mouseout", handler: function () { return Object.assign(element.style, styles_1); } }
        ];
        _addEvents(element, hoverEvents);
    }
}
function _addEvents(element, events) {
    if (events && events.length) {
        events.forEach(function (event) {
            element.addEventListener(event.type, event.handler, event.useCapture);
        });
    }
}

export default component;
