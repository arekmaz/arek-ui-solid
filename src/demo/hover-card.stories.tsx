import { Portal } from "solid-js/web";
import { HoverCard } from "../components/ui/hover-card";
import { Story } from "./storyHelpers";
import { MapPinIcon } from "lucide-solid";
import { HStack, Stack } from "../components/ui/stack";
import { Avatar } from "../components/ui/avatar";

const Basic = () => (
  <HoverCard>
    <HoverCard.Trigger>Hover me</HoverCard.Trigger>
    <Portal>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Portal>
  </HoverCard>
);

export const Demo = () => (
  <HoverCard>
    <HoverCard.Trigger asChild>
      <a
        href="https://twitter.com/grizzly_codes/"
        target="_blank"
        class="text-sm font-medium"
      >
        @grizzly_codes
      </a>
    </HoverCard.Trigger>

    <HoverCard.Positioner>
      <HoverCard.Content>
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>
        <Stack direction="row" spacing={4}>
          <Avatar>
            <Avatar.Image
              src="https://avatars.githubusercontent.com/u/1846056"
              alt="cs"
            />
          </Avatar>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <p class="text-sm font-semibold">@grizzly_codes</p>
              <p class="text-sm text-muted-foreground">
                Staff Software Engineer working at vivenu GmbH
              </p>
            </Stack>
            <HStack spacing={1} class="text-xs text-muted-foreground">
              <MapPinIcon />
              <p>Joined Dezember 2011</p>
            </HStack>
          </Stack>
        </Stack>
      </HoverCard.Content>
    </HoverCard.Positioner>
  </HoverCard>
);

export const HoverCards = () => {
  return (
    <Story title="hover cards" componentFilename="hover-card">
      <Basic />
      <Demo />
    </Story>
  );
};
