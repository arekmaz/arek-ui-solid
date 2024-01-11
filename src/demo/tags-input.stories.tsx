import { TagsInput } from "../components/ui/tags-input";
import { Combobox as C } from "../components/ui/combobox";
import { Story } from "./storyHelpers";
import { ArrowRight, ChevronsUpDownIcon, PiIcon, XIcon } from "lucide-solid";
import { IconButton } from "../components/ui/icon-button";
import { InputGroup } from "../components/ui/input-group";
import { matchSorter } from "match-sorter";
import { data } from "../components/ui/select";
import { For, Portal } from "solid-js/web";
import { createSignal } from "solid-js";

const Normal = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>Normal</TagsInput.Label>
          <TagsInput.Control>
            <For each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index()} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton size="sm" variant="ghost">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const WithInputGroup = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>With input group</TagsInput.Label>
          <TagsInput.Control>
            <For each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index()} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton size="sm" variant="ghost">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
            <InputGroup variant="ghost">
              <InputGroup.LeftAddon>
                <PiIcon />
              </InputGroup.LeftAddon>
              <TagsInput.Input placeholder="Add Framework" unstyled asChild>
                <InputGroup.Input class="w-28" />
              </TagsInput.Input>
              <InputGroup.RightAddon>
                <ArrowRight />
              </InputGroup.RightAddon>
            </InputGroup>
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const WithCombobox = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>With combobox</TagsInput.Label>
          <TagsInput.Control>
            <For each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index()} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton size="sm" variant="ghost">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>

            <C
              items={items()}
              onInputValueChange={handleChange}
              onValueChange={({ value: [firstValue] }) => {
                if (firstValue) {
                  api().setValue([...api().value, firstValue]);
                }
              }}
              class="w-auto"
            >
              <C.Control>
                <TagsInput.Input placeholder="Add Framework" asChild>
                  <C.Input placeholder="select a framework" unstyled />
                </TagsInput.Input>
                <C.Trigger asChild>
                  <ChevronsUpDownIcon />
                </C.Trigger>
              </C.Control>
              <Portal>
                <C.Positioner>
                  <C.Content>
                    <C.ItemGroup id="framework">
                      <C.ItemGroupLabel for="framework">
                        Frameworks
                      </C.ItemGroupLabel>
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
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const Disabled = () => {
  return (
    <TagsInput disabled value={["test"]}>
      {(api) => (
        <>
          <TagsInput.Label>Disabled</TagsInput.Label>
          <TagsInput.Control>
            <For each={api().value}>
              {(value, index) => (
                <TagsInput.Item index={index()} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger asChild>
                    <IconButton size="sm" variant="ghost">
                      <XIcon />
                    </IconButton>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              )}
            </For>
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

export const TagsInputs = () => {
  return (
    <Story title="TAGS INPUTS" componentFilename="tags-input">
      <Normal />
      <WithInputGroup />
      <Disabled />
      <WithCombobox />
    </Story>
  );
};
