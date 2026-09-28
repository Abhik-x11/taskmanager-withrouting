# 📋 Assignment 6: Task Manager with Routing

A modern, responsive single-page **Task Management Application** built using **React**, **Vite**, and **React Router**. This repository fulfills all requirements specified in **Assignment 6: Task Manager with Routing**.

---

## 🚀 Assignment 6 Features

### 1. 🧭 Routing Capabilities
- **React Router (`react-router-dom`)**: Standardized client-side routing.
- **Nested Routes**: The layout shell provides consistent navigation (`Dashboard`, `Tasks`, `Add Task`, `Completed Tasks`), rendering child page views through `<Outlet />`.
- **Dynamic Routes**: Individual task details view configured at path `/tasks/:taskId`.
- **URL Parameters**: The task details page uses `useParams()` to read `taskId` dynamically from the URL.
- **Navigation Controls**:
  - `<NavLink>` with active styling indicators across the navigation bar.
  - `<Link>` buttons for quick jumping between related tasks and views.
  - Programmatic navigation via `useNavigate()` after form submissions, deletes, or cancels.
- **Protected Route (Basic)**:
  - The `/add-task` route is wrapped in `<ProtectedRoute>`.
  - Unauthenticated users attempting to add tasks are redirected to `/login` with target destination saved in state.
  - Upon 1-click or credentials login, users are automatically redirected back to their intended destination (`/add-task`).

---

### 2. 📝 Task Data Model
Each task contains all required assignment fields:
| Field | Type | Options / Example |
| :--- | :--- | :--- |
| **Description** | `string` | Full task description / Title |
| **Priority** | `string` | `High` 🔴, `Medium` 🟡, `Low` 🟢 |
| **Category** | `string` | `Work`, `Personal`, `Study`, `Health`, `Finance` |
| **Due Date** | `string` | **`28 Aug 2026`** (Featured deadline focus) |
| **Status** | `string` | `Pending`, `In Progress`, `Completed` |

---

### 3. 📄 Pages Overview
1. **Dashboard (`/`)**:
   - High-level KPIs: Total Tasks, Completed, Pending, In Progress, High Priority count.
   - Progress completion bar with visual percentage.
   - Dedicated spotlight on tasks due **28 Aug 2026**.
   - Recent tasks preview with direct links.
2. **Tasks (`/tasks`)**:
   - Comprehensive task list with live search by description/category.
   - Category filtering pills (`All`, `Work`, `Personal`, `Study`, `Health`, `Finance`).
   - Priority and Status dropdown filters.
   - Sort by Due Date, Priority, or Name.
   - Clickable cards linking directly to dynamic details route `/tasks/:taskId`.
3. **Add Task (`/add-task`) - Protected Route**:
   - Form with input validation for Description, Category, Priority, and Due Date (pre-filled with `2026-08-28`).
   - Real-time priority color indicators.
4. **Task Details (`/tasks/:taskId`) - Dynamic Route**:
   - Extracted via `useParams()`.
   - Comprehensive metadata card with quick status switcher.
   - In-place Edit mode to update title, category, priority, due date, and status.
   - Delete task action with confirmation.
5. **Completed Tasks (`/completed`)**:
   - Filtered view exclusively showing completed items.
   - Quick action to reopen or mark pending.
   - Batch "Clear All Completed" action.
6. **Login (`/login`)**:
   - Simulated login with **1-Click Demo Login** for rapid evaluation.

---

## 🛠️ Local Setup & Running

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🐙 How to Upload Assignment 6 to GitHub

### Via GitHub Desktop:
1. Open **GitHub Desktop**.
2. Click **File** > **Add Local Repository...** (`Ctrl + O`).
3. Select the folder:
   ```
   C:\Users\abhik\Desktop\scratch\assignment-6-task-manager
   ```
4. Click **Add Repository**.
5. Click **Publish repository** to push it to `https://github.com/Abhik-x11/assignment-6-task-manager`.

### Via Terminal / PowerShell:
```powershell
cd C:\Users\abhik\Desktop\scratch\assignment-6-task-manager
& "C:\Users\abhik\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe" push -u origin main
```
