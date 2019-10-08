'use strict';

function removeAll(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}

module.exports = removeAll;
