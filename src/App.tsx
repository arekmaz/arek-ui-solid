import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";
import { Show, createEffect, createSignal } from "solid-js";
import { IconButton } from "./components/ui/icon-button";
import { Center, HStack, VStack } from "./components/ui/stack";
import { Buttons } from "./demo/button.stories";
import { Comboboxes } from "./demo/combobox.stories";
import { Inputs } from "./demo/input.stories";
import { IconButtons } from "./demo/icon-button.stories";

function App() {
  const [mode, setMode] = createSignal<"dark" | "light">("light");

  createEffect(() => {
    if (mode() === "dark") {
      document.body.classList.add("dark");
      return;
    }

    document.body.classList.remove("dark");
  });

  return (
    <Center className="w-screen flex-1">
      <p class="text-2xl text-center font-semibold">Arek UI - Solid {mode()}</p>
      <VStack
        spacing={5}
        className="md:flex-row flex-wrap pb-20 justify-center pt-5 px-5"
      >
        <Buttons />
        <Inputs />
        <Comboboxes />
        <IconButtons />
      </VStack>
      <HStack
        class="fixed bottom-0 left-0 z-overlay w-full pointer-events-none *:pointer-events-auto pb-1 px-1"
        justify="between"
      >
        <IconButton
          onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
        >
          <Show when={mode() === "light"}>
            <SunIcon />
          </Show>
          <Show when={mode() === "dark"}>
            <MoonIcon />
          </Show>
        </IconButton>
        <IconButton asChild>
          <a href="https://github.com/arekmaz/arek-ui">
            <GithubIcon />
          </a>
        </IconButton>
      </HStack>
    </Center>
  );
}

export default App;
