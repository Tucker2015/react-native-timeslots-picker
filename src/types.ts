export interface IPickerProps {
  /**
   * The start time of the time slot picker
   * @default 9:00 AM
   * @example 9:00 AM
   */
  weekDayFromTime: string;
  /**
   * The end time of the time slot picker
   * @default 5:00 PM
   * @example "5:00 PM"
   */
  weekDayToTime: string;
  /**
   * To display the resulting time slot
   * @example slotResult={slot => {setSelectedTimeSlot(slot)}}
   */
  weekendFromTime: string;
  weekendToTime: string;
  /**
   * Amount of Minutes between each time slot
   * @default 30
   */
  timeSlotInterval?: number;
  /**
   * Disable the time slot picker default header
   * @default false
   */
  disableHeader?: boolean;
  /**
   * Width of the time slot picker in pixels
   * @default 60px
   */
  width?: "80px" | "100px";
  /**
   * Sets the selected time slot in the time slot picker
   * @example slotResult={slot => {setSelectedTimeSlot(slot)}}
   */
  slotResult: (slot: string) => void;
}
