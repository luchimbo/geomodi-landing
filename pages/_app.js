// Next.js custom App to initialize PostHog on client side
import { useEffect } from 'react';
import { initPostHog } from '../lib/posthog';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return <Component {...pageProps} />;
}
