import { Spinner } from "../components/ui/spinner";
import { Story } from "./storyHelpers";
import { VStack } from "../components/ui/stack";
import { FanIcon, Loader2 } from "lucide-solid";

export const Spinners = () => {
  return (
    <Story title="spinners" componentFilename="spinner">
      <VStack>
        xs
        <Spinner size="xs">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        sm
        <Spinner size="sm">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        md
        <Spinner size="md">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        lg
        <Spinner size="lg">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        xl
        <Spinner size="xl">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        alternate
        <Spinner class="direction-alternate">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        reverse
        <Spinner class="direction-reverse">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        reverse alternate
        <Spinner class="direction-reverse-alternate">
          <Spinner.Icon>
            <Loader2 />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        custom icon
        <Spinner>
          <Spinner.Icon>
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
