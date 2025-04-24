const animalProfiles = {
  Lion: {
    overview: "The Lion represents leadership, confidence, and a natural authority. As a Lion, you're drawn to taking charge and inspiring others with your bold vision and decisive action.",
    keyTraits: ["Confident", "Decisive", "Protective", "Leader"],
    strengths: "Your confidence and natural leadership abilities allow you to take charge in challenging situations. Your protective instincts make others feel safe under your guidance, and your decisiveness helps teams move forward efficiently.",
    challenges: "Your commanding presence might sometimes intimidate others who are more reserved. You may need to practice patience with those who process information or make decisions more slowly than you do.",
    relationships: "You're fiercely loyal to your pride (close circle) and will go to great lengths to protect them. While you may appear tough on the outside, you have a warm heart for those you care about.",
    atWork: "You thrive in leadership positions where you can make important decisions and guide others. You excel when given autonomy and responsibility, and often inspire others with your vision and courage.",
    growthPath: "Learning to balance your natural authority with collaborative approaches will enhance your leadership. Taking time to listen deeply to others' perspectives will strengthen your decision-making skills."
  },
  Wolf: {
    overview: "The Wolf represents a powerful balance between fierce independence and deep loyalty to your pack or community. You embody instinct, intelligence, freedom, and guardianship.",
    keyTraits: ["Intuitive", "Loyal", "Independent", "Strategic"],
    strengths: "You possess strong instincts that rarely lead you astray. Your intelligence allows you to navigate complex situations with grace, while your loyalty makes you a treasured friend and ally. You value authentic self-expression and resist constraints that limit your spirit.",
    challenges: "Your 'lone wolf' tendencies might sometimes distance you from others who don't understand your need for space. Your fierce loyalty can occasionally lead to exclusivity or suspicion of outsiders.",
    relationships: "You form deep, meaningful bonds with your 'pack' and will protect them fiercely. While selective about who enters your inner circle, those who do receive unwavering support and loyalty.",
    atWork: "You thrive in roles that allow autonomy while supporting a team mission you believe in. You prefer authentic leadership over rigid authority and excel in positions that utilize your strategic thinking and protective instincts.",
    growthPath: "Embracing vulnerability within your trusted circle can deepen your connections. Finding balance between your independence and the richness of community will help you thrive."
  },
  Owl: {
    overview: "The Owl represents wisdom, perception, and analytical thought. You have a natural ability to see what others miss and to understand complex systems and ideas deeply.",
    keyTraits: ["Analytical", "Perceptive", "Wise", "Observant"],
    strengths: "Your intellectual depth and perceptiveness allows you to understand complex situations with clarity. You're skilled at seeing multiple perspectives and thinking critically about information before making judgments.",
    challenges: "You might sometimes overthink decisions or get lost in analysis. Balancing your intellectual approach with emotional intelligence and practical action can be an area for growth.",
    relationships: "You value deep, meaningful conversations and intellectual connection in your relationships. While you might seem reserved at first, you're a loyal and insightful friend who offers valuable counsel.",
    atWork: "You excel in roles requiring careful analysis, problem-solving, and strategic thinking. Your ability to see the bigger picture while understanding important details makes you valuable in planning and advisory roles.",
    growthPath: "Integrating your intellectual insights with intuition and emotional awareness will bring greater balance to your decision-making. Sharing your wisdom in accessible ways can increase your positive impact."
  },
  Fox: {
    overview: "The Fox represents cleverness, adaptability, and strategic thinking. You approach life with a blend of intelligence, resourcefulness, and a touch of cunning that helps you navigate complex situations.",
    keyTraits: ["Clever", "Strategic", "Adaptable", "Resourceful"],
    strengths: "Your quick thinking and adaptability help you find creative solutions to challenges. You're exceptionally resourceful, making the most of whatever situation you find yourself in, and your strategic mind helps you plan several steps ahead.",
    challenges: "Others might sometimes misinterpret your strategic nature as manipulative. Finding the balance between clever tactics and transparent communication can be important for building trust.",
    relationships: "You're a fascinating and engaging companion who keeps relationships interesting. While you might be somewhat guarded with personal information at first, you're loyal to those who earn your trust.",
    atWork: "You thrive in dynamic environments where your problem-solving abilities and quick thinking are valued. You excel at finding innovative approaches and spotting opportunities others might miss.",
    growthPath: "Aligning your strategic thinking with authentic values will maximize your positive impact. Being more open with trusted allies can create deeper connections and more powerful collaborations."
  },
  Bear: {
    overview: "The Bear represents protection, inner strength, and grounded wisdom. You embody a powerful blend of fierce protection for loved ones and gentle nurturing energy.",
    keyTraits: ["Protective", "Grounded", "Patient", "Introspective"],
    strengths: "Your steady presence provides comfort and security to those around you. You possess deep inner strength and resilience, facing life's challenges with remarkable patience and determination.",
    challenges: "You might sometimes become too protective or take on too much responsibility for others' wellbeing. Learning to set boundaries and allow others to face their own challenges can be important.",
    relationships: "You're a loyal and dependable presence in the lives of those you care about. Your nurturing nature makes others feel safe and supported, and you create a sense of stability in your relationships.",
    atWork: "You excel in roles where reliability, consistency, and careful work are valued. You're often the stabilizing force on a team, helping to ground projects in practical reality.",
    growthPath: "Balancing your nurturing instincts with self-care will sustain your strength. Expressing your needs more openly will help create more reciprocal relationships."
  },
  Dolphin: {
    overview: "The Dolphin represents harmony, communication, and joyful connection. You have a natural ability to bring people together and create positive social environments.",
    keyTraits: ["Social", "Communicative", "Playful", "Harmonious"],
    strengths: "Your excellent communication skills and emotional intelligence help you navigate social situations with grace. You're naturally collaborative and have a gift for bringing out the best in a group.",
    challenges: "Your desire for harmony might sometimes lead you to avoid necessary conflict. Learning to address difficult issues directly while maintaining your diplomatic approach is an area for growth.",
    relationships: "You're a warm, engaging friend who creates connection wherever you go. Your playful spirit and genuine interest in others makes you someone people naturally gravitate toward.",
    atWork: "You thrive in collaborative environments and excel at team building, mediation, and roles requiring strong communication. You have a talent for translating between different perspectives.",
    growthPath: "Developing comfort with constructive conflict will strengthen your leadership abilities. Honoring your own needs alongside those of the group will help maintain your energy and authenticity."
  },
  Eagle: {
    overview: "The Eagle (or Hawk) represents vision, focus, and spiritual connection. You see the bigger picture from a higher perspective and have a natural ability to rise above immediate concerns to pursue loftier goals.",
    keyTraits: ["Visionary", "Focused", "Independent", "Spiritual"],
    strengths: "Your broad perspective helps you see possibilities others might miss. You have exceptional focus when pursuing goals that matter to you, and you inspire others with your vision and sense of purpose.",
    challenges: "You might sometimes seem disconnected from day-to-day concerns or practical details. Bridging your visionary thinking with practical implementation can be an area for growth.",
    relationships: "You value relationships that support personal growth and shared ideals. While you need significant independence, you form deep bonds with those who understand your vision and spirit.",
    atWork: "You excel in roles that allow you to use your visionary thinking and strategic planning abilities. You're often drawn to innovation, leadership, and work that aligns with your values and larger purpose.",
    growthPath: "Connecting your vision with practical steps and details will help bring your ideas to fruition. Creating space for both soaring heights and grounded connection will bring balance to your life."
  },
  Beaver: {
    overview: "The Beaver represents diligence, organization, and community-mindedness. You approach life with careful planning, attention to detail, and a strong work ethic that helps create stable foundations.",
    keyTraits: ["Diligent", "Organized", "Community-minded", "Structured"],
    strengths: "Your exceptional organizational skills and attention to detail make you excellent at creating systems that work. You're remarkably persistent in the face of challenges and have a natural talent for turning plans into reality.",
    challenges: "You might sometimes focus so much on how things 'should be done' that you miss opportunities for flexibility or innovation. Finding balance between structure and adaptability can be an area for growth.",
    relationships: "You're a reliable, trustworthy presence who follows through on commitments. While you may take time to warm up to new people, you build solid, lasting relationships based on mutual respect and shared values.",
    atWork: "You excel in roles requiring careful planning, attention to detail, and consistent follow-through. Your ability to create and maintain systems makes you valuable in organizational and implementation-focused positions.",
    growthPath: "Embracing occasional spontaneity and being open to unplanned approaches will add new dimensions to your capabilities. Balancing your focus on work with pleasure and play will enhance your wellbeing."
  },
  Cat: {
    overview: "The Cat represents independence, mystery, and intuitive intelligence. You move through life with self-assured grace, following your own internal compass rather than external expectations.",
    keyTraits: ["Independent", "Mysterious", "Intuitive", "Self-sufficient"],
    strengths: "Your strong sense of self and independence allows you to stay true to your nature regardless of social pressure. You have keen intuition and observational skills, often sensing what others miss.",
    challenges: "Your self-sufficiency might sometimes create distance in relationships when others can't read your thoughts or feelings. Finding ways to remain authentic while letting others in can be an area for growth.",
    relationships: "You're selective about your close relationships and value quality over quantity in your connections. While you require significant personal space, you're deeply loyal to those you choose to let into your inner world.",
    atWork: "You thrive in roles that allow for autonomy and independent thinking. You often excel when given space to approach problems in your own way, free from micromanagement or excessive structure.",
    growthPath: "Finding the balance between self-sufficiency and meaningful connection will enrich your life. Expressing your needs and boundaries clearly will help others understand your unique way of relating."
  },
  Otter: {
    overview: "The Otter represents playfulness, enthusiasm, and social energy. You bring a spirit of joy and adventure to life, finding delight in experiences and connections that others might miss.",
    keyTraits: ["Playful", "Enthusiastic", "Social", "Energetic"],
    strengths: "Your natural optimism and playful approach helps you and others navigate life's challenges with resilience. You have a gift for finding joy in small moments and bringing lightness to difficult situations.",
    challenges: "Your desire for fun and stimulation might sometimes lead to avoiding more serious or challenging tasks. Finding ways to channel your energy into focused effort can be an area for growth.",
    relationships: "You're a delightful, engaging friend who brings energy and spontaneity to relationships. Your enthusiasm is contagious, and you have a talent for turning ordinary moments into memorable experiences.",
    atWork: "You thrive in dynamic, social environments where your creativity and positive energy are valued. You often excel at innovation, motivation, and bringing fresh perspectives to teams.",
    growthPath: "Developing your capacity to stay engaged during more serious or routine tasks will expand your impact. Balancing your outward energy with reflective practices will help sustain your natural enthusiasm."
  },
  Deer: {
    overview: "The Deer represents gentleness, sensitivity, and intuitive awareness. You navigate life with a delicate balance of vulnerability and vigilance, perceiving subtle energies that others often miss.",
    keyTraits: ["Gentle", "Sensitive", "Intuitive", "Vigilant"],
    strengths: "Your emotional sensitivity gives you exceptional empathy and the ability to understand others' needs without words. Your intuitive nature helps you navigate complex emotional landscapes with grace.",
    challenges: "Your sensitivity might sometimes lead to feeling overwhelmed by others' emotions or harsh environments. Learning to protect your energy while remaining open-hearted can be an area for growth.",
    relationships: "You're a compassionate, attentive friend who creates safe spaces for authentic connection. Your gentle presence invites trust, and you have a gift for making others feel truly seen and heard.",
    atWork: "You excel in roles that utilize your empathy and perceptiveness, particularly in supporting, healing, or creative professions. You bring a humanizing element to any team or project.",
    growthPath: "Strengthening your boundaries will help protect your sensitive nature. Trusting your intuition while developing discernment will enhance your natural gifts."
  },
  Turtle: {
    overview: "The Turtle represents patience, wisdom, and resilient steadiness. You move through life at your own pace, carrying the protective shell of your boundaries while steadily making progress toward your goals.",
    keyTraits: ["Patient", "Wise", "Stable", "Protective"],
    strengths: "Your remarkable patience allows you to persist when others might give up. You possess a grounded wisdom that comes from deep reflection and careful observation of life's patterns over time.",
    challenges: "Your cautious nature might sometimes lead to missing opportunities that require quick action. Finding the balance between thoughtful consideration and timely response can be an area for growth.",
    relationships: "You're a steady, reliable presence who offers consistent support without drama. While you may be slow to fully trust, once you do, your loyalty and commitment run deep.",
    atWork: "You excel in roles requiring careful thought, consistent effort, and long-term planning. Your stability makes you valuable in positions where reliability and thoughtful approaches are essential.",
    growthPath: "Becoming more comfortable with occasionally stepping outside your comfort zone will expand your experiences. Sharing your wisdom more openly can increase your positive impact on others."
  }
};

export default animalProfiles;