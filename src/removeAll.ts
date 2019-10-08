function removeAll(parent: HTMLElement) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}

export default removeAll;
