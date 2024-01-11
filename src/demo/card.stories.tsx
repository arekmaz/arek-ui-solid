import { Portal } from "solid-js/web";
import { ChevronsUpDownIcon } from "lucide-solid";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, data } from "../components/ui/select";
import { Story } from "./storyHelpers";

const Basic = () => {
  return (
    <Card class="w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description>
          Deploy your new project in one-click.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Select items={data}>
                <Select.Label>Multiple select</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="select a framework" />
                    <Select.Indicator asChild>
                      <ChevronsUpDownIcon />
                    </Select.Indicator>
                  </Select.Trigger>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      <Select.AutoFocusingFilterInput
                        placeholder="Filter frameworks"
                        class="pointer-events-auto"
                      />
                      <Select.ItemGroup id="framework">
                        <Select.ItemGroupLabel htmlFor="framework">
                          Frameworks
                        </Select.ItemGroupLabel>
                        {data.map((item) => (
                          <Select.Item key={item.value} item={item}>
                            <Select.ItemText>{item.label}</Select.ItemText>
                            <Select.ItemIndicator>✓</Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.ItemGroup>
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select>
            </div>
          </div>
        </form>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </Card.Footer>
    </Card>
  );
};

export const Cards = () => {
  return (
    <Story title="cards" componentFilename="card">
      <Basic />
    </Story>
  );
};
