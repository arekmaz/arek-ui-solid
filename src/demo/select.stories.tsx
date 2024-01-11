import { Portal } from "solid-js/web";
import { createSignal, For } from "solid-js";
import { ChevronsUpDownIcon, SearchIcon } from "lucide-solid";
import { matchSorter } from "match-sorter";
import { Select as S, data } from "../components/ui/select";
import { Story } from "./storyHelpers";
import { InputGroup } from "../components/ui/input-group";
import { HStack } from "../components/ui/stack";

export const MultipleSelect = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items()} multiple>
      <S.Label>Multiple select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              class="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel for="framework">Frameworks</S.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <S.Item item={item}>
                    <S.ItemText>{item.label}</S.ItemText>
                    <S.ItemIndicator>✓</S.ItemIndicator>
                  </S.Item>
                )}
              </For>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const SingleSelect = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items()}>
      <S.Label>Single select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              class="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel for="framework">Frameworks</S.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <S.Item item={item}>
                    <S.ItemText>{item.label}</S.ItemText>
                    <S.ItemIndicator>✓</S.ItemIndicator>
                  </S.Item>
                )}
              </For>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const WithError = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items()} variant="error">
      <S.Label>With error</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              class="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel for="framework">Frameworks</S.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <S.Item item={item}>
                    <S.ItemText>{item.label}</S.ItemText>
                    <S.ItemIndicator>✓</S.ItemIndicator>
                  </S.Item>
                )}
              </For>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const DisabledSelect = () => {
  const [items, setItems] = createSignal(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items()} disabled>
      <S.Label>Disabled select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              class="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel for="framework">Frameworks</S.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <S.Item item={item}>
                    <S.ItemText>{item.label}</S.ItemText>
                    <S.ItemIndicator>✓</S.ItemIndicator>
                  </S.Item>
                )}
              </For>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const WithGroupInput = () => {
  const [search, setSearch] = createSignal("");

  const items = () => matchSorter(data, search(), { keys: ["label"] });

  return (
    <S items={items()} multiple onValueChange={() => setSearch("")}>
      <S.Label>With input group</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <InputGroup asChild variant="ghost" class="px-2 py-1 border-b h-10">
              <HStack>
                <InputGroup.LeftAddon>
                  <SearchIcon />
                </InputGroup.LeftAddon>
                <InputGroup.Input asChild>
                  <S.AutoFocusingFilterInput
                    unstyled
                    placeholder="Filter frameworks"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search()}
                  />
                </InputGroup.Input>
              </HStack>
            </InputGroup>
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel for="framework">Frameworks</S.ItemGroupLabel>
              <For each={items()}>
                {(item) => (
                  <S.Item item={item}>
                    <S.ItemText>{item.label}</S.ItemText>
                    <S.ItemIndicator>✓</S.ItemIndicator>
                  </S.Item>
                )}
              </For>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const Selects = () => {
  return (
    <Story title="selects" componentFilename="select">
      <SingleSelect />
      <MultipleSelect />
      <DisabledSelect />
      <WithGroupInput />
      <WithError />
    </Story>
  );
};
