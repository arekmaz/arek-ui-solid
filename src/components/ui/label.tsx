import { ark } from "@ark-ui/solid";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";

const labelVariants = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

export const Label = styled(ark.label, labelVariants);
