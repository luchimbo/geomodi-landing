// lib/posthog.js
// Client-side PostHog initializer using environment variables.
import posthog from 'posthog-js';

// Initialize PostHog on the client side using environment-provided keys/host.
export const initPostHog = () => {
  if (typeof window === 'undefined') return;
  if (window.__PH_INITIALIZED__) return;

  // Read API key and host from environment variables (NEXT_PUBLIC_ prefix is exposed to the client)
  // These values should be defined in a .env.local file in your project root or via CI/secrets.
  const key = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) || '';
  const host = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_HOST) || 'https://app.posthog.com';

  if (!key) {
    console.warn('PostHog key not provided. Skipping initialization.');
    window.__PH_INITIALIZED__ = true;
    return;
  }

  posthog.init(key, { api_host: host });

  window.__PH_INITIALIZED__ = true;
};
