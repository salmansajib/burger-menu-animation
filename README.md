# Burger Menu with Framer Motion

A React-based project featuring a smooth, animated burger menu using Framer Motion (now referred to as `motion`). The menu toggles a sliding navigation panel with a clean, responsive design.

## Features

- **Animated Burger Menu**: Smooth transitions for the burger icon, transforming into an "X" when toggled, powered by Framer Motion.
- **Sliding Navigation**: A side navigation panel that slides in and out with a 1-second ease-in-out transition.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly layout.
- **State Management**: Uses React's `useState` hook to manage the open/closed state of the menu.

## Tech Stack

- **React**: Frontend framework for building the UI.
- **Framer Motion**: Animation library for smooth transitions and burger menu animations.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Modern JavaScript for functionality.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/salmansajib/burger-menu-animation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd burger-menu
   ```

3. Install dependencies:

   ```bash
   yarn
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## Usage

- Click the burger menu icon in the header to toggle the navigation panel.
- The burger icon animates into an "X" when the menu is open and reverts when closed.
- The navigation panel slides in from the right and slides out when closed.

## Project Structure

```text
burger-menu/
├── src/
│   ├── components/
│   │   ├── BurgerMenu.jsx  # Burger menu component with Framer Motion animations
│   │   ├── Header.jsx      # Header component containing the burger menu
│   │   ├── Navigation.jsx  # Sliding navigation panel
│   ├── App.jsx             # Main app component
├── README.md               # Project documentation
├── package.json            # Project dependencies and scripts
```

## Dependencies

- `react`: ^18.2.0
- `motion`: ^10.18.0 (Framer Motion)
- `tailwindcss`: ^3.4.0

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
