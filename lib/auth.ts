import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth-config";
import { redirect } from "next/navigation";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function requireAuth() {
  const session = await getSession();
  
  if (!session) {
    redirect("/admin/login");
  }
  
  return session;
}

export async function requireSuperAdmin() {
  const session = await requireAuth();
  
  if (session.user.role !== "superadmin") {
    redirect("/admin");
  }
  
  return session;
}
