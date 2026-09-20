"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  console.log("root router");
  return (
    <div>
      next js project
      <Button size={"xs"} variant={"destructive"}>
        click me
      </Button>
      <Card>lsjflksjdfkjdk kjflksjkjfslk jflkjslk jjl lkfj jj s</Card>
    </div>
  );
}
