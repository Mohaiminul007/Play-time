import Navbar from "@/components/Navbar";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF,  FaGithub,  FaLinkedinIn } from "react-icons/fa";

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks?: SocialLinks;
}

const teamMembers: readonly TeamMember[] = [
  {
    name: "Ar. Atik Ishrak Chowdhury",
    role: "Founder, CEO, Nouveau Visuals",
    description: "Architect, Photographer based in BD.",
    image: "https://placehold.co/200x200?text=Atik",
    socialLinks: {
      facebook: "https://facebook.com/atik.ishrak",
      twitter: "https://twitter.com/atik_ishrak",
      linkedin: "https://linkedin.com/in/atik-ishrak-chowdhury"
    }
  },
  {
    name: "Ar. Yeasfi Araf",
    role: "Architect",
    description: "",
    image: "https://placehold.co/200x200?text=Yeasfi",
    // socialLinks: {
    //   facebook: "https://facebook.com/yeasfi.araf",
    //   linkedin: "https://linkedin.com/in/yeasfi-araf"
    // }
  },
  {
    name: "Ar. Nur Hossain Nayan",
    role: "Architect",
    description: "",
    image: "https://placehold.co/200x200?text=Nayan",
    socialLinks: {
      facebook: "https://facebook.com/nur.hossain.nayan",
      twitter: "https://twitter.com/nur_nayan",
      linkedin: "https://linkedin.com/in/nur-hossain-nayan"
    }
  },
  {
    name: "Mi Bijoy",
    role: "Founder, CEO, Nouveau GenTech",
    description: "",
    image: "https://placehold.co/200x200?text=Bijoy",
    socialLinks: {
      facebook: "https://facebook.com/mi.bijoy",
      twitter: "https://twitter.com/mi_bijoy",
      linkedin: "https://linkedin.com/in/mi-bijoy",
      github: "https://github.com/mi_bijoy",
    }
  },
  {
    name: "Mohaiminul Islam",
    role: "Frontend Dev, Nouveau GenTech",
    description: "Gamer, enjoys movie nights with friends.",
    image: "https://placehold.co/200x200?text=Mohaiminul",
    socialLinks: {
      facebook: "https://facebook.com/mohaiminul.islam",
      twitter: "https://twitter.com/mohaiminul_dev",
      linkedin: "https://linkedin.com/in/mohaiminul-islam",
      github: "https://github.com/mi_bijoy",
    }
  },
  
];

// Footer component placeholder
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p>&copy; 2025 Nouveau. All rights reserved.</p>
    </div>
  </footer>
);

export default function AboutUsPage() {
  return (
    <div className="bg-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            Based in Bangladesh, Working worldwide, here is the team…
          </p>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team Members</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get to know the people behind our success. Each member brings unique skills and passion to the table.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-48">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                  <div className="flex space-x-3 text-gray-500 mt-4">
                    {member.socialLinks?.facebook && (
                      <a 
                        href={member.socialLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        <FaFacebookF size={16} />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        <BsTwitterX  size={16} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        <FaGithub  size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}