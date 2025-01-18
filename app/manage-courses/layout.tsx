/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  if (!(session as any).user.role) return <div>Loading...</div>;

  if (
    (session &&
      session.user &&
      (session.user as any)?.role &&
      (session.user as any)?.role !== "tutor") ||
    !session
  ) {
    return <div>Not found</div>;
  }
  return <div>{children}</div>;
}
