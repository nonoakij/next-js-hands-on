import { signIn } from "@/app/actions";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home(props: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const defaultTabsValue =
    props.searchParams.tab === "login" ? "login" : "sign-up";
  return (
    <main className="h-dvh p-8">
      <h1 className="text-4xl font-extrabold tracking-tight">
        The Joke Mail Service
      </h1>
      <div className="h-full grid place-content-center">
        <Tabs defaultValue={defaultTabsValue} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Sign-up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-up">
            <Card>
              <form action={signIn}>
                <CardHeader>
                  <CardTitle>Sign-up</CardTitle>
                  <CardDescription>
                    アカウントを作成して、今すぐ The Joke Mail Service
                    をご利用ください！
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="matsumoto_aki@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>登録する</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  すでに The Joke Mail Service
                  をご利用の方はこちらからログインしてください！
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="matsumoto_aki@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>ログインする</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
