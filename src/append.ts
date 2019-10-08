function append(parent: HTMLElement, elements: HTMLElement | HTMLElement[]) {
    if (elements instanceof Array) {
        const fragments = document.createDocumentFragment();
        elements.forEach(element => fragments.appendChild(element));
        parent.appendChild(fragments);
    } else {
        parent.appendChild(elements);
    }
}

export default append;
