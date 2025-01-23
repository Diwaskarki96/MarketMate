import { LuUser } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
import Image from "next/image";
const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  console.log(profileImage);
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile"
        className="w-6 h-6 rounded-full object-cover"
        priority
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
