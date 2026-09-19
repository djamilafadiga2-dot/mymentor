/* Shared university dataset — single source of truth for the university panel.
   Extracted from the old universities.html so every page/flyer stays in sync. */

const UNIVERSITIES = {
  tier1: [
    { id: 'oxford', name: 'University of Oxford', description: '#1 World University | 800+ Years of Excellence | Tutorial System | Ultimate Prestige', flyerFile: 'oxford_flyer.html', isOxbridge: true },
    { id: 'cambridge', name: 'University of Cambridge', description: '#2 World University | 800+ Years of Excellence | Supervision System | Global Recognition', flyerFile: 'cambridge_flyer.html', isOxbridge: true },
    { id: 'lse', name: 'London School of Economics', description: '#1 UK for Accounting & Finance | Elite Global Target | Unrivalled IB & Consulting Recruitment', flyerFile: 'lse_flyer.html' },
    { id: 'imperial', name: 'Imperial College London', description: 'Top 5 UK | STEM Excellence | Analytics, Finance & Fintech', flyerFile: 'imperial_flyer.html' },
    { id: 'ucl', name: 'University College London', description: 'Top 10 UK University | Rapidly Rising in Management | Innovation & Quantitative Analysis Focus', flyerFile: 'ucl_flyer.html' },
    { id: 'kcl', name: "King's College London", description: 'Top 15 UK University | Russell Group | Central London Location | Growing Business School Reputation', flyerFile: 'kcl_flyer.html' },
    { id: 'warwick', name: 'University of Warwick', description: '#1 for Graduate Employer Reputation | Outstanding Placements | Top Recruiter Target', flyerFile: 'warwick_flyer.html' },
    { id: 'bath', name: 'University of Bath', description: '#1 UK Placement Record | 67% Placement Participation | Exceptional Employability', flyerFile: 'bath_flyer.html' },
    { id: 'durham', name: 'Durham University', description: 'Top 10 UK | Oxbridge-Style Collegiate | Strong Accounting & Finance', flyerFile: 'durham_flyer.html' },
    { id: 'edinburgh', name: 'University of Edinburgh', description: "Top 15 UK | Internationally Respected | Triple Crown Accredited | Scotland's Premier Business School", flyerFile: 'edinburgh_flyer.html' },
    { id: 'standrews', name: 'University of St Andrews', description: "Top 5 UK | Scotland's #1 University | Highest Student Satisfaction | Academic Excellence & Flexibility", flyerFile: 'standrews_flyer.html' }
  ],
  tier2: [
    { id: 'manchester', name: 'University of Manchester', description: "Top 30 UK | One of UK's Largest Business Schools | Triple Crown Accredited | Strong Corporate Partnerships", flyerFile: 'manchester_flyer.html' },
    { id: 'bristol', name: 'University of Bristol', description: 'Top 15 UK | Russell Group | Rigorous Economics-Based Programmes | Strong Academic Reputation', flyerFile: 'bristol_flyer.html' },
    { id: 'glasgow', name: 'University of Glasgow', description: 'Top 20 UK | Quantitative, Research-Led | Globally Recognized in Economics & Finance', flyerFile: 'glasgow_flyer.html' },
    { id: 'leeds', name: 'University of Leeds', description: 'Top 25 UK | Triple Crown Accredited | Strong Corporate Engagement | Excellent Value', flyerFile: 'leeds_flyer.html' },
    { id: 'loughborough', name: 'Loughborough University', description: 'Top 10 Student Experience | Outstanding Campus Facilities | Excellent Management & Marketing', flyerFile: 'loughborough_flyer.html' },
    { id: 'nottingham', name: 'University of Nottingham', description: 'Top 25 UK | Triple Crown Accredited | Global Focus | Strong in International Business & Sustainability', flyerFile: 'nottingham_flyer.html' },
    { id: 'birmingham', name: 'University of Birmingham', description: 'Top 20 UK | Russell Group | Triple Crown | Broad Business Offering', flyerFile: 'birmingham_flyer.html' }
  ],
  tier3: [
    { id: 'lancaster', name: 'Lancaster University', description: 'Top 10 Management & Accounting | Triple Crown Accredited | Strong Placement Culture | Collegiate System', flyerFile: 'lancaster_flyer.html' },
    { id: 'aston', name: 'Aston University', description: '#1 Graduate Prospects | Industry-Integrated | Exceptional Placement Programme', flyerFile: 'aston_flyer.html' },
    { id: 'southampton', name: 'University of Southampton', description: 'Top 20 UK Russell Group | Analytics-Oriented Management | Strong in Data-Driven Business Fields', flyerFile: 'southampton_flyer.html' },
    { id: 'sheffield', name: 'University of Sheffield', description: 'Top 25 UK Russell Group | Strong Student Community | Excellent Student Experience | Affordable Northern City', flyerFile: 'sheffield_flyer.html' },
    { id: 'queen_mary', name: 'Queen Mary University of London', description: 'Top 35 UK Russell Group | London Location | Diverse Student Body | Good Value London Option', flyerFile: 'queen_mary_flyer.html' },
    { id: 'bayes', name: 'Bayes Business School', description: 'City of London | Finance Excellence | Triple Crown Accredited', flyerFile: 'bayes_flyer.html' },
    { id: 'strathclyde', name: 'Strathclyde Business School', description: "Scotland's Oldest | Top 10 Accounting & Finance | Glasgow", flyerFile: 'strathclyde_flyer.html' }
  ],
  parcoursup: [
    { id: 'escp', name: 'ESCP Business School', description: '3 years × 3 countries | AACSB & EQUIS | #1 in France for BSc Management | Multi-campus European Programme', flyerFile: 'escp_flyer.html' },
    { id: 'dauphine', name: 'Université Paris Dauphine-PSL', description: 'London Campus | Grande Établissement | EQUIS Accredited | French Rigour × London Environment', flyerFile: 'dauphine_flyer.html' }
  ]
};

const TIER_META = {
  tier1: { label: 'Tier 1 — Elite', badge: '🥇' },
  tier2: { label: 'Tier 2 — Strong', badge: '🥈' },
  tier3: { label: 'Tier 3 — Good', badge: '🥉' },
  parcoursup: { label: 'Parcoursup', badge: '🇫🇷' }
};

function allUniversitiesFlat() {
  return Object.entries(UNIVERSITIES).flatMap(([tier, list]) =>
    list.map(u => ({ ...u, tier }))
  );
}
