import React, { useState } from "react";
import DaySelector from "./DaySelector/DaySelector";
import { Box } from "@mui/material";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

const Calendar = React.memo(
  ({ availableSlots = {}, details, handleBooking }) => {
    // State for selected date
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    // Memoizing total slots calculation
    const totalSlots =
      availableSlots.morning.length +
      availableSlots.afternoon.length +
      availableSlots.evening.length;
    // const totalSlots = useMemo(() => {
    //   const { morning = [], afternoon = [], evening = [] } = availableSlots;
    //   return morning.length + afternoon.length + evening.length;
    // }, [availableSlots]);

    return (
      <Box>
        {/* DaySelector component to display and select a date */}
        <DaySelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          totalSlots={totalSlots}
        />

        {/* TimeSlotPicker component to show available time slots for the selected date */}
        <TimeSlotPicker
          availableSlots={availableSlots}
          selectedDate={selectedDate}
          details={details}
          handleBooking={handleBooking}
        />
      </Box>
    );
  }
);

export default Calendar;
