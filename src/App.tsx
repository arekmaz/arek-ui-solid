import { VStack } from "./components/ui/stack";
import { Buttons } from "./demo/button.stories";
import { Comboboxes } from "./demo/combobox.stories";
import { Inputs } from "./demo/input.stories";

function App() {
  return (
    <VStack>
      <Buttons />
      <Inputs />
      <Comboboxes />
    </VStack>
  );
}

export default App;
