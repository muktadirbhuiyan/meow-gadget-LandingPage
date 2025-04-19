import Link from "next/link"
import { Twitter, Instagram, Github } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  )
}
