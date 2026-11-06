"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToFarms() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/programs/furaa-farms");
  }, [router]);

  return null;
}
