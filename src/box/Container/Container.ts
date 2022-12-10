import { FlexCSS } from "../CSSClasses";
let isElementWrapped = false
export const Container = (options: {
    node: Node;
}) => {
    let { node } = options;
    if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");

    let id = node.id;
    if (!id) throw Error("No id specified");

    node.classList.add(FlexCSS.flex);
    node.setAttribute("flexContainer", `flexContainerId-${node.id}`);

    return {
        Direction(direction: FlexDirection = "column") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let directions: any = {
                "column": FlexCSS["flex_direction--column"],
                "row": FlexCSS["flex_direction--row"],
                "row-reverse": FlexCSS["flex_direction--row-reverse"],
                "column-reverse": FlexCSS["flex_direction--column-reverse"]
            }
            for (let key in directions)
                node.classList.remove(directions[key]);
            node.classList.add(directions[direction] || directions["column"]);
            return this;
        },
        AlignItems(alignement: FlexAlignment = "center") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let alignements: any = {
                "center": FlexCSS["flex_align-items--center"],
                "flex-start": FlexCSS["flex_align-items--flex-start"],
                "flex-end": FlexCSS["flex_align-items--flex-end"],
                "baseline": FlexCSS["flex_align-items--baseline"],
                "stretch": FlexCSS["flex_align-items--stretch"]
            }
            for (let key in alignements) node.classList.remove(alignements[key]);
            node.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        JustifyContent(justification: FlexJustification = "center") {
            // implement start-end left-right
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let justifications: any = {
                "center": FlexCSS["flex_justify-content--center"],
                "flex-start": FlexCSS["flex_justify-content--flex-start"],
                "flex-end": FlexCSS["flex_justify-content--flex-end"],
                "space-between": FlexCSS["flex_justify-content--space-between"],
                "space-around": FlexCSS["flex_justify-content--space-around"],
                "space-evenly": FlexCSS["flex_justify-content--space-evenly"]
            }
            for (let key in justifications) node.classList.remove(justifications[key]);
            node.classList.add(justifications[justification] || justifications["center"]);
            return this;
        },
        Wrap(wrap: FlexWrap = "wrap") {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            let wraps: any = {
                "wrap": FlexCSS["flex_wrap--wrap"],
                "no-wrap": FlexCSS["flex_wrap--no-wrap"],
                "wrap-reverse": FlexCSS["flex_wrap--wrap-reverse"]
            }
            for (let key in wraps) node.classList.remove(wraps[key]);
            node.classList.add(wraps[wrap] || wraps["no-wrap"]);
            isElementWrapped = true
            return this;
        },
        Flow(
            flow: { direction?: FlexDirection; wrap?: FlexWrap } = {
                direction: "row",
                wrap: "no-wrap"
            }
        ) {
            if (!id) throw Error("No id specified");
            if (flow.wrap)
                this.Wrap(flow.wrap);
            if (flow.direction)
                this.Direction(flow.direction);
            return this;
        },
        Gap(gap?: `${string} ${string}` | string) {
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            node.style.gap = gap || "0px";
            return this;
        },
        AlignContent(alignement: AlignContent = "center") {
            console.log({ isElementWrapped });
            if (!(node instanceof HTMLElement)) throw Error("Element must be an HTMLElement");
            if (!isElementWrapped || (!(node.classList.contains("flex_wrap--wrap") || node.classList.contains("flex_wrap--wrap-reverse"))))
                throw Error("Element should have wrap or wrap-reverse class to use align-content, use Wrap() method to set wrap or wrap-reverse class to element before using AlignContent() method or use Flow() method to set both direction and wrap at once.");
            let alignements: any = {
                "center": FlexCSS["flex_align-content--center"],
                "flex-start": FlexCSS["flex_align-content--flex-start"],
                "flex-end": FlexCSS["flex_align-content--flex-end"],
                "space-between": FlexCSS["flex_align-content--space-between"],
                "space-around": FlexCSS["flex_align-content--space-around"],
                "space-evenly": FlexCSS["flex_align-content--space-evenly"],
                "stretch": FlexCSS["flex_align-content--stretch"]
            }
            for (let key in alignements) node.classList.remove(alignements[key]);
            node.classList.add(alignements[alignement] || alignements["center"]);
            return this;
        },
        Center(wrap: FlexWrap = "wrap", alignContent: AlignContent = "center") {
            this.AlignItems()
            this.JustifyContent();
            this.AlignContent(alignContent);
            return this
        },
        CenterLeft(wrap: FlexWrap = "no-wrap", alignContent: AlignContent = "center") {
            this.AlignItems()
            this.JustifyContent("flex-start");
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this
        },
        CenterRight(wrap: FlexWrap = "no-wrap", alignContent: AlignContent = "center") {
            this.AlignItems()
            this.JustifyContent("flex-end");
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this
        },
        CenterTop(wrap: FlexWrap = "no-wrap", alignContent: AlignContent = "center") {
            this.AlignItems("flex-start")
            this.JustifyContent();
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this
        },
        CenterBottom(wrap: FlexWrap = "no-wrap", alignContent: AlignContent = "center") {
            this.AlignItems("flex-end")
            this.JustifyContent();
            if (wrap) this.Wrap(wrap);
            if (wrap !== "no-wrap") this.AlignContent(alignContent);
            return this
        },
    };
};