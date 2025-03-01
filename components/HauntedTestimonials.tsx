import { AnimatedTestimonials } from "./ui/animated-testimonials";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Krishna Patil",
    designation: "Ghost Whisperer",
    src: "/team/1.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Vedant Rajhans",
    designation: "Ghost Whisperer",
    src: "/team/2.png",
  },
  {
    quote: "Logic Lamps Co-ordinator",
    name: "Lubdha Shirode",
    designation: "Ghost Whisperer",
    src: "/team/3.png",
  },
  {
    quote: "Sambhashini Co-ordinator ",
    name: "Harshal Surorshe",
    designation: "Paranormal Investigator",
    src: "/team/4.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Rishita Awasthi",
    designation: "Medium",
    src: "/team/5.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Pushkaraj Gaikwad",
    designation: "Medium",
    src: "/team/6.png",
  },
  {
    quote: "Sambhashini Co-ordinator",
    name: "Aditi Chavan",
    designation: "Medium",
    src: "/team/7.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Parth Ghadole",
    designation: "Medium",
    src: "/team/8.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Prathamesh Nathe",
    designation: "Medium",
    src: "/team/9.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Krishna Karaspurkar",
    designation: "Medium",
    src: "/team/10.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Suyog Chavan",
    designation: "Medium",
    src: "/team/11.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Omkar Chand",
    designation: "Medium",
    src: "/team/12.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Om Sagar",
    designation: "Medium",
    src: "/team/13.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Advait Nathe",
    designation: "Medium",
    src: "/team/14.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Atharva Desai",
    designation: "Medium",
    src: "/team/15.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Sakshi Patil",
    designation: "Medium",
    src: "/team/16.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Aarush Borkar",
    designation: "Medium",
    src: "/team/17.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Ishwari Shukla",
    designation: "Medium",
    src: "/team/18.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Aadhya Bhagat",
    designation: "Medium",
    src: "/team/19.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Sidhesh Sarphale",
    designation: "Medium",
    src: "/team/20.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Shashwati Pawar",
    designation: "Medium",
    src: "/team/21.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Mitesh Diwase",
    designation: "Medium",
    src: "/team/22.png",
  },
  {
    quote: "The shadows hold secrets that mortals dare not seek...",
    name: "Pratik Gawate",
    designation: "Medium",
    src: "/team/23.png",
  },
];

const HauntedTestimonials = () => {
  return (
    <AnimatedTestimonials testimonials={defaultTestimonials} autoplay={true} />
  );
};

export default HauntedTestimonials;
