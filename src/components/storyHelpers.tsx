import { splitProps } from "solid-js";
import { Card, CardProps } from "./ui/card";
import { VStack } from "./ui/stack";

export const Story = (
  props: {
    title: string;
  } & CardProps
) => {
  const [localProps, cardProps] = splitProps(props, ["title", "children"]);

  return (
    <Card {...cardProps}>
      <Card.Header>
        <Card.Title class="capitalize">
          {localProps.title.toLowerCase()}:
        </Card.Title>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{localProps.children}</VStack>
      </Card.Content>
    </Card>
  );
};
