import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ShareButtons({ url, text }) {
  const encodedURL = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const platforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedText}`,
      icon: <FaTwitter />,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`,
      icon: <FaLinkedin />,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedURL}`,
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-neutral-400 text-xl hover:text-primary"
        >
          {platform.icon}
        </Link>
      ))}
    </div>
  );
}
