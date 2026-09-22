"use client";
import { Button } from "@/components/ui/button";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    // global-error must include html and body tags
    <>
      <h2>Something went wrong!</h2>
      <Button onClick={() => retry()}>Try again</Button>
    </>
  );
}
