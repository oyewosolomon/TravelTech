import React, { useState } from 'react';
import { Check, Info, HelpCircle } from 'lucide-react';

// Define types for the pricing tiers
interface PricingTier {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  asset_limit: string;
  highlight: boolean;
  cta: string;
}

// Define props for the FeatureTooltip component
interface FeatureTooltipProps {
  text: string;
}

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');
  
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: {
        monthly: 15,
        annually: 12,
      },
      description: "Perfect for new investors building their first portfolio",
      features: [
        "Portfolio automation",
        "Access to 10 global markets",
        "Basic tax optimization",
        "Mobile app access",
        "24/7 customer support"
      ],
      asset_limit: "$100,000",
      highlight: false,
      cta: "Start Free Trial"
    },
    {
      name: "Growth",
      price: {
        monthly: 49,
        annually: 39,
      },
      description: "Advanced features for the serious investor",
      features: [
        "All Starter features",
        "Access to 30 global markets",
        "Advanced tax harvesting",
        "Retirement planning tools",
        "Smart rebalancing",
        "Customizable dashboards",
        "Priority support"
      ],
      asset_limit: "$500,000",
      highlight: true,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: {
        monthly: 99,
        annually: 79,
      },
      description: "Full-featured platform for high-net-worth individuals",
      features: [
        "All Growth features",
        "Access to all 40 global markets",
        "Premium research tools",
        "Dedicated account manager",
        "White-glove onboarding",
        "Estate planning features",
        "API access",
        "Custom tax strategies"
      ],
      asset_limit: "$2,000,000",
      highlight: false,
      cta: "Contact Sales"
    }
  ];
  
  // FeatureTooltip component
  const FeatureTooltip: React.FC<FeatureTooltipProps> = ({ text }) => (
    <div className="group relative">
      <HelpCircle className="w-4 h-4 text-slate-400 inline-flex ml-1.5 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-slate-800 text-xs text-slate-200 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-950 to-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent, Simple Pricing
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your investment needs with no hidden fees or surprises.
          </p>
        </div>
        
        {/* Billing period toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                billingPeriod === 'annually'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Annual Billing <span className="text-xs text-blue-300">Save 20%</span>
            </button>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 ${
                tier.highlight 
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-800/90 hover:bg-slate-800'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-slate-300 mb-6 h-12">{tier.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">${tier.price[billingPeriod]}</span>
                  <span className="text-slate-300 ml-2">/month</span>
                  {billingPeriod === 'annually' && (
                    <span className="text-blue-200 text-sm ml-2">
                      Billed annually
                    </span>
                  )}
                </div>
                
                <div className="text-sm text-slate-300 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-blue-300" />
                  Assets up to {tier.asset_limit}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 mr-2 mt-0.5 ${tier.highlight ? 'text-blue-200' : 'text-blue-400'}`} />
                      <span className="text-slate-300">{feature}</span>
                      {feature.includes("tax") && (
                        <FeatureTooltip text="Our tax optimization uses advanced algorithms to maximize after-tax returns through strategic loss harvesting and dividend handling." />
                      )}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                    tier.highlight 
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-500 text-white hover:bg-blue-600 mt-auto'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise callout */}
        <div className="mt-16 bg-blue-950/40 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold text-white mb-2">Need a custom enterprise solution?</h3>
              <p className="text-slate-300">
                For institutional clients and assets over $2M, we offer tailored solutions with dedicated support and custom integrations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial quote */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-blue-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v8c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-8h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v8c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-8h-6c0-2.2 1.8-4 4-4V8z" />
          </svg>
          
          <p className="text-xl text-slate-300 italic">
            "AssetPro has paid for itself many times over through tax optimization alone. Their transparent pricing made it an easy decision for our firm."
          </p>
          <div className="mt-4">
            <p className="text-white font-medium">David Wang</p>
            <p className="text-slate-400 text-sm">CFO, Meridian Wealth Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;