import { auth } from "@/auth";
import { redirect } from "next/navigation";
import OrdersClient from "./OrdersClient";

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const email = session.user.email;
  return <OrdersClient email={email} />;
} 