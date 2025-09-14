import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Welcome to <a className="text-blue-600" href="#">Launch MVP!</a>
        </h1>

        <p className="mt-3 text-2xl text-gray-600">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            src/app/page.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Card className="mt-6 w-96">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose a plan that works for you.</p>
              <Button className="mt-4">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="mt-6 w-96">
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your account and settings.</p>
              <Button className="mt-4">Go to Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
