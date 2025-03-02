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
    quote: "Overall Co-ordinator",
    name: "Visesh Chauhan",
    designation: "TY",
    src: "/team/visesh.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Krishna Patil",
    designation: "TY",
    src: "/team/1.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Vedant Rajhans",
    designation: "TY",
    src: "/team/2.png",
  },
  {
    quote: "Logic Lamps Co-ordinator",
    name: "Lubdha Shirode",
    designation: "TY",
    src: "/team/3.png",
  },
  {
    quote: "Sambhashani Co-ordinator ",
    name: "Harshal Surorshe",
    designation: "TY",
    src: "/team/4.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Rishita Awasthi",
    designation: "TY",
    src: "/team/5.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Pushkaraj Gaikwad",
    designation: "TY",
    src: "/team/6.png",
  },
  {
    quote: "ML Wars Co-ordinator",
    name: "Aditi Chavan",
    designation: "TY",
    src: "/team/7.png",
  },
  {
    quote: "ML Wars Co-ordinator",
    name: "Parth Ghadole",
    designation: "TY",
    src: "/team/8.png",
  },
  {
    quote: "Logic Lamps Co-ordinator",
    name: "Prathamesh Nathe",
    designation: "TY",
    src: "/team/9.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Krishna Karaspurkar",
    designation: "TY",
    src: "/team/10.png",
  },
  {
    quote: "Sambhashani Co-ordinator",
    name: "Suyog Chavan",
    designation: "TY",
    src: "/team/11.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Omkar Chand",
    designation: "SY",
    src: "/team/12.png",
  },
  {
    quote: "Sambhashani Co-ordinator",
    name: "Om Sagar",
    designation: "TY",
    src: "/team/13.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Advait Nathe",
    designation: "SY",
    src: "/team/14.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Atharva Desai",
    designation: "SY",
    src: "/team/15.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Sakshi Patil",
    designation: "SY",
    src: "/team/16.png",
  },
  {
    quote: "Cyber Canvas Co-ordinator",
    name: "Aarush Borkar",
    designation: "SY",
    src: "/team/17.png",
  },
  {
    quote: "ML Wars Co-ordinator",
    name: "Ishwari Shukla",
    designation: "SY",
    src: "/team/18.png",
  },
  {
    quote: "Chakava Co-ordinator",
    name: "Aadhya Bhagat",
    designation: "SY",
    src: "/team/19.png",
  },
  {
    quote: "Logic Lamps Co-ordinator",
    name: "Sidhesh Sarphale",
    designation: "SY",
    src: "/team/20.png",
  },
  {
    quote: "ChakaVa Co-ordinator",
    name: "Shashwati Pawar",
    designation: "SY",
    src: "/team/21.png",
  },
  {
    quote: "Logic Lamps Co-ordinator",
    name: "Mitesh Diwase",
    designation: "TY",
    src: "/team/22.png",
  },
  {
    quote: "Sambhashani Co-ordinator",
    name: "Pratik Ghavate",
    designation: "SY",
    src: "/team/23.png",
  },
];

const HauntedTestimonials = () => {
  return (
    <AnimatedTestimonials testimonials={defaultTestimonials} autoplay={true} />
  );
};

export default HauntedTestimonials;
