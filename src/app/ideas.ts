const ideas = [
  { idea: "Ask a stranger for directions", difficulty: "Easy" },
  {
    idea: "Request feedback on your work from a supervisor",
    difficulty: "Medium",
  },
  { idea: "Ask a neighbor to do a favor", difficulty: "Easy" },
  { idea: "Propose a new project at work", difficulty: "Medium" },
  { idea: "Invite someone out for coffee", difficulty: "Easy" },
  { idea: "Ask for a raise", difficulty: "Hard" },
  { idea: "Request a discount at a store", difficulty: "Easy" },
  { idea: "Invite an acquaintance to a personal event", difficulty: "Easy" },
  { idea: "Propose an unconventional outing to friends", difficulty: "Medium" },
  { idea: "Ask a stranger for a compliment", difficulty: "Easy" },
  {
    idea: "Request a refund for a dissatisfactory purchase",
    difficulty: "Medium",
  },
  { idea: "Ask someone to return an item they borrowed", difficulty: "Medium" },
  {
    idea: "Propose a collaboration with another artist or professional",
    difficulty: "Medium",
  },
  { idea: "Invite a coworker to lunch", difficulty: "Easy" },
  { idea: "Request a tour of a company's facilities", difficulty: "Medium" },
  {
    idea: "Ask a waiter for a recommendation on their favorite menu item",
    difficulty: "Easy",
  },
  { idea: "Propose a themed party idea to friends", difficulty: "Medium" },
  {
    idea: "Request permission to bring a pet to a pet-friendly establishment",
    difficulty: "Easy",
  },
  {
    idea: "Ask someone for a referral to a good service provider (e.g., plumber, electrician)",
    difficulty: "Medium",
  },
  {
    idea: "Propose a joint workout session with a friend or acquaintance",
    difficulty: "Easy",
  },
  {
    idea: "Invite a coworker to join you for a coffee break",
    difficulty: "Easy",
  },
  {
    idea: "Request a personalized recommendation from a store employee",
    difficulty: "Medium",
  },
  {
    idea: "Ask a friend or family member for a testimonial or recommendation",
    difficulty: "Medium",
  },
  {
    idea: "Propose a group outing or activity to your friends or family",
    difficulty: "Easy",
  },
  {
    idea: "Ask a friend or family member for a loan or financial assistance",
    difficulty: "Hard",
  },
  {
    idea: "Invite a colleague to collaborate on a side project or hobby",
    difficulty: "Medium",
  },
  {
    idea: "Request a mentorship or guidance from someone you admire professionally",
    difficulty: "Hard",
  },
  {
    idea: "Propose a new tradition or ritual for your social group or family",
    difficulty: "Medium",
  },
  {
    idea: "Ask a friend or family member to critique your creative work (e.g., art, writing)",
    difficulty: "Hard",
  },
  {
    idea: "Request a customized meal at a restaurant to accommodate dietary restrictions",
    difficulty: "Medium",
  },
  { idea: "Ask a stranger to recommend a book or movie", difficulty: "Easy" },
  {
    idea: "Propose a new feature or improvement to a software developer",
    difficulty: "Medium",
  },
  {
    idea: "Request to participate in a focus group or research study",
    difficulty: "Hard",
  },
  {
    idea: "Request a change in seating arrangement at a venue for better comfort",
    difficulty: "Medium",
  },
  {
    idea: "Propose a game or activity to play with friends or family",
    difficulty: "Easy",
  },
  {
    idea: "Request permission to film or take photos in a public space",
    difficulty: "Hard",
  },
  {
    idea: "Ask a customer service representative for a coupon or discount code",
    difficulty: "Medium",
  },
  {
    idea: "Invite someone to go for a walk or hike with you",
    difficulty: "Easy",
  },
  {
    idea: "Propose a new course or workshop to a local community center",
    difficulty: "Medium",
  },
  {
    idea: "Request a different table at a restaurant for a better view",
    difficulty: "Easy",
  },
  {
    idea: "Ask a colleague to introduce you to someone in their professional network",
    difficulty: "Medium",
  },
  {
    idea: "Propose a fundraiser idea to a local charity or organization",
    difficulty: "Hard",
  },
  {
    idea: "Request a vegetarian or vegan option at a restaurant without it on the menu",
    difficulty: "Medium",
  },
  {
    idea: "Ask someone to help you practice a foreign language conversation",
    difficulty: "Hard",
  },
  {
    idea: "Invite a coworker to join a professional networking event with you",
    difficulty: "Medium",
  },
  {
    idea: "Request a discount or promotion for a large purchase",
    difficulty: "Hard",
  },
  {
    idea: "Ask someone for advice on a personal dilemma or problem",
    difficulty: "Hard",
  },
  {
    idea: "Propose a themed potluck dinner party to friends or coworkers",
    difficulty: "Easy",
  },
  {
    idea: "Ask a friend or family member for a testimonial or recommendation",
    difficulty: "Medium",
  },
  {
    idea: "Propose a group outing or activity to your friends or family",
    difficulty: "Easy",
  },
  {
    idea: "Request to attend a closed-door meeting or conference as an observer",
    difficulty: "Hard",
  },
  { idea: "Ask a stranger to take a photo of you", difficulty: "Easy" },
  {
    idea: "Request feedback on your presentation from a colleague",
    difficulty: "Medium",
  },
  { idea: "Invite a new coworker for a lunchtime walk", difficulty: "Easy" },
  {
    idea: "Propose a team-building exercise to your manager",
    difficulty: "Medium",
  },
  { idea: "Ask a friend to borrow their car for a day", difficulty: "Hard" },
  {
    idea: "Request a discount for a subscription renewal",
    difficulty: "Medium",
  },
  { idea: "Ask someone to teach you a new recipe", difficulty: "Medium" },
  {
    idea: "Invite a neighbor to join you for a neighborhood clean-up",
    difficulty: "Easy",
  },
  { idea: "Propose a joint book club with friends", difficulty: "Easy" },
  {
    idea: "Request permission to work remotely for a week",
    difficulty: "Medium",
  },
  {
    idea: "Ask a colleague to cover for you during your vacation",
    difficulty: "Hard",
  },
  {
    idea: "Invite a coworker to join you for a weekend hike",
    difficulty: "Medium",
  },
  {
    idea: "Request a discount for a bulk purchase from a supplier",
    difficulty: "Hard",
  },
  {
    idea: "Ask a friend to help you practice public speaking",
    difficulty: "Medium",
  },
  { idea: "Propose a monthly potluck lunch at work", difficulty: "Easy" },
  { idea: "Request a mentorship from a senior colleague", difficulty: "Hard" },
  {
    idea: "Ask a family member to teach you a DIY skill",
    difficulty: "Medium",
  },
  {
    idea: "Invite a friend to join you for a volunteer event",
    difficulty: "Easy",
  },
  { idea: "Propose a movie night with friends", difficulty: "Easy" },
  {
    idea: "Request a sample of a new product from a vendor",
    difficulty: "Medium",
  },
  {
    idea: "Ask a coworker for help setting up a new software",
    difficulty: "Hard",
  },
  { idea: "Invite a neighbor for a weekend barbecue", difficulty: "Easy" },
  { idea: "Propose a joint business idea to a friend", difficulty: "Medium" },
  {
    idea: "Request feedback on your blog from a fellow blogger",
    difficulty: "Medium",
  },
  {
    idea: "Ask a stranger for a local restaurant recommendation",
    difficulty: "Easy",
  },
  {
    idea: "Invite a colleague to join you for a lunchtime yoga class",
    difficulty: "Easy",
  },
  { idea: "Request a discount for a service renewal", difficulty: "Medium" },
  {
    idea: "Ask a friend to join you for a home renovation project",
    difficulty: "Hard",
  },
  { idea: "Propose a group study session to classmates", difficulty: "Medium" },
  {
    idea: "Request a discount for a damaged item at a store",
    difficulty: "Hard",
  },
  {
    idea: "Ask a coworker to help you with a task outside their department",
    difficulty: "Medium",
  },
  { idea: "Invite a neighbor for a game night", difficulty: "Easy" },
  {
    idea: "Propose a joint fitness challenge with friends",
    difficulty: "Easy",
  },
  {
    idea: "Request permission to attend a conference on company time",
    difficulty: "Hard",
  },
  {
    idea: "Ask a family member to lend you their camping gear",
    difficulty: "Medium",
  },
  {
    idea: "Invite a friend to join you for a language exchange session",
    difficulty: "Easy",
  },
  {
    idea: "Request feedback on your photography from a professional photographer",
    difficulty: "Medium",
  },
  { idea: "Ask a stranger for advice on choosing a gift", difficulty: "Easy" },
  {
    idea: "Invite a coworker to join you for a networking event",
    difficulty: "Medium",
  },
  {
    idea: "Request a discount for a yearly membership renewal",
    difficulty: "Hard",
  },
  {
    idea: "Ask a friend to help you with a home repair project",
    difficulty: "Hard",
  },
  { idea: "Propose a joint art project with a friend", difficulty: "Medium" },
  {
    idea: "Request a sample class from a local fitness studio",
    difficulty: "Medium",
  },
  { idea: "Invite a neighbor for a picnic in the park", difficulty: "Easy" },
  {
    idea: "Ask a colleague to join you for a brainstorming session",
    difficulty: "Easy",
  },
  { idea: "Request a discount for a service package", difficulty: "Medium" },
  {
    idea: "Ask a friend to help you with a DIY home improvement project",
    difficulty: "Hard",
  },
];

export default ideas;
