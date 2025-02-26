import { FaGithub, FaXTwitter } from "react-icons/fa6"

import { BaseLink } from "./ui/Link"

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/mitullgadhiya/",
    ariaLabel: "GitHub",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/ramicoin_bnb/",
    ariaLabel: "Twitter",
  },
]


const Footer = () => {

  return (
    <footer className="px-4">
      <div className="flex flex-col items-center justify-center bg-background-highlight p-6 text-sm rounded-lg">
        <div className="flex gap-4">
          {socialLinks.map(({ href, ariaLabel, icon: Icon }) => (
            <BaseLink
              key={href}
              href={href}
              hideArrow
              aria-label={ariaLabel}
              className="text-body hover:text-primary"
            >
              <Icon className="h-9 w-9 hover:transform hover:transition-colors" />
            </BaseLink>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
