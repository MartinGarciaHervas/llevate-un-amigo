import {
  StoryblokClient,
  apiPlugin,
  getStoryblokApi as getStoryblokApiDefault,
  storyblokInit,
} from '@storyblok/react/rsc';
import Homepage from '@/app/components/Homepage';

const components = {
  homepage: Homepage,
};

const storyblokApi: StoryblokClient | undefined = undefined;

const cachedFetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  });
};

export const AppStoryblokInit = () => {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: 'us',
      fetch: cachedFetch,
    },
    components,
  });

  return getStoryblokApiDefault();
};

export const getStoryblokApi = (): StoryblokClient => {
  if (storyblokApi !== undefined) return storyblokApi;
  return AppStoryblokInit();
};
