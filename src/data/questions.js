const questions = [
  {
    title: "The Team Challenge",
    sceneDescription: "A clearing in the forest where various animals are gathered around a large fallen tree.",
    dialogText: "Your first challenge awaits! The animals of the forest need to build a bridge across the river before the rainy season. When faced with this complex group project, you are most likely to...",
    answers: [
      {
        text: "Take charge, set the direction, and delegate tasks clearly.",
        points: { Lion: 2, Eagle: 1 }
      },
      {
        text: "Focus on ensuring the team works together harmoniously and everyone feels included.",
        points: { Dolphin: 2, Deer: 1, Bear: 1 }
      },
      {
        text: "Dive into the details, ensuring accuracy and a well-structured plan.",
        points: { Beaver: 2, Owl: 1 }
      },
      {
        text: "Look for innovative angles or more efficient ways to approach the task.",
        points: { Fox: 2, Owl: 1 }
      },
      {
        text: "Observe quietly at first, offering thoughtful insights once you understand the dynamics.",
        points: { Owl: 2, Turtle: 1, Cat: 1 }
      }
    ]
  },
  {
    title: "The Weekend Sanctuary",
    sceneDescription: "The path divides into several trails, each leading to different environments.",
    dialogText: "After helping with the bridge, you've earned some free time. The forest offers many ways to spend your days of leisure. Your ideal weekend in the animal kingdom would involve...",
    answers: [
      {
        text: "Adventurous exploration, perhaps hiking somewhere new or traveling.",
        points: { Wolf: 2, Eagle: 1, Fox: 1 }
      },
      {
        text: "A large, lively social gathering with friends and fun activities.",
        points: { Otter: 2, Dolphin: 1 }
      },
      {
        text: "Quiet time at home or in nature, perhaps reading or pursuing a solitary hobby.",
        points: { Cat: 2, Owl: 1, Turtle: 1 }
      },
      {
        text: "Working diligently on a personal project or organizing your space.",
        points: { Beaver: 2, Bear: 1 }
      },
      {
        text: "Relaxing comfortably with close family or a few cherished friends.",
        points: { Deer: 2, Wolf: 1, Bear: 1 }
      }
    ]
  },
  {
    title: "The Wounded Butterfly",
    sceneDescription: "You encounter a butterfly with a damaged wing resting on a flower.",
    dialogText: "On your path, you notice a butterfly struggling with a damaged wing. When someone you care about is in distress like this, your first instinct is to...",
    answers: [
      {
        text: "Offer strong, protective support and practical solutions.",
        points: { Bear: 2, Lion: 1, Wolf: 1 }
      },
      {
        text: "Listen patiently and offer gentle, empathetic comfort.",
        points: { Deer: 2, Dolphin: 1, Turtle: 1 }
      },
      {
        text: "Try to lighten the mood with playfulness and optimism.",
        points: { Otter: 2, Dolphin: 1 }
      },
      {
        text: "Give them space but let them know you're there if needed.",
        points: { Cat: 2, Fox: 1 }
      },
      {
        text: "Analyze the situation logically to understand the root cause.",
        points: { Owl: 1, Fox: 1, Beaver: 1 }
      }
    ]
  },
  {
    title: "The Ancient Tree of Knowledge",
    sceneDescription: "A massive tree with glowing symbols carved into its bark.",
    dialogText: "You've reached the Ancient Tree of Knowledge. Its wisdom is vast, but each animal learns from it differently. You absorb its teachings best by...",
    answers: [
      {
        text: "Hands-on experimentation and trying things yourself.",
        points: { Otter: 2, Fox: 1, Wolf: 1 }
      },
      {
        text: "Observing carefully and analyzing information deeply.",
        points: { Owl: 2, Eagle: 1, Cat: 1 }
      },
      {
        text: "Collaborating and discussing ideas with others.",
        points: { Dolphin: 2, Deer: 1 }
      },
      {
        text: "Following clear, structured instructions and established methods.",
        points: { Beaver: 2, Turtle: 1 }
      },
      {
        text: "Trusting your intuition and gut feelings.",
        points: { Wolf: 2, Cat: 1, Deer: 1 }
      }
    ]
  },
  {
    title: "The Boundary Crossing",
    sceneDescription: "A beautiful meadow with a sign stating \"No Entry - Sacred Grounds\"",
    dialogText: "You come across a sign marking forbidden territory, though the path beyond looks peaceful and inviting. Which statement best describes how you view these boundaries...",
    answers: [
      {
        text: "Rules provide necessary structure and should generally be followed.",
        points: { Beaver: 2, Turtle: 1, Bear: 1 }
      },
      {
        text: "Rules are guidelines, but sometimes you need to bend them to get things done.",
        points: { Fox: 2, Cat: 1 }
      },
      {
        text: "I prefer freedom and autonomy over rigid rules.",
        points: { Eagle: 2, Wolf: 1, Lion: 1 }
      },
      {
        text: "I focus more on ensuring fairness and harmony than strict adherence to rules.",
        points: { Dolphin: 2, Deer: 1 }
      },
      {
        text: "I question rules to understand their purpose and logic.",
        points: { Owl: 2, Lion: 1 }
      }
    ]
  },
  {
    title: "The Council Debate",
    sceneDescription: "Animals gathered in a circle, clearly in the midst of a heated discussion",
    dialogText: "You stumble upon the Animal Council in fierce debate about water rights during the dry season. When participating in such disagreements, you tend to...",
    answers: [
      {
        text: "Argue assertively for your position, aiming to win.",
        points: { Lion: 2, Eagle: 1 }
      },
      {
        text: "Seek common ground and try to mediate a peaceful resolution.",
        points: { Dolphin: 2, Deer: 1, Bear: 1 }
      },
      {
        text: "Use logic and clever arguments to make your case.",
        points: { Fox: 2, Owl: 1 }
      },
      {
        text: "Avoid direct confrontation if possible, preferring harmony.",
        points: { Turtle: 2, Deer: 1, Cat: 1 }
      },
      {
        text: "State your perspective clearly but remain open to changing your mind with new information.",
        points: { Owl: 2, Wolf: 1 }
      }
    ]
  },
  {
    title: "The Heart's Calling",
    sceneDescription: "A misty area where glowing symbols representing different values float in the air",
    dialogText: "The Mist of Motivation surrounds you. Here, the deepest desires of all creatures become visible. Looking into your heart, what drives you most powerfully is...",
    answers: [
      {
        text: "Achieving ambitious goals and being recognized for success.",
        points: { Lion: 2, Eagle: 1 }
      },
      {
        text: "Building strong relationships and fostering community.",
        points: { Dolphin: 2, Deer: 1, Bear: 1 }
      },
      {
        text: "Understanding the world deeply and uncovering hidden truths.",
        points: { Owl: 2, Fox: 1 }
      },
      {
        text: "Creating something tangible, useful, or beautiful.",
        points: { Beaver: 2, Bear: 1 }
      },
      {
        text: "Experiencing freedom, adventure, and personal growth.",
        points: { Wolf: 2, Otter: 1, Eagle: 1 }
      }
    ]
  },
  {
    title: "The Shifting Path",
    sceneDescription: "The trail before you suddenly transforms, changing its direction and appearance",
    dialogText: "The path beneath your feet begins to shift and transform! The Animal Kingdom is ever-changing. When faced with such unexpected changes, you typically...",
    answers: [
      {
        text: "Embrace it as an opportunity for growth and transformation.",
        points: { Wolf: 2, Fox: 1, Eagle: 1 }
      },
      {
        text: "Adapt readily, finding ways to make the new situation work.",
        points: { Dolphin: 2, Otter: 1, Fox: 1 }
      },
      {
        text: "Prefer stability but can adapt patiently if necessary.",
        points: { Turtle: 2, Bear: 1, Beaver: 1 }
      },
      {
        text: "Analyze the change carefully before deciding how to react.",
        points: { Owl: 2, Cat: 1 }
      },
      {
        text: "Might resist initially if it disrupts your plans or comfort.",
        points: { Beaver: 2, Cat: 1 }
      }
    ]
  },
  {
    title: "The Den Discovery",
    sceneDescription: "You come across several different animal homes/dens",
    dialogText: "You need rest and discover various shelters in the forest. Each reflects a different approach to creating a space. Your ideal den would be...",
    answers: [
      {
        text: "Highly organized, structured, and efficient.",
        points: { Beaver: 2, Owl: 1 }
      },
      {
        text: "Minimalist and functional, focused on the task at hand.",
        points: { Eagle: 2, Lion: 1 }
      },
      {
        text: "Comfortable, cozy, and filled with personal touches.",
        points: { Deer: 2, Bear: 1, Dolphin: 1 }
      },
      {
        text: "Visually stimulating, perhaps a bit messy but full of interesting things.",
        points: { Otter: 2, Fox: 1 }
      },
      {
        text: "Private and reflective, a space for deep thought.",
        points: { Owl: 2, Cat: 1, Turtle: 1 }
      }
    ]
  },
  {
    title: "The Crossroads",
    sceneDescription: "You reach a fork in the path with four distinct directions",
    dialogText: "You've reached the Crossroads of Choice, where many animals have stood before, contemplating their direction. When making an important decision like this, you rely most on...",
    answers: [
      {
        text: "Logic, facts, and careful analysis.",
        points: { Owl: 2, Beaver: 1, Fox: 1 }
      },
      {
        text: "Your intuition and gut feelings.",
        points: { Wolf: 2, Cat: 1, Eagle: 1 }
      },
      {
        text: "Seeking advice and consensus from trusted friends or family.",
        points: { Dolphin: 2, Deer: 1 }
      },
      {
        text: "Your own judgment and confidence in your ability to lead.",
        points: { Lion: 2, Eagle: 1 }
      },
      {
        text: "Past experience and what has proven reliable before.",
        points: { Turtle: 2, Bear: 1 }
      }
    ]
  },
  {
    title: "The Magical Glade",
    sceneDescription: "A sunlit clearing where various activities are taking place",
    dialogText: "The path opens to a magical glade where animals engage in different activities. Your eyes are immediately drawn to...",
    answers: [
      {
        text: "Weaving a complex tapestry or designing something intricate.",
        points: { Beaver: 2, Owl: 1 }
      },
      {
        text: "Healing or helping others through difficult times.",
        points: { Bear: 2, Deer: 1, Dolphin: 1 }
      },
      {
        text: "Soaring high above, observing the world from a distance.",
        points: { Eagle: 2, Owl: 1 }
      },
      {
        text: "Playing joyfully in the water or exploring a riverbank.",
        points: { Otter: 2, Dolphin: 1 }
      },
      {
        text: "Navigating a challenging social situation with diplomacy.",
        points: { Fox: 2, Dolphin: 1 }
      }
    ]
  },
  {
    title: "The Spirit Rapids",
    sceneDescription: "A powerful, rushing river with different crossing points",
    dialogText: "The Spirit Rapids lie before you - powerful waters that reveal one's true nature. You feel your spirit soaring most fully when...",
    answers: [
      {
        text: "You are transforming or undergoing significant personal growth.",
        points: { Wolf: 2, Eagle: 1 }
      },
      {
        text: "You are freely expressing your unique spirit and independence.",
        points: { Cat: 2, Fox: 1, Eagle: 1 }
      },
      {
        text: "You are deeply connected and loyal to your 'pack' or community.",
        points: { Wolf: 2, Dolphin: 1, Bear: 1 }
      },
      {
        text: "You are using your intelligence to solve a complex puzzle or mystery.",
        points: { Owl: 2, Fox: 1 }
      },
      {
        text: "You are protecting or nurturing those you care about.",
        points: { Bear: 2, Lion: 1, Deer: 1 }
      }
    ]
  },
  {
    title: "The Mirror Pool",
    sceneDescription: "A still pool that shows reflections",
    dialogText: "You come across the Mirror Pool, whose waters reveal how others perceive you. Looking into its depths, you see that most creatures would describe you as...",
    answers: [
      {
        text: "Gentle and sensitive, but also vigilant.",
        points: { Deer: 2, Turtle: 1 }
      },
      {
        text: "Patient, wise, and incredibly resilient.",
        points: { Turtle: 2, Bear: 1, Owl: 1 }
      },
      {
        text: "Independent, mysterious, and intuitive.",
        points: { Cat: 2, Fox: 1 }
      },
      {
        text: "Diligent, persistent, and a master builder.",
        points: { Beaver: 2, Bear: 1 }
      },
      {
        text: "Visionary, focused, and spiritually connected.",
        points: { Eagle: 2, Owl: 1 }
      }
    ]
  },
  {
    title: "The Mountain View",
    sceneDescription: "From a high vantage point, you can see a distant mountain peak",
    dialogText: "From this height, you can see your destination - a far-off mountain peak. Contemplating the long journey ahead, your typical approach would be...",
    answers: [
      {
        text: "Strategic and cunning, always looking for the best angle.",
        points: { Fox: 2, Owl: 1 }
      },
      {
        text: "Steady and persistent, building step-by-step towards the objective.",
        points: { Beaver: 2, Turtle: 1, Bear: 1 }
      },
      {
        text: "Driven and ambitious, aiming high and moving quickly.",
        points: { Lion: 2, Eagle: 1 }
      },
      {
        text: "Flexible and adaptable, willing to change course as needed.",
        points: { Dolphin: 2, Otter: 1, Fox: 1 }
      },
      {
        text: "Guided by instinct and a sense of inner purpose.",
        points: { Wolf: 2, Cat: 1 }
      }
    ]
  },
  {
    title: "The Sacred Circle",
    sceneDescription: "A mystical stone circle with different symbols glowing around it",
    dialogText: "At last, you've reached the Sacred Circle, where animal spirits have gathered for centuries to share their magic. As you step into the center, you're drawn to the magic of...",
    answers: [
      {
        text: "Transformation and rebirth.",
        points: { Wolf: 2, Eagle: 1 }
      },
      {
        text: "Deep wisdom and seeing hidden truths.",
        points: { Owl: 2, Fox: 1 }
      },
      {
        text: "Creation and weaving connections.",
        points: { Beaver: 2, Dolphin: 1 }
      },
      {
        text: "Freedom and untamed spirit.",
        points: { Eagle: 2, Wolf: 1, Cat: 1 }
      },
      {
        text: "Community and harmonious living.",
        points: { Dolphin: 2, Deer: 1, Bear: 1 }
      }
    ]
  }
];

export default questions;