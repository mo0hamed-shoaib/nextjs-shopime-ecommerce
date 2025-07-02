import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import ProfileEditClient from "./ProfileEditClient";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const { name, email, image } = session.user;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-8 [background-color:#1e2939] rounded-xl shadow-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Profile</h1>
      {image && (
        <Image src={image} alt={name || "Profile"} width={96} height={96} className="rounded-full mb-4 border-4 border-indigo-500" />
      )}
      <div className="text-white text-xl font-semibold mb-2">{name}</div>
      <div className="text-gray-400 text-lg mb-4">{email}</div>
      <ProfileEditClient name={name} email={email} image={image} />
    </div>
  );
} 