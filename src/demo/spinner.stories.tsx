import { Spinner } from "../components/ui/spinner";
import { Story } from "./storyHelpers";
import { VStack } from "../components/ui/stack";
import { FanIcon } from "lucide-solid";

export const Spinners = () => {
  return (
    <Story title="spinners" componentFilename="spinner">
      <VStack>
        xs
        <Spinner size="xs" />
      </VStack>

      <VStack>
        sm
        <Spinner size="sm" />
      </VStack>

      <VStack>
        md
        <Spinner size="md" />
      </VStack>

      <VStack>
        lg
        <Spinner size="lg" />
      </VStack>

      <VStack>
        xl
        <Spinner size="xl" />
      </VStack>

      <VStack>
        alternate
        <Spinner class="direction-alternate" />
      </VStack>

      <VStack>
        reverse
        <Spinner class="direction-reverse" />
      </VStack>

      <VStack>
        reverse alternate
        <Spinner class="direction-reverse-alternate" />
      </VStack>

      <VStack>
        custom icon
        <Spinner>
          <Spinner.Icon asChild>
            <FanIcon class="text-muted-foreground" />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        custom animation
        <Spinner
          animation="custom"
          classes={{ icon: "animate-bounce duration-fast" }}
        />
      </VStack>
    </Story>
  );
};
