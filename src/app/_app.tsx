// src/app/_app.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../lib/react-query-client';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
