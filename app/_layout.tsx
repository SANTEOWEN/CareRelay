import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import React, { createContext, useContext } from "react";
import "./global.css";

import { NAV_THEME, THEME } from "@/lib/theme";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

const ThemeContext = createContext(THEME.light);

export function useAppTheme() {
  return useContext(ThemeContext);
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = THEME[colorScheme ?? "light"];

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <NavThemeProvider value={NAV_THEME[colorScheme ?? "light"]}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </NavThemeProvider>
        <PortalHost />
      </ThemeContext.Provider>
    </>
  );
}
