---
title: EmployeeApp README
---

# EmployeeApp

## Overview

EmployeeApp is a React Native Expo application that displays a list of employees and allows users to search and filter employees by their attributes, age, and salary. The app uses Axios for HTTP requests and React Query for efficient data fetching and caching.

## Features

- Display a list of employees fetched from an API.
- Search employees by any attribute (name, position, etc.).
- Filter employees by age range and salary range.
- View detailed information about a selected employee.
- Add new employees to the list.

## Technologies Used

- **React Native**: [React Native ](https://reactnative.dev/) - A JavaScript framework for building native mobile apps using React, enabling fast development and a native look and feel across iOS and Android platforms.

- **Expo**: [Expo](https://expo.dev/) - An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. It provides a set of tools and services built around React Native to help you build, deploy, and iterate quickly.

- **Axios**: [TypeScript](https://www.typescriptlang.org/) - A promise-based HTTP client for JavaScript, used to make HTTP requests from the browser and Node.js, simplifying asynchronous code with modern JavaScript.

- **React Query**: [Nivo](https://tanstack.com/) - A powerful asynchronous state management tool for React applications, providing efficient data fetching, caching, synchronization, and more..

- **TailwindCSS**: [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs without leaving your HTML.

## Installation

### Prerequisites

- Node.js installed on your machine.
- Expo CLI installed globally.

## Local Development

To run Ema locally:

```bash
git clone https://github.com/ceejeey/ema.git
   cd ema
npm install
npx expo run:ios

```

## Code Structure

- `components/`: Houses all custom components.
- `hooks/`: Comprises all custom and reusable React hooks.
- `_layouts/`: Contains layout components`.
- `lib/`: Main utility files such as `utils.ts` are found here.
- `app/`: Parent pages that are configured in the router.

## Best Practices

- Strongly typed components and utilities with TypeScript.
- Performance optimization through `useMemo` & `useCallback`.
- Emphasis on component structuring and reusability for maintainable code.
- Separation of logic and UI with custom hooks.

## Usage

Fetching Data
The app fetches employee data from an API endpoint using Axios and React Query. The data is cached to improve performance and reduce unnecessary network requests.

Searching and Filtering
Search: You can search for employees by any attribute (e.g., name,) using the search input field.
Filter by Age: Use the age range to filter employees within a specific age range.
Filter by Salary: Use the salary range to filter employees within a specific salary range.
Viewing Employee Details
Click on any employee in the list to view detailed information about that employee on a separate screen.

Adding a New Employee
Click floating plus icon to add a new employee. Enter the name, age, and salary of the employee and submit the form.

Delete a New Employee
Swipe the employee card to delete the employee.
