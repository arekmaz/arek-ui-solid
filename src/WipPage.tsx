import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";
import { Show, createEffect, createSignal } from "solid-js";
import { IconButton } from "./components/ui/icon-button";
import { Center, HStack, VStack } from "./components/ui/stack";
import { Selects } from "./demo/select.stories";
import { TabsStories } from "./demo/tabs.stories";

export function WipPage() {
  const [mode, setMode] = createSignal<"dark" | "light">("light");

  createEffect(() => {
    if (mode() === "dark") {
      document.body.classList.add("dark");
      return;
    }

    document.body.classList.remove("dark");
  });

  const renderComponents = () => {
    return (
      <VStack
        spacing={5}
        class="md:flex-row flex-wrap pb-20 justify-center pt-5 px-5"
      >
        <TabsStories />
      </VStack>
    );
  };

  return (
    <Center class="w-screen flex-1">
      <p class="text-2xl text-center font-semibold">Arek UI - Solid</p>
      {renderComponents()}
      <HStack
        class="fixed bottom-0 left-0 z-overlay w-full pointer-events-none *:pointer-events-auto pb-1 px-1"
        justify="between"
      >
        <IconButton
          onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
        >
          <Show when={mode() === "light"}>
            <MoonIcon />
          </Show>
          <Show when={mode() === "dark"}>
            <SunIcon />
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
