import { ChevronsUpDownIcon, ArrowRight } from "lucide-solid";
import { matchSorter } from "match-sorter";
import { createSignal } from "solid-js";
import { Combobox as C } from "../components/ui/combobox";
import { Story } from "../components/storyHelpers";
import { InputGroup } from "../components/ui/input-group";
import { cn } from "../components/utils/cn";
import { Portal } from "solid-js/web";
import { For } from "solid-js";

const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
  { label: "Angular JS", value: "angularjs" },
];

export const SingleCombobox = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items()} onInputValueChange={handleChange}>
      <C.Label>Single combobox</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger>
          <ChevronsUpDownIcon />
        </C.Trigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const WithError = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items()} onInputValueChange={handleChange} variant="error">
      <C.Label>With Error</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger>
          <ChevronsUpDownIcon />
        </C.Trigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const OpenOnClickCombobox = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items()} onInputValueChange={handleChange} openOnClick>
      <C.Label>Single combobox - open on click</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger>
          <ChevronsUpDownIcon />
        </C.Trigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const MultipleCombobox = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C
      items={items()}
      onInputValueChange={handleChange}
      multiple
      onValueChange={() => setItems(data)}
    >
      <C.Label>Multiple combobox</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger>
          <ChevronsUpDownIcon />
        </C.Trigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const DisabledCombobox = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items()} onInputValueChange={handleChange} disabled>
      <C.Label>Disabled combobox</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger>
          <ChevronsUpDownIcon />
        </C.Trigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const WithInputGroup = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items()} onInputValueChange={handleChange}>
      <C.Label>With input group</C.Label>
      <C.Control>
        <InputGroup>
          <InputGroup.LeftAddon>
            <ArrowRight />
          </InputGroup.LeftAddon>
          <C.Input placeholder="select a framework" asChild unstyled>
            <InputGroup.Input />
          </C.Input>
          <C.Trigger
            asChild
            unstyled
            class={cn(
              "text-muted-foreground",
              "size-4",
              "cursor-pointer",
              "_disabled:cursor-not-allowed",
              "_disabled:opacity-50"
            )}
          >
            <InputGroup.RightAddon>
              <ChevronsUpDownIcon />
            </InputGroup.RightAddon>
          </C.Trigger>
        </InputGroup>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel for="framework">Frameworks</C.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <C.Item item={item}>
                    <C.ItemText>{item.label}</C.ItemText>
                    <C.ItemIndicator>✓</C.ItemIndicator>
                  </C.Item>
                )}
              </For>
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </C>
  );
};

export const Comboboxes = () => {
  return (
    <Story title="comboboxes">
      <SingleCombobox />
      <OpenOnClickCombobox />
      <MultipleCombobox />
      <DisabledCombobox />
      <WithInputGroup />
      <WithError />
    </Story>
  );
};
