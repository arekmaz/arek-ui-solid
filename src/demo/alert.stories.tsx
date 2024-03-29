import { Terminal } from "lucide-solid";
import { Alert } from "../components/ui/alert";
import { Story } from "./storyHelpers";

const Basic = () => {
  return (
    <Alert>
      <Terminal class="h-4 w-4" />
      <Alert.Title>Basic Alert!</Alert.Title>
      <Alert.Description>
        You can add components and dependencies to your app using the cli.
      </Alert.Description>
    </Alert>
  );
};

const Error = () => {
  return (
    <Alert variant="destructive">
      <Terminal class="h-4 w-4" />
      <Alert.Title>Error Alert!</Alert.Title>
      <Alert.Description>
        You can add components and dependencies to your app using the cli.
      </Alert.Description>
    </Alert>
  );
};

export const Alerts = () => {
  return (
    <Story title="alerts" componentFilename="alert">
      <Basic />
      <Error />
    </Story>
  );
};
