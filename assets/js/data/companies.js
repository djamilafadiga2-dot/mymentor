/* ==========================================================================
   Company profiles for the Internships section (Step 3).
   Facts checked September 2026. "opens" dates are Trackr's estimates based on
   when each firm opened applications in the previous cycle.
   ========================================================================== */

const MM_COMPANIES = [
  {
    id: 'morgan-stanley',
    name: 'Morgan Stanley',
    type: 'US investment bank',
    overview: 'Global investment bank and wealth manager headquartered in New York. EMEA base in Canary Wharf, London, with a technology and operations hub in Glasgow.',
    divisions: ['Institutional Securities (investment banking, markets)', 'Wealth Management', 'Investment Management'],
    programme: {
      name: 'Spring Insight Programme',
      length: '1 week in London for Institutional Securities; Technology and Operations run partly in Glasgow',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree. Any A-level background, including arts and humanities.',
      opens: '~14 Jan 2027',
      notes: 'Strong participants can be fast-tracked to the Summer Analyst programme.',
      url: 'https://www.morganstanley.com/people-opportunities/emea-early-insight-faq'
    },
    values: ['Do the Right Thing', 'Put Clients First', 'Lead with Exceptional Ideas', 'Commit to Diversity and Inclusion', 'Give Back'],
    valuesUrl: 'https://www.morganstanley.com/about-us-governance/code-of-conduct',
    culture: [
      'Welcomes spring interns from every academic background, not only finance or economics.',
      'Runs outreach such as "Step In, Step Up", a 3-day programme for female Year 12–13 students.',
      'Spring week includes work-shadowing in the division you choose.'
    ],
    process: 'Aon (cut-e) online tests (numerical, verbal, logical, situational judgement; mix varies by division), usually 48 hours to complete, then a HireVue video interview.',
    whyUs: [
      'Ranked #3 in global M&A advisory in 2025 (Mergermarket).',
      'Combines a leading investment bank with one of the largest wealth management businesses.',
      'Glasgow hub offers technology and operations routes outside London.'
    ]
  },
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    type: 'US investment bank',
    overview: 'Global investment bank headquartered in New York. EMEA headquarters at Plumtree Court in the City of London.',
    divisions: ['Global Banking & Markets', 'Asset & Wealth Management', 'Platform Solutions'],
    programme: {
      name: 'Divisional Spring Programme',
      length: '2 weeks (longer than most banks)',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree.',
      opens: 'Not yet announced: check the careers site',
      notes: 'Past divisions: Investment Banking, Global Markets, Engineering, Operations, Legal.',
      url: 'https://www.goldmansachs.com/careers/students/programs-and-internships'
    },
    values: ['Partnership', 'Client Service', 'Integrity', 'Excellence'],
    valuesUrl: 'https://www.goldmansachs.com/our-firm/purpose-and-values',
    culture: [
      'Describes an "apprenticeship culture": learning on the job from experienced colleagues.',
      'Access to senior leaders and structured professional development programmes.',
      'A large global alumni network.'
    ],
    process: 'SHL numerical, verbal and inductive reasoning tests, then a HireVue video interview (4–6 questions, about 30 seconds to prepare and 2–3 minutes to answer).',
    whyUs: [
      'Ranked #1 in global M&A advisory in 2025 (Mergermarket).',
      'Two-week spring programme gives more time in the business than most.',
      'Partnership heritage, reflected in its first value.'
    ]
  },
  {
    id: 'jp-morgan',
    name: 'JPMorganChase',
    type: 'US universal bank',
    overview: 'The largest US bank, headquartered in New York. EMEA base in Canary Wharf, London, with a large office in Glasgow.',
    divisions: ['Commercial & Investment Bank', 'Asset & Wealth Management', 'Consumer & Community Banking'],
    programme: {
      name: 'Spring into JPMorganChase (Spring Insights)',
      length: '1 week',
      eligibility: 'Students graduating two years after the programme, any degree.',
      opens: '~31 Aug 2026 (may already be open)',
      notes: 'Tracks include Wholesale Banking, Technology, and Corporate & General Management. Participants can be accelerated to the summer internship assessment centre.',
      url: 'https://www.jpmorganchase.com/careers/explore-opportunities/programs/spring-insights'
    },
    values: ['Exceptional Client Service', 'Operational Excellence', 'A Commitment to Integrity, Fairness and Responsibility', 'A Great Team and Winning Culture'],
    valuesUrl: 'https://www.jpmorganchase.com/about/our-business/business-principles',
    culture: [
      'Spring week mixes networking with senior leaders, training and simulated work.',
      'Direct route from spring week to an accelerated summer internship assessment.',
      'Separate "Spring into Software Engineering" programme for technology.'
    ],
    process: 'Online application and CV, then a HireVue video interview. Pymetrics games have been used in past years; check your invitation email.',
    whyUs: [
      'Ranked #2 in global M&A advisory in 2025 (Mergermarket).',
      'Scale: a leader across investment banking, markets and payments.',
      'Clear acceleration from spring week to summer internship.'
    ]
  },
  {
    id: 'barclays',
    name: 'Barclays',
    type: 'UK universal bank',
    overview: 'British bank headquartered at 1 Churchill Place, Canary Wharf, London, with retail, corporate and investment banking.',
    divisions: ['Barclays UK', 'Barclays UK Corporate Bank', 'Barclays Private Bank & Wealth Management', 'Barclays Investment Bank', 'Barclays US Consumer Bank'],
    programme: {
      name: 'Discovery Programme',
      length: 'Two parts: skills workshops and networking, then a session on next career steps',
      eligibility: 'Students two years from graduating.',
      opens: '~1 Dec 2026',
      notes: 'Covers areas from technology and operations to investment banking. Participants may be considered for a 2027 internship. Barclays also runs Insight Days for groups under-represented in finance.',
      url: 'https://search.jobs.barclays/discovery'
    },
    values: ['Respect', 'Integrity', 'Service', 'Excellence', 'Stewardship'],
    valuesUrl: 'https://home.barclays/who-we-are/our-strategy/purpose-and-values/',
    culture: [
      'Its "Mindset" is Empower, Challenge, Drive, and is tested in the online assessment.',
      'Emphasises inclusion: people can "bring their whole selves to work".',
      'Insight days include workshops, skills training and interview preparation.'
    ],
    process: 'SHL online assessment with three parts: a short cognitive test, a personality questionnaire and a "Mindset" test of fit with Barclays\' values. Some programmes add a HireVue video interview.',
    whyUs: [
      'The only UK-headquartered bank with a global investment bank.',
      'The Mindset test rewards knowing its values well, so research pays off directly.',
      'Discovery Programme runs across the UK, Americas and Asia-Pacific.'
    ]
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    type: 'UK-headquartered international bank',
    overview: 'International bank founded in 1865 to finance trade between Europe and Asia. Global headquarters in London.',
    divisions: ['Hong Kong', 'UK', 'Corporate and Institutional Banking', 'International Wealth and Premier Banking'],
    programme: {
      name: 'UK Spring Insight Programme (Global Banking & Markets)',
      length: '4 days in London',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree, any subject.',
      opens: '~4 Nov 2026',
      notes: 'Also runs Social Mobility, Women in Business and Black Heritage insight programmes. Strong participants can reach a fast-track day for the 10-week summer internship.',
      url: 'https://www.hsbc.com/careers/students-and-graduates/insight-programmes'
    },
    values: ['We value difference', 'We succeed together', 'We take responsibility', 'We get it done'],
    valuesUrl: 'https://www.hsbc.com/who-we-are/our-strategy-and-values',
    culture: [
      'Purpose: "Opening up a world of opportunity."',
      'Eight global employee networks, including Strive (social mobility); the first started in London in 1975.',
      'Insight weeks include mentors, buddies, work shadowing and case studies.'
    ],
    process: 'Cappfinity "Online Immersive Assessment": a job simulation mixing numerical and verbal reasoning, situational judgement and short video responses.',
    whyUs: [
      'History built on trade between Asia and Europe, still central to its strategy.',
      'Recently simplified into four divisions, with a strong focus on wealth.',
      'Wide range of insight programmes for under-represented students.'
    ]
  },
  {
    id: 'ubs',
    name: 'UBS',
    type: 'Swiss global wealth manager and bank',
    overview: 'Global wealth manager and Swiss universal bank headquartered in Zurich. UK headquarters at 5 Broadgate, London.',
    divisions: ['Global Wealth Management', 'Personal & Corporate Banking', 'Asset Management', 'Investment Bank'],
    programme: {
      name: 'Tomorrow\'s Talent (Spring Insight) Program',
      length: 'About 4 days in London',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree, any subject.',
      opens: '~30 Sep 2026',
      notes: 'Covers Global Banking, Global Markets, Asset Management, Technology, Risk, Compliance and Operations, with coaching, mentors and AmplifyME training. Can lead to the Summer Intern Program.',
      url: 'https://www.ubs.com/global/en/careers/early-careers/tomorrows-talent-program.html'
    },
    values: ['Client centricity', 'Connectivity', 'Sustainable impact', 'Behaviours: Accountability with integrity, Collaboration, Innovation'],
    valuesUrl: 'https://www.ubs.com/global/en/our-firm/our-culture.html',
    culture: [
      'Calls its diverse workforce a "competitive strength".',
      'Programme includes coaching, mentors and learning materials.',
      'Firm-wide Code of Conduct linked to its behaviours.'
    ],
    process: 'Aon (cut-e) verbal, numerical and logical tests plus the "UBS Culture Match" situational judgement test, then a pre-recorded video interview and a final interview.',
    whyUs: [
      'Describes itself as the only truly global wealth manager.',
      'Integration of Credit Suisse and what it means for its scale.',
      'AmplifyME training built into the programme.'
    ]
  },
  {
    id: 'citi',
    name: 'Citi',
    type: 'US global bank',
    overview: 'Global bank headquartered in New York, active in more than 180 countries. EMEA headquarters at 25 Canada Square, Canary Wharf.',
    divisions: ['Services', 'Markets', 'Banking', 'Wealth', 'U.S. Personal Banking'],
    programme: {
      name: 'Spring Insight (First Year Programme)',
      length: '4 days, in person in London, around March/Easter',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree.',
      opens: '~27 Oct 2026',
      notes: 'Also runs a Black Heritage Insight (3 days in April) and a 5-week Social Mobility insight programme in summer. Can lead to the Summer Internship, subject to performance.',
      url: 'https://jobs.citi.com/early-career-programs-pre-internships'
    },
    values: ['We take ownership', 'We deliver with pride', 'We succeed together'],
    valuesUrl: 'https://www.citigroup.com/global/about-us',
    culture: [
      'Spring Insight includes job shadowing and a dedicated mentor.',
      'Insight tracks run with its Social Mobility and Black Heritage networks.',
      'Global Community Day for volunteering.'
    ],
    process: 'Online tests (numerical, logical and situational judgement) and a pre-recorded video interview. The test provider varies: check your invitation email.',
    whyUs: [
      'Services business moves around $6 trillion across borders every day.',
      'Presence in more than 180 countries.',
      'Distinctive 5-week social mobility programme.'
    ]
  },
  {
    id: 'deutsche-bank',
    name: 'Deutsche Bank',
    type: 'German universal bank',
    overview: 'Germany\'s leading bank, headquartered in Frankfurt. London headquarters at 21 Moorfields, named City Building of the Year 2025.',
    divisions: ['Corporate Bank', 'Investment Bank', 'Private Bank', 'Asset Management (DWS)'],
    programme: {
      name: 'Spring into Banking',
      length: '4 days in spring',
      eligibility: 'First year of a 3-year degree, or second year of a 4-year degree, any subject.',
      opens: '~4 Nov 2026',
      notes: 'Covers the Investment Bank (Corporate Finance, Markets and more) and Technology. Gives early access to summer internship interviews. Related programmes: RISE, GROW and ADVANCE.',
      url: 'https://careers.db.com/students-graduates/insight-programmes/uk-and-ireland/spring-into-banking?language_id=1'
    },
    values: ['Act responsibly to inspire trust', 'Think commercially for sustainable outcomes', 'Take initiative to create solutions', 'Work collaboratively for the greatest impact'],
    valuesUrl: 'https://www.db.com/who-we-are/our-culture/index?language_id=1',
    culture: [
      'Employee networks include dbPride, dbEnable and dbENRICH.',
      'Staff from more than 150 nationalities.',
      'Careers site offers an Employability Hub and an "Unofficial Guide to Banking".'
    ],
    process: 'SHL situational judgement and inductive reasoning tests, then a recorded video interview and a telephone interview.',
    whyUs: [
      'Clear path from Spring into Banking to early summer internship interviews.',
      'Strong corporate and transaction banking business across Europe.',
      'Sustainability-focused London headquarters.'
    ]
  }
];
