import Staff from "../components/company-staff/index";
import Company from "../components/about-company/index";
import { aboutUs } from "@/dammyData";

const About = () => {
  return (
    <>
      <Staff {...aboutUs} />
      <Company />
    </>
  );
};

export default About;
