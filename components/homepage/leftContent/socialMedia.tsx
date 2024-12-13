import Link from "next/link";

// ICONS :
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-6 my-3">
      <Link
        href={"https://wa.me/085745068643"}
        target="_blank"
        className="block"
        aria-label="visit a Whatsapp web for discussion"
      >
        <FaWhatsapp className="text-2xl " />
      </Link>
      <Link
        href={
          "mailto:patriobimasuci354@gmail.com?subject=Ask%20about%20collaborate&body=Hello,%20I%20want%20to%20Collaborate%20with%20you"
        }
        className="block"
        target="_blank"
        aria-label="Lin for Send a email"
      >
        <MdOutlineAttachEmail className="text-2xl " />
      </Link>
      <Link
        href={"https://www.instagram.com/riobima222"}
        className="block"
        target="_blank"
        aria-label="Link for check instagram profile"
      >
        <FaInstagram className="text-2xl " />
      </Link>
      <Link
        href={"https://github.com/riobima222"}
        target="_blank"
        className="block"
        aria-label="Link for check github profile"
      >
        <FaGithub className="text-2xl " />
      </Link>
    </div>
  );
}
