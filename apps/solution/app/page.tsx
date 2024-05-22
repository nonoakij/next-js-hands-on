import { LoginForm } from "@/app/components/login-form";
import { SignUpForm } from "@/app/components/sign-up-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home(props: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const tabsValue = props.searchParams.tab === "login" ? "login" : "sign-up";
  return (
    <main className="h-dvh p-8">
      <h1 className="text-4xl font-extrabold tracking-tight">
        The Joke Mail Service
      </h1>
      <div className="h-full grid place-content-center">
        <Tabs defaultValue={tabsValue} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Sign-up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-up">
            <Card>
              <CardHeader>
                <CardTitle>Sign-up</CardTitle>
                <CardDescription>
                  アカウントを作成して、今すぐ The Joke Mail Service
                  をご利用ください！
                </CardDescription>
              </CardHeader>
              <SignUpForm />
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
              <LoginForm />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
