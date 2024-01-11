import { For, Portal } from "solid-js/web";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";
import { Button } from "../components/ui/button";
import { IconButton } from "../components/ui/icon-button";
import { DatePicker as D } from "../components/ui/date-picker";

import { Input } from "../components/ui/input";
import { Story } from "./storyHelpers";
import { InputGroup } from "../components/ui/input-group";

export const BasicDatePicker = () => {
  return (
    <D>
      <D.Label>Label</D.Label>
      <D.Control>
        <D.Input asChild>
          <Input />
        </D.Input>
        <D.Trigger>📅</D.Trigger>
        <D.ClearTrigger>Clear</D.ClearTrigger>
      </D.Control>
      <Portal>
        <D.Positioner>
          <D.Content>
            <D.YearSelect />
            <D.MonthSelect />
            <D.View view="day">
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger>Prev</D.PrevTrigger>
                    <D.ViewTrigger>
                      <D.RangeText />
                    </D.ViewTrigger>
                    <D.NextTrigger>Next</D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        <For each={api().weekDays}>
                          {(weekDay) => (
                            <D.TableHeader>{weekDay.short}</D.TableHeader>
                          )}
                        </For>
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      <For each={api().weeks}>
                        {(week) => (
                          <D.TableRow>
                            <For each={week}>
                              {(day) => (
                                <D.TableCell value={day}>
                                  <D.TableCellTrigger asChild>
                                    <IconButton variant="ghost">
                                      {day.day}
                                    </IconButton>
                                  </D.TableCellTrigger>
                                </D.TableCell>
                              )}
                            </For>
                          </D.TableRow>
                        )}
                      </For>
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.View>
            <D.View view="month">
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger>Prev</D.PrevTrigger>
                    <D.ViewTrigger>
                      <D.RangeText />
                    </D.ViewTrigger>
                    <D.NextTrigger>Next</D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      <For
                        each={api().getMonthsGrid({
                          columns: 4,
                          format: "short",
                        })}
                      >
                        {(months) => (
                          <D.TableRow>
                            <For each={months}>
                              {(month) => (
                                <D.TableCell value={month.value}>
                                  <D.TableCellTrigger>
                                    {month.label}
                                  </D.TableCellTrigger>
                                </D.TableCell>
                              )}
                            </For>
                          </D.TableRow>
                        )}
                      </For>
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.View>
            <D.View view="year">
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger>Prev</D.PrevTrigger>
                    <D.ViewTrigger>
                      <D.RangeText />
                    </D.ViewTrigger>
                    <D.NextTrigger>Next</D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      <For each={api().getYearsGrid({ columns: 4 })}>
                        {(years) => (
                          <D.TableRow>
                            <For each={years}>
                              {(year) => (
                                <D.TableCell value={year.value}>
                                  <D.TableCellTrigger>
                                    {year.label}
                                  </D.TableCellTrigger>
                                </D.TableCell>
                              )}
                            </For>
                          </D.TableRow>
                        )}
                      </For>
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.View>
          </D.Content>
        </D.Positioner>
      </Portal>
    </D>
  );
};

export const ParkDatePicker = (props: {}) => {
  return (
    <D
      positioning={{ sameWidth: true }}
      startOfWeek={1}
      selectionMode="range"
      {...props}
    >
      <D.Label>Range Date Picker</D.Label>
      <D.Control>
        <D.Input asChild>
          <Input />
        </D.Input>
        <D.Trigger asChild>
          <IconButton variant="outline" aria-label="Open date picker">
            <CalendarIcon />
          </IconButton>
        </D.Trigger>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableHead>
                    <D.TableRow>
                      <For each={api().weekDays}>
                        {(weekDay) => (
                          <D.TableHeader>{weekDay.narrow}</D.TableHeader>
                        )}
                      </For>
                    </D.TableRow>
                  </D.TableHead>
                  <D.TableBody>
                    <For each={api().weeks}>
                      {(week) => (
                        <D.TableRow>
                          <For each={week}>
                            {(day) => (
                              <D.TableCell value={day}>
                                <D.TableCellTrigger asChild>
                                  <IconButton variant="ghost">
                                    {day.day}
                                  </IconButton>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
          <D.View view="month">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableBody>
                    <For
                      each={api().getMonthsGrid({
                        columns: 4,
                        format: "short",
                      })}
                    >
                      {(months) => (
                        <D.TableRow>
                          <For each={months}>
                            {(month) => (
                              <D.TableCell value={month.value}>
                                <D.TableCellTrigger>
                                  {month.label}
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
          <D.View view="year">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableBody>
                    <For each={api().getYearsGrid({ columns: 4 })}>
                      {(years) => (
                        <D.TableRow>
                          <For each={years}>
                            {(year) => (
                              <D.TableCell value={year.value}>
                                <D.TableCellTrigger>
                                  {year.label}
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const WithInputGroup = (props: {}) => {
  return (
    <D
      positioning={{ sameWidth: true }}
      startOfWeek={1}
      selectionMode="range"
      {...props}
    >
      <D.Label>With Input Group</D.Label>
      <D.Control>
        <InputGroup>
          <D.Input asChild>
            <InputGroup.Input />
          </D.Input>
          <D.Trigger asChild>
            <InputGroup.RightAddon>
              <IconButton unstyled aria-label="Open date picker">
                <CalendarIcon />
              </IconButton>
            </InputGroup.RightAddon>
          </D.Trigger>
        </InputGroup>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableHead>
                    <D.TableRow>
                      <For each={api().weekDays}>
                        {(weekDay) => (
                          <D.TableHeader>{weekDay.narrow}</D.TableHeader>
                        )}
                      </For>
                    </D.TableRow>
                  </D.TableHead>
                  <D.TableBody>
                    <For each={api().weeks}>
                      {(week) => (
                        <D.TableRow>
                          <For each={week}>
                            {(day) => (
                              <D.TableCell value={day}>
                                <D.TableCellTrigger asChild>
                                  <IconButton variant="ghost">
                                    {day.day}
                                  </IconButton>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
          <D.View view="month">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableBody>
                    <For
                      each={api().getMonthsGrid({
                        columns: 4,
                        format: "short",
                      })}
                    >
                      {(months) => (
                        <D.TableRow>
                          <For each={months}>
                            {(month) => (
                              <D.TableCell value={month.value}>
                                <D.TableCellTrigger>
                                  {month.label}
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
          <D.View view="year">
            {(api) => (
              <>
                <D.ViewControl>
                  <D.PrevTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronLeftIcon />
                    </IconButton>
                  </D.PrevTrigger>
                  <D.ViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <D.RangeText />
                    </Button>
                  </D.ViewTrigger>
                  <D.NextTrigger asChild>
                    <IconButton variant="ghost" size="sm">
                      <ChevronRightIcon />
                    </IconButton>
                  </D.NextTrigger>
                </D.ViewControl>
                <D.Table>
                  <D.TableBody>
                    <For each={api().getYearsGrid({ columns: 4 })}>
                      {(years) => (
                        <D.TableRow>
                          <For each={years}>
                            {(year) => (
                              <D.TableCell value={year.value}>
                                <D.TableCellTrigger>
                                  {year.label}
                                </D.TableCellTrigger>
                              </D.TableCell>
                            )}
                          </For>
                        </D.TableRow>
                      )}
                    </For>
                  </D.TableBody>
                </D.Table>
              </>
            )}
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const DatePickers = () => {
  return (
    <Story title="date pickers" componentFilename="date-picker">
      <BasicDatePicker />
      <ParkDatePicker />
      <WithInputGroup />
    </Story>
  );
};
