'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
// import { Link } from 'next-view-transitions';
import { useParams } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';

export default function Content() {
  const [currentField, setCurrentField] = useState<string>('');
  const [currentSubField, setCurrentSubField] = useState<string>('');
  const params = useParams();
  useEffect(() => {
    const field = params.field?.toString().toLowerCase();
    const subFields = params.subField?.toString().toLowerCase();

    switch (field) {
      case 'programming':
        setCurrentField(params.field.toString());
        setCurrentSubField(params.subField.toString());
        break;
      case 'dbms':
        setCurrentField('Database Management Systems');
        setCurrentSubField(params.subField.toString());
        break;
      case 'os':
        setCurrentField('Operating Systems');
        setCurrentSubField(params.subField.toString());
        break;
      case 'app':
        setCurrentField('Mobile App Development');
        setCurrentSubField(params.subField.toString());
        break;
      case 'web':
        setCurrentField('Web Development');
        setCurrentSubField(params.subField.toString());
        break;
      default:
        setCurrentField('');
    }
  }, [params]);
  return (
    <div className="min-h-screen mt-[10vh] p-[2rem]">
      <Breadcrumbs
        currentField={currentField}
        currentSubField={currentSubField}
      />

      <div className="sm:flex-1 m-0 w-[50vw] grid gap-5">
        <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
          <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
            <div>
              <h1>Que.1</h1>
              <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
                10 points
              </span>
              <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
                Print Hello World
              </CardTitle>
              <span className="text-sm text-green-500">Super-Easy</span>
            </div>
            <CardContent className="flex flex-row  p-0 items-center">
              <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
          <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
            <div>
              <h1>Que.2</h1>
              <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
                10 points
              </span>
              <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
                Declare Your First Variable
              </CardTitle>
              <span className="text-sm text-green-500">Super-Easy</span>
            </div>
            <CardContent className="flex flex-row  p-0 items-center">
              <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
          <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
            <div>
              <h1>Que.3</h1>
              <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
                10 points
              </span>
              <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
                Arrays
              </CardTitle>
              <span className="text-sm text-green-700">Easy</span>
            </div>
            <CardContent className="flex flex-row  p-0 items-center">
              <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
          <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
            <div>
              <h1>Que.4</h1>
              <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
                10 points
              </span>
              <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
                Arrays
              </CardTitle>
              <span className="text-sm text-green-500">Easy</span>
            </div>
            <CardContent className="flex flex-row  p-0 items-center">
              <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="bg-card hover:bg-card-hover transition-all duration-200  cursor-pointer p-[2rem] rounded-3xl">
          <Card className="bg-transparent border-0 rounded-lg relative flex flex-row justify-between">
            <div>
              <h1>Que.5</h1>
              <span className="text-background-blur absolute right-[-1.5rem] top-[-1.5rem]">
                10 points
              </span>
              <CardTitle className="text-lg lg:text-2xl tracking-wide capitalize cursor-pointer ">
                Arrays
              </CardTitle>
              <span className="text-sm text-green-500">Easy</span>
            </div>
            <CardContent className="flex flex-row  p-0 items-center">
              <Button className="w-auto  text-lg text-primary   hover:text-white border-2 border-background-blur bg-transparent hover:bg-green-500  hover rounded-xl">
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs({
  currentField,
  currentSubField,
}: {
  currentField: string;
  currentSubField: string;
}) {
  return (
    <Breadcrumb className="capitalize text-[1rem] text-primary mb-[1.5rem]">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link
            href="/explore"
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            Explore
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <Link
            href={`/explore/${currentField.toLowerCase()}`}
            className="opacity-50 hover:opacity-100 transition-all duration-400"
          >
            {currentField}
          </Link>
        </BreadcrumbItem>


        <BreadcrumbSeparator />
        <BreadcrumbPage>{currentSubField}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
