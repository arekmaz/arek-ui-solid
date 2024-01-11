import { Loader2, Mail } from "lucide-solid";
import { Story } from "./storyHelpers";
import {
  Button,
  ButtonDestructive,
  ButtonGhost,
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from "../components/ui/button";

export const Buttons = () => {
  return (
    <Story title="buttons" componentFilename="button">
      <Button>Primary</Button>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonGhost>Ghost</ButtonGhost>
      <ButtonDestructive>Destructive</ButtonDestructive>
      <ButtonLink>Link</ButtonLink>
      <ButtonOutline>Outline</ButtonOutline>

      <Button>
        <Mail class="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </Story>
  );
};
