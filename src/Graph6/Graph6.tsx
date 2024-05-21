import { useRef, useState } from "react";
import { MonthView, TileDisabledFunc } from "react-calendar";
import { EventBadge } from "./EventBadge";
import type { Event } from "./types";
import { groupBy } from "../utils/groupBy";

const EVENTS: Event[] = [
	{
		name: "Some planned event 1",
		date: "2024-03-14T00:00:00.000Z",
	},
	{
		name: "Some planned event 2",
		date: "2024-03-17T00:00:00.000Z",
	},
	{
		name: "Some planned event 3 long long text event",
		date: "2024-03-23T00:00:00.000Z",
	},
].map((event) => ({ ...event, day: new Date(event.date).getDate() }));

const GROUPED_EVENTS = groupBy(EVENTS, (event) => event.day);

function formatShortWeekday(locale: string | undefined, date: Date) {
	return date.toLocaleString(locale, { weekday: "short" }).charAt(0);
}

function dotFlip(dotElement: SVGSVGElement | null) {
	if (!dotElement) return;

	if (dotElement.style.transform) {
		dotElement.style.transform = "";
	} else {
		dotElement.style.transform = "rotateX(180deg)";
	}
}

const isTileDisabled: TileDisabledFunc = ({ date }) => {
	return !GROUPED_EVENTS[date.getDate()];
};

export function Graph6() {
	const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(
		EVENTS[0]
	);
	const dotRef = useRef<SVGSVGElement>(null);

	function handleOnEventClick(clickedDate: Date) {
		const clickedEvent = GROUPED_EVENTS[clickedDate.getDate()]?.[0];

		if (!clickedEvent) return;

		setSelectedEvent(clickedEvent);
		dotFlip(dotRef.current);
	}

	return (
		<div className="flex flex-col gap-2 graph-7 w-full h-full">
			<MonthView
				value={selectedEvent ? new Date(selectedEvent.date) : null}
				onClick={handleOnEventClick}
				valueType={"day"}
				activeStartDate={new Date(2024, 2, 1)}
				formatShortWeekday={formatShortWeekday}
				tileDisabled={isTileDisabled}
			/>
			<EventBadge selectedEventName={selectedEvent?.name} dotRef={dotRef} />
		</div>
	);
}
