import { FlexCSS } from "../CSSClasses";

export const Container = (options: {
    element: Node;
}) => {
    let { element } = options;
    if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");

    let id = element.id;
    if (!id) throw Error("No id specified");

    element.classList.add(FlexCSS.flex);
    element.setAttribute("flexContainer", `flexContainerId-${element.id}`);

    return {
        Direction(direction: FlexDirection = "column") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let directions: any = {
                "column": FlexCSS["flex_direction--column"],
                "row": FlexCSS["flex_direction--row"],
                "row-reverse": FlexCSS["flex_direction--row-reverse"],
                "column-reverse": FlexCSS["flex_direction--column-reverse"]
            }
            for (let key in directions) element.classList.remove(directions[key]);
            element.classList.add(directions[direction] || directions["column"]);
            return this;
        },
        AlignItems(alignement: FlexAlignment = "center") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let alignements: any = {
                "center": FlexCSS["flex_align-items--center"],
                "flex-start": FlexCSS["flex_align-items--flex-start"],
                "flex-end": FlexCSS["flex_align-items--flex-end"],
                "baseline": FlexCSS["flex_align-items--baseline"],
                "stretch": FlexCSS["flex_align-items--stretch"]
            }
            for (let key in alignements) element.classList.remove(alignements[key]);
            element.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        JustifyContent(justification: FlexJustification = "center") {
            // implement start-end left-right
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let justifications: any = {
                "center": FlexCSS["flex_justify-content--center"],
                "flex-start": FlexCSS["flex_justify-content--flex-start"],
                "flex-end": FlexCSS["flex_justify-content--flex-end"],
                "space-between": FlexCSS["flex_justify-content--space-between"],
                "space-around": FlexCSS["flex_justify-content--space-around"],
                "space-evenly": FlexCSS["flex_justify-content--space-evenly"]
            }
            for (let key in justifications) element.classList.remove(justifications[key]);
            element.classList.add(justifications[justification] || justifications["center"]);
            return this;
        },
        Wrap(wrap: FlexWrap = "no-wrap") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let wraps: any = {
                "wrap": FlexCSS["flex_wrap--wrap"],
                "no-wrap": FlexCSS["flex_wrap--no-wrap"],
                "wrap-reverse": FlexCSS["flex_wrap--wrap-reverse"]
            }
            for (let key in wraps) element.classList.remove(wraps[key]);
            element.classList.add(wraps[wrap] || wraps["no-wrap"]);
            return this;
        },
        Flow(
            flow: { direction?: FlexDirection; wrap?: FlexWrap } = {
                direction: "column",
                wrap: "no-wrap"
            }
        ) {
            if (!id) throw Error("No id specified");
            this.Direction(flow.direction);
            this.Wrap(flow.wrap);
            return this;
        },
        Gap(gap?: `${string} ${string}` | string) {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            element.style.gap = gap || "0px";
            return this;
        },
        AlignContent(alignement: AlignContent = "center") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            if (!(element.classList.contains("flex_wrap--wrap") || element.classList.contains("flex_wrap--wrap-reverse")))
                throw Error("Element should be wrapped or wrapped-reverese");
            let alignements: any = {
                "center": FlexCSS["flex_align-content--center"],
                "flex-start": FlexCSS["flex_align-content--flex-start"],
                "flex-end": FlexCSS["flex_align-content--flex-end"],
                "space-between": FlexCSS["flex_align-content--space-between"],
                "space-around": FlexCSS["flex_align-content--space-around"],
                "space-evenly": FlexCSS["flex_align-content--space-evenly"],
                "stretch": FlexCSS["flex_align-content--stretch"]
            }
            for (let key in alignements) element.classList.remove(alignements[key]);
            element.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        CenterContent() {
            this.AlignItems()
            this.JustifyContent();
            return this
        }
    };
};