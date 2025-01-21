import Image from "next/image";

export default function ProfileImage () {
    return (
      <Image
        src={"/images/profile.webp"}
        alt="profile-image"
        width={300}
        height={300}
        className="sm:w-[17em] sm:h-[17em] w-[12em] h-[12em]"
        priority={true}
      />
    );
}