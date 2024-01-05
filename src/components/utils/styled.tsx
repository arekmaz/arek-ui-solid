import { Component, mergeProps, splitProps } from "solid-js";
import { VariantProps } from "tailwind-variants";
import { cn } from "./cn";

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantKeys: (string | number)[];
};
type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];

export const styled = <Props, R extends StyleRecipe>(
  Component: Component<Props>,
  recipe: R,
  defaultProps?: Partial<Props & VariantProps<R>>
) => {
  const Comp = ({
    unstyled,
    ...props
  }: Props & StyleVariantProps<R> & { unstyled?: boolean }) => {
    const [variantProps, otherProps] = splitProps(
      mergeProps(defaultProps, props),
      recipe.variantKeys as any
    );

    const classNames = recipe(variantProps);

    const componentProps = mergeProps(otherProps, {
      class: unstyled
        ? (props as any).class
        : cn(classNames, (props as any).class),
    } as any);

    return <Component {...componentProps} />;
  };
  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name;
  return Comp;
};
