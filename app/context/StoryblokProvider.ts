'use client';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { PropsWithChildren } from 'react';

import Homepage from '@/app/components/Homepage';

const components = {
  homepage: Homepage,
};

const cachedFetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  });
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
    fetch: cachedFetch,
  },
  components,
  enableFallbackComponent: true,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}
