import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "@/i18n/routing";
import { login, getSession, logout } from "@/lib/auth";

export default async function Page({ params }: { params: Promise<any> }) {
  const locale = (await params).locale;
  const session = await getSession();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
      <div className="max-w-7xl container mx-auto px-4 pt-[100px] flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md mx-auto bg-background shadow-lg shadow-green/30">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Login {session && session.user && session.user.name}
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form
            action={async (formData) => {
              "use server";
              await login(formData).catch((error) => {
                console.log(error);
              });
            }}
          >
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                type="submit"
                className="bg-green hover:bg-dark-green w-full text-white"
              >
                Sign in
              </Button>
            </CardFooter>
          </form>
          {session != null && (
            <form
              className="p-5"
              action={async () => {
                "use server";
                await logout();
                redirect({ href: "/", locale: locale });
              }}
            >
              <Button type="submit" variant="outline" className="w-full">
                Logout
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
