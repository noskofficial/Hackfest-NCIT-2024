import { EventArrayType, EventType } from "../../../types/calenderState.types";
import { weekDays } from "../../constants";

interface State {
  year: number;
  month: number;
}

export interface EventObject {
  day: string;
  events: EventType[];
}

export const getDatesForMonth = (state: State): [number, number, number] => {
  const [firstDay, lastDay, lastDayOfPreviousMonth] = [
    new Date(state.year, state.month - 1, 1),
    new Date(state.year, state.month, 0),
    new Date(state.year, state.month - 1, 0),
  ];

  const [
    firstDayOfTheMonth,
    // lastDayOfTheMonth,
    totalNumOfDays,
    totalNumOfDaysInPreviousMonths,
  ] = [
    firstDay.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    // lastDay.toLocaleDateString("en-us", {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // }),
    lastDay.getDate(),
    lastDayOfPreviousMonth.getDate(),
  ];

  const extraDays = weekDays.indexOf(firstDayOfTheMonth.split(",")[0]);
  return [totalNumOfDays, extraDays, totalNumOfDaysInPreviousMonths];
};

export const calenderMainLogic = (
  state: State,
  dispatch: React.Dispatch<{
    type: "UPDATE_DATES" | "MONTH_FORWARD" | "MONTH_BACKWARD" | "UPDATE_CALENDER_VIEW" | "SHOW_EVENTS_FOR_SELECTED_DATE" | "SHOW_SELECTED_EVENT_DETAILS";
    data: EventArrayType[];
  }>,
  data: EventObject[]
) => {
  const structureToHoldDates: EventArrayType[] = [];

  const [num, paddingDay, totalNumOfDaysInPreviousMonths] =
    getDatesForMonth(state);

  for (let i = 1; i <= num + paddingDay; i++) {
    if (i > paddingDay) {
      const currentDay = i - paddingDay;
      const currentMonth = state.month;
      const currentYear = state.year;
      const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

      const obj = data.find((o) => o.day === currentDate);
      if (obj) {
        structureToHoldDates.push({
          day: i - paddingDay,
          event: true,
          dumpDay: false,
          events: obj.events,
        });
      } else {
        structureToHoldDates.push({
          day: i - paddingDay,
          event: false,
          dumpDay: false,
          events: [],
        });
      }
    } else {
      structureToHoldDates.push({
        day: totalNumOfDaysInPreviousMonths - paddingDay + i,
        event: false,
        dumpDay: true,
        events: [],
      });
    }
  }

  dispatch({ type: "UPDATE_DATES", data: structureToHoldDates });
};
