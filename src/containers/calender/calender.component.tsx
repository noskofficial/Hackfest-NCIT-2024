import { useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CALENDER_VIEW } from "../../constants";
import { calenderContext } from "../../Context/calender.context";
import { Flexbox } from "../../elements/Flexbox";
import { EventObject, calenderMainLogic } from "./calender.function";
import CalenderLayout from "./calender.layout";

import * as H from "./style";

interface CalenderViewProps {}

const CalenderView: React.FC<CalenderViewProps> = () => {
  const contextTesting = useContext(calenderContext);
  const { state, dispatch } = contextTesting;

  return (
    <div className="card-body">
      {["S", "M", "T", "W", "T", "F", "S"].map((day, j) => (
        <Flexbox
          key={j}
          alignCenter={true}
          justifyCenter={true}
          className="card-body-header"
        >
          <p style={{ color: "#9E9E9E" }}>{day}</p>
        </Flexbox>
      ))}
      {state.dates.map(
        (
          day: {
            day: number;
            event: boolean;
            dumpDay: boolean;
          },
          j: number
        ) => (
          <Flexbox
            alignCenter={true}
            justifyCenter={true}
            className={
              day.dumpDay
                ? "card-body-inner"
                : "card-body-inner card-body-inner__active"
            }
            onClick={() => {
              if (day.event) {
                dispatch({ type: "UPDATE_CALENDER_VIEW", data: 2 });
                dispatch({
                  type: "SHOW_EVENTS_FOR_SELECTED_DATE",
                  data: state.dates[j].events,
                });
              } else {
                alert("No events");
              }
            }}
            key={j}
          >
            {day.event ? (
              <p className="card-body-inner__active__event">{day.day}</p>
            ) : (
              <p>{day.day}</p>
            )}
          </Flexbox>
        )
      )}
    </div>
  );
};

interface EventProps {
  title: string;
  timings: string;
  link: string;
}

interface EventsViewProps {}

const EventsView: React.FC<EventsViewProps> = () => {
  const contextTesting = useContext(calenderContext);
  const { state } = contextTesting;

  return (
    <H.EventContainer>
      {state.selectedData.map((event: EventProps, j: number) => (
        <H.Event
          key={j}
          onClick={() => {
            window.open(event.link, "_blank");
          }}
        >
          <div className="event-subcard">
            <h3>{event.title}</h3>
            <p>{event.timings}</p>
          </div>
          <button>Add to calendar</button>
        </H.Event>
      ))}
    </H.EventContainer>
  );
};

export interface CalenderProps {
  data: EventObject[];
}

export const Calender: React.FC<CalenderProps> = ({ data }) => {
  const contextTesting = useContext(calenderContext);
  const { state, dispatch } = contextTesting;

  useEffect(() => {
    return calenderMainLogic(state, dispatch, data);
  }, [state.month]);

  return (
    <CalenderLayout
      handleActionProcced={
        state.index === CALENDER_VIEW
          ? { type: "MONTH_FORWARD" }
          : { type: "DISABLED" }
      }
      handleActionBack={
        state.index === CALENDER_VIEW
          ? { type: "MONTH_BACKWARD" }
          : { type: "UPDATE_CALENDER_VIEW", data: 1 }
      }
    >
      <AnimatePresence>
        <motion.div
          key={state.index ?? "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -1, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {state.index === CALENDER_VIEW ? <CalenderView /> : <EventsView />}
        </motion.div>
      </AnimatePresence>
    </CalenderLayout>
  );
};
