
# ToDo Application

This project is a React application that provides a ToDo list where users can manage their tasks. The application is built using React, TypeScript, Tailwind CSS, and localStorage for persistent data storage.

## Features

- **Task Management**:
  - Users can add new tasks.
  - Tasks can be marked as completed or active.
  - Tasks can be deleted.
  - Completed tasks can be cleared in bulk.
- **Task Filters**:
  - Users can filter tasks to show all, active, or completed tasks.
- **Responsive Design**:
  - The application adapts to different screen sizes and resolutions, including mobile and tablet devices.

## Technologies Used

- React
- TypeScript
- Tailwind CSS

<img src="https://skillicons.dev/icons?i=react,ts,tailwind" />

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/eugenepokalyuk/react-mindbox.git
   cd mindbox
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run start
   ```

4. **Open the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── App/
│   │   ├── App.test.tsx
│   │   └── App.tsx
│   ├── TaskInput/
│   │   ├── TaskInput.test.tsx
│   │   └── TaskInput.tsx
│   ├── TaskList/
│   │   ├── TaskList.test.tsx
│   │   └── TaskList.tsx
│   ├── TaskItem/
│   │   ├── TaskItem.test.tsx
│   │   └── TaskItem.tsx
│   ├── Filters/
│   │   ├── Filters.test.tsx
│   │   └── Filters.tsx
├── types/
│   └── types.ts
├── index.tsx
├── styles.css
```

### Explanation of Key Files

- **`src/components/App/App.tsx`**: The main component that holds the state and renders the application.
- **`src/components/TaskInput/TaskInput.tsx`**: Component for adding new tasks.
- **`src/components/TaskList/TaskList.tsx`**: Component for displaying the list of tasks.
- **`src/components/TaskItem/TaskItem.tsx`**: Component for individual task items.
- **`src/components/Filters/Filters.tsx`**: Component for filtering tasks.
- **`src/types/types.ts`**: Type definitions for the application.

## Comments

- The application uses localStorage to persist tasks between page reloads.
- Tailwind CSS is used for styling the application, ensuring a responsive and clean design.
- The application is designed to provide a smooth user experience with real-time updates.

## Deployment

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `build` directory, which can be deployed to any static hosting service.