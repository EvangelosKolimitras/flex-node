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
            switch (direction) {
                case "column": {
                    element.classList.remove(
                        FlexCSS["flex_direction--row"],
                        FlexCSS["flex_direction--row-reverse"],
                        FlexCSS["flex_direction--column-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_direction--column"]);
                    return this;
                }

                case "row": {
                    element.classList.remove(
                        FlexCSS["flex_direction--column"],
                        FlexCSS["flex_direction--column-reverse"],
                        FlexCSS["flex_direction--row-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_direction--row"]);
                    return this;
                }

                case "row-reverse": {
                    element.classList.remove(
                        FlexCSS["flex_direction--row"],
                        FlexCSS["flex_direction--column"],
                        FlexCSS["flex_direction--column-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_direction--row-reverse"]);
                    return this;
                }

                case "column-reverse": {
                    element.classList.remove(
                        FlexCSS["flex_direction--row"],
                        FlexCSS["flex_direction--column"],
                        FlexCSS["flex_direction--row-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_direction--column-reverse"]);
                    return this;
                }

                default: {
                    element.classList.remove(FlexCSS["flex_direction--row"]);
                    element.classList.remove(FlexCSS["flex_direction--row-reverse"]);
                    element.classList.remove(FlexCSS["flex_direction--column-reverse"]);
                    element.classList.add(FlexCSS["flex_direction--column"]);
                    return this;
                }
            }
        },
        AlignItems(alignement: FlexAlignment = "center") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            switch (alignement) {
                case "center": {
                    element.classList.remove(
                        FlexCSS["flex_align-items--flex-start"],
                        FlexCSS["flex_align-items--flex-end"],
                        FlexCSS["flex_align-items--baseline"],
                        FlexCSS["flex_align-items--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--center"]);
                    return this;
                }

                case "flex-start": {
                    element.classList.remove(
                        FlexCSS["flex_align-items--center"],
                        FlexCSS["flex_align-items--flex-end"],
                        FlexCSS["flex_align-items--baseline"],
                        FlexCSS["flex_align-items--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--flex-start"]);
                    return this;
                }

                case "flex-end": {
                    element.classList.remove(
                        FlexCSS["flex_align-items--center"],
                        FlexCSS["flex_align-items--flex-start"],
                        FlexCSS["flex_align-items--baseline"],
                        FlexCSS["flex_align-items--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--flex-end"]);
                    return this;
                }

                case "stretch": {
                    element.classList.remove(
                        FlexCSS["flex_align-items--center"],
                        FlexCSS["flex_align-items--flex-start"],
                        FlexCSS["flex_align-items--baseline"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--stretch"]);
                    return this;
                }

                case "baseline": {
                    element.classList.remove(
                        FlexCSS["flex_align-items--center"],
                        FlexCSS["flex_align-items--flex-start"],
                        FlexCSS["flex_align-items--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--baseline"]);
                    return this;
                }

                default: {
                    element.classList.remove(
                        FlexCSS["flex_align-items--flex-start"],
                        FlexCSS["flex_align-items--flex-end"],
                        FlexCSS["flex_align-items--baseline"],
                        FlexCSS["flex_align-items--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-items--center"]);
                    return this;
                }
            }
        },
        JustifyContent(justification: FlexJustification = "center") {
            // implement start-end left-right
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            switch (justification) {
                case "center": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--center"]);
                    return this;
                }

                case "flex-start": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--center"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--flex-start"]);
                    return this;
                }

                case "flex-end": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--center"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--flex-end"]);
                    return this;
                }

                case "space-between": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--center"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--space-between"]);
                    return this;
                }

                case "space-around": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--center"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--space-around"]);
                    return this;
                }

                case "space-evenly": {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--center"],
                    );
                    element.classList.add(FlexCSS["flex_justify-content--space-evenly"]);
                    return this;
                }
                default: {
                    element.classList.remove(
                        FlexCSS["flex_justify-content--flex-start"],
                        FlexCSS["flex_justify-content--flex-end"],
                        FlexCSS["flex_justify-content--space-between"],
                        FlexCSS["flex_justify-content--space-around"],
                        FlexCSS["flex_justify-content--space-evenly"]
                    );
                    element.classList.add(FlexCSS["flex_justify-content--center"]);
                    return this;
                }
            }
        },
        Wrap(wrap: FlexWrap = "no-wrap") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            switch (wrap) {
                case "wrap": {
                    element.classList.remove(
                        FlexCSS["flex_wrap--no-wrap"],
                        FlexCSS["flex_wrap--wrap-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_wrap--wrap"]);
                    return this;
                }
                case "no-wrap": {
                    element.classList.remove(
                        FlexCSS["flex_wrap--wrap"],
                        FlexCSS["flex_wrap--wrap-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_wrap--no-wrap"]);
                    return this;
                }
                case "wrap-reverse": {
                    element.classList.remove(
                        FlexCSS["flex_wrap--wrap"],
                        FlexCSS["flex_wrap--no-wrap"]
                    );
                    element.classList.add(FlexCSS["flex_wrap--wrap-reverse"]);
                    return this;
                }
                default: {
                    element.classList.remove(
                        FlexCSS["flex_wrap--wrap"],
                        FlexCSS["flex_wrap--wrap-reverse"]
                    );
                    element.classList.add(FlexCSS["flex_wrap--no-wrap"]);
                    return this;
                }
            }
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
            if (gap)
                element.style.gap = gap
            return this;
        },
        AlignContent(alignement: AlignContent = "center") {
            if (!(element instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            if (
                !element.classList.contains("flex_wrap--wrap") &&
                !element.classList.contains("flex_wrap--wrap-reverse")
            ) {
                throw Error("Element should be wrapped or wrapped-reverese");
            }
            switch (alignement) {
                case "center": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--center"]);
                    return this;
                }
                case "flex-start": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--center"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--flex-start"]);
                    return this;
                }
                case "flex-end": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--center"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--flex-end"]);
                    return this;
                }
                case "space-between": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--center"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--space-between"]);
                    return this;
                }
                case "space-evenly": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--center"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--space-evenly"]);
                    return this;
                }
                case "space-around": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--center"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--space-around"]);
                    return this;
                }
                case "stretch": {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--center"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--stretch"]);
                    return this;
                }
                default: {
                    element.classList.remove(
                        FlexCSS["flex_align-content--flex-start"],
                        FlexCSS["flex_align-content--flex-end"],
                        FlexCSS["flex_align-content--space-between"],
                        FlexCSS["flex_align-content--space-evenly"],
                        FlexCSS["flex_align-content--space-around"],
                        FlexCSS["flex_align-content--stretch"]
                    );
                    element.classList.add(FlexCSS["flex_align-content--center"]);
                    return this;
                }
            }
        },
        CenterContent() {
            this.AlignItems()
            this.JustifyContent();
            return this
        }
    };
};