import Image from "next/image"
import { CountdownTimer } from "@/components/countdown-timer"
import { EmailSignupForm } from "@/components/email-signup-form"
import { SocialLinks } from "@/components/social-links"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full border-b bg-background/95 py-4">
        <div className="container flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Image src="/logo.png" alt="Meow Gadget Logo" width={80} height={80} className="rounded-full" />
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <section className="py-12 w-full">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                  Coming Soon
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-orange-500">Meow</span> Gadget
                </h1>
                <p className="text-xl text-muted-foreground">Smart Tech for Clever Living</p>

                <div className="w-full max-w-xs mx-auto my-8">
                  <Image src="/logo.png" alt="Meow Gadget Logo" width={200} height={200} className="mx-auto" />
                </div>

                <div className="flex justify-center">
                  <CountdownTimer targetDate="2023-12-31T00:00:00" />
                </div>

                <div className="mt-8">
                  <EmailSignupForm />
                </div>

                {/* Gadget SVG Icons */}
                <div className="flex justify-center gap-6 mt-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                    <rect x="5" y="2" width="14" height="20" rx="2" fill="currentColor" opacity="0.2" />
                    <rect x="7" y="4" width="10" height="16" rx="1" fill="currentColor" opacity="0.3" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>

                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                    <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />
                    <circle cx="12" cy="12" r="7" fill="currentColor" opacity="0.3" />
                    <path d="M12,7 L12,12 L15,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>

                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                    <path d="M3,12 A9,9 0 1,1 21,12 A9,9 0 1,1 3,12 Z" fill="currentColor" opacity="0.2" />
                    <path
                      d="M7,10 C7,7 9,5 12,5 C15,5 17,7 17,10 L17,14 C17,17 15,19 12,19 C9,19 7,17 7,14 Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M10,10 L14,10 M10,14 L14,14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white dark:bg-gray-900 py-6">
        <div className="container flex flex-col gap-4 items-center justify-center text-center">
          <div className="flex flex-col items-center gap-2">
            <Image src="/logo.png" alt="Meow Gadget Logo" width={60} height={60} className="rounded-full" />
            <p className="text-sm font-medium">Smart Tech for Clever Living</p>
          </div>
          <SocialLinks />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Meow Gadget. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
