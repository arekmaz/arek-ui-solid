import { tv } from "tailwind-variants";
import { Loader2 } from "lucide-solid";
import { ark } from "@ark-ui/solid";
import { createStyleContext } from "../utils/create-styled-context";

const spinnerStyles = tv({
  slots: { root: ["shrink-0"], icon: [] },
  variants: {
    size: {
      xs: { root: ["size-3"], icon: ["[&_svg]:size-3"] },
      sm: { root: ["size-5"], icon: ["[&_svg]:size-5"] },
      md: { root: ["size-8"], icon: ["[&_svg]:size-8"] },
      lg: { root: ["size-9"], icon: ["[&_svg]:size-9"] },
      xl: { root: ["size-12"], icon: ["[&_svg]:size-12"] },
    },
    animation: {
      spin: { icon: ["animate-spin"] },
      custom: { icon: [] },
    },
  },
  defaultVariants: { size: "md", animation: "spin" },
});

const { withProvider, withContext } = createStyleContext(spinnerStyles);

const Icon = withContext(ark.div, "icon", { "data-part": "icon" } as any);

const Root = withProvider(ark.div, "root", {
  children: (
    <Icon>
      <Loader2 />
    </Icon>
  ),
});

export const Spinner = Object.assign(Root, { Icon });
