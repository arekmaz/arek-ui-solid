import { Story } from "./storyHelpers";
import { Input } from "../components/ui/input";

export const Inputs = () => {
  return (
    <Story title="inputs" componentFilename="input">
      <label>
        Input
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input 2xs
        <Input scale="2xs" placeholder="Enter email" />
      </label>

      <label>
        Input xs
        <Input scale="xs" placeholder="Enter email" />
      </label>

      <label>
        Input sm
        <Input scale="sm" placeholder="Enter email" />
      </label>

      <label>
        Input md
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input lg
        <Input scale="lg" placeholder="Enter email" />
      </label>

      <label>
        Input xl
        <Input scale="xl" placeholder="Enter email" />
      </label>

      <label>
        Input 2xl
        <Input scale="2xl" placeholder="Enter email" />
      </label>

      <label>
        Disabled
        <Input disabled placeholder="Enter email" />
      </label>

      <label>
        Placeholder
        <Input placeholder="placeholder" />
      </label>

      <label>
        Error
        <Input status="error" value="error" />
      </label>

      <label>
        Error placeholder
        <Input placeholder="placeholder" status="error" />
      </label>
    </Story>
  );
};
