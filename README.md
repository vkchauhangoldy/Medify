# ASMMI-MEDIFY - Medical Center Slot Booking Platform

## Overview

MEDIFY is a React-based web application that allows users to find medical centers in specific states and cities across the USA and book appointments. The platform provides an intuitive interface for searching medical facilities, viewing available time slots, and managing bookings.

## Features

- **Landing Page**:
  - Navigation bar with links to Find Doctors, Hospitals, Medicines, and more.
  - Search functionality with dropdowns for selecting state and city.

- **Search Results Page**:
  - Listings of available medical centers based on user-selected location.
  - Option to book appointments directly from the results.

- **Booking Interface**:
  - Calendar-like interface for selecting appointment dates.
  - Availability of time slots for booking within one week in advance.

- **My Bookings Page**:
  - Personalized view displaying all user bookings with details such as medical center name, appointment date, and time.

- **Responsive Design**:
  - Fully responsive design that adheres to modern web standards.

- **Carousel Implementation**:
  - Engaging carousels using the Swiper library for enhanced user experience.

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS, Swiper for carousels
- **API Calls**: Axios
- **State Management**: React Hooks
- **Data Persistence**: localStorage

## API Endpoints

The application interacts with the following backend endpoints:

- Get a list of all states: `https://meddata-backend.onrender.com/states`
- Get a list of all cities for a particular state: `https://meddata-backend.onrender.com/cities/:state`
- Get a list of all medical centers based on state and city: `https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>`

MEDIFY - Medical Center Slot Booking Platform
Overview
MEDIFY is a React-based web application that allows users to find medical centers in specific states and cities across the USA and book appointments. The platform provides an intuitive interface for searching medical facilities, viewing available time slots, and managing bookings.

Features
Landing Page:

Navigation bar with links to Find Doctors, Hospitals, Medicines, and more.
Search functionality with dropdowns for selecting state and city.
Search Results Page:

Listings of available medical centers based on user-selected location.
Option to book appointments directly from the results.
Booking Interface:

Calendar-like interface for selecting appointment dates.
Availability of time slots for booking within one week in advance.
My Bookings Page:

Personalized view displaying all user bookings with details such as medical center name, appointment date, and time.
Responsive Design:

Fully responsive design that adheres to modern web standards.
Carousel Implementation:

Engaging carousels using the Swiper library for enhanced user experience.
Technologies Used
Frontend: React.js
Styling: CSS, Swiper for carousels
API Calls: Axios
State Management: React Hooks
Data Persistence: localStorage
API Endpoints
The application interacts with the following backend endpoints:

Get a list of all states: https://meddata-backend.onrender.com/states
Get a list of all cities for a particular state: https://meddata-backend.onrender.com/cities/:state
Get a list of all medical centers based on state and city: https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>
Installation
To run this project locally, follow these steps:

Clone the repository:


Install dependencies:

npm install
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000.

Deployment
The application is deployed on Vercel. You can access it here.

Usage
Navigate to the landing page.
Use the search section to select a state and city.
View the list of available medical centers.
Select a center to book an appointment.
Check your bookings on the My Bookings page.
Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

Contact
For any questions or suggestions, please contact Asmi.



