import { XIcon } from "lucide-solid";
import { Button } from "../components/ui/button";
import { Drawer } from "../components/ui/drawer";
import { IconButton } from "../components/ui/icon-button";
import { Story } from "./storyHelpers";
import { ComponentProps } from "solid-js";

export const Demo = ({
  label,
  ...props
}: ComponentProps<typeof Drawer> & { label: string }) => {
  return (
    <Drawer {...props}>
      <Drawer.Trigger asChild>
        <Button>{label}</Button>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger asChild class="absolute top-3 right-4">
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer class="gap-3">
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer>
  );
};

export const Drawers = () => {
  return (
    <Story title="drawers" componentFilename="drawer">
      <Demo label="drawer right" />
      <Demo variant="left" label="drawer left" />
      <Demo variant="top" label="drawer top" />
      <Demo variant="bottom" label="drawer bottom" />
    </Story>
  );
};
