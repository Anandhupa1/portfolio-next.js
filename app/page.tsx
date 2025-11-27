import HeroSection from "@/components/shared/HeroSection";
import WorkExperienceSlider from "@/components/shared/WorkExperienceSlider";
import SkillsSection from "@/components/shared/SkillsSection";
import CertificatesSection from "@/components/shared/CertificatesSection";
import ProjectsSection from "@/components/shared/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkExperienceSlider />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
    </main>
  );
}
