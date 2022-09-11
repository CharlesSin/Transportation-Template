// import components
import Hero from "../components/Hero";
import About from "../components/About";
import How from "../components/How";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// import data
// import {
//   headerData,
//   heroData,
//   navData,
//   faqData,
//   aboutData,
//   howData,
//   testimonialData,
//   footerData,
// } from "../data.json";

const headerData = {
  logoImgV1: "/images/header/projectv1.svg",
  logoImgV2: "/images/header/projectv2.svg",
  btnText: "Contact us",
};

const navData = [
  { name: "About", href: "/" },
  { name: "How to", href: "/" },
  { name: "Faqs", href: "/" },
];

const heroData = {
  title: "Your awesome traffic permit consultant.",
  sceneImg: "/images/hero/scene.svg",
  boyImg: "/images/hero/boy.svg",
  girlImg: "/images/hero/girl.svg",
  truckImg: "/images/hero/truck.svg",
  btnText: "Get Started",
};

const aboutData = {
  title: "About us",
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  boyImg: "/images/about/boy.svg",
};

const howData = {
  title: "How to apply",
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  girlImg: "/images/how/girl.svg",
};

const faqData = {
  pretitle: "faq",
  title: "Questions and Answers on Professional Traffic Permits:",
  boyImg: "/images/faq/boy.svg",
  accordions: [
    {
      question: "What is a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How to check the traffic condition?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "What are the requirements for a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question:
        "Are there professional traffic permit training courses at a distance?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "When is a professional traffic permit needed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "Where to look for a traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question:
        "Are there differences between a traffic permit and a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How much does a commercial traffic permit cost for goods?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "How to plug in for the traffic permit test?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How is the sample for a professional traffic permit booked?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
    {
      question: "What is a professional traffic permit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?",
    },
    {
      question: "How to check the traffic condition?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum.",
    },
  ],
};

const testimonialData = {
  pretitle: "testimonials",
  title: "Our Awesome Clients",
  clients: [
    {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/testimonials/avatar1.png",
      name: "Customer",
    },
    {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/testimonials/avatar2.png",
      name: "Customer",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
    {
      message:
        "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
      image: "/images/testimonials/avatar1.png",
      name: "Isak Pettersson",
    },
    {
      message:
        "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
      image: "/images/testimonials/avatar2.png",
      name: "Simon Sandberg",
    },
    {
      message:
        "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
      image: "/images/testimonials/avatar3.png",
      name: "Melissa Doe",
    },
  ],
};

const footerData = {
  truckImg: "/images/footer/truck.svg",
  hillImg: "/images/footer/hill.svg",
  text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
  logo: "/images/footer/projectv1.svg",
  links: [
    { name: "about", href: "/" },
    { name: "how to", href: "/" },
    { name: "faqs", href: "/" },
  ],
  form: {
    labelName: "Name",
    placeholderName: "Your name",
    labelEmail: "Email address",
    placeholderEmail: "Your email adddress",
    btnText: "Get Started",
  },
};

const Home = ({
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
  );
};

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};

export default Home;
