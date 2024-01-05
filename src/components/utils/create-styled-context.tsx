/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import {
  createContext,
  useContext,
  type ComponentProps,
  type JSX,
  splitProps,
  mergeProps,
  Component,
} from "solid-js";
import { cn } from "./cn";

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantKeys: (string | number)[];
};
type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>;
type Classes<R extends StyleRecipe> = { [key in StyleSlot<R>]?: string };
type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>;
type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];
type CombineProps<T, U> = Omit<T, keyof U> & U;

export interface ComponentVariants<
  T extends Component<any>,
  R extends StyleRecipe,
  OtherProps
> {
  (
    props: CombineProps<ComponentProps<T>, StyleVariantProps<R>> & OtherProps
  ): JSX.Element;
}

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<{
    slotStyles: StyleSlotRecipe<R> | null;
    classes: Classes<R>;
    unstyled?: boolean;
  }>({ slotStyles: null, classes: {} });

  const withProvider = <P,>(
    Comp: Component<P>,
    slot: StyleSlot<R>,
    defaultProps?: Partial<P>
  ): ComponentVariants<
    Component<P>,
    R,
    {
      classes?: Classes<R>;
      unstyled?: boolean;
    }
  > => {
    const StyledComponent = ({
      classes = {},
      unstyled = false,
      ...props
    }: P & {
      classes?: Classes<R>;
      unstyled?: boolean;
    }) => {
      const [variantProps, otherProps] = splitProps(
        mergeProps(defaultProps, props),
        recipe.variantKeys as any
      );

      const slotStyles = recipe(variantProps);
      const C = Comp as any;

      return (
        <StyleContext.Provider
          value={{ slotStyles: slotStyles as any, classes, unstyled }}
        >
          <C
            as
            any
            {...otherProps}
            className={
              unstyled
                ? (props as any).class
                : (slotStyles as any)[slot]({
                    class: cn(classes[slot], (props as any).class),
                  })
            }
          />
        </StyleContext.Provider>
      );
    };

    return StyledComponent as any;
  };

  const withContext = <P,>(
    Comp: Component<P>,
    slot: StyleSlot<R>,
    defaultProps?: Partial<P>
  ): Component<P & { unstyled?: boolean }> => {
    const StyledComponent = ({
      unstyled: unstyledProp,
      ...props
    }: P & { unstyled?: boolean }) => {
      const { slotStyles, classes, unstyled } = useContext(StyleContext) as any;
      const C = Comp as any;
      const allProps = mergeProps(defaultProps, props, {
        class:
          unstyled || unstyledProp
            ? (props as any).class
            : slotStyles?.[slot]({
                className: cn(classes[slot], (props as any).class),
              }),
      });

      return <C {...allProps} />;
    };

    return StyledComponent as any;
  };

  return {
    withProvider,
    withContext,
  };
};
