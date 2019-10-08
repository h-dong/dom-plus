type pseudoCSSStyles = {
    hover: CSSStyleDeclaration;
};

interface ComponentSchema {
    tagName?: string;
    style?: Partial<CSSStyleDeclaration> | pseudoCSSStyles;
    attributes?: object;
    events?: EventSchema[];
}

interface EventSchema {
    type: string;
    handler: (e: any) => void;
    useCapture?: boolean;
}

function component(config: ComponentSchema = {}) {
    const { tagName = "div", style, attributes, events } = config;
    const element: HTMLElement = document.createElement(tagName);
    Object.assign(element, attributes);
    Object.assign(element.style, style);

    _addHover(element, style);
    _addEvents(element, events);

    return element;
}

function _addHover(element, style) {
    if (style && style.hover && Object.keys(style.hover).length) {
        const { hover, styles } = style;

        // error handling
        Object.keys(hover).forEach(key => {
            if (styles && !styles[key]) {
                console.warn(
                    `Warning: hover style "${key}:${
                    hover[key]
                    }" was not defiend in style config`
                );
            }
        });

        const hoverEvents = [
            {
                type: "mouseover",
                handler: () => Object.assign(element.style, { ...styles, ...hover })
            },
            { type: "mouseout", handler: () => Object.assign(element.style, styles) }
        ];

        _addEvents(element, hoverEvents);
    }
}

function _addEvents(element, events) {
    if (events && events.length) {
        events.forEach((event: EventSchema) => {
            element.addEventListener(event.type, event.handler, event.useCapture);
        });
    }
}

export default component;
