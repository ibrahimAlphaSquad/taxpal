import BusinessTasks from "@/components/businessTasks";
import Faq from "@/components/faq";
import FeatureSection from "@/components/featureSection";
import HomePage from "@/components/homePage";
import Pricing from "@/components/pricing";
import StartToday from "@/components/startToday";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-36">
      <HomePage />
      <FeatureSection />
      <BusinessTasks />
      <StartToday />
      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  );
}
