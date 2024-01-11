import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";
import { ComponentProps, For } from "solid-js";
import { Button } from "../components/ui/button";
import { IconButton } from "../components/ui/icon-button";
import { Pagination } from "../components/ui/pagination";
import { Story } from "./storyHelpers";

export const Demo = (props: ComponentProps<typeof Pagination>) => {
  return (
    <Pagination pageSize={10} siblingCount={1} defaultPage={2} {...props}>
      {(api) => (
        <>
          <Pagination.PrevTrigger asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </IconButton>
          </Pagination.PrevTrigger>

          <For each={api().pages}>
            {(page, index) =>
              page.type === "page" ? (
                <Pagination.Item {...page} asChild>
                  <Button
                    variant={page.value === api().page ? "outline" : "ghost"}
                  >
                    {page.value}
                  </Button>
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis index={index()}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            }
          </For>
          <Pagination.NextTrigger asChild>
            <IconButton variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </IconButton>
          </Pagination.NextTrigger>
        </>
      )}
    </Pagination>
  );
};

export const Paginations = () => {
  return (
    <Story title="paginations" componentFilename="pagination">
      <Demo count={90} />
    </Story>
  );
};
