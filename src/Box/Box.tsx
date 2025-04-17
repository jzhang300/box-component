import React from "react";
import classNames from "classnames";
import omit from "object.omit";
import "./Box.scss";

export type spacingSizes =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "none";
export type alignments = "start" | "end" | "center" | "stretch";
export type flexRange =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
export type justifications = alignments | "space";
export type flexDirections = "row" | "column";
export type DynamicTagType =
  | React.ComponentType
  | keyof React.JSX.IntrinsicElements;

export interface AlignmentProps {
  alignment?: alignments;
  alignSelf?: alignments;
  direction?: flexDirections;
  flex?: flexRange;
  justification?: justifications;
}

export interface IndividualSpacingProps {
  inline?: spacingSizes;
  inset?: spacingSizes;
  insetDisable?: string;
  stack?: spacingSizes;
}

export interface CascadingSpacingProps {
  inlinify?: spacingSizes;
  insetify?: spacingSizes;
  insetDisablify?: string;
  stackify?: spacingSizes;
}

export type SpacingProps = IndividualSpacingProps & CascadingSpacingProps;

export interface DynamicTagProps {
  tag?: DynamicTagType;
}

export type BoxProps = AlignmentProps &
  SpacingProps &
  DynamicTagProps &
  React.HTMLAttributes<HTMLElement | SVGElement>;

/**
 * Gathers all the [space]-ify props
 * and returns [space] props to apply to each of Box component's children.
 * Non-mutating.
 * @param  {obj} props
 * @return {obj} propsToApplyToChildren
 */
const getSpaceProps = (props: CascadingSpacingProps) => {
  const propsToApplyToChildren: IndividualSpacingProps = {};
  if (typeof props.stackify !== "undefined") {
    propsToApplyToChildren.stack = props.stackify;
  }
  if (typeof props.inlinify !== "undefined") {
    propsToApplyToChildren.inline = props.inlinify;
  }
  if (typeof props.insetify !== "undefined") {
    propsToApplyToChildren.inset = props.insetify;
  }
  if (typeof props.insetDisablify !== "undefined") {
    propsToApplyToChildren.insetDisable = props.insetDisablify;
  }

  return propsToApplyToChildren;
};

/**
 * Transforms original Children to apply new spacing props dynamically.
 * Non-mutating.
 * @param  {obj} propsToApply
 * @param  {React children} children
 * @return {React children} transformed Children
 */
const applyParentSpacingProps = (propsToApply, children) => {
  return React.Children.map(children, (child, index) => {
    let newChild = child;
    let newProps;
    let _propsToApply = propsToApply;

    // Currently it just passes props like a dummy if child has props or not.
    // Also it only clones if propsToApply is not empty.
    // This used to check for child.type.propTypes but the newer React libraries
    // have changed and you can't check for components that are . I couldn't find a good way to check if the child
    // takes in a space prop or not.
    // For now I'm settling with this dummy approach.
    if (child.props && Object.keys(propsToApply).length > 0) {
      // if last element in children, don't apply stackify and inlinify spacing.
      if (index === React.Children.count(children) - 1) {
        _propsToApply = omit(propsToApply, ["stack", "inline"]);
      }
      // let child's original props override the props passed in
      newProps = { ..._propsToApply, ...child.props };
      newChild = React.cloneElement(child, newProps);
    }

    return newChild;
  });
};

/**
 * Box is a general-purpose flex-based block component.
 *
 * Box is designed to make writing complex layouts easier and more intuitive.
 * Underneath, it uses BEM and integrates the app's
 * design system spacing definitions.
 *
 * Notable features:
 * - Unique spacing definitions: inline, inset, stack
 * - Can define spacing of all children
 * - Children can override spacing of props passed in
 * - Last element's spacing is disabled
 * - Can be any html tag
 * - Can always override with new className
 */
export const Box: React.FC<BoxProps> = ({
  alignment,
  alignSelf,
  children,
  className,
  tag = "div",
  direction,
  flex,
  inline,
  inlinify,
  inset,
  insetify,
  insetDisable,
  insetDisablify,
  justification,
  stack,
  stackify,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      className={classNames(
        "Box",
        { [`Box--direction-${direction}`]: typeof direction !== "undefined" },
        { [`Box--alignment-${alignment}`]: typeof alignment !== "undefined" },
        {
          [`Box--justification-${justification}`]:
            typeof justification !== "undefined",
        },
        { [`Box--alignSelf-${alignSelf}`]: typeof alignSelf !== "undefined" },
        { [`Box--flex-${flex}`]: typeof flex !== "undefined" },
        { [`Box--stack-${stack}`]: typeof stack !== "undefined" },
        { [`Box--inline-${inline}`]: typeof inline !== "undefined" },
        { [`Box--inset-${inset}`]: typeof inset !== "undefined" },
        { "Box--insetDisable-t": insetDisable && insetDisable.includes("t") },
        { "Box--insetDisable-r": insetDisable && insetDisable.includes("r") },
        { "Box--insetDisable-b": insetDisable && insetDisable.includes("b") },
        { "Box--insetDisable-l": insetDisable && insetDisable.includes("l") },
        className
      )}
      {...props}
    >
      {applyParentSpacingProps(
        getSpaceProps({
          inlinify,
          insetify,
          stackify,
          insetDisablify,
        }),
        children
      )}
    </Tag>
  );
};
