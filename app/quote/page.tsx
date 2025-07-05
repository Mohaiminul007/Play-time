// import Navbar from "@/components/Navbar";
import React from "react";
import { FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

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
    title: 'Basic Animation',
    subtitle: 'For Startup Business',
    price: '$300',
    duration: '5-12 Seconds Running Time',
    features: [
      'Provided CAD Model',
      'Photorealistic Texture',
      'Cinematics view',
      'Photorealistic Animation',
      'Full HD animation'
    ]
  },
  {
    title: 'Standard Animation',
    subtitle: 'For e-Commerce Business',
    price: '$600',
    duration: '12-20 Seconds Running Time',
    features: [
      'Basic 3D Modeling',
      'Photorealistic Texture',
      'Cinematics view',
      'Photorealistic Animation',
      'Full HD animation'
    ]
  },
  {
    title: 'World-Class Animation',
    subtitle: 'For Commercial Business',
    price: '$2000',
    duration: '20-30 Seconds Running Time',
    features: [
      'Hard 3D Modeling',
      'Photorealistic Texture',
      'Water And Smoke Simulation',
      'Particles Simulation',
      'Cinematics view',
      'Photorealistic Animation',
      'Full HD animation'
    ],
    isPopular: true
  },
  {
    title: 'Best-Class Animation',
    subtitle: 'High-End Commercial Business',
    price: '$5000',
    duration: '30-120 Seconds Running Time',
    features: [
      'Hard 3D Modeling',
      'Photorealistic Texture',
      'Water And Smoke Simulation',
      'Particles Simulation',
      'Cinematics view',
      'VFX Integration',
      'Photorealistic Animation',
      '4k Animation'
    ]
  }
];

const page = () => {
  return (
    <div>
      <div className="bg-white mb-24">
        {/* <Navbar /> */}
      </div>
      
      {/* Services Section */}
      <div className="bg-[#ededed]">
        <h2 className="text-center mb-10 pt-8 text-4xl font-semibold">
          Our Services
        </h2>
        <p className="text-center mb-20 text-sm text-gray-600">
          Especially favourable compliment but thoroughly unreserved saw she
          themselves.
        </p>
        <section className="py-10 px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl xl:max-w-7xl w-full">
            {/* Card 1 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
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
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
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
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
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
        </section>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-10 text-4xl font-semibold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="text-center mb-16 text-sm text-gray-600">
            Choose the perfect animation package for your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl h-auto ${
                  plan.isPopular ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-0 -right-0 bg-red-500 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                    BEST SELLER
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="quoteTitle mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {plan.subtitle}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  
                  {/* Duration */}
                  <p className="text-gray-600 text-sm font-medium">
                    {plan.duration}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
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
                <button className="w-full cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Buy Now
                </button>

                {/* Guarantee */}
                <p className="text-center text-gray-400 text-xs mt-4">
                  100% Satisfied Guarantee
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] p-7 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-center mb-5 ">Lest Talk About Your Project</h2>
        <p className="text-center text-gray-600">A quick discussion helps us fully understand your goals, timeline, and expectations <br /> — ensuring you get the best possible results, tailored to your needs.</p>
        <button className=" mt-5 cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                 Contact Us
                </button>
      </div>
    </div>
  );
};

export default page;