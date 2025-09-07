import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ChevronRight, Sparkles } from 'lucide-react';

export function SkincareQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your primary skin concern?",
      options: [
        "Dryness & dehydration",
        "Aging & fine lines", 
        "Acne & blemishes",
        "Sensitivity & redness"
      ]
    },
    {
      question: "What's your skin type?",
      options: [
        "Dry",
        "Oily",
        "Combination",
        "Sensitive"
      ]
    },
    {
      question: "What's your current skincare routine?",
      options: [
        "Basic (cleanser & moisturizer)",
        "Intermediate (3-4 products)",
        "Advanced (5+ products)",
        "I'm just starting out"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getRecommendation = () => {
    // Simple logic based on first answer
    const concern = answers[0];
    if (concern?.includes('Dryness')) {
      return {
        product: "Hydrating Rose Cream",
        description: "Rich in hyaluronic acid and rose extract for deep hydration",
        price: "€45"
      };
    } else if (concern?.includes('Aging')) {
      return {
        product: "Anti-Aging Vitamin C Serum", 
        description: "Powerful antioxidants to reduce fine lines and brighten skin",
        price: "€52"
      };
    } else if (concern?.includes('Acne')) {
      return {
        product: "Purifying Tea Tree Cleanser",
        description: "Gentle yet effective formula to clear and prevent breakouts",
        price: "€28"
      };
    } else {
      return {
        product: "Gentle Chamomile Toner",
        description: "Soothing formula perfect for sensitive and reactive skin",
        price: "€32"
      };
    }
  };

  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-3xl text-rose-900 mb-4">Find Your Perfect Skincare</h2>
            <p className="text-gray-600">
              Answer 3 quick questions and we'll recommend the perfect products for your skin
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg border-0">
            {!showResult ? (
              <div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <div className="flex space-x-1">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`w-8 h-2 rounded-full ${
                            index <= currentQuestion ? 'bg-rose-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl text-rose-900 mb-6">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left border border-rose-200 rounded-xl hover:border-rose-300 hover:bg-rose-25 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">{option}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-500 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-rose-500" />
                  </div>
                  <h3 className="text-2xl text-rose-900 mb-2">Perfect Match Found!</h3>
                  <p className="text-gray-600">Based on your answers, we recommend:</p>
                </div>

                <div className="bg-rose-50 rounded-2xl p-6 mb-6">
                  <h4 className="text-xl text-rose-900 mb-2">{getRecommendation().product}</h4>
                  <p className="text-gray-600 mb-4">{getRecommendation().description}</p>
                  <div className="text-2xl text-rose-600 mb-4">{getRecommendation().price}</div>
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full">
                    Add to Cart
                  </Button>
                </div>

                <Button 
                  variant="outline" 
                  onClick={resetQuiz}
                  className="border-rose-300 text-rose-700 hover:bg-rose-50 px-6 py-2 rounded-full"
                >
                  Take Quiz Again
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}