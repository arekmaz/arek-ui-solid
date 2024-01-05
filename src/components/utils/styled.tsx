import { Component, ComponentProps, mergeProps, splitProps } from "solid-js";
import { VariantProps } from "tailwind-variants";
import { cn } from "./cn";

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantKeys: (string | number)[];
};

export const styled = <Props extends { class?: string }, R extends StyleRecipe>(
  Component: Component<Props>,
  recipe: R,
  defaultProps?: Partial<Props & VariantProps<R>>
) => {
  const Comp = ({
    unstyled,
    ...props
  }: ComponentProps<Component<Props>> & { unstyled?: boolean }) => {
    const [variantProps, otherProps] = splitProps(
      mergeProps(defaultProps, props),
      recipe.variantKeys as any
    );

    const classNames = recipe(variantProps);

    const componentProps = mergeProps(otherProps, {
      class: unstyled ? props.class : cn(classNames, (props as any).class),
    } as any);

    return <Component {...componentProps} />;
  };
  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name;
  return Comp;
};
