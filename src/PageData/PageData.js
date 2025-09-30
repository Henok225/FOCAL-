
import focalLogo from "../assets/focal_logo.jpg";
import profileImagePlaceHolder from "../assets/profile-images-placeholder.jpeg";

// importing accomplishment images
import accomplishment1 from "../assets/accomplishments/accomplishment1.jpg";
import accomplishment2 from "../assets/accomplishments/accomplishment2.jpg";
import accomplishment3 from "../assets/accomplishments/accomplishment3.jpg";
import accomplishment4 from "../assets/accomplishments/accomplishment4.jpg";

// Dynamically import all images in the folder
const images = import.meta.glob("../assets/GalleryImages/*.{png,jpg,jpeg,svg}", { eager: true });
const galleryImages = Object.values(images).map((mod) => mod.default);

const teamImages = import.meta.glob("../assets/TeamImages/*.{png,jpg,jpeg,svg}", { eager: true });
const tImages = Object.values(teamImages).map((mod) => mod.default);

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
        },
        // {
        //   title:"Commitment",
        //   description:"Upholding dedication to quality physics education.",
        //   icon:'Target'
        // }
      ],
      
      events: [
        {
          date: "October 25, 2025",
          title: "First general meeting of the semester",
          description: " Join us to kick off the semester with exciting plans, upcoming events, and opportunities to get involved in the FOCAL Physics Club!"
        },
        {
          date: "November 5, 2025",
          title: "Invitation of a distinguished guest, Surprize!",
          description: " We are thrilled to announce that a distinguished guest will be joining us for an exclusive lecture and Q&A session. Stay tuned for more details!"
        },
        {
          date: "November 20, 2025",
          title: "Visit to Etoto Observatory",
          description: "Experience the wonders of the cosmos with a guided tour of the Etoto Observatory. Learn about cutting-edge astronomical research and gaze at the stars through powerful telescopes."
        }
      ]
    },
    About: {
      sections: [
        {
          title: "Our History",
          text: "FOCAL which stands for 'Foundation on Collaborative Advanced Learning' (inspired by the focal point in optics, its name symbolizes how, despite coming from different backgrounds, we converge here to share our collective passion for the decipline.) was founded in 2024 by passionate physics students at Addis Ababa University. It began as a small group exchanging ideas and has grown into a vibrant community of aspiring physicists and innovators. Today, FOCAL is a space for connection, learning, and inspiring the next generation through events, seminars, and collaborative projects."
        },
        {
          title: "Mission & Vision",
          mission: "To nurture curiosity, foster innovation, and empower students to explore the frontiers of physics.",
          vision: [
            {title:"Short-term",
              text:"By 2026 GC be an influential student organization within Addis Ababa University, known for its engaging events and collaborative projects that inspire a passion for physics among students from diverse academic backgrounds."
            },
            {title:"Long-term",
              text:"Aims to be a nationally recognized physics club that actively contributes to the scientific community through research, outreach programs, and partnerships with academic and industry leaders, inspiring future generations of physicists and innovators."
            }
          ]
        },
        {
          title: "Objectives",
          list: [
            "To facilitate the pursuit of physics within the members.",
            "Engaging students in physics-related activities and projects.",
            "Facilitating regular collaboration among students.",
            "To create a networking platform, connecting students with professionals and academics in the field of physics.",
            "To promote awareness about the importance of physics and science in society.",
            "Keeping students motivated and inspired during their academic journey.",
            "Encourage research and hands-on learning.",
            "Build strong connections among physics enthusiasts.",
            "Organize seminars, outreach programs, and science fairs."
          ]
        },
        {
          title: "Activities",
          list: [
            "Student-led discussion on selected physics or related topics.",
            "Debates and presentations on recent scientific discoveries.",
            "Peer tutoring and study groups.",
            "Seminar series-lectures and experience sharing by guest faculty members, department alumni, and industry professionals.",
            "Workshops on experimental techniques, data analysis, and scientific computing.",
            "Outreach programs to local schools to promote interest in physics and science.",
          ]
        }
      ],
      faq: [
        {
          question: "How do I become a member?",
          answer: "Membership is open to all physics students at Addis Ababa University. Simply join our Telegram group or send us an email to get started."
        },
        {
          question: "Is there a membership fee?",
          answer: "Yes, there's membership fee of 50 ETB per semester to cover event costs and materials. However, we offer fee waivers for students facing financial difficulties."
        },
        {
          question: "How often do you meet?",
          answer: "We typically hold meetings and events bi-weekly, with additional special events for seminars or projects. Check our events page for the latest schedule."
        },
        {
          question: "Do I need a physics background to join?",
          answer: "Yes, for now we are only accepting physics students as members. However, we welcome students from other disciplines to attend our public events and seminars."
        },
      ]
    },
    Accomplishments: {
      items: [
        {
          image: accomplishment1 || "https://placehold.co/800x450/1E293B/38BDF8?text=Student+Led+Presentation",
          title: "Student Led Presentation",
          description: "Held student-led presentations on recent physics discoveries, fostering peer learning and engagement."
        },
        {
          image:accomplishment2 || "https://placehold.co/800x450/1E293B/38BDF8?text=Guest+Invitation",
          title: "Guest Invitation",
          description: "An astrophoysicist, Kibret Atsbatsha, from the Ethiopian Space Science Society was invited to give a talk on astrophotography and his experience in the field."
        },
        {
          image:accomplishment3 || "https://placehold.co/800x450/1E293B/38BDF8?text=Community+Outreach",
          title: "Community Outreach Program",
          description: "Hosted career awareness in STEM for 35+ high school students from all over Addis Ababa, inspiring the next generation of scientists."
        },
        
        {
          image:accomplishment4 || "https://placehold.co/800x450/1E293B/38BDF8?text=Networking+Event",
          title: "Networking Event",
          description: "Made a valuable connection with Ethiopian Academy of Science and Ethiopian Professionals in STEM in North America (EPSNA) for future collaborations and mentorship opportunities."
        }
      ],
      galleryImages:galleryImages || [
        "https://placehold.co/1000x800/22C55E/F8FAFC?text=Gallery+Image+1",
        "https://placehold.co/1000x800/1D4ED8/F8FAFC?text=Gallery+Image+2",
        "https://placehold.co/1000x800/F97316/F8FAFC?text=Gallery+Image+3",
        ]
    },
    Team: {
      members: [
        {
          image: tImages[0] || profileImagePlaceHolder,
          name: "Robel Abera",
          position: "President",
          bio: "Passionate about astrophysics and leading our club to new heights.",
          social: {
            linkedin: "#",
            twitter: "#",
            telegram:"#",
            github: "#"
          }
        },
        {
          image: tImages[1] || profileImagePlaceHolder,
          name: "Henok Zena",
          position: "Vice President",
          bio:" Passionate about quantum mechanics and inovation providing strategic direction for our club.",
          social: {
            linkedin: "#",
            twitter: "#",
            telegram:"#",
            github: "#"
          }
        },
        
        {
          image: profileImagePlaceHolder,
          name: "Natan Mezgebe",
          position: "Activities Manager",
          bio: "Enthusiastic about organizing events that inspire and educate.",
          social: {
            linkedin: "#",
            twitter: "#",
            telegram:"#",
            github: "#"
          }
        },
        {
          image: profileImagePlaceHolder,
          name: "Yeabsera Tariku ",
          position: "Secretary",
          bio: "Committed to keeping our club organized and on track.",
          social: {
            linkedin: "#",
            twitter: "#",
            telegram:"#",
            github: "#"
          }
        },
        {
          image: profileImagePlaceHolder,
          name: "Kumsa Damessie",
          position: "Social Media Manager",
          bio: "Loves sharing our club's journey with the world.",
          social: {
            linkedin: "#",
            twitter: "#", 
            telegram:"#",
            github: "#"
          }
        },
        {
          image: profileImagePlaceHolder,
          name: "Hunde Tefera",
          position: "Graphic Designer",
          bio: "Creative mind behind our club's visual identity.",
          social: {
            linkedin: "#",
            twitter: "#",
            telegram:"#",
            github: "#"
          }
        }
      ]
    },
    JoinUs: {
      title: "Join the FOCAL Physics Club",
      subtitle: "Ready to explore the universe with us? Become a member and get access to exclusive events, workshops, and a community of passionate minds.",
      cta: "Join Our Telegram Channel",
      link: "https://t.me/focalphysicsclub"
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