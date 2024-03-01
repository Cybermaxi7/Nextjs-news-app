"use client";
import Timeago from "react-timeago";

type Props = {
    time: string
}

export default function LiveTimestamp({time}: Props) {
  return <Timeago date={time} />;
}
