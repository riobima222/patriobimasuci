import Image from "next/image";

export default function ProfileImage () {
    return (
      <Image
        src={"/images/profile.webp"}
        alt="profile-image"
        width={300}
        height={300}
        className="w-full h-full max-w-[17em] max-h-[17em]"
        priority={true}
      />
    );
}