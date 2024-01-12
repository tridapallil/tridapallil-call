# Online Meeting Scheduling System with Typescript, React, Next.js and MySQL

The project aims to facilitate the organization of schedules for online meetings, 
allowing users to register their profiles, integrate Google Calendar, and set weekly availabilities. 
The application was developed using a set of modern technologies to provide an efficient and user-friendly experience.
This project offers a comprehensive solution for online meeting scheduling, 
ensuring an intuitive experience for users and robust implementation using cutting-edge technologies.

## Key Features:

1. **Profile Registration:**
   - Users can create profiles, providing personal information and preferences.
   - Zod is used for validation of entered data, ensuring consistency and integrity of information.

2. **Integration with Google Calendar:**
   - Next oAuth is implemented for secure authentication with Google, allowing users to connect their accounts and automatically sync their calendars.
   - The integration provides a unified view of availabilities, avoiding conflicts in schedules.

3. **Configuration of Weekly Availabilities:**
   - Users can define the times they are available throughout the week for online meetings.
   - DayJS library is used for efficient manipulation of dates and times.

4. **Generation of Personalized Link:**
   - After registering the profile and configuring availabilities, a personalized link is generated, directing to the user's agenda page.

5. **Meeting Scheduling:**
   - Clients can access the profile link and view available time slots for scheduling.
   - Integration with Google Calendar ensures that scheduled meetings are automatically reflected in the user's calendar.

## Technologies Used:

- **React and Next.js:**
  - Efficient and rapid development of responsive interfaces.

- **Next oAuth:**
  - Secure authentication and easy integration with Google for access to Google Calendar.

- **Zod:**
  - Robust data validation, ensuring consistency in information provided by users.

- **ESLint:**
  - Code linting and standardization for maintaining code quality and readability.

- **Prisma:**
  - Object-Relational Mapping (ORM) for efficient interaction with the MySQL database.

- **DayJS:**
  - Simple and effective manipulation of dates and times.

- **Axios:**
  - HTTP request handling for interaction with external APIs, such as Google Calendar.

## Getting Started

1. Clone the repository to your local machine.
2. Run `npm install` to install all the necessary dependencies.
3. Configure your .env with the needed variables
4. Configure your project on google console, to generate a google client id and secret
5. Set a database_url to a mysql database.
6. Run `npx prisma migrate dev `
7. Run `npm start` to launch the application. Open `http://localhost:3000`.
