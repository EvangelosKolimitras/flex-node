import { FlexCSS } from "../CSSClasses";

export const Item = (options: { container: Node, childNodeIndex: number }) => {
    let { container, childNodeIndex } = options;
    let childNodes = (<Array<HTMLElement>>Array.from(container.childNodes));
    let len = childNodes.length;
    let element: HTMLElement;

    if (childNodeIndex < 1 || childNodeIndex > len) throw Error("Index out of bounds")

    element = childNodes[childNodeIndex - 1];

    return {
        AlignSelf(alignement: SelfAlignment = 'center') {
            let a: any = {
                "center": FlexCSS["flex_align-self--center"],
                "flex-start": FlexCSS["flex_align-self--flex-start"],
                "flex-end": FlexCSS["flex_align-self--flex-end"],
                "stretch": FlexCSS["flex_align-self--stretch"],
                "baseline": FlexCSS["flex_align-self--baseline"]
            }
            for (let key in a) element.classList.remove(a[key]);
            element.classList.add(a[alignement] || a['center']);
            return this;
        },
        Order(order: number = 0) {
            if (!element.id) throw Error("No id specified");
            if (!element.classList.contains("flex")) throw Error("Parent is not flexed");
            element.style.order = `${order}`;
            return this
        },

        Flex(flex: { grow?: number, shrink?: number, basis?: { value: number, unit: "px" | "%" } }) {
            if (!element.id) throw Error("No id specified");
            if (!element.classList.contains("flex")) throw Error("Parent is not flexed");

            let { grow, shrink, basis } = flex;

            function growHandler(grow: number) {
                element.classList.add("flex-item--flex-grow")
                element.style.setProperty('--flex-grow', grow.toString());
            }

            function shrinkHandler(shrink: number) {
                element.classList.add("flex-item--flex-shrink")
                element.style.setProperty('--flex-shrink', shrink.toString());
            }

            function basisHandler(options: { value: number, unit: "px" | "%" }) {
                let { value, unit } = options;
                element.classList.add("flex-item--flex-basis")
                element.style.setProperty('--flex-basis', unit ? value.toString().concat(unit) : value.toString());
            }

            if (grow) growHandler(grow);
            if (shrink) shrinkHandler(shrink)
            if (basis) basisHandler(basis)
        }
    }
}