'use strict';

function append(parent, elements) {
    if (elements instanceof Array) {
        var fragments_1 = document.createDocumentFragment();
        elements.forEach(function (element) { return fragments_1.appendChild(element); });
        parent.appendChild(fragments_1);
    }
    else {
        parent.appendChild(elements);
    }
}

module.exports = append;
