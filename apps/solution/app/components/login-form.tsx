"use client";
import { auth } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";

export function LoginForm() {
  const [state, formAction] = useFormState(auth, null);
  return (
    <form action={formAction}>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="matsumoto_aki@example.com"
          />
          {state?.fieldErrors.email && (
            <p role="alert" className="text-red-500">
              {state.fieldErrors.email}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
          {state?.fieldErrors.password && (
            <p role="alert" className="text-red-500">
              {state.fieldErrors.password}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button>ログインする</Button>
      </CardFooter>
    </form>
  );
}
