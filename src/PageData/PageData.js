import focalLogo from "../assets/focal_logo.jpg";
// Dynamically import all images in the folder
const images = import.meta.glob("../assets/GalleryImages/*.{png,jpg,jpeg,svg}", { eager: true });
const galleryImages = Object.values(images).map((mod) => mod.default);

const teamImages = import.meta.glob("../assets/TeamImages/*.{png,jpg,jpeg,svg}", { eager: true });
const tImages = Object.values(images).map((mod) => mod.default);

const pageData = {
    Home: {
      hero: {
        title: "FOCAL Physics Club – Inspiring the Next Generation of Physicists",
        subtitle: "FOCAL is a student-run physics club at Addis Ababa University dedicated to exploring the mysteries of the universe, promoting collaboration, and inspiring innovation through science."
      },
      values: [
        {
          title: "Curiosity",
          description: "Driven by a passion for discovery, we embrace the unknown and seek to understand the fundamental laws of the universe.",
          icon: 'CuriosityIcon'
        },
        {
          title: "Collaboration",
          description: "We believe that the best ideas are born from shared knowledge and teamwork. We work together to achieve greatness.",
          icon: 'CollaborationIcon'
        },
        {
          title: "Innovation",
          description: "We are dedicated to turning theoretical ideas into groundbreaking, practical solutions that can shape the future.",
          icon: 'InnovationIcon'
        }
      ],
      events: [
        {
          date: "October 25, 2025",
          title: "Quantum Mechanics Seminar",
          description: "Join us for a deep dive into the strange and fascinating world of quantum mechanics with a guest lecture from a leading researcher."
        },
        {
          date: "November 10, 2025",
          title: "Astronomy Night",
          description: "Bring your telescopes and curiosity! We'll be observing planets and constellations from the university rooftop."
        },
        {
          date: "December 5, 2025",
          title: "Annual Physics Fair",
          description: "Showcase your own projects and see what other members have been working on. Prizes for the most innovative projects!"
        }
      ]
    },
    About: {
      sections: [
        {
          title: "Our History",
          text: "FOCAL which stands for 'Foundation on Collaborative Advanced Learning' was founded in 2024 by passionate physics students at Addis Ababa University. It began as a small group exchanging ideas and has grown into a vibrant community of aspiring physicists and innovators. Today, FOCAL is a space for connection, learning, and inspiring the next generation through events, seminars, and collaborative projects."
        },
        {
          title: "Mission & Vision",
          mission: "To nurture curiosity, foster innovation, and empower students to explore the frontiers of physics.",
          vision: "To become a leading hub for scientific growth and collaboration in Ethiopia and beyond."
        },
        {
          title: "Our Goals",
          list: [
            "Encourage research and hands-on learning.",
            "Build strong connections among physics enthusiasts.",
            "Organize seminars, outreach programs, and science fairs."
          ]
        }
      ],
      faq: [
        {
          question: "How do I become a member?",
          answer: "Membership is open to all students at Addis Ababa University. Simply join our Telegram group or send us an email to get started."
        },
        {
          question: "Is there a membership fee?",
          answer: "No, FOCAL is free to join. We believe in providing equal opportunity for all students to engage with physics and science."
        },
        {
          question: "How often do you meet?",
          answer: "We typically hold meetings and events bi-weekly, with additional special events for seminars or projects. Check our events page for the latest schedule."
        },
        {
          question: "Do I need a physics background to join?",
          answer: "Not at all! FOCAL is for anyone with a passion for science, regardless of their major or background. We welcome all curious minds."
        },
      ]
    },
    Accomplishments: {
      items: [
        {
          image: "https://placehold.co/800x450/1E293B/38BDF8?text=National+Competition",
          title: "National Physics Competition 2024",
          description: "Our members achieved top positions at the National Physics Olympiad, proudly representing Addis Ababa University."
        },
        {
          image: "https://placehold.co/800x450/1E293B/38BDF8?text=Community+Outreach",
          title: "Community Outreach Program",
          description: "Organized free tutoring sessions for high school students to promote STEM education awareness."
        },
        {
          image: "https://placehold.co/800x450/1E293B/38BDF8?text=Science+Fair",
          title: "Annual Science Fair",
          description: "Hosted a university-wide science fair showcasing innovative student projects."
        },
        {
          image: "https://placehold.co/800x450/1E293B/38BDF8?text=Guest+Lecture",
          title: "Guest Lecture Series",
          description: "Invited prominent physicists to inspire students through engaging lectures and discussions."
        }
      ],
      galleryImages:galleryImages || [
        "https://placehold.co/1000x800/22C55E/F8FAFC?text=Gallery+Image+1",
        "https://placehold.co/1000x800/1D4ED8/F8FAFC?text=Gallery+Image+2",
        "https://placehold.co/1000x800/F97316/F8FAFC?text=Gallery+Image+3",
        "https://placehold.co/1000x800/EAB308/F8FAFC?text=Gallery+Image+4",
        "https://placehold.co/1000x800/8B5CF6/F8FAFC?text=Gallery+Image+5",
        "https://placehold.co/1000x800/EC4899/F8FAFC?text=Gallery+Image+6",
      ]
    },
    Team: {
      members: [
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Robel",
          name: "Robel Abera",
          position: "President",
          bio: "Passionate about astrophysics and leading our club to new heights.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        },
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Henok",
          name: "Henok Zena",
          position: "Vice President",
          bio:" Passionate about quantum mechanics and inovation providing strategic direction for our club.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        },
        
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Natan ",
          name: "Natan Mezgebe",
          position: "Activities Manager",
          bio: "Enthusiastic about organizing events that inspire and educate.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        },
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Yeabsera ",
          name: "Yeabsera Tariku ",
          position: "Secretary",
          bio: "Committed to keeping our club organized and on track.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        },
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Kumsa",
          name: "Kumsa Damessie",
          position: "Social Media Manager",
          bio: "Loves sharing our club's journey with the world.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        },
        {
          image: "https://placehold.co/150x150/0F172A/CBD5E1?text=Hunde",
          name: "Hunde Tefera",
          position: "Graphic Designer",
          bio: "Creative mind behind our club's visual identity.",
          social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
          }
        }
      ]
    },
    JoinUs: {
      title: "Join the FOCAL Physics Club",
      subtitle: "Ready to explore the universe with us? Become a member and get access to exclusive events, workshops, and a community of passionate minds.",
      cta: "Join Our Telegram Group"
    },
    Contact: {
      info: {
        email: "focalphysicsclub@gmail.com",
        phone: "+251 900 000 000",
        location: "Addis Ababa University, Ethiopia"
      }
    }
  };

  


  export{
    pageData,
    focalLogo
  }