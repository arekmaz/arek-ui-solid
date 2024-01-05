import { Card, CardProps } from "./ui/card";
import { VStack } from "./ui/stack";

export const Story = ({
  title,
  children,
  ...props
}: {
  title: string;
} & CardProps) => {
  return (
    <Card {...props}>
      <Card.Header>
        <Card.Title class="capitalize">{title.toLowerCase()}:</Card.Title>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{children}</VStack>
      </Card.Content>
    </Card>
  );
};
