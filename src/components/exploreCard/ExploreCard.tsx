import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'next-view-transitions';
import { subFieldType } from './exploreFieldContent';

interface exploreCardProps {
  title: string;
  subFields: subFieldType[] | undefined;
}

export default function ExploreCard({ title, subFields }: exploreCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {subFields?.map((field) => (
          <Link
            href={`/explore/${title.toLowerCase().replace(/\s+/g, '')}/${field.title.toLowerCase().replace(/\s+/g, '')}`}
            key={field.id}
          >
            <CardTitle className="tracking-wide capitalize font-normal text-xl">
              {field.title}
            </CardTitle>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
