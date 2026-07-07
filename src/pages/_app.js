import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
// import WhatsAppModal from "@/common/WhatsAppModal";

export default function App({ Component, pageProps }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease" });

    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta
          name="google-site-verification"
          content="EnC132zMTZQkb0E_92avvUd2ABYrUU8Ms0oMT9P3w30"
        />
        <link rel="canonical" href="https://kpishopfitter.co.uk/" />

        {/* Google Analytics (G-RWEMEC3YB4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RWEMEC3YB4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RWEMEC3YB4');
            `,
          }}
        />

        {/* Google Ads (AW-17426309870) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17426309870"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17426309870');
              gtag('event', 'page_view');
            `,
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KPI Shopfitter",
              url: "https://kpishopfitter.co.uk/",
              logo: "https://kpishopfitter.co.uk/logokpi.png",
              image: "https://kpishopfitter.co.uk/cover.jpg",
              description: "KPI Shopfitter specialises in aluminium shopfronts, roller shutters, curtain walling, automatic doors and signage across London and the UK.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "141 Richmond Road",
                addressLocality: "Ilford",
                addressRegion: "London",
                postalCode: "IG1 1JT",
                addressCountry: "GB",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+44-7735-559454",
                  contactType: "customer service",
                  areaServed: "GB",
                  availableLanguage: "en",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+44-330-133-3751",
                  contactType: "customer service",
                  areaServed: "GB",
                  availableLanguage: "en",
                },
              ],
              email: "info@kpishopfitter.co.uk",
              sameAs: [
                "https://x.com/KPIShopfitter",
                "https://www.instagram.com/kpishopfitter/",
                "https://www.youtube.com/channel/UCZsZxPrvAhV7TnzNZD601zA",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KPI Shopfitter",
              image: "https://kpishopfitter.co.uk/cover.jpg",
              url: "https://kpishopfitter.co.uk/",
              telephone: "+44-7735-559454",
              email: "info@kpishopfitter.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "141 Richmond Road",
                addressLocality: "Ilford",
                addressRegion: "London",
                postalCode: "IG1 1JT",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.5588,
                longitude: 0.0724,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "££",
            }),
          }}
        />

        {/* LocalBusiness Schema - Thornton Heath */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KPI Shopfitter",
              image: "https://kpishopfitter.co.uk/cover.jpg",
              url: "https://kpishopfitter.co.uk/",
              telephone: "+44-330-133-3751",
              email: "info@kpishopfitter.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "90 Silverleigh Road",
                addressLocality: "Thornton Heath",
                addressRegion: "London",
                postalCode: "SM5 3BA",
                addressCountry: "GB",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "££",
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does KPI Shopfitter provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "KPI Shopfitter specialises in the design, fabrication, and installation of aluminium shopfronts, glass shopfronts, automatic doors, roller shutters, curtain wall systems, windows & doors, and protection screens.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which areas do you cover?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We are based in Ilford, London and Thornton Heath, and provide installation and support services across London, Essex, Kent, and surrounding areas throughout the UK.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer free quotes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we offer free, no-obligation consultations and quotes for all projects. Call us on +44 7735 559454 or email info@kpishopfitter.co.uk.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide a warranty on your work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — all KPI Shopfitter installations come with a warranty covering materials and workmanship. Full details are provided in your project agreement.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* <WhatsAppModal /> */}

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "72px",
            right: "20px",
            backgroundColor: "#F47920",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            fontSize: "30px",
            height: "50px",
            width: "50px",
          }}
        >
          ↑
        </button>
      )}

      <Component {...pageProps} />
    </>
  );
}
