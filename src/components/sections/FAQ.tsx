
import React, { useState, useEffect } from 'react';
import { Scan, Palette, Box, Star, Scale, Award, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is the 3D body scanning?",
      answer: "Our AI technology ensures 99% accuracy for the perfect fit."
    },
    {
      question: "What is the delivery time?",
      answer: "We deliver custom clothing within 2 weeks."
    },
    {
      question: "What is your return policy?",
      answer: "We offer free alterations or remakes for any fitting issues."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Got Questions? We've Got Answers</h2>
          <p className="text-xl text-gray-600">Find answers to commonly asked questions</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
