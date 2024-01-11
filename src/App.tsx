import { GithubIcon, MoonIcon, SunIcon } from "lucide-solid";
import { Show, createEffect, createSignal } from "solid-js";
import { IconButton } from "./components/ui/icon-button";
import { Center, HStack, VStack } from "./components/ui/stack";
import { Buttons } from "./demo/button.stories";
import { Comboboxes } from "./demo/combobox.stories";
import { Inputs } from "./demo/input.stories";
import { IconButtons } from "./demo/icon-button.stories";
import { Accordions } from "./demo/accordion.stories";
import { Tooltips } from "./demo/tooltip.stories";
import { Checkboxes } from "./demo/checkbox.stories";
import { Selects } from "./demo/select.stories";
import { DatePickers } from "./demo/date-picker.stories";
import { InputGroups } from "./demo/input-group.stories";

function App() {
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
        <Buttons />
        <Checkboxes />
        <Comboboxes />
        <Selects />
        <DatePickers />
        <IconButtons />
        <Inputs />
        <InputGroups />
        <Accordions />
        {/* <Alerts /> */}
        {/* <Dialogs /> */}
        {/* <Avatars /> */}
        {/* <Badges /> */}
        {/* <Calendars /> */}
        {/* <Cards /> */}
        {/* <Collapsibles /> */}
        {/* <TagsInputs /> */}
        {/* <ContextMenus /> */}
        {/* <HoverCards /> */}
        {/* <Drawers /> */}
        {/* <Menus /> */}
        {/* <Paginations /> */}
        {/* <Popovers /> */}
        {/* <RadioGroups /> */}
        {/* <ScrollAreas /> */}
        {/* <Separators /> */}
        {/* <Skeletons /> */}
        {/* <ToggleGroups /> */}
        {/* <Switches /> */}
        {/* <Textareas /> */}
        {/* <TabsStories /> */}
        <Tooltips />
        {/* <Toasts /> */}
        {/* <Sliders /> */}
        {/* <Spinners /> */}
        {/* <Tables /> */}
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

export default App;
