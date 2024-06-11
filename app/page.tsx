import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServiceSection";
import RequestSection from "../components/RequestSection";
import WhySection from "../components/WhySection";
import Work from "../components/Work";
import Testimonies from "../components/Testimonies";
import BlogPost from "../components/BlogPost";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";


export default function HomePage() {
  return (
    <Layout
      title="Home - One Fix"
      description="Welcome to the home page of One Fix, your trusted plumbing service."
    >
      <Hero />
      <main>
       <RequestSection />
        <ServicesSection />
        <WhySection />
        <Work />
        <Testimonies />
        <BlogPost />
        <ContactForm />
        <FAQ />
      </main>
    </Layout>
  );
}
