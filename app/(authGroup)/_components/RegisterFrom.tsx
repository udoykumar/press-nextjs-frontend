"use client";
import { useActionState } from "react";
import { User, Mail, Lock, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { registerAction } from "../_action/RegisterAction";

export default function RegisterCard() {
  const [state, action, pending] = useActionState(registerAction, false);

  // console.log(state.success, "state resister");
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                type="name"
                placeholder="John Doe"
                className="pl-9"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="pl-9"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-9"
              />
            </div>
          </div>

          {/* Profile Photo Link Field */}
          <div className="space-y-2">
            <Label htmlFor="profilePhoto">
              Profile Photo Link{" "}
              <span className="text-xs text-muted-foreground font-normal">
                (Optional)
              </span>
            </Label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="profilePhoto"
                name="profilePhoto"
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="pl-9"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <Button type="submit" className="w-full mt-2">
            {pending ? "Submitin" : "Sign Up"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="justify-center border-t pt-4 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary underline-offset-4 hover:underline inline-flex items-center gap-1 ml-1"
        >
          Sign in <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
