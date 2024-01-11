import { ChevronDownIcon } from "lucide-solid";
import { Accordion } from "../components/ui/accordion";
import { Card } from "../components/ui/card";
import { Story } from "../components/storyHelpers";
import { For } from "solid-js";

const Single = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Single</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion value={["React"]}>
          <For each={["React", "Solid", "Vue"]}>
            {(item) => (
              <Accordion.Item value={item}>
                <Accordion.ItemTrigger>
                  {item}
                  <Accordion.ItemIndicator asChild>
                    <ChevronDownIcon />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemContentContainer>
                    {item} is a JavaScript library for building user interfaces.
                  </Accordion.ItemContentContainer>
                </Accordion.ItemContent>
              </Accordion.Item>
            )}
          </For>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

const Collapsible = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Collapsible</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion value={["React"]} collapsible>
          <For each={["React", "Solid", "Vue"]}>
            {(item) => (
              <Accordion.Item value={item}>
                <Accordion.ItemTrigger>
                  {item}
                  <Accordion.ItemIndicator asChild>
                    <ChevronDownIcon />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemContentContainer>
                    {item} is a JavaScript library for building user interfaces.
                  </Accordion.ItemContentContainer>
                </Accordion.ItemContent>
              </Accordion.Item>
            )}
          </For>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

const Disabled = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Disabled</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion value={["React"]} disabled>
          <For each={["React", "Solid", "Vue", "disabled"]}>
            {(item) => (
              <Accordion.Item value={item} disabled={item === "disabled"}>
                <Accordion.ItemTrigger>
                  {item}
                  <Accordion.ItemIndicator asChild>
                    <ChevronDownIcon />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemContentContainer>
                    {item} is a JavaScript library for building user interfaces.
                  </Accordion.ItemContentContainer>
                </Accordion.ItemContent>
              </Accordion.Item>
            )}
          </For>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

export const Accordions = () => {
  return (
    <Story title="accordions" componentFilename="accordion">
      <Single />
      <Collapsible />
      <Disabled />
    </Story>
  );
};
