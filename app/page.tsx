import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/app/lib/storyblok';
import { VersionOptions } from '@/app/lib/types';
import { draftMode } from 'next/headers';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const fetchData = async () => {
  const storyblokApi = getStoryblokApi();
  const { isEnabled } = await draftMode();
  const response = await storyblokApi?.getStory(`home`, {
    version:
      process.env.NEXT_PUBLIC_NODE_ENV === 'development' || isEnabled
        ? VersionOptions.draft
        : VersionOptions.published,
  });

  return response?.data?.story || null;
};

export default async function Home() {
  const story = await fetchData();

  if (!story) {
    return <div>Error loading blog data. Please try again later.</div>;
  }

  return (
    <>
      <main className="bg-white">
        <StoryblokStory story={story} />
      </main>
    </>
  );
}
