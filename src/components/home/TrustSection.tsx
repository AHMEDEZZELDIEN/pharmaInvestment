import { Shield, Award, Microscope, Users } from 'lucide-react';

export function TrustSection() {
  const trustPoints = [
    {
      icon: Shield,
      title: "FDA Approved",
      description: "All products meet rigorous FDA safety and efficacy standards"
    },
    {
      icon: Microscope,
      title: "Clinical Tested",
      description: "Extensive clinical trials prove effectiveness and safety"
    },
    {
      icon: Award,
      title: "Pharmaceutical Grade",
      description: "Highest quality ingredients and manufacturing standards"
    },
    {
      icon: Users,
      title: "Dermatologist Recommended",
      description: "Trusted by healthcare professionals worldwide"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-green-800 mb-4">Scientific Excellence & Trust</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every product undergoes rigorous testing and clinical validation to ensure safety, efficacy, and results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                <point.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-green-800 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              FDA Registered
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-green-600" />
              </div>
              ISO 9001:2015
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Microscope className="w-4 h-4 text-green-600" />
              </div>
              GMP Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}