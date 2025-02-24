import { HomepageStoryblok } from '@/component-types-sb';

const Homepage = ({ blok }: HomepageStoryblok) => {
  const { title, description } = blok;
  return (
    <div className="bg-black text-white">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Homepage;
