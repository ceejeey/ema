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

### Steps

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/EmployeeApp.git
   cd EmployeeApp

   ```

2. **install Dependencies:**

   ```sh
   npm install

   ```

3. **Prebuild the Project:**

   ```sh
   npx expo prebuild

   ```

4. **Start the Project:**

   ```sh
   npx expo start
   ```

### Project Structure

ema/
├── app/
│ ├── \_layout.js
│ ├── index.js
│ ├── details/
│ │ └── [id].tsx
│ └── AddEmployee.tsx
├── config/
│ └── axios.ts
├── components/
├── hooks/
├── App.js
├── package.json
└── README.md
