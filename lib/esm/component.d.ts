declare type pseudoCSSStyles = {
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
declare function component(config?: ComponentSchema): HTMLElement;
export default component;
