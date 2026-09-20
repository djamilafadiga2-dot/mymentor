/* ==========================================================================
   Interview question bank for the Internships section (Step 4).
   Categories: motivation, behavioural, technical, ask.
   ========================================================================== */

const MM_QUESTIONS = [
  /* ---------------- Motivation ---------------- */
  {
    id: 'm1', cat: 'motivation', q: 'Tell me about yourself.',
    how: 'Not your life story. Three parts, 90 seconds: where you are now (school, subjects, one strong result), what got you into finance (a specific moment, not "I have always been passionate"), and why this programme. Finish on the firm.'
  },
  {
    id: 'm2', cat: 'motivation', q: 'Why finance?',
    how: 'Name the moment it became concrete: a club, a project, an article, a family business. Then say what you found out about the work itself, and why that suits you. Avoid money, prestige and "fast-paced environment".'
  },
  {
    id: 'm3', cat: 'motivation', q: 'Why this firm?',
    how: 'Two specific reasons the swap test would catch if you changed the name: a deal, a division, a value in action, a person you spoke to, an event you attended. Then link each one to something you have done.'
  },
  {
    id: 'm4', cat: 'motivation', q: 'Why this division?',
    how: 'Explain in plain words what the division does day to day, pick the part that interests you, and connect it to your own experience. Be honest that a spring week is partly how you will find out more.'
  },
  {
    id: 'm5', cat: 'motivation', q: 'What do you hope to get from this spring week?',
    how: 'Be concrete: understand how the divisions differ, meet analysts, test whether the work suits you, and come back for a summer internship. Showing you want to learn is better than pretending you already know.'
  },
  {
    id: 'm6', cat: 'motivation', q: 'What are your strengths and weaknesses?',
    how: 'One strength with proof, not adjectives. For the weakness, pick a real one that is not core to the job, and say what you are doing about it. Never "I work too hard".'
  },
  {
    id: 'm7', cat: 'motivation', q: 'Where do you see yourself in five years?',
    how: 'Honest and grounded: finishing your degree, an internship, then a graduate role in this area. Show direction without claiming certainty.'
  },

  /* ---------------- Behavioural ---------------- */
  {
    id: 'b1', cat: 'behavioural', q: 'Tell me about a time you worked in a team.',
    how: 'Pick a story where your own contribution is clear. Say what the team had to do, what you did specifically, and how it ended. "We" hides you: use "I" for your part.'
  },
  {
    id: 'b2', cat: 'behavioural', q: 'Tell me about a time you led something.',
    how: 'Leading a club, a project, a team or an event all count. Focus on a decision you made and how you brought people with you.'
  },
  {
    id: 'b3', cat: 'behavioural', q: 'Tell me about a time you had a disagreement with someone.',
    how: 'Show you listened first, found the real cause, and reached a workable outcome. Never criticise the other person.'
  },
  {
    id: 'b4', cat: 'behavioural', q: 'Tell me about a time you failed or made a mistake.',
    how: 'Pick a real failure, own it without blaming anyone, and spend most of the answer on what you changed afterwards and the result of that change.'
  },
  {
    id: 'b5', cat: 'behavioural', q: 'Tell me about a time you worked under pressure or to a tight deadline.',
    how: 'Show your method: what you prioritised, what you dropped, who you told. The outcome matters less than the way you handled it.'
  },
  {
    id: 'b6', cat: 'behavioural', q: 'Tell me about a time you had to manage several priorities at once.',
    how: 'Exams plus a club plus a job is a perfectly good example. Explain how you decided what came first.'
  },
  {
    id: 'b7', cat: 'behavioural', q: 'Tell me about a time you persuaded someone.',
    how: 'Say what they thought at the start, the evidence you used, and what changed. Persuasion with data lands well in finance.'
  },
  {
    id: 'b8', cat: 'behavioural', q: 'Tell me about a time you used data or numbers to make a decision.',
    how: 'A mock portfolio, a club budget, a school project or a science experiment all work. Show the numbers you looked at and the decision they led to.'
  },
  {
    id: 'b9', cat: 'behavioural', q: 'Tell me about a time you showed attention to detail.',
    how: 'Small stories are fine: checking figures, catching an error before it was sent. Say what the mistake would have cost.'
  },
  {
    id: 'b10', cat: 'behavioural', q: 'Tell me about a time you were asked to do something you thought was wrong.',
    how: 'Firms are testing integrity. Say what you did, who you raised it with, and why. Escalating early is the right answer, not handling it alone.'
  },

  /* ---------------- Technical / commercial ---------------- */
  {
    id: 't1', cat: 'technical', q: 'What does an investment bank actually do?',
    how: 'Two sides. It advises companies on raising money (shares or debt) and on buying and selling other companies, and it buys and sells securities for investors in the markets. Everything else sits around those two.'
  },
  {
    id: 't2', cat: 'technical', q: 'What is the difference between the sell side and the buy side?',
    how: 'The sell side (investment banks) advises companies and sells securities. The buy side (asset managers, hedge funds, pension funds) invests money on behalf of clients.'
  },
  {
    id: 't3', cat: 'technical', q: 'What is an IPO?',
    how: 'A company sells shares to the public for the first time, so it raises money and its shares become tradeable. The bank prices the shares, finds buyers and manages the process.'
  },
  {
    id: 't4', cat: 'technical', q: 'What is M&A, and why do companies do deals?',
    how: 'One company buys or merges with another. Reasons: growth, entering a new market, buying technology or talent, or cost savings ("synergies"). Say which reason matters in a deal you have read about.'
  },
  {
    id: 't5', cat: 'technical', q: 'Equity or debt: what is the difference for a company raising money?',
    how: 'Equity is selling ownership: no repayment, but existing owners keep a smaller share. Debt is borrowing: it must be repaid with interest, but ownership stays the same.'
  },
  {
    id: 't6', cat: 'technical', q: 'Roughly, how do you value a company?',
    how: 'At spring level, know the names and the idea: compare it with similar listed companies (multiples such as price-to-earnings), compare it with prices paid in past deals, or add up the cash it will make in future, discounted back to today (a DCF). You are not expected to build one.'
  },
  {
    id: 't7', cat: 'technical', q: 'What happens when interest rates rise?',
    how: 'Borrowing costs more, so companies and households spend less, which usually slows inflation. Bond prices fall, and shares often fall too because future profits are worth less today. Deal activity typically slows.'
  },
  {
    id: 't8', cat: 'technical', q: 'Tell me about a recent deal or market story you have followed.',
    how: 'Pick one story you can explain in 60 seconds: what happened, who was involved, why they did it, and what you think of it. Follow it for a few weeks before the interview so you can answer a follow-up.'
  },
  {
    id: 't9', cat: 'technical', q: 'If you had £10,000, how would you invest it?',
    how: 'There is no right answer. Show a reasoned approach: your time horizon, how much risk you would take, spreading the money, and one specific choice you can justify.'
  },
  {
    id: 't10', cat: 'technical', q: 'What is the difference between a share price and a company\'s value?',
    how: 'The share price is the price of one share. The value of all the shares is the market capitalisation (share price × number of shares). Add debt and subtract cash and you get enterprise value, which is what a buyer of the whole business pays for.'
  },

  /* ---------------- Questions to ask them ---------------- */
  {
    id: 'a1', cat: 'ask', q: 'What does a typical day look like for an analyst in your team?',
    how: 'Simple, and always gives you material for a future application.'
  },
  {
    id: 'a2', cat: 'ask', q: 'What surprised you most in your first year here?',
    how: 'Personal questions get real answers and are easy to remember afterwards.'
  },
  {
    id: 'a3', cat: 'ask', q: 'What is the firm working on right now that you find most interesting?',
    how: 'Shows curiosity about the business, not only the job.'
  },
  {
    id: 'a4', cat: 'ask', q: 'What do the people who do well on this programme have in common?',
    how: 'Useful for you and flattering to answer. Write the answer down.'
  },
  {
    id: 'a5', cat: 'ask', q: 'How has the team changed since you joined?',
    how: 'Opens a conversation about strategy and direction.'
  },
  {
    id: 'a6', cat: 'ask', q: 'Avoid: salary, holiday, working hours, or anything on the website',
    how: 'Asking something you could have looked up suggests you did not prepare. Save practical questions for after an offer.', avoid: true
  }
];
