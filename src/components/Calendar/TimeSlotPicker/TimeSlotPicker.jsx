import React from "react";
import { Chip, Stack, Typography, Divider } from "@mui/material";

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  // CustomChip component to render each chip for the time slots
  const CustomChip = React.memo(({ label, handleClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": { ml: 0 },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={handleClick}
    />
  ));

  // Consolidated handleClick function for each slot
  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {availableSlots.morning.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {availableSlots.evening.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
