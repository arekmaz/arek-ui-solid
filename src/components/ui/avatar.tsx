import { Avatar as A } from "@ark-ui/solid";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const avatarStyles = tv({
  slots: {
    root: ["rounded-full", "border", "shrink-0"],
    fallback: [
      "flex",
      "items-center",
      "justify-center",
      "bg-muted-foreground",
      "font-semibold",
      "h-[inherit]",
      "_hidden:hidden",
    ],
    image: ["object-cover"],
  },
  variants: {
    size: {
      md: {
        root: ["size-10"],
        image: ["size-10"],
        fallback: ["text-md", "[&_svg]:size-5"],
      },
    },
  },
  defaultVariants: { size: "md" },
});
const { withProvider, withContext } = createStyleContext(avatarStyles);

const Root = withProvider(A.Root, "root");
const Fallback = withContext(A.Fallback, "fallback");
const Image = withContext(A.Image, "image");

export const Avatar = Object.assign(Root, { Fallback, Image });
