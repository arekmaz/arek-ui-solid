import { ark } from "@ark-ui/solid";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { buttonVariants } from "./button";

const iconButton = tv({
  extend: buttonVariants,
  variants: {
    size: {
      default: "px-0",
      sm: "px-0",
      lg: "px-0",
      icon: "px-0",
    },
  },
  defaultVariants: { size: "icon" },
});

export const IconButton = styled(ark.button, iconButton);
