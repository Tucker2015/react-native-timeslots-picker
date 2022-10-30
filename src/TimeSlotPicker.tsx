// @ts-ignore
import moment from "moment";
// @ts-ignore
import { Flex, Pressable, Text, Box, VStack } from "native-base";
// @ts-ignore
import React, { useEffect, useState } from "react";
import { IPickerProps } from "./types";

const TimeSlotPicker = (props: IPickerProps) => {
  const [slots, setSlots] = useState([]);
  const [headerShown, setHeaderShown] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const createTimeslots = (fromTime: string, toTime: string) => {
    let startTime = moment(fromTime, "HH:mm");
    let endTime = moment(toTime, "HH:mm");
    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }
    let arr: any = [];
    while (startTime <= endTime) {
      arr.push(startTime.format("HH:mm"));
      startTime.add(
        props.timeSlotInterval ? props.timeSlotInterval : 30,
        "minutes"
      );
    }
    return arr;
  };

  const setHeader = () => {
    if (props.disableHeader) {
      setHeaderShown(false);
    } else {
      setHeaderShown(true);
    }
  };

  useEffect(() => {
    setHeader();
    //show if it is weekday or weekend
    const weekday = moment().weekday();
    if (weekday === 0 || weekday === 6) {
      setSlots(createTimeslots(props.weekendFromTime, props.weekendToTime));
    } else {
      setSlots(createTimeslots(props.weekDayFromTime, props.weekDayToTime));
    }
  }, [props.timeSlotInterval, props.disableHeader]);

  return (
    <Box>
      <VStack space={1} alignItems={"center"}>
        {headerShown === true ? (
          <>
            <Text fontSize="xl" fontWeight="bold" mb={1}>
              Select a Time Slot
            </Text>
            <Text fontSize="sm" mb={2}>
              {moment().format("dddd, MMMM Do YYYY")}
            </Text>
          </>
        ) : null}
      </VStack>
      <Flex
        direction="row"
        wrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        p={2}
        rounded="2xl"
      >
        {slots.map((slot: string, index: number) => (
          <Pressable
            onPress={() => {
              //select or deselect the slot
              if (selectedSlot === slot) {
                setSelectedSlot(null);
                props.slotResult("");
              } else {
                setSelectedSlot(slot);
                props.slotResult(slot);
              }
            }}
            key={index}
            w={props.width ? props.width : "60px"}
            alignItems={"center"}
            justifyContent={"center"}
            p={2}
            m={0.5}
            _dark={{
              bg: selectedSlot === slot ? "green.600" : "blueGray.800",
            }}
            _light={{
              bg: selectedSlot === slot ? "green.600" : "blueGray.50",
            }}
          >
            <Text>{slot}</Text>
          </Pressable>
        ))}
      </Flex>
    </Box>
  );
};
export default TimeSlotPicker;
