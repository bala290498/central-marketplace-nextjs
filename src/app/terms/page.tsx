import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions · Central Marketplace Chennai",
  description:
    "Terms and conditions for Central Marketplace Chennai Desk listing and introduction platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f0ea] text-[#3d2c2a]">
      <main className="w-[min(720px,calc(100%-32px))] mx-auto my-10 mb-20 font-sans leading-relaxed text-[#5c4a46]">
        <p className="mb-6">
          <Link
            href="/"
            className="text-[#eb4203] font-extrabold hover:underline text-sm inline-flex items-center gap-1"
          >
            ← Central Marketplace
          </Link>
        </p>

        <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#3d2c2a] mb-4">
          Terms &amp; Conditions
        </h1>

        <p className="text-xs sm:text-sm text-[#8a736c] mb-8 italic">
          Last updated: 10 September 2026. Applies to the Chennai Desk of Central Marketplace (the “Desk”, “we”, “us”). By using the website, WhatsApp desk, or any listing we share, you agree to these terms.
        </p>

        <div className="space-y-6 text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">1. What we are</h2>
            <p>
              Central Marketplace is a listing and introduction desk. We may share names, areas, and contact details of property owners, home-food providers, local sellers, wholesalers, home-service players, and professionals. You contact them directly.
            </p>
            <p className="mt-2">
              We are not a broker of record, marketplace seller, payment company, courier, insurer, employer, or guarantor of any person we list.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">
              2. What we are not responsible for
            </h2>
            <p>We do not take part in, and we accept no responsibility or liability for:</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Money, deposits, advances, rents, fees, cash, UPI, bank transfer, or any other payment between you and another party.</li>
              <li>Scams, impersonation, fake listings, fake documents, or dishonest dealing by any listed person or any customer.</li>
              <li>Damage to property, injury, loss, theft, or any other harm arising from a visit, stay, meal, service, or deal.</li>
              <li>Delivery time, delay, non-delivery, or partial delivery of food, goods, or services.</li>
              <li>Quantity, weight, portion, stock, or availability.</li>
              <li>Quality, fitness, hygiene, skill, licence, safety, or result of any property, food, product, or service.</li>
              <li>Whether a room, flat, plot, or PG is vacant, legal, or as described.</li>
              <li>Whether a professional is qualified, registered, or permitted to practise.</li>
            </ul>
            <p className="mt-2">
              No listing, message, or recommendation from the Desk is a promise that a service will work, that a person is genuine, or that a deal will complete.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">3. No warranties</h2>
            <p>
              Listings and contacts are shared “as is” and “as available”. We do not warrant that information is complete, current, or accurate. We may add, change, or remove a listing at any time without notice.
            </p>
            <p className="mt-2">
              Any view we share is only a connection aid. It is not advice, not a certificate, and not a guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">4. Your duty</h2>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Check the person, place, documents, price, and work yourself before you pay or visit.</li>
              <li>Do not send money to an unknown party on the strength of a listing alone.</li>
              <li>Keep your own records of what you agree with the other party.</li>
              <li>Use contacts only for the request you made. Do not spam listed people.</li>
              <li>Tell the Desk in a private chat if a listing looks fake or harmful.</li>
            </ul>
            <p className="mt-2">
              Any contract, visit, payment, delivery, or work is solely between you and the other party. We are not a party to that arrangement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">5. Providers</h2>
            <p>
              If you ask to be listed, you confirm that your details are true and that you have the right to offer what you describe. We may refuse or remove a listing without giving a reason. Removal after a complaint does not make us responsible for what already happened.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">6. WhatsApp and data</h2>
            <p>
              The site may open a private WhatsApp chat with the office. WhatsApp’s own terms apply to that chat. We may keep area, name, number, category, and message text so we can reply and run the list. Do not send us data you do not want stored.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">
              7. Limitation of liability
            </h2>
            <p>
              To the fullest extent allowed by law, Central Marketplace and the Chennai Desk are not liable for any direct, indirect, special, or consequential loss, including loss of money, property, time, data, or reputation, arising from use of the site, a listing, a contact, or a deal you make with someone else.
            </p>
            <p className="mt-2">
              If a court still finds us liable, that liability is limited to the amount you paid us for a paid promotion in the thirty days before the claim — or zero if you paid us nothing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">8. Indemnity</h2>
            <p>
              You will indemnify and hold us harmless against claims, costs, and losses arising from your use of a listing, your messages, your payments, or your breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">9. Changes</h2>
            <p>
              We may update these terms by posting a new version on this page. Continued use after that date means you accept the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3d2c2a] mt-6 mb-2">10. Law</h2>
            <p>
              These terms are governed by the laws of India. Courts in Chennai have exclusive jurisdiction, without affecting any non-waivable consumer right you may have.
            </p>
          </section>

          <section className="bg-[#fffaf6] border border-[#ead9ce] p-6 rounded-2xl">
            <h2 className="text-lg font-bold text-[#3d2c2a] mb-2">11. Contact</h2>
            <p>Desk WhatsApp: +91 96776 91237</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@centralmarketplace.in"
                className="text-[#eb4203] font-bold hover:underline"
              >
                contact@centralmarketplace.in
              </a>
            </p>
            <p>Website: centralmarketplace.in</p>
            <p className="mt-3 text-xs text-[#8a736c] italic">
              This page is a platform disclaimer. It is not legal advice.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
