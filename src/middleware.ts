import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isAuthRoute = createRouteMatcher(["/sign-in", "/sign-up"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    if (auth().userId) {
      return NextResponse.next();
    }
    const from = req.url;
    return NextResponse.redirect(
      new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url)
    )
  }

  if (isAuthRoute(req) && auth().userId) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
