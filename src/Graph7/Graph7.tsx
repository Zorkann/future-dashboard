import { useState } from "react";
import { MonthView } from "react-calendar";

const EVENTS = [
  {
    name: "Some planned event 1",
    date: new Date(2024, 4, 14).toISOString(),
  },
  {
    name: "Some planned event 2",
    date: new Date(2024, 4, 17).toISOString(),
  },
  {
    name: "Some planned event 3",
    date: new Date(2024, 4, 23).toISOString(),
  },
];

const EVENTS_DATES = EVENTS.map((event) => event.date);

export function Graph7() {
  const [selectedEventName, setSelectedEventName] = useState("Planned events");

  return (
    <div className="flex flex-col gap-2">
      <MonthView
        onMouseOver={(date) => {
          const selectedEvent = EVENTS.find(
            (event) => event.date === date.toISOString()
          );
          if (selectedEvent) {
            setSelectedEventName(selectedEvent.name);
          }
        }}
        valueType={"month"}
        activeStartDate={new Date(2024, 4, 1)}
        formatShortWeekday={(locale, date) => {
          return date.toLocaleString(locale, { weekday: "short" }).charAt(0);
        }}
        tileClassName={({ date, view }) => {
          if (view !== "month") return null;

          if (EVENTS_DATES.includes(date.toISOString())) {
            return "text-teal-300 cursor-pointer";
          }
        }}
      />
      <div className="inline-flex items-center p-2 pl-4 w-[66%] gap-4 border-2 border-solid border-teal-300/30 rounded-full">
        <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg">
          <circle cx={"50%"} cy={"50%"} r={6} className="fill-teal-300" />
        </svg>
        <span className="uppercase text-[0.75rem]">{selectedEventName}</span>
      </div>
    </div>
  );
}
