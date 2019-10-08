function remove(parent: HTMLElement, children: HTMLElement | HTMLElement[]) {
    if (children instanceof Array) {
        children.forEach(element => parent.removeChild(element));
    } else {
        parent.removeChild(children);
    }
}

export default remove;
