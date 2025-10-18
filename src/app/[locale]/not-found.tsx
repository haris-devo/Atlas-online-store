'use client';

import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Home from 'lucide-react/dist/esm/icons/home';
import Search from 'lucide-react/dist/esm/icons/search';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="border-futuristic">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 text-6xl font-bold text-futuristic">404</div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <Search className="mx-auto mb-2 h-8 w-8" />
              <p>We couldn't find the page you were looking for.</p>
            </div>

            <div className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>

              <Button variant="outline" onClick={handleGoBack} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              <p>If you believe this is an error, please contact support.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
