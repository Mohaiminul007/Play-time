// import LogoReview from "@/components/LogoReview";
import { LogoReview } from "@/components/LogoReview";
import { LogoSliderTwo } from "@/components/LogoSliderTwo";
import Review from "@/components/Review";
import ToolsLogo from "@/components/ToolsLogo";
import React from "react";
import { FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 text-center">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
  </footer>
);

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: readonly PricingPlan[] = [
  {
    title: "Basic Animation",
    subtitle: "For Startup Business",
    price: "$300",
    duration: "5-12 Seconds Running Time",
    features: [
      "Provided CAD Model",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "Standard Animation",
    subtitle: "For e-Commerce Business",
    price: "$600",
    duration: "12-20 Seconds Running Time",
    features: [
      "Basic 3D Modeling",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "World-Class Animation",
    subtitle: "For Commercial Business",
    price: "$2000",
    duration: "20-30 Seconds Running Time",
    features: [
      "Hard 3D Modeling",
      "Photorealistic Texture",
      "Water And Smoke Simulation",
      "Particles Simulation",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
    isPopular: true,
  },
  {
    title: "Best-Class Animation",
    subtitle: "High-End Commercial Business",
    price: "$5000",
    duration: "30-120 Seconds Running Time",
    features: [
      "Hard 3D Modeling",
      "Photorealistic Texture",
      "Water And Smoke Simulation",
      "Particles Simulation",
      "Cinematics view",
      "VFX Integration",
      "Photorealistic Animation",
      "4k Animation",
    ],
  },
];

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* Header placeholder */}
      <div className="bg-white h-16"></div>

      {/* Services Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-center mb-4 text-4xl font-semibold">
            Our Services
          </h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Especially favourable compliment but thoroughly unreserved saw she
            themselves.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4 text-pink-600">
                <FaUsers />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3D Modeling & Texturing
              </h3>
              <p className="text-gray-600 text-sm">
                Transform your product into precise 3D models. Ready for
                animation, games, product showcases, AR and VR
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4 text-blue-600">
                <FaShieldAlt />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Product Animation
              </h3>
              <p className="text-gray-600 text-sm">
                We animate your product, highlighting its key features and
                function in a visually engaging, dynamic and cinematic
                presentation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4 text-pink-600">
                <FaChartLine />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Dynamic Simulation
              </h3>
              <p className="text-gray-600 text-sm">
                Bring your product to life with realistic water, smoke, fire,
                and particle effects — elevate your visuals with high-end
                dynamic simulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-5 text-4xl font-semibold text-gray-900">
            Teck We Use
          </h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Hosting is on your preferences or we will decide whick one to use if you don&apos;t have a preferences
          </p>

          <ToolsLogo/>


      </div>
      <LogoReview/>
      <div>
        <h2 className="text-center mt-5 text-4xl font-semibold text-gray-900">
            Company We work With
          </h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ducimus!
          </p>

      <LogoSliderTwo/>
      </div>

      <Review/>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4 text-4xl font-semibold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect animation package for your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl flex flex-col ${
                  plan.isPopular ? "ring-2 ring-red-500" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-0 -right-0 bg-red-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                    BEST SELLER
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>

                  {/* Duration */}
                  <p className="text-gray-600 text-sm font-medium">
                    {plan.duration}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <button className="w-full cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 mt-auto">
                  Buy Now
                </button>

                {/* Guarantee */}
                <p className="text-center text-gray-400 text-xs mt-3">
                  100% Satisfied Guarantee
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A quick discussion helps us fully understand your goals, timeline, and
            expectations — ensuring you get the best possible results,
            tailored to your needs.
          </p>
          <button className="cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;