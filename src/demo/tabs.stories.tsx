import { CrosshairIcon } from "lucide-solid";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Stack } from "../components/ui/stack";
import { Tabs } from "../components/ui/tabs";
import { Story } from "./storyHelpers";
import { For } from "solid-js";

export const ParkDemo = () => {
  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte", disabled: true },
    { id: "vue", label: "Vue" },
  ];
  return (
    <Card>
      <Card.Header>
        <Card.Title>Disabled</Card.Title>
      </Card.Header>
      <Card.Content>
        <Tabs value="react">
          <Tabs.List>
            <For each={options}>
              {(option) => (
                <Tabs.Trigger value={option.id} disabled={option.disabled}>
                  {option.label}
                </Tabs.Trigger>
              )}
            </For>
          </Tabs.List>
          <Tabs.Content value="react">
            Know React? Check out Solid!
          </Tabs.Content>
          <Tabs.Content value="solid">
            Know Solid? Check out Svelte!
          </Tabs.Content>
          <Tabs.Content value="svelte">
            Know Svelte? Check out Vue!
          </Tabs.Content>
          <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
        </Tabs>
      </Card.Content>
    </Card>
  );
};

export const CustomIndicator = () => {
  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte" },
    { id: "vue", label: "Vue" },
  ];
  return (
    <Card>
      <Card.Header>
        <Card.Title>Custom Indicator</Card.Title>
      </Card.Header>
      <Card.Content>
        <Tabs value="react">
          <Tabs.List>
            <For each={options}>
              {(option) => (
                <Tabs.Trigger value={option.id} disabled={option.disabled}>
                  {option.label}
                </Tabs.Trigger>
              )}
            </For>
            <Tabs.Indicator asChild>
              <CrosshairIcon class="opacity-50" />
            </Tabs.Indicator>
          </Tabs.List>
          <Tabs.Content value="react">
            Know React? Check out Solid!
          </Tabs.Content>
          <Tabs.Content value="solid">
            Know Solid? Check out Svelte!
          </Tabs.Content>
          <Tabs.Content value="svelte">
            Know Svelte? Check out Vue!
          </Tabs.Content>
          <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
        </Tabs>
      </Card.Content>
    </Card>
  );
};

const ShadDemo = () => {
  return (
    <Stack>
      <p>Normal</p>
      <Tabs value="account" class="w-[400px]">
        <Tabs.List class="grid w-full grid-cols-2">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          <Card>
            <Card.Header>
              <Card.Title>Account</Card.Title>
              <Card.Description>
                Make changes to your account here. Click save when you&apos;re
                done.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <div class="space-y-1">
                <Label for="name">Name</Label>
                <Input id="name" value="Pedro Duarte" />
              </div>
              <div class="space-y-1">
                <Label for="username">Username</Label>
                <Input id="username" value="@peduarte" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Save changes</Button>
            </Card.Footer>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="password">
          <Card>
            <Card.Header>
              <Card.Title>Password</Card.Title>
              <Card.Description>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <div class="space-y-1">
                <Label for="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div class="space-y-1">
                <Label for="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Save password</Button>
            </Card.Footer>
          </Card>
        </Tabs.Content>
      </Tabs>
    </Stack>
  );
};

export const TabsStories = () => {
  return (
    <Story
      title="tabs"
      classes={{ content: "gap-10" }}
      componentFilename="tabs"
    >
      <ShadDemo />
      <ParkDemo />
      <CustomIndicator />
    </Story>
  );
};
