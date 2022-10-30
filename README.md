## React Native Time Slot Picker

[![npm version](https://badge.fury.io/js/react-native-timeslots-picker.svg)](https://npmjs.com/package/react-native-timeslots-picker)
[![downloads](https://img.shields.io/npm/dm/react-native-timeslots-picker.svg)](https://npmjs.com/package/react-native-timeslots-picker)
[![MIT License](https://img.shields.io/npm/l/react-native-timeslots-picker.svg)](https://npmjs.com/package/react-native-timeslots-picker)

## Simple TimeSlot Picker for React Native.

### Requirements

- React Native 0.60 or higher
- Moment.js
- NativeBase

## Installation with NPM

```bash
npm install react-native-timeslots-picker --save
```

## Installation with Yarn

```bash
yarn add react-native-timeslots-picker
```

## Usage

```javascript
import {TimeSlotPicker} from "react-native-timeslots-picker";

...

const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

return (
  <Box>
    <TimeSlotPicker
          slotResult={slot => {
            setSelectedTimeSlot(slot);
          }}
          timeSlotInterval={15}
          weekDayFromTime={'08:00'}
          weekDayToTime={'18:00'}
          weekendFromTime={'08:00'}
          weekendToTime={'12:00'}
        />
    <Text>Select Time Slot: {selectedTimeSlot}</Text>
  </Box>
)

```

## Props

| Prop             | Type     | Default | Description                                 |
| ---------------- | -------- | ------- | ------------------------------------------- |
| slotResult       | function | null    | Callback function to get selected time slot |
| weekDayFromTime  | string   | '08:00' | Weekday start time                          |
| weekDayToTime    | string   | '18:00' | Weekday end time                            |
| weekendFromTime  | string   | '08:00' | Weekend start time                          |
| weekendToTime    | string   | '12:00' | Weekend end time                            |
| timeSlotInterval | number   | 15      | Slot interval in minutes                    |
| disableHeader    | boolean  | false   | Disable header shown                        |

## Screenshots

![Screenshot](/img/screenshot.png?raw=true "Screenshot")

## License

ISC
