import { useState } from "react";
import { Button } from "@/components/ui/button";

const villacards = [
  {
    id: 1,
    title: "Pulsos Arteriales",
    category: "Cardiología",
    content: [
      { text: "Pulso Parvus et Tardus", blank: false },
      { text: "Estenosis Aórtica", blank: true },
      { text: "Pulso Filiforme", blank: false },
      { text: "Shock", blank: true },
    ],
  },
];

export default function VillacardsVisor() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setAnswers({});
  };

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Villacards Visor</h1>
      <div className="flex space-x-4">
        {villacards.map((card) => (
          <Button key={card.id} onClick={() => handleSelectCard(card)}>
            {card.title}
          </Button>
        ))}
      </div>
      {selectedCard && (
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">{selectedCard.title}</h2>
          <p className="text-gray-500">{selectedCard.category}</p>
          <div className="mt-4 space-y-2">
            {selectedCard.content.map((item, index) => (
              <div key={index} className="flex space-x-2">
                {item.blank ? (
                  <input
                    type="text"
                    value={answers[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="border p-1 rounded"
                  />
                ) : (
                  <span className="font-semibold">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}