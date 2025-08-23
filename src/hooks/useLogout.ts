"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export function useLogout() {
  const router = useRouter();

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      router.push("/");
    }
  }, [router]);

  return logout;
}
