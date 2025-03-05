import React from 'react';
import { View, Text } from 'react-native';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

//* Config global styles NativeWind
import "../global.css";
import { Stack } from 'expo-router';

// Create a client
const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  );
}

export default RootLayout;