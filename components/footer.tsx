import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4">
      <div className="container mx-auto max-w-xl py-4 text-center">
        {/* Nav Links */}
        {/* <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold text-gray-800 mb-2">
          <Link href="/about">About</Link>
          <span className="text-green-800">|</span>
          <Link href="/contact">Contact</Link>
          <span className="text-green-800">|</span>
          <Link href="/terms-conditions">T&C</Link>
          <span className="text-green-800">|</span>
          <Link href="/faq">FAQ</Link>
          <span className="text-green-800">|</span>
          <Link href="/sitemap">Sitemap</Link>
        </div> */}

        {/* Contact Info */}
        <div className="text-xs text-gray-600 mb-3">
          <p>
            You may reach us at{" "}
            <a
              href="mailto:contact@sponsoredjobsalert.com"
              className="underline hover:text-green-800"
            >
              umusarea@gmail.com
            </a>
          </p>
          <p>We work 24/7</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4">
       
          <a
            href="https://www.facebook.com/share/1DQoeLC9Se/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footer/facebook-svgrepo-com.svg"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
         
       
          <a
            href="https://www.instagram.com/umusaree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footer/icons8-instagram.svg"
              alt="Instagram"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
