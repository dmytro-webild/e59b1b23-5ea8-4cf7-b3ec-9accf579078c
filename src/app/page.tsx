"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Coffee, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Visit",
          id: "contact",
        },
      ]}
      brandName="Brew & Bean"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Experience the Art of Coffee"
      description="Handcrafted brews, ethically sourced beans, and a warm neighborhood welcome. Join us for your perfect daily ritual."
      buttons={[
        {
          text: "View Our Menu",
          href: "#menu",
        },
        {
          text: "Visit Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bird-city-sparrow-sitting-table-outdoor-cafe_1153-4660.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crop-woman-brewing-tea-near-books-ginger_23-2147888734.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/best-place-town-meeting-with-friends_329181-2888.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cafe-phone-female-tablet-woman_1303-2068.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg",
          alt: "Customer",
        },
      ]}
      avatarText="Join 2,000+ local coffee lovers"
      marqueeItems={[
        {
          type: "text",
          text: "Ethically Sourced",
        },
        {
          type: "text",
          text: "Small Batch Roasted",
        },
        {
          type: "text",
          text: "Organic Beans",
        },
        {
          type: "text",
          text: "Fair Trade Certified",
        },
        {
          type: "text",
          text: "Handcrafted Daily",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Passion for Brewing"
      metrics={[
        {
          icon: Award,
          label: "Years Roasting",
          value: "12+",
        },
        {
          icon: Coffee,
          label: "Bean Origins",
          value: "8",
        },
        {
          icon: Users,
          label: "Daily Visitors",
          value: "200+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "cappuccino",
          name: "Signature Cappuccino",
          price: "$4.50",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-cinnamon-sticks-chocolate-cookies-wooden-board_181624-57557.jpg",
        },
        {
          id: "espresso",
          name: "Double Espresso",
          price: "$3.00",
          imageSrc: "http://img.b2bpic.net/free-photo/tool-used-coffee-press-cup_23-2149878081.jpg",
        },
        {
          id: "cold-brew",
          name: "House Cold Brew",
          price: "$5.00",
          imageSrc: "http://img.b2bpic.net/free-photo/refreshing-boozy-white-russian-cocktail-with-vodka-cream_123827-37414.jpg",
        },
      ]}
      title="Our Featured Brews"
      description="Discover our signature selection of handcrafted beverages prepared with precision."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Emma L.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg",
        },
        {
          id: "t2",
          name: "James W.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-brewing-tea-near-books-ginger_23-2147888734.jpg",
        },
        {
          id: "t3",
          name: "Sarah P.",
          imageSrc: "http://img.b2bpic.net/free-photo/best-place-town-meeting-with-friends_329181-2888.jpg",
        },
        {
          id: "t4",
          name: "David M.",
          imageSrc: "http://img.b2bpic.net/free-photo/cafe-phone-female-tablet-woman_1303-2068.jpg",
        },
        {
          id: "t5",
          name: "Marcus R.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-dark-long-hair-smiling-coffee-shop_273609-2807.jpg",
        },
      ]}
      cardTitle="What Our Community Says"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Come Say Hello"
      description="Located in the heart of downtown. Open daily from 7 AM to 6 PM."
      imageSrc="http://img.b2bpic.net/free-photo/smiling-couple-sitting-open-cafeteria-zone_23-2147826845.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Coffee",
              href: "#menu",
            },
          ],
        },
        {
          items: [
            {
              label: "Visit Us",
              href: "#contact",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Brew & Bean"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
