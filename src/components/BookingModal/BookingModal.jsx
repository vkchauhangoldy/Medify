import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";

// Function for triggering event
const triggerFirstVisitEvent = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "first_visit",
    eventDate: new Date().toISOString(),
  });
};

export default function BookingModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  // Handle booking logic
  const handleBooking = (e) => {
    e.preventDefault();
    triggerFirstVisitEvent();

    const bookings = localStorage.getItem("bookings") || "[]";

    const oldBookings = JSON.parse(bookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  // Date formatting
  const formatDate = (day) => (day ? format(new Date(day), "E, d LLL") : "");

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
