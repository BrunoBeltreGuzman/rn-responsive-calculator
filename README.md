# RN Responsive Calculator

## Overview

A responsive calculator application built with React Native and Expo. This app dynamically adapts to screen sizes and supports light and dark themes. It is optimized for both mobile and web platforms.

## Features

- **Responsive Design:** Automatically adapts to different screen sizes.
- **Dark/Light Themes:** Switch between dark and light themes seamlessly.
- **Orientation Lock:** Forced vertical orientation for a consistent user experience.
- **Customizable Buttons:** Buttons styled dynamically based on screen size and theme.
- **State Management:** Powered by React Context for efficient state handling.

## Installation

### Prerequisites

Ensure you have the following tools installed:

- Node.js (v16 or later)
- Expo CLI

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rn-responsive-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npm run start
   ```

4. Run on your preferred platform:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Project Structure

```
.
├── assets              # Static assets (e.g., images, fonts)
├── components          # Reusable UI components
├── config              # Theme and style configurations
├── store               # Zustand state management files
├── App.tsx             # Entry point of the application
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Dependencies

### Runtime Dependencies

- **[@expo/metro-runtime](https://github.com/expo/expo):** Metro bundler runtime support.
- **[expo](https://expo.dev):** Framework for building cross-platform apps.
- **[expo-screen-orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/):** Manage screen orientation.
- **[expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/):** Status bar configuration.
- **[react](https://reactjs.org):** Core library for building UI.
- **[react-native](https://reactnative.dev):** Framework for building native apps.
- **[react-native-web](https://necolas.github.io/react-native-web):** React Native components and APIs for the web.
- **[zustand](https://github.com/pmndrs/zustand):** State management library.

### Development Dependencies

- **[@babel/core](https://babeljs.io):** JavaScript compiler.
- **[@types/react](https://www.npmjs.com/package/@types/react):** TypeScript definitions for React.
- **[typescript](https://www.typescriptlang.org):** Typed JavaScript.

## Theming

The application supports light and dark themes. The themes are defined in the `config/Theme.ts` file:

```typescript
const Theme = {
  light: {
    buttonsBackgroundColor: "#E0E0E0",
    buttonsPressedBackgroundColor: "#B0B0B0",
    formulaTextColor: "#000000",
  },
  dark: {
    buttonsBackgroundColor: "#333333",
    buttonsPressedBackgroundColor: "#555555",
    formulaTextColor: "#FFFFFF",
  },
};

export default Theme;
```

## Screenshots

Add screenshots or GIFs of your application here.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
