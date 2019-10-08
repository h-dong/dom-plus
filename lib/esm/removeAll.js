function removeAll(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}

export default removeAll;
