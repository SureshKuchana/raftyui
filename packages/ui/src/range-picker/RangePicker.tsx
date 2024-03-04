"use client";
import RaftyIcon from "@rafty/icons";
import { eventHandler } from "@rafty/shared";
import format from "dateformat";
import { useReducer, useState } from "react";
import { DateRange, DayPickerRangeProps } from "react-day-picker";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { classNames } from "../utils";

export type RangePicker = {
  onSelect?: (value?: DateRange) => void;
} & Omit<DayPickerRangeProps, "mode" | "onSelect">;

export const RangePicker = ({ className, ...props }: RangePicker) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useReducer(
    (_?: DateRange, cur?: DateRange) => {
      const value: DateRange | undefined = cur
        ? {
            from: cur.from
              ? new Date(format(cur.from, "yyyy-mm-dd"))
              : undefined,
          }
        : undefined;

      if (value && cur?.to) value.to = new Date(format(cur.to, "yyyy-mm-dd"));

      props.onSelect?.(value);

      if (cur?.to) setOpen(false);

      return value;
    },
    props.selected,
  );

  let display = "";
  if (selected?.from)
    display += `${
      props.formatters?.formatDay?.(selected.from) ??
      format(selected.from, "longDate")
    } - `;
  if (selected?.to)
    display += String(
      props.formatters?.formatDay?.(selected.to) ??
        format(selected.to, "longDate"),
    );

  const clearSelected = eventHandler(() => setSelected());

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        id="date"
        variant="outline"
        className={classNames(
          "w-full justify-start text-left font-normal",
          !selected && "text-muted-foreground",
        )}
        leftIcon={<RaftyIcon type="calendar" className="size-4" />}
      >
        {display.length !== 0 ? display : "Pick a range"}
        <div className="flex-1" />
        {selected && (
          <div
            title="unselect range"
            className="ml-2 rounded p-0.5 text-red-500 transition-all ease-in-out hover:bg-red-200/40 dark:text-red-300 dark:hover:bg-red-300/10"
            onClick={clearSelected}
            onKeyDown={clearSelected}
          >
            <RaftyIcon type="x-mark" className="size-3 stroke-[2.5]" />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto max-w-max border-none p-0">
        <Calendar
          {...props}
          initialFocus
          mode="range"
          classNames={{
            day: "size-9 p-0 font-normal aria-selected:opacity-100 aria-selected:text-white dark:aria-selected:text-black rounded-md flex items-center justify-center text-center aria-selected:hover:bg-primary-500 dark:aria-selected:hover:bg-primary-300 hover:bg-secondary-200/80 dark:hover:bg-secondary-500 cursor-pointer aria-selected:rounded-none ",
          }}
          selected={selected}
          onSelect={setSelected}
          defaultMonth={selected?.from}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};
RangePicker.displayName = "RangePicker";
