import { Tooltip } from "@ark-ui/solid";
import { GithubIcon } from "lucide-solid";
import { Card, CardProps } from "../components/ui/card";
import { IconButton } from "../components/ui/icon-button";
import { HStack, VStack } from "../components/ui/stack";

export const Story = ({
  title,
  children,
  componentFilename,
  ...props
}: {
  title: string;
  componentFilename?: string;
} & CardProps) => {
  return (
    <Card {...props}>
      <Card.Header>
        <Card.Title class="capitalize" asChild>
          <HStack justify="between">
            {title.toLowerCase()}:
            {componentFilename && (
              <Tooltip>
                <Tooltip.Trigger>
                  <IconButton asChild variant="outline">
                    <a
                      target="_blank"
                      href={`https://github.com/arekmaz/arek-ui-solid/blob/main/src/components/ui/${componentFilename}.tsx`}
                    >
                      <GithubIcon />
                    </a>
                  </IconButton>
                </Tooltip.Trigger>
                <Tooltip.Positioner>
                  <Tooltip.Arrow>
                    <Tooltip.ArrowTip />
                  </Tooltip.Arrow>
                  <Tooltip.Content>Show code</Tooltip.Content>
                </Tooltip.Positioner>
              </Tooltip>
            )}
          </HStack>
        </Card.Title>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{children}</VStack>
      </Card.Content>
    </Card>
  );
};
