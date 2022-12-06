import React from "react";
import { weekDays, indexToTimeSlot } from "../../../timeDictionaries";

export default function TimeSlot(props) {
  const time = indexToTimeSlot(props.index);
  return <div>{time}</div>;
}
