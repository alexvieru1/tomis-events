"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // In production, redirect to homepage
    if (process.env.NODE_ENV === "production") {
      router.replace("/");
    }
  }, [router]);

  // In development, show a helpful 404 page for debugging
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          This page doesn&apos;t exist. In production, users will be redirected
          to the homepage.
        </p>
      </div>
    );
  }

  // Show nothing while redirecting in production
  return null;
}
