import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SquidContextProvider } from "@squidcloud/react";
import { dark } from '@clerk/themes';

type RootProvider = {
  children: React.ReactNode;
};

export const RootProvider: React.FC<RootProvider> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <SquidContextProvider
        options={{
          appId: "6dddi01k0qbhe5dfos",
          region: "us-east-1.aws",
          environmentId: "dev",
          squidDeveloperId: "gqmlrlnnzogysk2x43",
        }}
      >
        <Toaster position="top-right" richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </SquidContextProvider>
    </ClerkProvider>
  );
};
