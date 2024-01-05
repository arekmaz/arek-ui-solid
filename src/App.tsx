import { Center, VStack } from "./components/ui/stack";
import { Buttons } from "./demo/button.stories";
import { Comboboxes } from "./demo/combobox.stories";
import { Inputs } from "./demo/input.stories";

function App() {
  return (
    <Center className="w-screen flex-1">
      <p class="text-2xl">Arek UI - Solid</p>
      <VStack
        spacing={5}
        className="md:flex-row flex-wrap pb-20 justify-center pt-5 px-5"
      >
        <Buttons />
        <Inputs />
        <Comboboxes />
      </VStack>
    </Center>
  );
}

export default App;
