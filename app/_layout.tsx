import React from 'react';
import { View, Text } from 'react-native';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

//* Config global styles NativeWind
import "../global.css";

// Create a client
const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text className='text-3xl'>RootLayout</Text>
      </View>
    </QueryClientProvider>
  );
}

export default RootLayout;