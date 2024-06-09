import ExploreCard from '@/components/exploreCard/ExploreCard';
import { exploreFields } from '@/components/exploreCard/exploreFieldContent';

export default function ExplorePage() {
  return (
    <div className="mt-[10vh] p-[2rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exploreFields.map((field) => (
          <ExploreCard
            key={field.id}
            title={field.title}
            subFields={field.subFields}
            bgImage={field.bgImage}
          />
        ))}
      </div>
    </div>
  );
}
