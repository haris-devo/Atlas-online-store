import Apple from 'lucide-react/dist/esm/icons/apple';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Twitter from 'lucide-react/dist/esm/icons/twitter';
import Youtube from 'lucide-react/dist/esm/icons/youtube';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full text-white"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* What is AltasShop Section */}
          <div className="space-y-4">
            <h3 className="font-metropolis-semibold text-lg text-[#f5b942]">
              What is AltasShop?
            </h3>
            <p className="font-metropolis text-sm leading-relaxed text-gray-300">
              AltasShop is an international B to C cross-border electronic
              commerce platform under the Atlas group, dedicated to providing
              global consumers with a convenient and efficient shopping
              experience.
            </p>
          </div>

          {/* Get to Know Us Section */}
          <div className="space-y-4">
            <h3 className="font-metropolis-semibold text-lg text-[#f5b942]">
              Get to Know Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  About AltasShop
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/responsibility"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Press Center
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-relations"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Make Money with us Section */}
          <div className="space-y-4">
            <h3 className="font-metropolis-semibold text-lg text-[#f5b942]">
              Make Money with us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sell"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Sell on AltasShop
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Advertise Your Products
                </Link>
              </li>
              <li>
                <Link
                  href="/self-publish"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Self-Publish with Us
                </Link>
              </li>
              <li>
                <Link
                  href="/hub"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Host an AltasShop Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Services Section */}
          <div className="space-y-4">
            <h3 className="font-metropolis-semibold text-lg text-[#f5b942]">
              Customer Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/account"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Your Account
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/covid"
                  className="font-metropolis text-sm text-gray-300 transition-colors hover:text-white"
                >
                  COVID-19 & AltasShop
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-700" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Download App */}
          <div className="space-y-4">
            <h4 className="font-metropolis-medium text-sm text-gray-300">
              Download App
            </h4>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 transition-transform hover:scale-105"
              >
                <svg
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="font-metropolis text-[10px] uppercase tracking-wide text-gray-600">
                    GET IT ON
                  </div>
                  <div className="font-metropolis-semibold text-sm text-black">
                    Google Play
                  </div>
                </div>
              </Link>

              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 transition-transform hover:scale-105"
              >
                <Apple className="h-6 w-6 text-black" />
                <div className="text-left">
                  <div className="font-metropolis text-[10px] uppercase tracking-wide text-gray-600">
                    Download on the
                  </div>
                  <div className="font-metropolis-semibold text-sm text-black">
                    App Store
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Security Certification & Payment Methods */}
          <div className="space-y-4">
            <h4 className="font-metropolis-medium text-sm text-gray-300">
              Security Certification
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {/* SSL Badge */}
              <div className="rounded bg-white px-3 py-1.5">
                <span className="font-metropolis-bold text-xs text-blue-600">
                  SSL
                </span>
              </div>
              {/* JCB Badge */}
              <div className="rounded bg-white px-3 py-1.5">
                <span className="font-metropolis-bold text-xs text-blue-600">
                  JCB
                </span>
              </div>
              {/* SafeKey Badge */}
              <div className="rounded bg-white px-3 py-1.5">
                <span className="font-metropolis-bold text-xs text-gray-800">
                  SafeKey
                </span>
              </div>
              {/* Mastercard */}
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white">
                <div className="flex gap-[-4px]">
                  <div className="h-6 w-6 rounded-full bg-red-500 opacity-80" />
                  <div className="h-6 w-6 -translate-x-3 rounded-full bg-orange-400 opacity-80" />
                </div>
              </div>
              {/* ID Check */}
              <div className="rounded bg-white px-3 py-1.5">
                <span className="font-metropolis-bold text-xs text-blue-600">
                  ID Check
                </span>
              </div>
            </div>

            <h4 className="font-metropolis-medium text-sm text-gray-300">
              We accept
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {/* AliPay */}
              <div className="flex h-8 items-center rounded bg-white px-3">
                <span className="font-metropolis-bold text-xs text-blue-500">
                  Alipay
                </span>
              </div>
              {/* UnionPay */}
              <div className="flex h-8 items-center rounded bg-white px-3">
                <span className="font-metropolis-bold text-xs text-red-600">
                  UnionPay
                </span>
              </div>
              {/* Visa */}
              <div className="flex h-8 items-center rounded bg-white px-3">
                <span className="font-metropolis-bold text-xs text-blue-700">
                  VISA
                </span>
              </div>
              {/* Mastercard Circle */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
              </div>
              {/* Diners */}
              <div className="flex h-8 items-center rounded bg-white px-3">
                <span className="font-metropolis-bold text-xs text-blue-800">
                  Diners
                </span>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-metropolis-medium text-sm text-gray-300">
              Follow us on social
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-3 pt-4">
              <h4 className="font-metropolis-medium text-sm text-gray-300">
                Subscribe Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Type your email here..."
                  className="flex-1 rounded-lg bg-white/10 px-4 py-2.5 font-metropolis text-sm text-white placeholder-gray-400 outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-[#f5b942]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#f5b942] px-6 py-2.5 font-metropolis-semibold text-sm text-black transition-colors hover:bg-[#e5a832]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="border-t border-gray-700 py-4"
        style={{ backgroundColor: '#111111' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="font-metropolis text-center text-sm text-gray-400">
              ©
              {' '}
              {currentYear}
              {' '}
              AltasShop - All Rights Reserved.
              {' '}
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              {' | '}
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              {' | '}
              <Link href="/accessibility" className="hover:text-white">
                Accessibility
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
