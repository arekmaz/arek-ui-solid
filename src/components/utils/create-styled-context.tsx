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
import { Dynamic } from "solid-js/web";

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
    const StyledComponent = (
      props: P & {
        classes?: Classes<R>;
        unstyled?: boolean;
      }
    ) => {
      const [hocProps, compProps] = splitProps(props, ["classes", "unstyled"]);
      const [variantProps, otherProps] = splitProps(
        mergeProps(defaultProps, compProps),
        recipe.variantKeys as any
      );

      const slotStyles = recipe(variantProps);
      const C = Comp as any;

      console.log({ hocProps, compProps });

      return (
        <StyleContext.Provider
          value={{
            slotStyles: slotStyles as any,
            classes: hocProps.classes ?? {},
            unstyled: hocProps.unstyled,
          }}
        >
          <C
            {...otherProps}
            class={
              hocProps.unstyled
                ? (otherProps as any).class
                : (slotStyles as any)[slot]({
                    class: cn(hocProps.classes?.[slot], (props as any).class),
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
    const StyledComponent = (props: P & { unstyled?: boolean }) => {
      const ctx = useContext(StyleContext) as any;
      const merged = mergeProps(defaultProps, props);

      const [hocProps, compProps] = splitProps(merged, ["unstyled"]);

      const C = Comp as any;

      console.log({ classes: ctx.classes });

      const allProps = mergeProps(compProps, {
        class:
          ctx.unstyled || hocProps.unstyled
            ? (compProps as any).class
            : ctx.slotStyles?.[slot]({
                class: cn(ctx.classes[slot], (compProps as any).class),
              }),
      }) as any;

      return <Dynamic component={C} {...allProps} />;
    };

    return StyledComponent as any;
  };

  return {
    withProvider,
    withContext,
  };
};
