"use client";

import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserProfile() {
  const { userId } = useAuth();
  return (
    <>
      {userId ? (
        <UserButton />
      ) : (
        <GetStartedButton />
      )}
    </>
  )
}

const GetStartedButton = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/sign-up">Get Started</Link>
    </Button>
  )
}