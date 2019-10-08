
function appendRoot(parent: HTMLElement, id: string) {
    if (id) {
        document.getElementById(id).replaceWith(parent);
    } else {
        document.body.prepend(parent);
    }
}

export default appendRoot;
