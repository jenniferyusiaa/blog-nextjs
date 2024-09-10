import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import type { NextRequest } from "next/server";

// Define a specific type for the token
interface Token {
  aud: string[];
  azp: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  org_code: string;
  permissions: string[];
  scp: string[];
  sub: string;
}

// Define a specific type for the user object
interface User {
  family_name: string;
  given_name: string;
  email?: string; // email might be undefined
  id: string;
  picture?: string; // picture might be undefined
}

// Extend NextRequest to include the kindeAuth property
interface AuthenticatedRequest extends NextRequest {
  kindeAuth?: {
    user?: User; // adjust the type based on your needs
    token?: Token;
    // You can add other properties if needed
  };
}

export default withAuth(async function middleware(req: AuthenticatedRequest) {
  console.log("look at me", req.kindeAuth);
});

export const config = {
  matcher: ["/create-post"],
};
