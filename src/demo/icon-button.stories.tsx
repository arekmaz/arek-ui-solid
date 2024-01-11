import {
  AArrowDownIcon,
  AArrowUpIcon,
  ALargeSmallIcon,
  ChevronDownIcon,
  ChevronDownCircleIcon,
  CoffeeIcon,
  MailIcon,
  ActivitySquareIcon,
  ActivityIcon,
  AirplayIcon,
  AirVentIcon,
  AlarmClockCheckIcon,
  AlarmSmokeIcon,
  AlertCircleIcon,
  ArchiveXIcon,
} from "lucide-solid";
import { IconButton } from "../components/ui/icon-button";
import { Story } from "../components/storyHelpers";
import { For } from "solid-js";

export const IconButtons = () => {
  return (
    <Story title="icon buttons" componentFilename="icon-button">
      <For
        each={[
          CoffeeIcon,
          ChevronDownIcon,
          ChevronDownCircleIcon,
          MailIcon,
          AArrowDownIcon,
          AArrowUpIcon,
          ALargeSmallIcon,
          ActivitySquareIcon,
          ActivityIcon,
          AirplayIcon,
          AirVentIcon,
          AlarmClockCheckIcon,
          AlarmSmokeIcon,
          AlertCircleIcon,
          ArchiveXIcon,
        ]}
      >
        {(Icon) => (
          <IconButton>
            <Icon />
          </IconButton>
        )}
      </For>
    </Story>
  );
};
