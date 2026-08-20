"use client";

import { DirectionProvider } from "@/components/ui/direction";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DirectionProvider direction="rtl">
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster position="top-center" richColors />
    </DirectionProvider>
  );
}
