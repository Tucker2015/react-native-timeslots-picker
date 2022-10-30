## React Native Time Slot Picker

[![npm version](https://badge.fury.io/js/react-native-timeslots-picker.svg)](//npmjs.com/package/react-native-timeslots-picker)
[![downloads](https://img.shields.io/npm/dm/react-native-timeslots-picker.svg)](//npmjs.com/package/react-native-timeslots-picker)
[![MIT License](https://img.shields.io/npm/l/react-native-timeslots-picker.svg)](//npmjs.com/package/react-native-timeslots-picker)

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
          weekDayFromTime={'08:00'}
          weekDayToTime={'18:00'}
          weekendFromTime={'08:00'}
          weekendToTime={'12:00'}
        />
    <Text>Select Time Slot: {selectedTimeSlot}</Text>
  </Box>
)

```
