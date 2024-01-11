import { Skeleton } from "../components/ui/skeleton";
import { Story } from "./storyHelpers";
import { HStack, Stack } from "../components/ui/stack";

export function SkeletonDemo() {
  return (
    <div class="flex items-center space-x-4">
      <Skeleton class="size-12" variant="circle" />
      <Stack spacing={2}>
        <Skeleton class="h-4 w-[250px]" />
        <Skeleton class="h-4 w-[200px]" />
      </Stack>
    </div>
  );
}
const List = () => {
  return (
    <Stack spacing={2} align="stretch" class="w-full">
      <HStack>
        <Skeleton class="h-2 flex-1" />
        <Skeleton class="h-2 flex-[5]" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[3]" />
        <Skeleton class="h-2 flex-[2]" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[4]" />
        <Skeleton class="h-2 flex-1" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[3]" />
        <Skeleton class="h-2 flex-[8]" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-1" />
        <Skeleton class="h-2 flex-[5]" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[3]" />
        <Skeleton class="h-2 flex-[2]" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[4]" />
        <Skeleton class="h-2 flex-1" />
      </HStack>
      <HStack>
        <Skeleton class="h-2 flex-[3]" />
        <Skeleton class="h-2 flex-[8]" />
      </HStack>
    </Stack>
  );
};

export const Skeletons = () => {
  return (
    <Story title="skeletons" componentFilename="skeleton">
      <SkeletonDemo />
      <List />
    </Story>
  );
};
