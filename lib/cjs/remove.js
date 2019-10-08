'use strict';

function remove(parent, children) {
    if (children instanceof Array) {
        children.forEach(function (element) { return parent.removeChild(element); });
    }
    else {
        parent.removeChild(children);
    }
}

module.exports = remove;
