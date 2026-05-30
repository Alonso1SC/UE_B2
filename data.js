// Añade aquí todos tus ejercicios.
// Usa FORMATO_EJERCICIOS.md para pedir a una IA nuevos ejercicios
// y pégalos como elementos nuevos en el array correspondiente.

const EXERCISES = {

  /* ══════════════════════════════════════════════════
     UE1 — OPCIÓN MÚLTIPLE
  ══════════════════════════════════════════════════ */
  UE1: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'exercise1', title: 'Ejercicio 1 UE1', description: 'Tema: El teletrabajo',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'The rise of remote working has had a significant {{1}} on the modern workplace. Many companies have now {{2}} policies that allow employees to work from home on a regular basis. This shift has {{3}} in a number of challenges, particularly for managers who need to {{4}} their teams without face-to-face interaction. Despite these difficulties, research {{5}} that many workers are more productive at home. One key factor is the elimination of the daily commute, which {{6}} people extra time and energy. However, not everyone thrives in a home environment. Some employees find it difficult to {{7}} a clear boundary between professional and personal life. Experts recommend {{8}} up a dedicated workspace at home in order to maintain focus.',
      questions: [
        { number:1, options:{A:'influence',B:'effect',C:'result',D:'impact'}, answer:'B' },
        { number:2, options:{A:'introduced',B:'formed',C:'adopted',D:'accepted'}, answer:'C' },
        { number:3, options:{A:'ended',B:'turned',C:'resulted',D:'developed'}, answer:'C' },
        { number:4, options:{A:'oversee',B:'watch',C:'control',D:'view'}, answer:'A' },
        { number:5, options:{A:'informs',B:'shows',C:'tells',D:'explains'}, answer:'B' },
        { number:6, options:{A:'provides',B:'offers',C:'gives',D:'allows'}, answer:'C' },
        { number:7, options:{A:'keep',B:'make',C:'draw',D:'set'}, answer:'C' },
        { number:8, options:{A:'building',B:'making',C:'creating',D:'setting'}, answer:'D' }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'exercise2', title: 'Ejercicio 2 UE1', description: 'Tema: Las redes sociales',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Social media has fundamentally {{1}} the way people communicate. Platforms such as Instagram and Twitter have grown at a {{2}} rate, attracting billions of users worldwide. While these tools {{3}} people to stay in touch with friends and family, there are growing concerns about their {{4}} on mental health. Studies have found a strong {{5}} between heavy social media use and feelings of anxiety and loneliness. In {{6}} to this, many platforms have introduced features that allow users to monitor their screen time. However, critics {{7}} that these measures are not enough. They argue that the platforms are deliberately {{8}} to keep users engaged for as long as possible.',
      questions: [
        { number:1, options:{A:'altered',B:'changed',C:'transformed',D:'modified'}, answer:'C' },
        { number:2, options:{A:'remarkable',B:'noticeable',C:'considerable',D:'rapid'}, answer:'D' },
        { number:3, options:{A:'let',B:'enable',C:'allow',D:'make'}, answer:'C' },
        { number:4, options:{A:'impact',B:'effect',C:'influence',D:'consequence'}, answer:'A' },
        { number:5, options:{A:'link',B:'connection',C:'bond',D:'relation'}, answer:'B' },
        { number:6, options:{A:'reaction',B:'addition',C:'response',D:'answer'}, answer:'C' },
        { number:7, options:{A:'argue',B:'say',C:'claim',D:'suggest'}, answer:'C' },
        { number:8, options:{A:'structured',B:'built',C:'designed',D:'planned'}, answer:'C' }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'exercise3', title: 'Ejercicio 3 UE1', description: 'Tema: Internet',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Before the internet, finding reliable information required considerable time and {{1}}. People had to visit libraries or consult encyclopaedias to answer even basic questions. Today, anyone with a smartphone can {{2}} access to millions of websites within seconds. This technological revolution has {{3}} the way people learn, work and communicate beyond all recognition. There is, however, a {{4}} side to this development. False information can {{5}} rapidly through social networks, and distinguishing reliable sources from unreliable ones requires skill and judgement. Young people in particular need to {{6}} a critical attitude towards what they read online. Despite these challenges, the benefits of the internet are enormous, and it has given millions of people the chance to {{7}} educational opportunities previously unavailable to them. As connectivity improves globally, the internet will undoubtedly {{8}} to reshape human society for generations to come.',
      questions: [
        { number:1, options:{A:'effort',B:'patience',C:'trouble',D:'care'}, answer:'A' },
        { number:2, options:{A:'obtain',B:'reach',C:'gain',D:'find'}, answer:'C' },
        { number:3, options:{A:'changed',B:'transformed',C:'affected',D:'altered'}, answer:'B' },
        { number:4, options:{A:'negative',B:'opposite',C:'dark',D:'bad'}, answer:'C' },
        { number:5, options:{A:'travel',B:'spread',C:'go',D:'move'}, answer:'B' },
        { number:6, options:{A:'develop',B:'take',C:'adopt',D:'maintain'}, answer:'C' },
        { number:7, options:{A:'reach',B:'access',C:'find',D:'achieve'}, answer:'B' },
        { number:8, options:{A:'continue',B:'keep',C:'go',D:'persist'}, answer:'A' }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'exercise4', title: 'Ejercicio 4 UE1', description: 'Tema: Alimentación saludable',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'A poor diet is one of the {{1}} causes of preventable illness worldwide. Many people consume excessive amounts of sugar, salt and saturated fat, largely {{2}} to the widespread availability of cheap, processed food. Nutritionists {{3}} that even small adjustments to our daily eating habits can have a significant impact on our overall health. Simple changes, such as replacing sugary snacks with fruit or {{4}} down on red meat, can make a real difference. Despite this, many people struggle to maintain a healthy diet, partly {{5}} time pressures or limited cooking skills. Governments have attempted to {{6}} the problem by introducing food labelling laws and taxes on sugary drinks. These measures have had some positive effects, but critics argue they fail to {{7}} the deeper social and economic factors behind poor nutrition. Ultimately, raising public {{8}} of the issue is just as important as any government policy.',
      questions: [
        { number:1, options:{A:'leading',B:'main',C:'primary',D:'top'}, answer:'A' },
        { number:2, options:{A:'due',B:'owing',C:'related',D:'caused'}, answer:'A' },
        { number:3, options:{A:'argue',B:'claim',C:'advise',D:'suggest'}, answer:'D' },
        { number:4, options:{A:'cutting',B:'reducing',C:'limiting',D:'lowering'}, answer:'A' },
        { number:5, options:{A:'because',B:'due',C:'owing',D:'because of'}, answer:'D' },
        { number:6, options:{A:'deal with',B:'handle',C:'tackle',D:'manage'}, answer:'C' },
        { number:7, options:{A:'deal with',B:'address',C:'tackle',D:'solve'}, answer:'B' },
        { number:8, options:{A:'knowledge',B:'understanding',C:'awareness',D:'recognition'}, answer:'C' }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'exercise5', title: 'Ejercicio 5 UE1', description: 'Tema: El sueño y la salud',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Sleep is essential for both physical and mental health, yet millions of people worldwide are simply not {{1}} enough of it. The consequences of sleep deprivation can be severe, {{2}} concentration, mood and immune function. Research suggests that most adults {{3}} between seven and nine hours of sleep per night to perform at their best. Despite this, many people regularly {{4}} to bed far too late, often as a result of using smartphones or watching television in the evening. These activities {{5}} sleep by exposing the brain to bright light just before bedtime. Experts strongly {{6}} that people establish a regular sleep routine and avoid screens for at least an hour before sleeping. Making these changes can have a considerable {{7}} on energy levels and concentration during the day, as well as significantly improving one\'s ability to {{8}} with everyday stress.',
      questions: [
        { number:1, options:{A:'having',B:'getting',C:'taking',D:'receiving'}, answer:'B' },
        { number:2, options:{A:'influencing',B:'affecting',C:'impacting',D:'changing'}, answer:'B' },
        { number:3, options:{A:'need',B:'require',C:'must have',D:'should get'}, answer:'A' },
        { number:4, options:{A:'stay',B:'remain',C:'go',D:'come'}, answer:'C' },
        { number:5, options:{A:'disrupts',B:'damages',C:'harms',D:'interrupts'}, answer:'A' },
        { number:6, options:{A:'suggest',B:'advise',C:'recommend',D:'propose'}, answer:'C' },
        { number:7, options:{A:'difference',B:'effect',C:'impact',D:'outcome'}, answer:'C' },
        { number:8, options:{A:'deal',B:'cope',C:'manage',D:'handle'}, answer:'B' }
      ]
    },
    // ── Ejercicio 6 ─────────────────────────────────
    {
      id: 'exercise6', title: 'Ejercicio 6 UE1', description: 'Tema: La música y el cerebro',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Music has long been recognised as one of the most powerful influences on human emotion. Listening to music can {{1}} mood, reduce stress and improve concentration, making it a valuable tool in a wide {{2}} of contexts, from workplaces to hospitals. Scientists have found that learning a musical instrument can have lasting {{3}} on brain development, particularly in young children. Musicians tend to {{4}} superior memory skills compared to non-musicians and are often better at processing language. Music therapy has {{5}} as a recognised treatment for conditions such as depression, Alzheimer\'s disease and chronic pain. In hospitals, calming music is frequently {{6}} to help patients relax before surgery. Despite these well-documented benefits, access to music education in schools has been {{7}} in many countries due to budget cuts. Campaigners argue that this is short-sighted, as the long-term benefits of music education {{8}} far beyond the classroom.',
      questions: [
        { number:1, options:{A:'lift',B:'raise',C:'boost',D:'increase'}, answer:'C' },
        { number:2, options:{A:'variety',B:'range',C:'number',D:'selection'}, answer:'B' },
        { number:3, options:{A:'benefits',B:'effects',C:'outcomes',D:'results'}, answer:'A' },
        { number:4, options:{A:'show',B:'have',C:'demonstrate',D:'display'}, answer:'C' },
        { number:5, options:{A:'appeared',B:'developed',C:'grown',D:'emerged'}, answer:'D' },
        { number:6, options:{A:'used',B:'played',C:'performed',D:'broadcast'}, answer:'B' },
        { number:7, options:{A:'falling',B:'declining',C:'reducing',D:'dropping'}, answer:'B' },
        { number:8, options:{A:'go',B:'reach',C:'extend',D:'stretch'}, answer:'C' }
      ]
    },
    // ── Ejercicio 7 ─────────────────────────────────
    {
      id: 'exercise7', title: 'Ejercicio 7 UE1', description: 'Tema: El cambio climático',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Climate change {{1}} one of the greatest challenges facing humanity in the twenty-first century. The main {{2}} of global warming is the release of greenhouse gases, primarily carbon dioxide, produced by burning fossil fuels. Scientists warn that without significant reductions in emissions, the consequences could be {{3}}, including rising sea levels, more extreme weather events and widespread damage to ecosystems. Many governments have {{4}} to reduce their emissions under international agreements, but progress has been slow. Individuals can also {{5}} a role by adopting greener habits such as reducing energy use and choosing public transport. Making the {{6}} to a low-carbon economy will require substantial investment in renewable energy. While the challenge is enormous, experts maintain that it is not too {{7}} to act; the technologies needed to limit global warming already {{8}}, and what is lacking is political will.',
      questions: [
        { number:1, options:{A:'represents',B:'poses',C:'forms',D:'presents'}, answer:'B' },
        { number:2, options:{A:'source',B:'cause',C:'reason',D:'factor'}, answer:'B' },
        { number:3, options:{A:'terrible',B:'damaging',C:'catastrophic',D:'severe'}, answer:'C' },
        { number:4, options:{A:'pledged',B:'committed',C:'promised',D:'agreed'}, answer:'B' },
        { number:5, options:{A:'take',B:'play',C:'have',D:'make'}, answer:'B' },
        { number:6, options:{A:'change',B:'shift',C:'transition',D:'move'}, answer:'C' },
        { number:7, options:{A:'late',B:'far',C:'much',D:'long'}, answer:'A' },
        { number:8, options:{A:'exist',B:'are available',C:'can be found',D:'are there'}, answer:'A' }
      ]
    },
    // ── Ejercicio 8 ─────────────────────────────────
    {
      id: 'exercise8', title: 'Ejercicio 8 UE1', description: 'Tema: La vida en la ciudad',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'More than half of the world\'s population now lives in cities, and this {{1}} is expected to continue in the coming decades. Urban areas offer numerous opportunities that are harder to find in rural settings, including better employment prospects, access to education and a {{2}} range of cultural activities. However, city life is not without its drawbacks. Many urban residents {{3}} with issues such as overcrowding, noise pollution and high living costs. Housing in particular has become increasingly {{4}}, with young people finding it difficult to afford even modest accommodation. City authorities face enormous {{5}} in providing adequate infrastructure and public services for growing populations. In response, urban planners are designing smarter, greener cities that aim to improve the {{6}} of life for residents while reducing environmental {{7}}. Despite the challenges, the appeal of urban living remains strong, and cities continue to {{8}} people from all over the world.',
      questions: [
        { number:1, options:{A:'tendency',B:'growth',C:'trend',D:'pattern'}, answer:'C' },
        { number:2, options:{A:'broad',B:'wide',C:'large',D:'extensive'}, answer:'B' },
        { number:3, options:{A:'struggle',B:'cope',C:'deal',D:'fight'}, answer:'A' },
        { number:4, options:{A:'expensive',B:'costly',C:'unaffordable',D:'pricey'}, answer:'C' },
        { number:5, options:{A:'difficulties',B:'challenges',C:'problems',D:'obstacles'}, answer:'B' },
        { number:6, options:{A:'standard',B:'quality',C:'level',D:'condition'}, answer:'B' },
        { number:7, options:{A:'damage',B:'harm',C:'impact',D:'effects'}, answer:'C' },
        { number:8, options:{A:'draw',B:'attract',C:'pull',D:'bring'}, answer:'B' }
      ]
    },
    // ── Ejercicio 9 ─────────────────────────────────
    {
      id: 'exercise9', title: 'Ejercicio 9 UE1', description: 'Tema: La educación',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Education plays a {{1}} role in shaping both individual lives and society as a whole. In most countries, attendance at school is {{2}} for children between certain ages, reflecting the belief that education is a fundamental right. The purpose of schooling extends well beyond the transmission of knowledge; schools also help young people to develop the social and communication skills they will need in {{3}} life. In recent years, there has been growing debate about whether the education system does enough to {{4}} students for the demands of the modern workplace. Some educationalists argue that the traditional focus on academic subjects should give {{5}} to a broader curriculum that places greater {{6}} on creativity and critical thinking. Others, however, maintain that mastery of core subjects such as mathematics remains {{7}} regardless of how the world changes. Most experts {{8}} that high-quality education is the single most effective investment a society can make in its future prosperity.',
      questions: [
        { number:1, options:{A:'fundamental',B:'vital',C:'central',D:'crucial'}, answer:'A' },
        { number:2, options:{A:'compulsory',B:'obligatory',C:'required',D:'necessary'}, answer:'A' },
        { number:3, options:{A:'adult',B:'professional',C:'working',D:'everyday'}, answer:'C' },
        { number:4, options:{A:'train',B:'equip',C:'prepare',D:'ready'}, answer:'C' },
        { number:5, options:{A:'way',B:'place',C:'priority',D:'room'}, answer:'A' },
        { number:6, options:{A:'focus',B:'stress',C:'emphasis',D:'importance'}, answer:'C' },
        { number:7, options:{A:'necessary',B:'important',C:'vital',D:'essential'}, answer:'D' },
        { number:8, options:{A:'agree',B:'argue',C:'believe',D:'maintain'}, answer:'A' }
      ]
    },
    // ── Ejercicio 10 ────────────────────────────────
    {
      id: 'exercise10', title: 'Ejercicio 10 UE1', description: 'Tema: Conservación de la fauna',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Biodiversity is {{1}} serious threat from human activities. Deforestation, pollution and climate change are among the main factors {{2}} species towards extinction at an alarming rate. Scientists estimate we are currently losing plant and animal species faster than at any other time in recorded history. The loss of any species can {{3}} entire ecosystems, since all living things are interconnected in complex food chains. Conservation organisations worldwide work hard to {{4}} endangered species by establishing protected areas and breeding programmes. Public awareness also {{5}} a vital role; when people understand why biodiversity matters, they are more likely to support conservation efforts. Governments must {{6}} greater responsibility for the natural world by enforcing stricter laws against poaching. If urgent action is not taken, future generations may {{7}} a world far poorer in wildlife than the one we {{8}} today.',
      questions: [
        { number:1, options:{A:'at',B:'in',C:'under',D:'facing'}, answer:'C' },
        { number:2, options:{A:'pushing',B:'driving',C:'moving',D:'leading'}, answer:'B' },
        { number:3, options:{A:'damage',B:'affect',C:'harm',D:'disrupt'}, answer:'D' },
        { number:4, options:{A:'save',B:'protect',C:'preserve',D:'guard'}, answer:'B' },
        { number:5, options:{A:'takes',B:'plays',C:'has',D:'makes'}, answer:'B' },
        { number:6, options:{A:'take',B:'accept',C:'assume',D:'bear'}, answer:'A' },
        { number:7, options:{A:'inherit',B:'receive',C:'find',D:'face'}, answer:'A' },
        { number:8, options:{A:'live in',B:'occupy',C:'inhabit',D:'reside in'}, answer:'C' }
      ]
    },
    // ── Ejercicio 11 ────────────────────────────────
    {
      id: 'exercise11', title: 'Ejercicio 11 UE1', description: 'Tema: El turismo',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'International tourism has become one of the world\'s largest industries, {{1}} for around 10% of global GDP and employing hundreds of millions of people. Each year, growing numbers of tourists travel to destinations they have seen on social media, {{2}} increasing pressure on fragile environments and local communities. Destinations that become overly popular can suffer from overtourism, a term used to describe the negative effects of excessive visitor numbers on local infrastructure and culture. Some cities have begun to {{3}} measures to limit visitor numbers or to spread them more evenly throughout the year. Critics argue that mass tourism can lead to a {{4}} in living standards for local residents, {{5}} rents and reducing the availability of local services. Responsible tourism, {{6}} the other hand, aims to minimise negative impacts while maximising economic benefits for local communities. Travellers can {{7}} a positive contribution by respecting local customs and supporting local businesses, thus helping to make tourism genuinely {{8}}.',
      questions: [
        { number:1, options:{A:'accounting',B:'making',C:'providing',D:'contributing'}, answer:'A' },
        { number:2, options:{A:'adding',B:'placing',C:'putting',D:'bringing'}, answer:'C' },
        { number:3, options:{A:'apply',B:'take',C:'introduce',D:'impose'}, answer:'C' },
        { number:4, options:{A:'fall',B:'reduction',C:'decline',D:'decrease'}, answer:'C' },
        { number:5, options:{A:'raising',B:'increasing',C:'lifting',D:'pushing'}, answer:'A' },
        { number:6, options:{A:'on',B:'by',C:'at',D:'from'}, answer:'A' },
        { number:7, options:{A:'make',B:'give',C:'do',D:'create'}, answer:'A' },
        { number:8, options:{A:'beneficial',B:'positive',C:'sustainable',D:'profitable'}, answer:'C' }
      ]
    },
    // ── Ejercicio 12 ────────────────────────────────
    {
      id: 'exercise12', title: 'Ejercicio 12 UE1', description: 'Tema: La salud mental',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Mental health has a {{1}} impact on every aspect of our daily lives. Despite this, a significant {{2}} of people who experience mental health problems never seek professional help. One major reason is the {{3}} that continues to be attached to mental illness in many societies. People may {{4}} embarrassed to discuss their difficulties, fearing they will be judged. Greater awareness, however, is beginning to {{5}} attitudes. Campaigns encouraging people to talk openly about their mental health are helping to break down barriers and {{6}} people towards seeking support. Early intervention is {{7}}; the sooner someone receives the right treatment, the better their chances of making a full recovery. Companies are also increasingly recognising the importance of employee wellbeing, investing in counselling services and creating more supportive working {{8}}.',
      questions: [
        { number:1, options:{A:'powerful',B:'significant',C:'considerable',D:'major'}, answer:'B' },
        { number:2, options:{A:'proportion',B:'number',C:'percentage',D:'amount'}, answer:'A' },
        { number:3, options:{A:'stigma',B:'shame',C:'prejudice',D:'discrimination'}, answer:'A' },
        { number:4, options:{A:'feel',B:'seem',C:'look',D:'appear'}, answer:'A' },
        { number:5, options:{A:'change',B:'alter',C:'transform',D:'shift'}, answer:'D' },
        { number:6, options:{A:'direct',B:'guide',C:'lead',D:'encourage'}, answer:'B' },
        { number:7, options:{A:'vital',B:'critical',C:'crucial',D:'key'}, answer:'C' },
        { number:8, options:{A:'conditions',B:'environments',C:'atmospheres',D:'settings'}, answer:'B' }
      ]
    },
    // ── Ejercicio 13 ────────────────────────────────
    {
      id: 'exercise13', title: 'Ejercicio 13 UE1', description: 'Tema: El voluntariado',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Volunteering — giving one\'s time freely for the benefit of others — is an activity that {{1}} enormous benefits for individuals and communities alike. Studies show that people who volunteer regularly report higher levels of personal satisfaction and a stronger sense of {{2}} to their local community. For young people, volunteering offers a valuable chance to {{3}} practical skills and real-world experience that can enhance employability. Many employers actively {{4}} volunteers, recognising that they tend to possess qualities such as initiative, empathy and teamwork. Opportunities {{5}} across many different sectors, from environmental conservation to education and disaster relief. Despite its advantages, {{6}} are those who argue that volunteering can be exploited by organisations seeking free labour. There are also practical {{7}}, such as the difficulty of finding time in an already busy schedule. Nevertheless, the vast majority of volunteers find the experience profoundly {{8}} and would recommend it without hesitation.',
      questions: [
        { number:1, options:{A:'produces',B:'brings',C:'creates',D:'provides'}, answer:'B' },
        { number:2, options:{A:'connection',B:'belonging',C:'attachment',D:'bond'}, answer:'B' },
        { number:3, options:{A:'gain',B:'get',C:'develop',D:'earn'}, answer:'A' },
        { number:4, options:{A:'prefer',B:'value',C:'seek',D:'choose'}, answer:'B' },
        { number:5, options:{A:'appear',B:'range',C:'exist',D:'span'}, answer:'C' },
        { number:6, options:{A:'these',B:'some',C:'there',D:'few'}, answer:'C' },
        { number:7, options:{A:'challenges',B:'barriers',C:'difficulties',D:'obstacles'}, answer:'C' },
        { number:8, options:{A:'satisfying',B:'rewarding',C:'fulfilling',D:'worthwhile'}, answer:'B' }
      ]
    },
    // ── Ejercicio 14 ────────────────────────────────
    {
      id: 'exercise14', title: 'Ejercicio 14 UE1', description: 'Tema: La economía colaborativa',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'The term \'sharing economy\' {{1}} to an economic model in which individuals rent or share access to goods and services through online platforms, rather than owning them outright. Well-known examples include Airbnb, which connects property owners with travellers seeking accommodation, and Uber, which links drivers with passengers in need of {{2}}. Supporters claim that the model makes more efficient {{3}} of existing resources and offers greater financial {{4}} to both providers and consumers. Critics, however, point {{5}} that such platforms have disrupted traditional industries and may compete unfairly with established businesses. Concerns have also been raised about the {{6}} of workers in the gig economy, who often lack job security and employment rights. Despite these {{7}}, the sharing economy continues to expand globally, and its long-term influence on patterns of work and consumption is likely to be {{8}}.',
      questions: [
        { number:1, options:{A:'refers',B:'relates',C:'applies',D:'belongs'}, answer:'A' },
        { number:2, options:{A:'transport',B:'rides',C:'travel',D:'journeys'}, answer:'B' },
        { number:3, options:{A:'use',B:'usage',C:'application',D:'benefit'}, answer:'A' },
        { number:4, options:{A:'freedom',B:'flexibility',C:'independence',D:'choice'}, answer:'B' },
        { number:5, options:{A:'out',B:'away',C:'off',D:'up'}, answer:'A' },
        { number:6, options:{A:'rights',B:'welfare',C:'treatment',D:'conditions'}, answer:'C' },
        { number:7, options:{A:'issues',B:'criticisms',C:'concerns',D:'drawbacks'}, answer:'C' },
        { number:8, options:{A:'significant',B:'substantial',C:'considerable',D:'major'}, answer:'C' }
      ]
    },
    // ── Ejercicio 15 ────────────────────────────────
    {
      id: 'exercise15', title: 'Ejercicio 15 UE1', description: 'Tema: El arte y la creatividad',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Art has been a central part of human culture since prehistoric times, {{1}} as a means of expression long before the development of written language. Today, creative works take many different {{2}}, from traditional painting and sculpture to digital art and film. Despite this diversity, all forms of artistic expression {{3}} the ability to evoke powerful emotional responses, whether through beauty, provocation or storytelling. In recent years, many galleries and museums have made significant {{4}} in making their collections more widely accessible, launching digital platforms and extending opening hours. Schools also play an important role in developing creativity; research suggests that children who are {{5}} to engage with art develop stronger problem-solving abilities and greater emotional intelligence. {{6}} some argue that the arts are a luxury that cannot be {{7}} in times of economic difficulty, most experts insist that investing in creativity is an investment in human {{8}} and social cohesion.',
      questions: [
        { number:1, options:{A:'acting',B:'functioning',C:'serving',D:'operating'}, answer:'C' },
        { number:2, options:{A:'forms',B:'shapes',C:'types',D:'kinds'}, answer:'A' },
        { number:3, options:{A:'own',B:'hold',C:'possess',D:'share'}, answer:'C' },
        { number:4, options:{A:'efforts',B:'steps',C:'strides',D:'moves'}, answer:'C' },
        { number:5, options:{A:'allowed',B:'encouraged',C:'pushed',D:'enabled'}, answer:'B' },
        { number:6, options:{A:'Although',B:'While',C:'Despite',D:'Whereas'}, answer:'B' },
        { number:7, options:{A:'justified',B:'afforded',C:'funded',D:'supported'}, answer:'B' },
        { number:8, options:{A:'capital',B:'potential',C:'development',D:'wellbeing'}, answer:'D' }
      ]
    },
    // ── Ejercicio 16 ────────────────────────────────
    {
      id: 'exercise16', title: 'Ejercicio 16 UE1', description: 'Tema: Elegir carrera',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'Choosing a career path is one of the most {{1}} decisions a person will make in their lifetime. A fulfilling career can provide not only financial security but also a sense of {{2}} and personal identity. Yet the process of selecting the right profession can be overwhelming, particularly for young people who are still {{3}} their strengths and interests. Many factors {{4}} into a career decision, including personal values, academic qualifications and salary expectations. Career counsellors advise that people should take {{5}} consideration the kind of work environment they thrive in, as well as the lifestyle a particular career is likely to {{6}}. It is equally important to remain {{7}}; the job market evolves constantly, and many of the professions in {{8}} demand today may be significantly less relevant in the future due to automation.',
      questions: [
        { number:1, options:{A:'significant',B:'major',C:'life-changing',D:'crucial'}, answer:'C' },
        { number:2, options:{A:'purpose',B:'meaning',C:'worth',D:'value'}, answer:'A' },
        { number:3, options:{A:'finding',B:'discovering',C:'exploring',D:'developing'}, answer:'C' },
        { number:4, options:{A:'go',B:'come',C:'enter',D:'play'}, answer:'B' },
        { number:5, options:{A:'under',B:'into',C:'in',D:'with'}, answer:'B' },
        { number:6, options:{A:'bring',B:'offer',C:'give',D:'provide'}, answer:'B' },
        { number:7, options:{A:'flexible',B:'adaptable',C:'open',D:'ready'}, answer:'A' },
        { number:8, options:{A:'high',B:'great',C:'strong',D:'heavy'}, answer:'A' }
      ]
    },
    // ── Ejercicio 17 ────────────────────────────────
    {
      id: 'exercise17', title: 'Ejercicio 17 UE1', description: 'Tema: El hábito de leer',
      type: 'multiple_choice',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
      text: 'In an age of digital technology and social media, many people find it increasingly difficult to {{1}} aside time for reading. Yet the benefits of reading regularly are well documented. Books not only {{2}} our vocabulary and improve our ability to express ideas clearly, but they also develop empathy by allowing us to experience the world through the eyes of very different characters. Research has consistently shown that people who read {{3}} perform better across a wide range of academic subjects. Reading also provides a valuable form of mental {{4}}; unlike scrolling through social media, it requires active concentration and can effectively reduce stress. Despite these advantages, reading rates have been {{5}} for decades, particularly among young people. Schools and libraries can help to {{6}} a love of reading from an early age, but ultimately individuals must make a conscious {{7}} to include books in their daily lives. Digital platforms and e-readers have made access to books more {{8}} than ever, removing one of the most common barriers — cost.',
      questions: [
        { number:1, options:{A:'set',B:'put',C:'keep',D:'lay'}, answer:'A' },
        { number:2, options:{A:'develop',B:'build',C:'expand',D:'improve'}, answer:'C' },
        { number:3, options:{A:'regularly',B:'often',C:'frequently',D:'consistently'}, answer:'A' },
        { number:4, options:{A:'relaxation',B:'escape',C:'relief',D:'rest'}, answer:'A' },
        { number:5, options:{A:'falling',B:'declining',C:'dropping',D:'decreasing'}, answer:'B' },
        { number:6, options:{A:'create',B:'develop',C:'foster',D:'encourage'}, answer:'C' },
        { number:7, options:{A:'choice',B:'decision',C:'commitment',D:'effort'}, answer:'C' },
        { number:8, options:{A:'available',B:'affordable',C:'accessible',D:'convenient'}, answer:'C' }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     UE2 — RELLENA LOS HUECOS
  ══════════════════════════════════════════════════ */
  UE2: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'exercise1', title: 'Ejercicio 1 UE2', description: 'Tema: El café',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Coffee is one of the most popular drinks in the world, and {{1}} is consumed by millions of people every day. Although many people drink it simply {{2}} of habit, coffee has a number of proven health benefits. Research has shown that moderate consumption can reduce {{3}} risk of certain diseases, including type 2 diabetes. However, drinking too {{4}} coffee can lead to side effects such as anxiety and difficulty sleeping. The amount of caffeine {{5}} a standard cup of coffee varies depending on the type of bean and {{6}} it is prepared. Many people are not {{7}} that decaffeinated coffee still contains small amounts of caffeine. Despite this, it remains a popular choice {{8}} those who are sensitive to the effects of caffeine.',
      answers: { '1':'it', '2':'out', '3':'the', '4':'much', '5':'in', '6':'how', '7':'aware', '8':'for' }
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'exercise2', title: 'Ejercicio 2 UE2', description: 'Tema: Los parques urbanos',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Urban parks play a vital role {{1}} the wellbeing of city residents. Despite the fact {{2}} cities are becoming increasingly built-up, many local authorities are investing in green spaces. These areas give people {{3}} opportunity to exercise, relax and socialise outdoors. Studies have demonstrated that people {{4}} live near parks tend to be happier and healthier than {{5}} who do not. In addition to {{6}} physical benefits, parks also contribute to environmental sustainability by reducing air pollution and urban heat. {{7}} some city dwellers argue that the land would be better used for housing, most experts agree that the long-term advantages of parks far {{8}} the costs.',
      answers: { '1':'in', '2':'that', '3':'the', '4':'who', '5':'those', '6':'their', '7':['although','though','while','whilst'], '8':'outweigh' }
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'exercise3', title: 'Ejercicio 3 UE2', description: 'Tema: El reciclaje',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Recycling is one of the most effective ways {{1}} which individuals can help reduce environmental waste. By sorting household rubbish into the right containers, families can ensure {{2}} recyclable materials such as glass, paper and plastic do not end up in landfill. {{3}}, many people do not realise how much of their everyday waste could be recycled rather than thrown away. Food scraps, {{4}} example, can be converted into compost, a natural fertiliser that enriches soil. Some materials, such as aluminium, can be recycled repeatedly {{5}} any loss of quality. Local authorities have a crucial role to play; {{6}} is their responsibility to inform the public about what can be recycled and how. The more people who take {{7}} in recycling schemes, the greater the benefit to the environment. If everyone made even a small effort, our collective impact on reducing waste would be far {{8}} than it is today.',
      answers: { '1':'in', '2':'that', '3':'However', '4':'for', '5':'without', '6':'it', '7':'part', '8':'greater' }
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'exercise4', title: 'Ejercicio 4 UE2', description: 'Tema: Aprender idiomas',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Learning a foreign language is widely regarded {{1}} one of the most rewarding skills a person can develop. Not only does it open new career opportunities, {{2}} it also provides a richer understanding of other cultures and ways of thinking. Research has demonstrated {{3}} people who speak more than one language tend to have sharper memories and better problem-solving skills. The ideal time to begin is considered to be in childhood, {{4}} the brain is most receptive to acquiring new sounds and structures. However, determined adults can {{5}} achieve fluency with the right approach, particularly when they have regular exposure to native speakers. Technology has made language learning more accessible {{6}} ever before. Even so, most linguists agree {{7}} there is no substitute for actually living in a country where the language is spoken. The effort involved in mastering a new language far {{8}} the difficulties encountered along the way.',
      answers: { '1':'as', '2':'but', '3':'that', '4':'when', '5':'still', '6':'than', '7':'that', '8':'outweighs' }
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'exercise5', title: 'Ejercicio 5 UE2', description: 'Tema: El océano',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'The ocean covers more {{1}} 70% of the Earth\'s surface and is essential for all life on our planet. It is home to an extraordinary diversity of species, ranging from microscopic plankton to the largest animals {{2}} have ever lived on Earth. The ocean {{3}} plays a crucial role in regulating the global climate by absorbing vast quantities of carbon dioxide. Despite {{4}} enormous importance, much of the seafloor remains unexplored — scientists estimate that less than 20% has {{5}} been mapped in detail. Human activities are placing marine ecosystems under increasing pressure. Plastic pollution, overfishing and rising sea temperatures are causing damage {{6}} may take centuries to reverse. Unless stronger protective measures are introduced, {{7}} is feared that some of the ocean\'s most vulnerable ecosystems could be lost forever. Governments around the world are therefore {{8}} called upon to introduce stricter regulations to protect marine environments.',
      answers: { '1':'than', '2':['that','which'], '3':'also', '4':'its', '5':'been', '6':['that','which'], '7':'it', '8':'being' }
    },
    // ── Ejercicio 6 ─────────────────────────────────
    {
      id: 'exercise6', title: 'Ejercicio 6 UE2', description: 'Tema: El ejercicio físico',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Regular physical exercise is widely recognised {{1}} one of the most effective ways to maintain good health. Not {{2}} does it improve cardiovascular fitness and strengthen muscles, but it also has significant benefits for mental wellbeing. People {{3}} exercise regularly experience lower levels of stress and are less likely to suffer from depression. Despite {{4}} well-documented benefits, a large proportion of the population fails to meet the recommended levels of physical activity. Many people are put {{5}} by the idea of going to a gym or joining a sports club. In reality, even moderate activity such {{6}} a thirty-minute walk each day can make a considerable difference. Health experts recommend {{7}} adults should aim for at least 150 minutes of moderate exercise per week. Small changes, {{8}} as taking the stairs instead of a lift, can be an effective starting point.',
      answers: { '1':'as', '2':'only', '3':'who', '4':['these','its'], '5':'off', '6':'as', '7':'that', '8':'such' }
    },
    // ── Ejercicio 7 ─────────────────────────────────
    {
      id: 'exercise7', title: 'Ejercicio 7 UE2', description: 'Tema: Los museos',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Museums serve as important guardians of our shared cultural heritage, preserving objects and artworks {{1}} future generations. By visiting a museum, members of the public gain the opportunity to learn about history, science and art in a way {{2}} is both engaging and educational. In recent years, many museums have undergone major transformations, reinventing {{3}} as interactive, family-friendly spaces that appeal to a wide range of visitors. Digital technology has {{4}} played an important role in this process, enabling museums to offer virtual tours to people {{5}} cannot visit in person. Despite the availability of these digital alternatives, it is widely agreed {{6}} nothing can fully replace the experience of seeing original objects first-hand. In {{7}} of their cultural value, most museums in the United Kingdom remain free of charge, based on the principle that access to culture should be available to {{8}}.',
      answers: { '1':'for', '2':['that','which'], '3':'themselves', '4':'also', '5':'who', '6':'that', '7':'spite', '8':['all','everyone'] }
    },
    // ── Ejercicio 8 ─────────────────────────────────
    {
      id: 'exercise8', title: 'Ejercicio 8 UE2', description: 'Tema: La amistad',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Friendship is {{1}} of the most important sources of wellbeing in a person\'s life. Having close friends has been shown to reduce stress, lower the risk of depression and even contribute to a longer life. Despite {{2}} benefits, forming and maintaining friendships can be surprisingly challenging, particularly in adulthood, when social circles tend to become smaller. Research suggests {{3}} the qualities people value most in a friend are honesty, reliability and a genuine interest in others\' lives. Technology has changed the nature of friendship significantly; {{4}} is now possible to maintain contact with many people through social media, even {{5}} they live on the opposite side of the world. However, many psychologists caution that online connections, {{6}} valuable they may be, cannot replace the depth of face-to-face interaction. Making time for friends, {{7}} matter how busy our lives become, is one of the most worthwhile investments we can make in {{8}} mental health.',
      answers: { '1':'one', '2':['these','its'], '3':'that', '4':'it', '5':'if', '6':'however', '7':'no', '8':'our' }
    },
    // ── Ejercicio 9 ─────────────────────────────────
    {
      id: 'exercise9', title: 'Ejercicio 9 UE2', description: 'Tema: La gestión del tiempo',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'In today\'s fast-paced world, effective time management has become {{1}} essential skill for both students and professionals. Many people struggle to balance competing demands, often with {{2}} time to complete everything to the standard they would like. Research suggests that those {{3}} manage their time well tend to be more productive and experience less anxiety. One of the most effective strategies is to break large tasks {{4}} smaller, more manageable steps, which makes them feel less daunting. {{5}} useful technique is to prioritise tasks according to their urgency and importance, tackling the most critical ones first. It is {{6}} important to recognise the value of rest; taking regular breaks has been shown to improve focus and creativity. Technology can be both a help and a hindrance {{7}} it comes to managing time — productivity apps can keep us organised, while notifications and social media can be a major source of distraction. Ultimately, good time management is a habit {{8}} can be learned by anyone who is willing to practise it.',
      answers: { '1':'an', '2':'little', '3':'who', '4':'into', '5':'Another', '6':'equally', '7':'when', '8':['that','which'] }
    },
    // ── Ejercicio 10 ────────────────────────────────
    {
      id: 'exercise10', title: 'Ejercicio 10 UE2', description: 'Tema: Las compras en línea',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Online shopping has transformed the way millions of people purchase goods, offering a level of convenience {{1}} was previously unimaginable. With just a few clicks, consumers can browse thousands of products and have items delivered directly to {{2}} door, often within just a day or two. For {{3}} its advantages, however, online shopping is not without its drawbacks. One concern is the environmental impact of the delivery industry, {{4}} contributes significantly to carbon emissions. Returns also generate considerable waste, as many items are sent back without {{5}} been used. Furthermore, small local businesses can struggle to compete {{6}} the low prices offered by large online retailers. There are {{7}} security concerns around sharing personal and financial information online, which puts some consumers off using such services. Despite these issues, the convenience and choice offered by online shopping means {{8}} it is unlikely to decline in popularity any time soon.',
      answers: { '1':['that','which'], '2':'their', '3':'all', '4':'which', '5':'having', '6':'with', '7':'also', '8':'that' }
    },
    // ── Ejercicio 11 ────────────────────────────────
    {
      id: 'exercise11', title: 'Ejercicio 11 UE2', description: 'Tema: El desperdicio de alimentos',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Food waste is a growing global problem with serious environmental and ethical consequences. Around a third of {{1}} food produced globally is thrown away before it is ever eaten, {{2}} represents an enormous waste of the resources used in its production. When food decomposes in landfill, it releases methane, a greenhouse gas that is far more damaging {{3}} carbon dioxide in the short term. From an ethical perspective, the scale of food waste is particularly troubling given {{4}} hundreds of millions of people around the world still go hungry. Reducing food waste begins at home; planning meals {{5}} advance and storing leftovers properly can significantly extend their shelf life. Supermarkets also play an important role by reducing promotions that encourage customers to buy more {{6}} they need. If {{7}} of us made a conscious effort to reduce waste, the collective impact would {{8}} enormous.',
      answers: { '1':'the', '2':'which', '3':'than', '4':'that', '5':'in', '6':'than', '7':'each', '8':'be' }
    },
    // ── Ejercicio 12 ────────────────────────────────
    {
      id: 'exercise12', title: 'Ejercicio 12 UE2', description: 'Tema: El sueño',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Getting enough sleep is one of the most important things we can do for {{1}} health, yet it is estimated that a third of adults regularly fail to get the recommended amount. Sleep deprivation can have serious consequences {{2}} concentration, decision-making and emotional stability. In the long {{3}}, chronic sleep loss has been linked to a higher risk of obesity, heart disease and depression. The modern lifestyle is partly to {{4}} for this widespread problem; the use of smartphones in the evening disrupts the body\'s natural sleep cycle {{5}} exposing it to artificial light. Experts recommend avoiding screens for {{6}} least an hour before bedtime and keeping to a consistent sleep schedule, even at weekends. Some people turn to sleep medication, but this is generally seen {{7}} a short-term solution rather than a permanent fix. Investing in good sleep is ultimately one of the best decisions anyone can make for {{8}} overall wellbeing.',
      answers: { '1':'our', '2':'for', '3':'run', '4':'blame', '5':'by', '6':'at', '7':'as', '8':'their' }
    },
    // ── Ejercicio 13 ────────────────────────────────
    {
      id: 'exercise13', title: 'Ejercicio 13 UE2', description: 'Tema: La migración',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Migration — the movement of people from one place to another — has been a fundamental part of human history. {{1}} year, millions of people choose to leave their home countries in search of better opportunities or to escape conflict. Host countries can benefit considerably {{2}} migration; immigrants often fill skills shortages in key sectors such as healthcare, construction and technology. {{3}}, migration also presents social and political challenges, and debates about immigration policy are among the most divisive in modern politics. It is important to distinguish {{4}} economic migrants, who move voluntarily in search of work, and refugees, who are forced to flee {{5}} to persecution or conflict. {{6}} of their reasons for moving, migrants typically display remarkable resilience. Research consistently shows that, {{7}} average, immigrants make positive contributions to the economies of the countries they settle in. A balanced, evidence-{{8}} approach to immigration policy is therefore essential.',
      answers: { '1':'Each', '2':'from', '3':'However', '4':'between', '5':'due', '6':'Regardless', '7':'on', '8':'based' }
    },
    // ── Ejercicio 14 ────────────────────────────────
    {
      id: 'exercise14', title: 'Ejercicio 14 UE2', description: 'Tema: La creatividad',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Creativity is often thought of {{1}} a gift that only a lucky few possess, but research increasingly suggests that it is a skill that can be developed by almost anyone. Creative thinking plays a crucial role {{2}} fields as diverse as science, business and the arts. Companies that foster a creative culture are {{3}} likely to come up with innovative solutions and gain a competitive advantage. For individuals, engaging in creative activities such as painting or writing can be deeply therapeutic, providing an outlet {{4}} stress and negative emotions. Schools are beginning to recognise {{5}} importance of nurturing creativity from an early age, though critics argue that the current emphasis on testing leaves {{6}} room for creative exploration. Research shows that creativity flourishes when people are given the freedom to experiment and make mistakes {{7}} fear of being judged. Adults who take up a creative hobby often report feeling more fulfilled and claim that it transforms {{8}} perspective on life.',
      answers: { '1':'as', '2':'in', '3':'more', '4':'for', '5':'the', '6':'little', '7':'without', '8':'their' }
    },
    // ── Ejercicio 15 ────────────────────────────────
    {
      id: 'exercise15', title: 'Ejercicio 15 UE2', description: 'Tema: Los robots y la automatización',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Robots and artificial intelligence are transforming the workplace at an unprecedented {{1}}, raising important questions about the future of employment. Many routine and repetitive tasks can now be performed more quickly and accurately by machines {{2}} by humans, making certain jobs obsolete. {{3}}, automation also creates new types of employment, particularly in areas such as engineering, data analysis and machine maintenance. The challenge for societies is to ensure {{4}} workers who are displaced by automation are given the support and retraining they need. Education systems must adapt {{5}} better preparing students for a future in {{6}} human skills such as creativity and emotional intelligence will be highly valued. Governments and businesses need to work {{7}} to develop policies that harness the economic benefits of automation {{8}} minimising its negative social consequences.',
      answers: { '1':'rate', '2':'than', '3':'However', '4':'that', '5':'by', '6':'which', '7':'together', '8':'while' }
    },
    // ── Ejercicio 16 ────────────────────────────────
    {
      id: 'exercise16', title: 'Ejercicio 16 UE2', description: 'Tema: La naturaleza y el bienestar',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Growing evidence suggests that spending time in nature has profound benefits for both physical and mental health. People {{1}} live close to green spaces such as parks and forests tend to report higher levels of happiness and lower rates of stress-related illness. Even brief exposure to natural environments has {{2}} shown to reduce blood pressure and improve mood. In {{3}} of this, many urban planners are beginning to incorporate more green spaces into city designs. Research into why nature has {{4}} a positive effect on wellbeing suggests it may be connected to our evolutionary history; humans {{5}} evolved in natural environments long before the development of urban life. Simply {{6}} at natural scenes — even photographs of landscapes — can trigger a calming physiological response. Nature-based activities such as gardening and hiking are growing in popularity, and {{7}} increasing number of healthcare professionals now recommend them as part of mental health treatment. There has perhaps never been a greater need to reconnect with the natural world than in {{8}} current age of digital overload.',
      answers: { '1':'who', '2':'been', '3':'light', '4':'such', '5':'have', '6':'looking', '7':'an', '8':'our' }
    },
    // ── Ejercicio 17 ────────────────────────────────
    {
      id: 'exercise17', title: 'Ejercicio 17 UE2', description: 'Tema: Las redes sociales',
      type: 'open_cloze',
      instructions: 'For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.',
      text: 'Social media platforms have changed the way people communicate, consume information and present {{1}} to the world. For many users, {{2}} has become a primary source of news, with articles shared far more rapidly than traditional media could ever manage. This speed, {{3}}, comes at a cost; stories are often shared before they have been verified, and misinformation can reach millions of people {{4}} hours. Despite the risks, social media also brings considerable benefits. It gives marginalised communities a voice, enables people to connect with {{5}} who share their interests, and has played a significant role in organising social and political movements. Experts advise users to be critical {{6}} the sources they follow and to regularly check the reliability of the content they share. Many platforms have introduced tools {{7}} help users identify false information, though campaigners argue {{8}} far more needs to be done to tackle the problem effectively.',
      answers: { '1':'themselves', '2':'it', '3':'however', '4':'within', '5':'others', '6':'of', '7':'to', '8':'that' }
    }
  ],

  /* ══════════════════════════════════════════════════
     UE3 — FORMACIÓN DE PALABRAS
  ══════════════════════════════════════════════════ */
  UE3: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'exercise1', title: 'Ejercicio 1 UE3', description: 'Tema: La tecnología',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The rapid {{1}} of artificial intelligence is changing many industries.', base_word:'DEVELOP', answer:'development' },
        { number:2, text:'Scientists have made some {{2}} discoveries in the field of quantum computing.', base_word:'REMARK', answer:'remarkable' },
        { number:3, text:'The new software was praised for its {{3}} and ease of use.', base_word:'SIMPLE', answer:'simplicity' },
        { number:4, text:'Many people feel {{4}} without their smartphones, even for a short time.', base_word:'HELP', answer:'helpless' },
        { number:5, text:'The government introduced new {{5}} to control the use of personal data.', base_word:'REGULATE', answer:'regulations' },
        { number:6, text:'His talk on climate change was both {{6}} and thought-provoking.', base_word:'INFORM', answer:'informative' },
        { number:7, text:"The company's {{7}} led to the closure of several departments.", base_word:'RESTRUCTURE', answer:'restructuring' },
        { number:8, text:'She was {{8}} talented, winning awards in both music and mathematics.', base_word:'EXCEPTION', answer:'exceptionally' }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'exercise2', title: 'Ejercicio 2 UE3', description: 'Tema: El deporte',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'Regular exercise is {{1}} for both physical and mental health.', base_word:'BENEFIT', answer:'beneficial' },
        { number:2, text:'The marathon runner showed incredible {{2}} throughout the race.', base_word:'DETERMINE', answer:'determination' },
        { number:3, text:'Many professional athletes face enormous {{3}} from coaches and fans.', base_word:'PRESS', answer:'pressure' },
        { number:4, text:'Joining a sports team is a great way to improve your {{4}} skills.', base_word:'LEAD', answer:'leadership' },
        { number:5, text:'The {{5}} of the new sports centre attracted thousands of visitors.', base_word:'OPEN', answer:'opening' },
        { number:6, text:'She gave a {{6}} performance that secured first place in the competition.', base_word:'POWER', answer:'powerful' },
        { number:7, text:'The coach offered {{7}} advice to the young players after the match.', base_word:'CONSTRUCT', answer:'constructive' },
        { number:8, text:'His lack of {{8}} meant he missed several important training sessions.', base_word:'COMMIT', answer:'commitment' }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'exercise3', title: 'Ejercicio 3 UE3', description: 'Tema: Los negocios',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The {{1}} of the company was a turning point in the city\'s economic history.', base_word:'FOUND', answer:'founding' },
        { number:2, text:'She demonstrated remarkable {{2}} in finding creative solutions to financial problems.', base_word:'INNOVATE', answer:'innovation' },
        { number:3, text:'The CEO delivered a highly {{3}} speech at the annual shareholders\' meeting.', base_word:'PERSUADE', answer:'persuasive' },
        { number:4, text:'Many workers were made {{4}} during the economic downturn.', base_word:'REDUNDANT', answer:'redundant' },
        { number:5, text:"The company's {{5}} practices helped reduce its environmental footprint.", base_word:'SUSTAIN', answer:'sustainable' },
        { number:6, text:'There was a severe {{6}} of qualified engineers in the region.', base_word:'SHORT', answer:'shortage' },
        { number:7, text:'The {{7}} of the two firms created one of the largest companies in the sector.', base_word:'MERGE', answer:'merger' },
        { number:8, text:'Her attention to detail and {{8}} made her an excellent team leader.', base_word:'RELIABLE', answer:'reliability' }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'exercise4', title: 'Ejercicio 4 UE3', description: 'Tema: La medicina',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The {{1}} spread across the country within weeks, affecting thousands of people.', base_word:'INFECT', answer:'infection' },
        { number:2, text:'The patient made a full {{2}} after the operation, thanks to excellent care.', base_word:'RECOVER', answer:'recovery' },
        { number:3, text:'Advances in medical technology have made many conditions far more {{3}} than before.', base_word:'TREAT', answer:'treatable' },
        { number:4, text:'The new drug proved to be highly {{4}} in reducing chronic pain.', base_word:'EFFECT', answer:'effective' },
        { number:5, text:'The government invested heavily in disease {{5}} programmes across the country.', base_word:'PREVENT', answer:'prevention' },
        { number:6, text:'She specialised in the early {{6}} of heart disease in high-risk patients.', base_word:'DIAGNOSE', answer:'diagnosis' },
        { number:7, text:'His quick thinking in the emergency demonstrated great {{7}}.', base_word:'PROFESSION', answer:'professionalism' },
        { number:8, text:'The hospital was renowned for the {{8}} of its medical care.', base_word:'EXCEL', answer:'excellence' }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'exercise5', title: 'Ejercicio 5 UE3', description: 'Tema: El medio ambiente',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The {{1}} effects of pollution on local wildlife were clearly visible.', base_word:'DESTROY', answer:'destructive' },
        { number:2, text:'Many countries are trying to reduce their {{2}} on fossil fuels.', base_word:'DEPEND', answer:'dependence' },
        { number:3, text:'The {{3}} of large areas of rainforest is a major global concern.', base_word:'DESTROY', answer:'destruction' },
        { number:4, text:'Governments must take {{4}} action to protect endangered habitats.', base_word:'URGENCY', answer:'urgent' },
        { number:5, text:'The government introduced strict {{5}} to reduce air pollution in cities.', base_word:'REGULATE', answer:'regulations' },
        { number:6, text:'The {{6}} of rare species is one of the most pressing environmental challenges.', base_word:'CONSERVE', answer:'conservation' },
        { number:7, text:'Scientists described the level of pollution in the river as {{7}}.', base_word:'ACCEPT', answer:'unacceptable' },
        { number:8, text:'Public {{8}} of environmental issues has grown significantly in recent years.', base_word:'AWARE', answer:'awareness' }
      ]
    },
    // ── Ejercicio 6 ─────────────────────────────────
    {
      id: 'exercise6', title: 'Ejercicio 6 UE3', description: 'Tema: La música',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'She gave a truly {{1}} performance of the concerto that moved the audience.', base_word:'MEMORY', answer:'memorable' },
        { number:2, text:'He has a natural {{2}} for music and learned to play three instruments as a child.', base_word:'ABLE', answer:'ability' },
        { number:3, text:'The composer\'s work served as a lasting {{3}} to musicians throughout the century.', base_word:'INSPIRE', answer:'inspiration' },
        { number:4, text:'The musicians showed extraordinary {{4}} in their interpretation of the piece.', base_word:'COMMIT', answer:'commitment' },
        { number:5, text:'The concert hall was {{5}} renovated and now seats 3,000 people.', base_word:'RECENT', answer:'recently' },
        { number:6, text:'The band\'s latest album was {{6}} praised by critics around the world.', base_word:'UNIVERSE', answer:'universally' },
        { number:7, text:'She pursued a highly successful career as a professional {{7}}.', base_word:'COMPOSE', answer:'composer' },
        { number:8, text:'Music has the power to bring people of different {{8}} together.', base_word:'NATION', answer:'nationalities' }
      ]
    },
    // ── Ejercicio 7 ─────────────────────────────────
    {
      id: 'exercise7', title: 'Ejercicio 7 UE3', description: 'Tema: El turismo',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The island has become a highly {{1}} destination for beach lovers worldwide.', base_word:'SEEK', answer:'sought-after' },
        { number:2, text:'The {{2}} of the old town was funded entirely by the local government.', base_word:'RESTORE', answer:'restoration' },
        { number:3, text:'Tourism makes a considerable {{3}} to the country\'s economy each year.', base_word:'CONTRIBUTE', answer:'contribution' },
        { number:4, text:'Visitors were impressed by the {{4}} views from the mountain top.', base_word:'SPECTACLE', answer:'spectacular' },
        { number:5, text:'The hotel offered visitors an {{5}} range of leisure facilities.', base_word:'IMPRESS', answer:'impressive' },
        { number:6, text:'Local residents are increasingly concerned about {{6}} in popular tourist spots.', base_word:'CROWD', answer:'overcrowding' },
        { number:7, text:'Travelling {{7}} is becoming more popular as people seek to reduce their carbon footprint.', base_word:'SUSTAIN', answer:'sustainably' },
        { number:8, text:'The guide spoke with great {{8}} about the history and traditions of the region.', base_word:'KNOW', answer:'knowledge' }
      ]
    },
    // ── Ejercicio 8 ─────────────────────────────────
    {
      id: 'exercise8', title: 'Ejercicio 8 UE3', description: 'Tema: La psicología',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'She studied the {{1}} of human decision-making in high-pressure situations.', base_word:'COMPLEX', answer:'complexity' },
        { number:2, text:'He gave a {{2}} account of his childhood experiences in the memoir.', base_word:'DETAIL', answer:'detailed' },
        { number:3, text:'The results of the experiment were highly {{3}} and attracted worldwide attention.', base_word:'SIGNIFY', answer:'significant' },
        { number:4, text:'Many people find it difficult to discuss their {{4}} openly with others.', base_word:'FEEL', answer:'feelings' },
        { number:5, text:'She struggled with severe {{5}} following the stressful events at work.', base_word:'ANXIOUS', answer:'anxiety' },
        { number:6, text:'He responded to criticism with remarkable {{6}} that surprised everyone present.', base_word:'MATURE', answer:'maturity' },
        { number:7, text:'The study revealed a strong {{7}} between stress levels and poor sleep quality.', base_word:'CONNECT', answer:'connection' },
        { number:8, text:'Children need a {{8}} home environment in order to develop properly.', base_word:'NURTURE', answer:'nurturing' }
      ]
    },
    // ── Ejercicio 9 ─────────────────────────────────
    {
      id: 'exercise9', title: 'Ejercicio 9 UE3', description: 'Tema: La arquitectura',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The building was widely admired for its {{1}} and unconventional design.', base_word:'ORIGIN', answer:'originality' },
        { number:2, text:'The {{2}} of the new bridge required years of careful planning and engineering.', base_word:'CONSTRUCT', answer:'construction' },
        { number:3, text:'The architect was praised for her {{3}} approach to urban design.', base_word:'CREATE', answer:'creative' },
        { number:4, text:'The old factory was {{4}} converted into a series of luxury apartments.', base_word:'SUCCESS', answer:'successfully' },
        { number:5, text:'The {{5}} of the ancient ruins required considerable funding from the government.', base_word:'RESTORE', answer:'restoration' },
        { number:6, text:'The building\'s glass facade is particularly {{6}} and has become a city landmark.', base_word:'STRIKE', answer:'striking' },
        { number:7, text:'The new library has become the {{7}} point of the city\'s regeneration project.', base_word:'FOCUS', answer:'focal' },
        { number:8, text:'Living in a well-designed space can significantly improve your {{8}}.', base_word:'PRODUCT', answer:'productivity' }
      ]
    },
    // ── Ejercicio 10 ────────────────────────────────
    {
      id: 'exercise10', title: 'Ejercicio 10 UE3', description: 'Tema: La industria alimentaria',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The {{1}} of genetically modified crops remains controversial among scientists.', base_word:'PRODUCE', answer:'production' },
        { number:2, text:'Food {{2}} is a growing concern in many developing countries around the world.', base_word:'SECURE', answer:'security' },
        { number:3, text:'The company launched a new range of {{3}} products aimed at health-conscious consumers.', base_word:'DIET', answer:'dietary' },
        { number:4, text:'Excessive {{4}} of processed food is a leading cause of obesity in developed countries.', base_word:'CONSUME', answer:'consumption' },
        { number:5, text:'The chef was recognised for her {{5}} use of locally sourced seasonal ingredients.', base_word:'INNOVATE', answer:'innovative' },
        { number:6, text:'The report highlighted the {{6}} of clear food labelling for consumer health.', base_word:'IMPORTANT', answer:'importance' },
        { number:7, text:'The factory uses {{7}} machines to sort and package products at high speed.', base_word:'AUTOMATE', answer:'automated' },
        { number:8, text:'Consumers are becoming increasingly {{8}} about where their food comes from.', base_word:'CONSCIENCE', answer:'conscious' }
      ]
    },
    // ── Ejercicio 11 ────────────────────────────────
    {
      id: 'exercise11', title: 'Ejercicio 11 UE3', description: 'Tema: El transporte',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'Air travel has become {{1}} cheaper and more accessible in recent decades.', base_word:'CONSIDER', answer:'considerably' },
        { number:2, text:'The {{2}} of the new railway line cut journey times in half.', base_word:'COMPLETE', answer:'completion' },
        { number:3, text:'The government is investing heavily in {{3}} transport to reduce carbon emissions.', base_word:'SUSTAIN', answer:'sustainable' },
        { number:4, text:'Commuters were {{4}} by the unexpected cancellation of all morning trains.', base_word:'FRUSTRATE', answer:'frustrated' },
        { number:5, text:'Electric vehicles have become an {{5}} popular choice for urban drivers.', base_word:'INCREASE', answer:'increasingly' },
        { number:6, text:'The new road system has greatly improved the {{6}} of the city centre.', base_word:'CONNECT', answer:'connectivity' },
        { number:7, text:'The accident was caused by the driver\'s {{7}} at the wheel.', base_word:'CARELESS', answer:'carelessness' },
        { number:8, text:'Cycling is seen as an {{8}} and environmentally friendly form of transport.', base_word:'ECONOMY', answer:'economical' }
      ]
    },
    // ── Ejercicio 12 ────────────────────────────────
    {
      id: 'exercise12', title: 'Ejercicio 12 UE3', description: 'Tema: La moda',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The designer\'s new collection was described as highly {{1}} by all who saw it.', base_word:'INFLUENCE', answer:'influential' },
        { number:2, text:'She always dresses in a very {{2}} way, keeping up with the latest trends.', base_word:'FASHION', answer:'fashionable' },
        { number:3, text:'The rise of fast fashion has had a {{3}} impact on the environment.', base_word:'DEVASTATE', answer:'devastating' },
        { number:4, text:'Many consumers are now more {{4}} about where and how their clothes are made.', base_word:'CONSCIENCE', answer:'conscientious' },
        { number:5, text:'The fashion industry is considered one of the world\'s most {{5}} industries.', base_word:'POLLUTE', answer:'polluting' },
        { number:6, text:'The designer\'s latest collection was the subject of considerable {{6}}.', base_word:'CRITICISE', answer:'criticism' },
        { number:7, text:'The company has made a commitment to more {{7}} production methods.', base_word:'ETHIC', answer:'ethical' },
        { number:8, text:'She made an unexpected {{8}} at the show, wearing a completely different style.', base_word:'APPEAR', answer:'appearance' }
      ]
    },
    // ── Ejercicio 13 ────────────────────────────────
    {
      id: 'exercise13', title: 'Ejercicio 13 UE3', description: 'Tema: La ciencia',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The {{1}} made a series of groundbreaking discoveries in the field of genetics.', base_word:'SCIENCE', answer:'scientist' },
        { number:2, text:'Her {{2}} into the causes of climate change took several years to complete.', base_word:'INVESTIGATE', answer:'investigation' },
        { number:3, text:'The results of the experiment were {{3}} by an independent panel of experts.', base_word:'VERIFY', answer:'verified' },
        { number:4, text:'Advances in technology have made many scientific processes considerably more {{4}}.', base_word:'EFFICIENCY', answer:'efficient' },
        { number:5, text:'The new vaccine proved highly {{5}} in clinical trials conducted worldwide.', base_word:'EFFECT', answer:'effective' },
        { number:6, text:'She was awarded a grant for her {{6}} research into renewable energy sources.', base_word:'PIONEER', answer:'pioneering' },
        { number:7, text:"The scientist's conclusions were based on careful {{7}} of data collected over ten years.", base_word:'ANALYSE', answer:'analysis' },
        { number:8, text:'Public {{8}} of science has increased thanks to popular science programmes.', base_word:'UNDERSTAND', answer:'understanding' }
      ]
    },
    // ── Ejercicio 14 ────────────────────────────────
    {
      id: 'exercise14', title: 'Ejercicio 14 UE3', description: 'Tema: La comunicación',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The manager dealt with the difficult situation with great {{1}}.', base_word:'PROFESSION', answer:'professionalism' },
        { number:2, text:'She gave a highly {{2}} speech that convinced the audience to support the project.', base_word:'PERSUADE', answer:'persuasive' },
        { number:3, text:'The ability to listen {{3}} is just as important as the ability to speak well.', base_word:'EFFECT', answer:'effectively' },
        { number:4, text:'Poor {{4}} of information between departments led to several misunderstandings.', base_word:'DISTRIBUTE', answer:'distribution' },
        { number:5, text:'She expressed herself with remarkable {{5}} and precision during the debate.', base_word:'CLEAR', answer:'clarity' },
        { number:6, text:'The politician was well known for his {{6}} use of language to win votes.', base_word:'RHETORIC', answer:'rhetorical' },
        { number:7, text:'Her {{7}} of body language helped her to read situations quickly.', base_word:'UNDERSTAND', answer:'understanding' },
        { number:8, text:'The two countries reached a historic agreement through careful {{8}}.', base_word:'NEGOTIATE', answer:'negotiation' }
      ]
    },
    // ── Ejercicio 15 ────────────────────────────────
    {
      id: 'exercise15', title: 'Ejercicio 15 UE3', description: 'Tema: La agricultura',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The farm uses {{1}} methods that avoid the use of artificial chemicals.', base_word:'TRADITION', answer:'traditional' },
        { number:2, text:'The {{2}} of crops has become more difficult due to changing weather patterns.', base_word:'CULTIVATE', answer:'cultivation' },
        { number:3, text:'New irrigation techniques have {{3}} improved crop yields in dry regions.', base_word:'DRAMA', answer:'dramatically' },
        { number:4, text:'Farmers are increasingly facing challenges due to {{4}} weather conditions.', base_word:'PREDICT', answer:'unpredictable' },
        { number:5, text:'The region is heavily {{5}} on its wheat harvest for export income.', base_word:'DEPEND', answer:'dependent' },
        { number:6, text:'The introduction of GM crops has been both {{6}} and controversial.', base_word:'BENEFIT', answer:'beneficial' },
        { number:7, text:'Rural areas have suffered from a severe {{7}} of young agricultural workers.', base_word:'SHORT', answer:'shortage' },
        { number:8, text:'{{8}} farming can help restore soil quality and reduce the need for fertilisers.', base_word:'ORGANISE', answer:'Organic' }
      ]
    },
    // ── Ejercicio 16 ────────────────────────────────
    {
      id: 'exercise16', title: 'Ejercicio 16 UE3', description: 'Tema: El entretenimiento',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The film received {{1}} praise from critics and audiences around the world.', base_word:'UNIVERSE', answer:'universal' },
        { number:2, text:'She gave a truly {{2}} performance that had the entire audience in tears.', base_word:'MOVE', answer:'moving' },
        { number:3, text:"The show's {{3}} rose sharply after a famous actor joined the cast.", base_word:'POPULAR', answer:'popularity' },
        { number:4, text:'Many older viewers were {{4}} by the graphic content of the series.', base_word:'SHOCK', answer:'shocked' },
        { number:5, text:'The documentary offers a fascinating and highly {{5}} exploration of climate change.', base_word:'INFORM', answer:'informative' },
        { number:6, text:'The concert was a complete {{6}}, with technical problems throughout the evening.', base_word:'DISAPPOINT', answer:'disappointment' },
        { number:7, text:"The actor's {{7}} of the villain was widely praised by critics.", base_word:'PORTRAY', answer:'portrayal' },
        { number:8, text:'Despite mixed reviews, the film was a {{8}} success at the box office.', base_word:'COMMERCE', answer:'commercial' }
      ]
    },
    // ── Ejercicio 17 ────────────────────────────────
    {
      id: 'exercise17', title: 'Ejercicio 17 UE3', description: 'Tema: La sociedad',
      type: 'word_formation',
      instructions: 'For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.',
      lines: [
        { number:1, text:'The government has introduced new {{1}} to tackle rising levels of poverty.', base_word:'LEGISLATE', answer:'legislation' },
        { number:2, text:'The organisation campaigns for the {{2}} of people with disabilities.', base_word:'EQUAL', answer:'equality' },
        { number:3, text:'Many charities are entirely {{3}} on donations from the public to fund their work.', base_word:'RELY', answer:'reliant' },
        { number:4, text:'She has spent her life campaigning against social {{4}} and injustice.', base_word:'EQUAL', answer:'inequality' },
        { number:5, text:'The policy was criticised for failing to address the needs of the most {{5}} members of society.', base_word:'ADVANTAGE', answer:'disadvantaged' },
        { number:6, text:'The country has seen a dramatic {{6}} in living standards over the past decade.', base_word:'IMPROVE', answer:'improvement' },
        { number:7, text:'Politicians must be held {{7}} for the decisions they make on behalf of the public.', base_word:'ACCOUNT', answer:'accountable' },
        { number:8, text:'The charity works to promote a more {{8}} society where everyone has equal opportunities.', base_word:'INCLUDE', answer:'inclusive' }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     UE4 — TRANSFORMACIÓN DE FRASES
  ══════════════════════════════════════════════════ */
  UE4: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'exercise1', title: 'Ejercicio 1 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"I haven't eaten sushi before.", key_word:'NEVER', sentence2_start:'I have', sentence2_end:'sushi before.', answer:['never eaten','never had'] },
        { number:2, sentence1:'She started working at this company five years ago.', key_word:'BEEN', sentence2_start:'She has', sentence2_end:'at this company for five years.', answer:['been working'] },
        { number:3, sentence1:'It was too cold for us to go swimming.', key_word:'ENOUGH', sentence2_start:'It was not', sentence2_end:'for us to go swimming.', answer:['warm enough','hot enough'] },
        { number:4, sentence1:'They will probably cancel the concert if it rains.', key_word:'LIKELY', sentence2_start:'The concert is', sentence2_end:'cancelled if it rains.', answer:['likely to be'] },
        { number:5, sentence1:"He regrets not studying harder for the exam.", key_word:'WISHES', sentence2_start:'He', sentence2_end:'harder for the exam.', answer:['wishes he had studied'] },
        { number:6, sentence1:'Despite the rain, they decided to go for a walk.', key_word:'ALTHOUGH', sentence2_start:'They decided to go for a walk', sentence2_end:'raining.', answer:['although it was','even though it was'] }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'exercise2', title: 'Ejercicio 2 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'Someone broke into our house last night.', key_word:'BROKEN', sentence2_start:'Our house', sentence2_end:'last night.', answer:['was broken into'] },
        { number:2, sentence1:'It is not necessary for you to arrive early.', key_word:'HAVE', sentence2_start:'You', sentence2_end:'arrive early.', answer:["don't have to","do not have to"] },
        { number:3, sentence1:'The last time I saw her was three years ago.', key_word:'SEEN', sentence2_start:'I', sentence2_end:'for three years.', answer:["haven't seen her","have not seen her"] },
        { number:4, sentence1:'"I will call you tomorrow," said Tom.', key_word:'PROMISED', sentence2_start:'Tom', sentence2_end:'the next day.', answer:['promised to call','promised he would call'] },
        { number:5, sentence1:'It is possible that she missed the train.', key_word:'MIGHT', sentence2_start:'She', sentence2_end:'the train.', answer:['might have missed'] },
        { number:6, sentence1:'Learning to drive is easier than I thought.', key_word:'AS', sentence2_start:'Learning to drive is not', sentence2_end:'I thought.', answer:['as difficult as','as hard as'] }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'exercise3', title: 'Ejercicio 3 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'The government introduced a new law last year.', key_word:'INTRODUCED', sentence2_start:'A new law', sentence2_end:'by the government last year.', answer:['was introduced'] },
        { number:2, sentence1:'"I am very tired," she told her friends.', key_word:'SAID', sentence2_start:'She', sentence2_end:'she was very tired.', answer:['said that'] },
        { number:3, sentence1:"I don't have a car, so I can't drive to work.", key_word:'IF', sentence2_start:'I could drive to work', sentence2_end:'a car.', answer:['if I had'] },
        { number:4, sentence1:'Perhaps she missed the last bus home.', key_word:'MIGHT', sentence2_start:'She', sentence2_end:'the last bus home.', answer:['might have missed'] },
        { number:5, sentence1:'This exercise is more difficult than the last one.', key_word:'AS', sentence2_start:'The last exercise was not', sentence2_end:'this one.', answer:['as difficult as'] },
        { number:6, sentence1:'I regret not studying harder when I was young.', key_word:'WISH', sentence2_start:'I', sentence2_end:'harder when I was young.', answer:['wish I had studied'] }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'exercise4', title: 'Ejercicio 4 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'A mechanic repaired my car yesterday.', key_word:'HAD', sentence2_start:'I', sentence2_end:'yesterday.', answer:['had my car repaired'] },
        { number:2, sentence1:"He doesn't play tennis any more.", key_word:'USED', sentence2_start:'He', sentence2_end:'tennis.', answer:['used to play'] },
        { number:3, sentence1:'The film was so boring that I fell asleep.', key_word:'SUCH', sentence2_start:'It was', sentence2_end:'that I fell asleep.', answer:['such a boring film'] },
        { number:4, sentence1:'She was too young to watch the film.', key_word:'OLD', sentence2_start:'She was not', sentence2_end:'to watch the film.', answer:['old enough'] },
        { number:5, sentence1:'Although it was cold, they went swimming.', key_word:'DESPITE', sentence2_start:'They went swimming', sentence2_end:'weather.', answer:['despite the cold'] },
        { number:6, sentence1:'"Where do you live?" the officer asked me.', key_word:'WHERE', sentence2_start:'The officer asked me', sentence2_end:'.', answer:['where I lived'] }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'exercise5', title: 'Ejercicio 5 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'Someone had taken the money before the police arrived.', key_word:'TAKEN', sentence2_start:'The money', sentence2_end:'before the police arrived.', answer:['had been taken'] },
        { number:2, sentence1:'"Don\'t touch that!" he told the children.', key_word:'TOLD', sentence2_start:'He', sentence2_end:'touch that.', answer:['told the children not to'] },
        { number:3, sentence1:"I didn't study, so I failed the exam.", key_word:'PASSED', sentence2_start:'I would have', sentence2_end:'if I had studied.', answer:['passed the exam'] },
        { number:4, sentence1:"It's not necessary for you to bring anything to the party.", key_word:'NEED', sentence2_start:'You', sentence2_end:'anything to the party.', answer:["don't need to bring","needn't bring"] },
        { number:5, sentence1:'My teacher made me rewrite the essay.', key_word:'MADE', sentence2_start:'I was', sentence2_end:'the essay.', answer:['made to rewrite'] },
        { number:6, sentence1:'I last spoke to her three weeks ago.', key_word:'SPOKEN', sentence2_start:"I haven't", sentence2_end:'three weeks.', answer:['spoken to her for'] }
      ]
    },
    // ── Ejercicio 6 ─────────────────────────────────
    {
      id: 'exercise6', title: 'Ejercicio 6 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"I've never seen a more beautiful painting.", key_word:'MOST', sentence2_start:'It is', sentence2_end:'painting I have ever seen.', answer:['the most beautiful'] },
        { number:2, sentence1:'They will build a new hospital here next year.', key_word:'BUILT', sentence2_start:'A new hospital', sentence2_end:'here next year.', answer:['will be built'] },
        { number:3, sentence1:"I didn't forget to switch off the lights before I left.", key_word:'REMEMBER', sentence2_start:'I', sentence2_end:'the lights before I left.', answer:['remembered to switch off','remembered to turn off'] },
        { number:4, sentence1:'"Are you feeling better?" the doctor asked her.', key_word:'WHETHER', sentence2_start:'The doctor asked her', sentence2_end:'better.', answer:['whether she was feeling'] },
        { number:5, sentence1:'I wish I could speak French.', key_word:'ABLE', sentence2_start:'I wish', sentence2_end:'speak French.', answer:['I were able to'] },
        { number:6, sentence1:'You should really go to bed now.', key_word:'TIME', sentence2_start:'It is', sentence2_end:'to bed.', answer:['high time you went','time you went'] }
      ]
    },
    // ── Ejercicio 7 ─────────────────────────────────
    {
      id: 'exercise7', title: 'Ejercicio 7 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"I'm sorry I didn't apologise sooner.", key_word:'WISH', sentence2_start:'I', sentence2_end:'sooner.', answer:['wish I had apologised'] },
        { number:2, sentence1:'He is said to be the best player in the league.', key_word:'SAY', sentence2_start:'People', sentence2_end:'the best player in the league.', answer:['say that he is'] },
        { number:3, sentence1:'It is compulsory for all students to wear a uniform.', key_word:'MUST', sentence2_start:'All students', sentence2_end:'a uniform.', answer:['must wear'] },
        { number:4, sentence1:'In spite of the heavy rain, the match continued.', key_word:'ALTHOUGH', sentence2_start:'Although', sentence2_end:'the match continued.', answer:['it was raining heavily,'] },
        { number:5, sentence1:'My parents allowed me to stay up late on Fridays.', key_word:'LET', sentence2_start:'My parents', sentence2_end:'late on Fridays.', answer:['let me stay up'] },
        { number:6, sentence1:'The flight was so long that the children became restless.', key_word:'SUCH', sentence2_start:'It was', sentence2_end:'that the children became restless.', answer:['such a long flight'] }
      ]
    },
    // ── Ejercicio 8 ─────────────────────────────────
    {
      id: 'exercise8', title: 'Ejercicio 8 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"They haven't made a decision about the location yet.", key_word:'DECIDED', sentence2_start:"They haven't", sentence2_end:'the location yet.', answer:['decided on'] },
        { number:2, sentence1:'Experts believe the earthquake caused significant damage.', key_word:'THOUGHT', sentence2_start:'The earthquake is', sentence2_end:'significant damage.', answer:['thought to have caused'] },
        { number:3, sentence1:"She won't be able to attend unless she finishes work early.", key_word:'PROVIDED', sentence2_start:'She will be able to attend', sentence2_end:'work early.', answer:['provided she finishes'] },
        { number:4, sentence1:'The last time they spoke was five years ago.', key_word:'FOR', sentence2_start:"They haven't spoken to each other", sentence2_end:'years.', answer:['for five'] },
        { number:5, sentence1:'The price of petrol has risen significantly.', key_word:'INCREASE', sentence2_start:'There has been', sentence2_end:'in the price of petrol.', answer:['a significant increase'] },
        { number:6, sentence1:'He was too nervous to speak in front of the audience.', key_word:'ENOUGH', sentence2_start:"He wasn't", sentence2_end:'to speak in front of the audience.', answer:['confident enough','calm enough'] }
      ]
    },
    // ── Ejercicio 9 ─────────────────────────────────
    {
      id: 'exercise9', title: 'Ejercicio 9 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"It's a pity you didn't come to the concert.", key_word:'WISH', sentence2_start:'I', sentence2_end:'to the concert.', answer:['wish you had come'] },
        { number:2, sentence1:"This is the most interesting book I've ever read.", key_word:'NEVER', sentence2_start:'I have', sentence2_end:'a more interesting book.', answer:['never read'] },
        { number:3, sentence1:'Someone stole my bicycle last night.', key_word:'WAS', sentence2_start:'My bicycle', sentence2_end:'last night.', answer:['was stolen'] },
        { number:4, sentence1:'It is forbidden to park here.', key_word:'ALLOWED', sentence2_start:'You are not', sentence2_end:'here.', answer:['allowed to park'] },
        { number:5, sentence1:'Running is good for you even though it can be tiring.', key_word:'DESPIDE', sentence2_start:'Running is good for you', sentence2_end:'tiring.', answer:['despite being','despite it being'] },
        { number:6, sentence1:'The journey took longer than expected because of the traffic.', key_word:'DUE', sentence2_start:'The journey took longer than expected', sentence2_end:'traffic.', answer:['due to the'] }
      ]
    },
    // ── Ejercicio 10 ────────────────────────────────
    {
      id: 'exercise10', title: 'Ejercicio 10 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'"You should take more exercise," the doctor told me.', key_word:'ADVISED', sentence2_start:'The doctor', sentence2_end:'more exercise.', answer:['advised me to take'] },
        { number:2, sentence1:'He started learning to drive two years ago.', key_word:'BEEN', sentence2_start:'He has', sentence2_end:'for two years.', answer:['been learning to drive'] },
        { number:3, sentence1:'The concert was so popular that tickets sold out immediately.', key_word:'SUCH', sentence2_start:'It was', sentence2_end:'that tickets sold out immediately.', answer:['such a popular concert'] },
        { number:4, sentence1:"You don't have to come to the meeting if you're busy.", key_word:'NECESSARY', sentence2_start:'It is not', sentence2_end:"if you're busy.", answer:['necessary for you to come'] },
        { number:5, sentence1:'"Do you know what time it is?" she asked.', key_word:'WHAT', sentence2_start:'She asked', sentence2_end:'was.', answer:['what time it'] },
        { number:6, sentence1:'The dentist cleaned my teeth last week.', key_word:'HAD', sentence2_start:'I', sentence2_end:'last week.', answer:['had my teeth cleaned'] }
      ]
    },
    // ── Ejercicio 11 ────────────────────────────────
    {
      id: 'exercise11', title: 'Ejercicio 11 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"Unless you book in advance, you won't get a ticket.", key_word:'PROVIDED', sentence2_start:'You will only get a ticket', sentence2_end:'in advance.', answer:['provided you book'] },
        { number:2, sentence1:'She was too tired to continue working.', key_word:'ENOUGH', sentence2_start:"She didn't have", sentence2_end:'to continue working.', answer:['enough energy'] },
        { number:3, sentence1:'I was not the person who broke the window.', key_word:'BROKEN', sentence2_start:'The window', sentence2_end:'by me.', answer:["wasn't broken","was not broken"] },
        { number:4, sentence1:'My grandfather could run a marathon when he was young.', key_word:'ABLE', sentence2_start:'My grandfather was', sentence2_end:'a marathon when he was young.', answer:['able to run'] },
        { number:5, sentence1:'The rain meant that we had to cancel the picnic.', key_word:'CALLED', sentence2_start:'The picnic was', sentence2_end:'because of the rain.', answer:['called off'] },
        { number:6, sentence1:'I think it would be good if you talked to someone about this.', key_word:'SHOULD', sentence2_start:'I think you', sentence2_end:'someone about this.', answer:['should talk to'] }
      ]
    },
    // ── Ejercicio 12 ────────────────────────────────
    {
      id: 'exercise12', title: 'Ejercicio 12 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'"Our salaries are too low," the workers said.', key_word:'COMPLAINED', sentence2_start:'The workers', sentence2_end:'their salaries were too low.', answer:['complained that'] },
        { number:2, sentence1:'He finds it difficult to get up early in the morning.', key_word:'DIFFICULTY', sentence2_start:'He has', sentence2_end:'up early in the morning.', answer:['difficulty getting'] },
        { number:3, sentence1:'If I were you, I would apologise immediately.', key_word:'PLACE', sentence2_start:'In your', sentence2_end:'immediately.', answer:['place, I would apologise'] },
        { number:4, sentence1:"It hasn't rained for three months.", key_word:'LAST', sentence2_start:'The', sentence2_end:'was three months ago.', answer:['last time it rained'] },
        { number:5, sentence1:'He stopped eating meat five years ago.', key_word:'GIVEN', sentence2_start:'He has', sentence2_end:'five years.', answer:['given up meat for'] },
        { number:6, sentence1:"It's really not worth worrying about such a small problem.", key_word:'POINT', sentence2_start:'There is really no', sentence2_end:'about such a small problem.', answer:['point in worrying'] }
      ]
    },
    // ── Ejercicio 13 ────────────────────────────────
    {
      id: 'exercise13', title: 'Ejercicio 13 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"It's believed that the painting is worth millions.", key_word:'BELIEVED', sentence2_start:'The painting', sentence2_end:'worth millions.', answer:['is believed to be'] },
        { number:2, sentence1:'"Don\'t stay out too late," her father said.', key_word:'TOLD', sentence2_start:'Her father', sentence2_end:'too late.', answer:['told her not to stay out'] },
        { number:3, sentence1:'He is the fastest runner on the team.', key_word:'RUNS', sentence2_start:'Nobody on the team', sentence2_end:'him.', answer:['runs faster than'] },
        { number:4, sentence1:'We were surprised at how quickly the situation changed.', key_word:'SURPRISED', sentence2_start:'We were', sentence2_end:'quickly the situation changed.', answer:['surprised at how'] },
        { number:5, sentence1:"She's been living in Paris since 2019.", key_word:'MOVED', sentence2_start:'She', sentence2_end:'in 2019.', answer:['moved to Paris'] },
        { number:6, sentence1:'He managed to fix the car despite having no tools.', key_word:'ALTHOUGH', sentence2_start:'Although', sentence2_end:'to fix the car.', answer:['he had no tools, he managed'] }
      ]
    },
    // ── Ejercicio 14 ────────────────────────────────
    {
      id: 'exercise14', title: 'Ejercicio 14 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"She can't afford to buy a new laptop.", key_word:'ENOUGH', sentence2_start:"She doesn't have", sentence2_end:'a new laptop.', answer:['enough money to buy'] },
        { number:2, sentence1:'They are considering moving to a new office.', key_word:'THOUGHT', sentence2_start:'They have', sentence2_end:'to a new office.', answer:['thought about moving'] },
        { number:3, sentence1:'It was such a hot day that we stayed inside.', key_word:'SO', sentence2_start:'The day was', sentence2_end:'we stayed inside.', answer:['so hot that'] },
        { number:4, sentence1:'The police are investigating the cause of the accident.', key_word:'BEING', sentence2_start:'The cause of the accident', sentence2_end:'by the police.', answer:['is being investigated'] },
        { number:5, sentence1:'He used to smoke but gave it up last year.', key_word:'LONGER', sentence2_start:'He no', sentence2_end:'since last year.', answer:['longer smokes'] },
        { number:6, sentence1:'The children enjoyed themselves at the theme park.', key_word:'FUN', sentence2_start:'The children had', sentence2_end:'at the theme park.', answer:['a lot of fun','great fun'] }
      ]
    },
    // ── Ejercicio 15 ────────────────────────────────
    {
      id: 'exercise15', title: 'Ejercicio 15 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'"I\'ll help you with your essay," Tom said.', key_word:'OFFERED', sentence2_start:'Tom', sentence2_end:'my essay.', answer:['offered to help with','offered to help me with'] },
        { number:2, sentence1:'My sister told me I should apply for the job.', key_word:'PERSUADED', sentence2_start:'My sister', sentence2_end:'for the job.', answer:['persuaded me to apply'] },
        { number:3, sentence1:'Nobody has ever spoken to me so rudely.', key_word:'HAVE', sentence2_start:'Never', sentence2_end:'spoken to so rudely.', answer:['have I been'] },
        { number:4, sentence1:'Visitors are requested not to take photographs.', key_word:'ASKED', sentence2_start:'Visitors are', sentence2_end:'photographs.', answer:['asked not to take'] },
        { number:5, sentence1:'The match was cancelled due to bad weather.', key_word:'BECAUSE', sentence2_start:'The match was cancelled', sentence2_end:'so bad.', answer:['because the weather was'] },
        { number:6, sentence1:'Despite practising every day, she still finds chess difficult.', key_word:'EVEN', sentence2_start:'She still finds chess difficult', sentence2_end:'every day.', answer:['even though she practises'] }
      ]
    },
    // ── Ejercicio 16 ────────────────────────────────
    {
      id: 'exercise16', title: 'Ejercicio 16 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'The food was so delicious that we ordered more.', key_word:'SUCH', sentence2_start:'It was', sentence2_end:'that we ordered more.', answer:['such delicious food'] },
        { number:2, sentence1:"If you don't leave now, you'll miss the train.", key_word:'UNLESS', sentence2_start:"You'll miss the train", sentence2_end:'now.', answer:['unless you leave'] },
        { number:3, sentence1:'I regret spending so much money on clothes.', key_word:'WISH', sentence2_start:'I', sentence2_end:'so much money on clothes.', answer:["wish I hadn't spent"] },
        { number:4, sentence1:'The team finished the project ahead of schedule.', key_word:'FINISHED', sentence2_start:'The project was', sentence2_end:'ahead of schedule.', answer:['finished by the team'] },
        { number:5, sentence1:"She hasn't heard from him since they argued.", key_word:'LAST', sentence2_start:'The', sentence2_end:'from him was when they argued.', answer:['last time she heard'] },
        { number:6, sentence1:'It took me three hours to write the report.', key_word:'WRITING', sentence2_start:'I spent', sentence2_end:'the report.', answer:['three hours writing'] }
      ]
    },
    // ── Ejercicio 17 ────────────────────────────────
    {
      id: 'exercise17', title: 'Ejercicio 17 UE4', description: 'Gramática mixta',
      type: 'key_word_transformation',
      instructions: 'For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"He doesn't need to attend the meeting.", key_word:'NECESSARY', sentence2_start:'It is not', sentence2_end:'the meeting.', answer:['necessary for him to attend'] },
        { number:2, sentence1:'The restaurant was better than I expected.', key_word:'AS', sentence2_start:'The restaurant was not', sentence2_end:'I expected.', answer:['as bad as'] },
        { number:3, sentence1:'"Have you ever been to Japan?" she asked me.', key_word:'WHETHER', sentence2_start:'She asked me', sentence2_end:'to Japan.', answer:['whether I had ever been'] },
        { number:4, sentence1:'He is considered to be one of the greatest scientists of his generation.', key_word:'CONSIDER', sentence2_start:'People', sentence2_end:'one of the greatest scientists of his generation.', answer:['consider him to be'] },
        { number:5, sentence1:'The company was established over a hundred years ago.', key_word:'SET', sentence2_start:'The company', sentence2_end:'over a hundred years ago.', answer:['was set up'] },
        { number:6, sentence1:'My flight was delayed, so I arrived late.', key_word:'HAD', sentence2_start:'If my flight', sentence2_end:', I would have arrived on time.', answer:['had not been delayed',"hadn't been delayed"] }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     UE4_COND — CONDITIONALS
  ══════════════════════════════════════════════════ */
  UE4_COND: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'cond1', title: 'Conditionals - Exercise 1', description: 'Nivel B2 - Condicionales reales',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:"If you don't study harder, you will fail the exam.", key_word:'UNLESS', sentence2_start:'You will fail the exam', sentence2_end:'harder.', answer:['unless you study'] },
        { number:2, sentence1:'We can go for a picnic if it doesn\'t rain.', key_word:'PROVIDED', sentence2_start:'We can go for a picnic', sentence2_end:'it doesn\'t rain.', answer:['provided that','provided'] },
        { number:3, sentence1:'I regret not buying that house last year.', key_word:'WISH', sentence2_start:'I', sentence2_end:'that house last year.', answer:['wish i had bought'] },
        { number:4, sentence1:'You can borrow my car, but you must drive carefully.', key_word:'LONG', sentence2_start:'You can borrow my car', sentence2_end:'you drive carefully.', answer:['as long as'] },
        { number:5, sentence1:'If he hadn\'t helped me, I wouldn\'t have finished on time.', key_word:'BUT', sentence2_start:'I wouldn\'t have finished on time', sentence2_end:'his help.', answer:['but for'] },
        { number:6, sentence1:'You should take an umbrella because it might rain.', key_word:'CASE', sentence2_start:'You should take an umbrella', sentence2_end:'it rains.', answer:['in case'] },
        { number:7, sentence1:'I didn\'t know you were coming, so I didn\'t bake a cake.', key_word:'HAD', sentence2_start:'Had I known you were coming, I', sentence2_end:'a cake.', answer:['would have baked','would\'ve baked'] },
        { number:8, sentence1:'If you should see Mary, tell her to call me.', key_word:'SHOULD', sentence2_start:'Mary, tell her to call me.', answer:['should you see'] },
        { number:9, sentence1:'It is a pity I can\'t speak French.', key_word:'ONLY', sentence2_start:'If', sentence2_end:'French.', answer:['only i could speak'] },
        { number:10, sentence1:'If you don\'t leave now, you\'ll be late.', key_word:'OTHERWISE', sentence2_start:'You must leave now,', sentence2_end:'late.', answer:['otherwise you will be','otherwise you\'ll be'] }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'cond2', title: 'Conditionals - Exercise 2', description: 'Nivel B2 - Condicionales mixtos y modales',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'I\'ll help you with the project if you help me with this.', key_word:'CONDITION', sentence2_start:'I\'ll help you with the project', sentence2_end:'you help me with this.', answer:['on condition that','on the condition that'] },
        { number:2, sentence1:'If you aren\'t quiet, I will ask you to leave.', key_word:'STOP', sentence2_start:'You will be asked to leave unless', sentence2_end:'making a noise.', answer:['you stop'] },
        { number:3, sentence1:'Imagine you won the lottery; what would you do?', key_word:'SUPPOSING', sentence2_start:'the lottery, what would you do?', answer:['supposing you won'] },
        { number:4, sentence1:'I went to bed early because I was tired.', key_word:'WENT', sentence2_start:'If I hadn\'t been tired, I', sentence2_end:'to bed early.', answer:['would not have gone','wouldn\'t have gone'] },
        { number:5, sentence1:'I think you should tell her the truth.', key_word:'WERE', sentence2_start:'If', sentence2_end:', I would tell her the truth.', answer:['i were you'] },
        { number:6, sentence1:'You can take my book, but return it tomorrow.', key_word:'LONG', sentence2_start:'You can take my book', sentence2_end:'you return it tomorrow.', answer:['as long as'] },
        { number:7, sentence1:'If we had bought a map, we wouldn\'t be lost now.', key_word:'WISH', sentence2_start:'I', sentence2_end:'a map.', answer:['wish we had bought'] },
        { number:8, sentence1:'I only went to the party because you asked me to.', key_word:'HAVE', sentence2_start:'If you hadn\'t asked me, I', sentence2_end:'to the party.', answer:['would not have gone','wouldn\'t have gone'] },
        { number:9, sentence1:'He is only rich because he inherited a fortune.', key_word:'UNLESS', sentence2_start:'He wouldn\'t be rich', sentence2_end:'a fortune.', answer:['unless he had inherited'] },
        { number:10, sentence1:'She didn\'t study, so she isn\'t at university today.', key_word:'HAD', sentence2_start:'She would be at university today if she', sentence2_end:'harder.', answer:['had studied'] }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'cond3', title: 'Conditionals - Exercise 3', description: 'Nivel B2 - Estructuras condicionales avanzadas',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'We will buy the house only if the bank gives us a loan.', key_word:'ON', sentence2_start:'We will buy the house only', sentence2_end:'us a loan.', answer:['on condition the bank gives','on condition that the bank gives'] },
        { number:2, sentence1:'It is lucky that the police arrived or there would have been a fight.', key_word:'IF', sentence2_start:'There would have been a fight', sentence2_end:'arrived.', answer:['if the police had not','if the police hadn\'t'] },
        { number:3, sentence1:'I would love to be able to play the piano.', key_word:'COULD', sentence2_start:'I wish', sentence2_end:'the piano.', answer:['i could play'] },
        { number:4, sentence1:'Without your advice, I would have made a mistake.', key_word:'NOT', sentence2_start:'If it', sentence2_end:'your advice, I would have made a mistake.', answer:['had not been for','hadn\'t been for'] },
        { number:5, sentence1:'I did not know the office was closed, so I went there.', key_word:'KNOWN', sentence2_start:'If I', sentence2_end:'the office was closed, I wouldn\'t have gone there.', answer:['had known'] },
        { number:6, sentence1:'Please contact me if you need any further information.', key_word:'SHOULD', sentence2_start:'Please contact me', sentence2_end:'any further information.', answer:['should you need'] },
        { number:7, sentence1:'I didn\'t buy the ticket because I didn\'t have enough money.', key_word:'HAD', sentence2_start:'If I had had enough money, I', sentence2_end:'the ticket.', answer:['would have bought'] },
        { number:8, sentence1:'He failed the test because he didn\'t follow the instructions.', key_word:'FOLLOWED', sentence2_start:'He would have passed the test if he', sentence2_end:'the instructions.', answer:['had followed'] },
        { number:9, sentence1:'We will miss the train if we don\'t hurry.', key_word:'UNLESS', sentence2_start:'We will miss the train', sentence2_end:'hurry.', answer:['unless we'] },
        { number:10, sentence1:'I regret telling him my secret.', key_word:'WISH', sentence2_start:'I', sentence2_end:'him my secret.', answer:['wish i hadn\'t told','wish i had not told'] }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'cond4', title: 'Conditionals - Exercise 4', description: 'Nivel B2 - Condicionales e hipótesis',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'He will probably get the job if he does well in the interview.', key_word:'PROVIDED', sentence2_start:'He will get the job', sentence2_end:'well in the interview.', answer:['provided he does','provided that he does'] },
        { number:2, sentence1:'I don\'t want to go out tonight, so let\'s stay in.', key_word:'RATHER', sentence2_start:'I', sentence2_end:'stay in tonight.', answer:['would rather','\'d rather'] },
        { number:3, sentence1:'If you don\'t pay the bill, your electricity will be cut off.', key_word:'ELSE', sentence2_start:'You must pay the bill,', sentence2_end:'your electricity will be cut off.', answer:['or else'] },
        { number:4, sentence1:'I regret not learning to play the guitar when I was young.', key_word:'ONLY', sentence2_start:'If', sentence2_end:'to play the guitar when I was young.', answer:['only i had learned','only i had learnt'] },
        { number:5, sentence1:'If you should see John, tell him to write to me.', key_word:'HAPPEN', sentence2_start:'If you', sentence2_end:'see John, tell him to write to me.', answer:['happen to'] },
        { number:6, sentence1:'What would you do if there was an earthquake?', key_word:'WERE', sentence2_start:'What would you do if an earthquake', sentence2_end:'happen?', answer:['were to'] },
        { number:7, sentence1:'The company survived because they got a new loan.', key_word:'WITHOUT', sentence2_start:'The company would have closed', sentence2_end:'a new loan.', answer:['without'] },
        { number:8, sentence1:'If it weren\'t for your support, I would give up.', key_word:'BUT', sentence2_start:'I would give up', sentence2_end:'your support.', answer:['but for'] },
        { number:9, sentence1:'I regret not going to university.', key_word:'HAD', sentence2_start:'I wish I', sentence2_end:'to university.', answer:['had gone'] },
        { number:10, sentence1:'We will go to the beach tomorrow, unless it rains.', key_word:'AS', sentence2_start:'We will go to the beach tomorrow', sentence2_end:'it doesn\'t rain.', answer:['as long as'] }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'cond5', title: 'Conditionals - Exercise 5', description: 'Nivel B2 - Examen de Condicionales B2',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'You can stay here, but you must keep quiet.', key_word:'PROVIDED', sentence2_start:'You can stay here', sentence2_end:'you keep quiet.', answer:['provided that','provided'] },
        { number:2, sentence1:'It\'s a pity you didn\'t tell me the truth.', key_word:'WISH', sentence2_start:'I', sentence2_end:'me the truth.', answer:['wish you had told'] },
        { number:3, sentence1:'We didn\'t go to the museum because we didn\'t have time.', key_word:'IF', sentence2_start:'We would have gone to the museum', sentence2_end:'time.', answer:['if we had had'] },
        { number:4, sentence1:'If the weather is bad, the match will be cancelled.', key_word:'IN', sentence2_start:'The match will be cancelled', sentence2_end:'bad weather.', answer:['in case of'] },
        { number:5, sentence1:'If we don\'t leave now, we will miss our flight.', key_word:'OR', sentence2_start:'We must leave now,', sentence2_end:'will miss our flight.', answer:['or else we','or we'] },
        { number:6, sentence1:'I regret not taking my camera with me.', key_word:'ONLY', sentence2_start:'If', sentence2_end:'my camera with me.', answer:['only i had taken'] },
        { number:7, sentence1:'I only stayed because you asked me to.', key_word:'HAVE', sentence2_start:'I would', sentence2_end:'if you hadn\'t asked me to.', answer:['not have stayed'] },
        { number:8, sentence1:'Imagine you were the manager; what changes would you make?', key_word:'SUPPOSE', sentence2_start:'the manager, what changes would you make?', answer:['suppose you were'] },
        { number:9, sentence1:'If he doesn\'t arrive soon, we\'ll leave without him.', key_word:'UNLESS', sentence2_start:'We\'ll leave without him', sentence2_end:'soon.', answer:['unless he arrives'] },
        { number:10, sentence1:'I wouldn\'t have succeeded without my teacher\'s help.', key_word:'FOR', sentence2_start:'If it had', sentence2_end:'my teacher\'s help, I wouldn\'t have succeeded.', answer:['not been for'] }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     UE4_INV — INVERSIONS
  ══════════════════════════════════════════════════ */
  UE4_INV: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'inv1', title: 'Inversions - Exercise 1', description: 'Nivel B2 - Inversiones básicas',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'She rarely goes to the cinema nowadays.', key_word:'RARELY', sentence2_start:'to the cinema nowadays.', answer:['rarely does she go'] },
        { number:2, sentence1:'I had hardly started my dinner when the phone rang.', key_word:'HARDLY', sentence2_start:'my dinner when the phone rang.', answer:['hardly had i started'] },
        { number:3, sentence1:'You must not press this button under any circumstances.', key_word:'CIRCUMSTANCES', sentence2_start:'Under', sentence2_end:'press this button.', answer:['no circumstances must you','no circumstances should you'] },
        { number:4, sentence1:'He had no sooner sat down than the door bell rang.', key_word:'NO', sentence2_start:'sat down than the door bell rang.', answer:['no sooner had he'] },
        { number:5, sentence1:'He didn\'t realise he had lost his keys until he got home.', key_word:'UNTIL', sentence2_start:'Not', sentence2_end:'he realise he had lost his keys.', answer:['until he got home did'] },
        { number:6, sentence1:'They not only bought a new house, but also a new car.', key_word:'ONLY', sentence2_start:'Not', sentence2_end:'a new house, but also a new car.', answer:['only did they buy'] },
        { number:7, sentence1:'I have never seen such a beautiful view before.', key_word:'NEVER', sentence2_start:'such a beautiful view before.', answer:['never have i seen'] },
        { number:8, sentence1:'The government will only reduce taxes if inflation drops.', key_word:'ONLY', sentence2_start:'Only if inflation drops', sentence2_end:'taxes.', answer:['will the government reduce'] },
        { number:9, sentence1:'I knew very little about her plans.', key_word:'LITTLE', sentence2_start:'about her plans.', answer:['little did i know'] },
        { number:10, sentence1:'We seldom hear such beautiful music.', key_word:'SELDOM', sentence2_start:'such beautiful music.', answer:['seldom do we hear'] }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'inv2', title: 'Inversions - Exercise 2', description: 'Nivel B2 - Inversiones adverbiales',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'We can only win this game by working together.', key_word:'ONLY', sentence2_start:'Only by working together', sentence2_end:'this game.', answer:['can we win'] },
        { number:2, sentence1:'He was so tired that he fell asleep in the chair.', key_word:'SO', sentence2_start:'tired was he that he fell asleep in the chair.', answer:['so'] },
        { number:3, sentence1:'She had scarcely finished her speech when the audience stood up.', key_word:'SCARCELY', sentence2_start:'finished her speech when the audience stood up.', answer:['scarcely had she'] },
        { number:4, sentence1:'You must not leave the room under any circumstances.', key_word:'CIRCUMSTANCES', sentence2_start:'Under', sentence2_end:'leave the room.', answer:['no circumstances must you','no circumstances should you'] },
        { number:5, sentence1:'I have rarely heard such a stupid remark.', key_word:'RARELY', sentence2_start:'such a stupid remark.', answer:['rarely have i heard'] },
        { number:6, sentence1:'We didn\'t understand the problem until he explained it.', key_word:'UNTIL', sentence2_start:'Not until he explained it', sentence2_end:'the problem.', answer:['did we understand'] },
        { number:7, sentence1:'They had no sooner started the match than it began to rain.', key_word:'SOONER', sentence2_start:'No', sentence2_end:'the match than it began to rain.', answer:['sooner had they started'] },
        { number:8, sentence1:'I realised how lucky I was only when I saw the news.', key_word:'ONLY', sentence2_start:'Only when I saw the news', sentence2_end:'how lucky I was.', answer:['did i realise'] },
        { number:9, sentence1:'He didn\'t speak to anyone at the party.', key_word:'WORD', sentence2_start:'Not', sentence2_end:'did he speak to at the party.', answer:['a word'] },
        { number:10, sentence1:'They had never played so well before.', key_word:'BEFORE', sentence2_start:'Never', sentence2_end:'so well.', answer:['before had they played'] }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'inv3', title: 'Inversions - Exercise 3', description: 'Nivel B2 - Inversiones avanzadas y condicionales',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'If you need any help, please let me know.', key_word:'SHOULD', sentence2_start:'Please let me know', sentence2_end:'any help.', answer:['should you need'] },
        { number:2, sentence1:'If I had known you were coming, I would have met you.', key_word:'HAD', sentence2_start:'you were coming, I would have met you.', answer:['had i known'] },
        { number:3, sentence1:'If the weather were to improve, we would go out.', key_word:'WERE', sentence2_start:'the weather to improve, we would go out.', answer:['were'] },
        { number:4, sentence1:'We not only lost our way, but we also lost our money.', key_word:'NOT', sentence2_start:'only did we lose our way, but we also lost our money.', answer:['not'] },
        { number:5, sentence1:'The police had hardly arrived when the crowd dispersed.', key_word:'HARDLY', sentence2_start:'arrived when the crowd dispersed.', answer:['hardly had the police'] },
        { number:6, sentence1:'He is rarely late for meetings.', key_word:'RARELY', sentence2_start:'late for meetings.', answer:['rarely is he'] },
        { number:7, sentence1:'You must not tell anyone about this plan under any circumstances.', key_word:'CIRCUMSTANCES', sentence2_start:'Under', sentence2_end:'anyone about this plan.', answer:['no circumstances must you'] },
        { number:8, sentence1:'He only understood the lesson when the teacher gave examples.', key_word:'UNTIL', sentence2_start:'Not', sentence2_end:'he understand the lesson.', answer:['until the teacher gave examples did'] },
        { number:9, sentence1:'We had no sooner checked in than our flight was delayed.', key_word:'SOONER', sentence2_start:'No', sentence2_end:'than our flight was delayed.', answer:['sooner had we checked in'] },
        { number:10, sentence1:'He understood very little about the new system.', key_word:'LITTLE', sentence2_start:'did he understand about the new system.', answer:['little'] }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'inv4', title: 'Inversions - Exercise 4', description: 'Nivel B2 - Inversiones negativas y enfáticas',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'I have never heard such a beautiful voice.', key_word:'NEVER', sentence2_start:'have I heard such a beautiful voice.', answer:['never'] },
        { number:2, sentence1:'We only realized our mistake when we arrived.', key_word:'ONLY', sentence2_start:'Not until we arrived', sentence2_end:'our mistake.', answer:['did we realize'] },
        { number:3, sentence1:'She rarely goes out during the week.', key_word:'SELDOM', sentence2_start:'goes out during the week.', answer:['seldom does she go'] },
        { number:4, sentence1:'He not only speaks English, but also German.', key_word:'NOT', sentence2_start:'only does he speak English, but also German.', answer:['not'] },
        { number:5, sentence1:'You must not leave the office under any circumstances.', key_word:'CIRCUMSTANCES', sentence2_start:'Under', sentence2_end:'leave the office.', answer:['no circumstances must you'] },
        { number:6, sentence1:'The show had scarcely started when the lights went out.', key_word:'SCARCELY', sentence2_start:'started when the lights went out.', answer:['scarcely had the show'] },
        { number:7, sentence1:'I had no sooner finished my report than the boss asked for another.', key_word:'SOONER', sentence2_start:'No', sentence2_end:'my report than the boss asked for another.', answer:['sooner had i finished'] },
        { number:8, sentence1:'We can only solve this problem by working hard.', key_word:'ONLY', sentence2_start:'Only by working hard', sentence2_end:'this problem.', answer:['can we solve'] },
        { number:9, sentence1:'He had never seen such a big house before.', key_word:'NEVER', sentence2_start:'had he seen such a big house before.', answer:['never'] },
        { number:10, sentence1:'They had hardly sat down when the train left.', key_word:'HARDLY', sentence2_start:'sat down when the train left.', answer:['hardly had they'] }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'inv5', title: 'Inversions - Exercise 5', description: 'Nivel B2 - Examen de Inversión',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'You should never enter this room without permission.', key_word:'ACCOUNT', sentence2_start:'On', sentence2_end:'enter this room without permission.', answer:['no account should you','no account must you'] },
        { number:2, sentence1:'Hardly had I opened the window when a bird flew in.', key_word:'WHEN', sentence2_start:'I had hardly opened the window', sentence2_end:'flew in.', answer:['when a bird'] },
        { number:3, sentence1:'He didn\'t say a word during the meeting.', key_word:'DID', sentence2_start:'Not a word', sentence2_end:'during the meeting.', answer:['did he say'] },
        { number:4, sentence1:'If I had been in your place, I wouldn\'t have gone.', key_word:'HAD', sentence2_start:'in your place, I wouldn\'t have gone.', answer:['had i been'] },
        { number:5, sentence1:'Not only did they buy a new sofa, they also got a TV.', key_word:'BUT', sentence2_start:'They not only bought a new sofa,', sentence2_end:'a TV.', answer:['but they also got'] },
        { number:6, sentence1:'Under no circumstances must we forget their help.', key_word:'CIRCUMSTANCES', sentence2_start:'We must not forget their help', sentence2_end:'.', answer:['under any circumstances'] },
        { number:7, sentence1:'Only by calling them will you find out the truth.', key_word:'IF', sentence2_start:'You will only find out the truth', sentence2_end:'them.', answer:['if you call'] },
        { number:8, sentence1:'Seldom do we see such a beautiful sunset.', key_word:'SELDOM', sentence2_start:'It', sentence2_end:'see such a beautiful sunset.', answer:['is seldom that we'] },
        { number:9, sentence1:'Hardly had we arrived when it started to snow.', key_word:'SOONER', sentence2_start:'No', sentence2_end:'we arrived than it started to snow.', answer:['sooner had'] },
        { number:10, sentence1:'I realized what was happening only when I looked closely.', key_word:'ONLY', sentence2_start:'Only when I looked closely', sentence2_end:'what was happening.', answer:['did i realize','did i realise'] }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     UE4_PAS — PASSIVE VOICE
  ══════════════════════════════════════════════════ */
  UE4_PAS: [
    // ── Ejercicio 1 ─────────────────────────────────
    {
      id: 'pas1', title: 'Passive Voice - Exercise 1', description: 'Nivel B2 - Pasiva básica y causativa',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'They are building a new cinema in the town centre.', key_word:'BEING', sentence2_start:'A new cinema', sentence2_end:'in the town centre.', answer:['is being built'] },
        { number:2, sentence1:'The mechanic repaired my car yesterday.', key_word:'HAD', sentence2_start:'I', sentence2_end:'yesterday.', answer:['had my car repaired'] },
        { number:3, sentence1:'People say that he is a very talented artist.', key_word:'SAID', sentence2_start:'He', sentence2_end:'a very talented artist.', answer:['is said to be'] },
        { number:4, sentence1:'They will publish the book next month.', key_word:'PUBLISHED', sentence2_start:'The book', sentence2_end:'next month.', answer:['will be published'] },
        { number:5, sentence1:'The police are investigating the case.', key_word:'INVESTIGATED', sentence2_start:'The case', sentence2_end:'by the police.', answer:['is being investigated'] },
        { number:6, sentence1:'The dentist cleaned my teeth last week.', key_word:'GOT', sentence2_start:'I', sentence2_end:'last week.', answer:['got my teeth cleaned'] },
        { number:7, sentence1:'People think the treasure is buried here.', key_word:'THOUGHT', sentence2_start:'The treasure', sentence2_end:'buried here.', answer:['is thought to be'] },
        { number:8, sentence1:'The teacher made us write the essay again.', key_word:'MADE', sentence2_start:'We', sentence2_end:'the essay again.', answer:['were made to write'] },
        { number:9, sentence1:'They have cancelled the concert because of the rain.', key_word:'BEEN', sentence2_start:'The concert', sentence2_end:'because of the rain.', answer:['has been cancelled'] },
        { number:10, sentence1:'Someone stole my bicycle yesterday.', key_word:'WAS', sentence2_start:'My bicycle', sentence2_end:'yesterday.', answer:['was stolen'] }
      ]
    },
    // ── Ejercicio 2 ─────────────────────────────────
    {
      id: 'pas2', title: 'Passive Voice - Exercise 2', description: 'Nivel B2 - Pasiva impersonal y causativa avanzada',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'They believe the thief escaped in a red car.', key_word:'BELIEVED', sentence2_start:'The thief', sentence2_end:'escaped in a red car.', answer:['is believed to have'] },
        { number:2, sentence1:'A professional photographer took her photo.', key_word:'HAD', sentence2_start:'She', sentence2_end:'by a professional photographer.', answer:['had her photo taken'] },
        { number:3, sentence1:'Nobody has ever seen him lose his temper.', key_word:'NEVER', sentence2_start:'He', sentence2_end:'losing his temper.', answer:['has never been seen'] },
        { number:4, sentence1:'The company will deliver your parcel tomorrow.', key_word:'DELIVERED', sentence2_start:'You will', sentence2_end:'tomorrow.', answer:['have your parcel delivered'] },
        { number:5, sentence1:'They report that three people were injured in the accident.', key_word:'REPORTED', sentence2_start:'Three people are', sentence2_end:'injured in the accident.', answer:['reported to have been'] },
        { number:6, sentence1:'Someone needs to paint this room.', key_word:'NEEDS', sentence2_start:'This room', sentence2_end:'painted.', answer:['needs to be'] },
        { number:7, sentence1:'My parents didn\'t let me stay out late.', key_word:'ALLOWED', sentence2_start:'I', sentence2_end:'stay out late.', answer:['was not allowed to','wasn\'t allowed to'] },
        { number:8, sentence1:'People expect that the economy will grow next year.', key_word:'EXPECTED', sentence2_start:'The economy', sentence2_end:'grow next year.', answer:['is expected to'] },
        { number:9, sentence1:'The doctor is going to examine his leg.', key_word:'EXAMINED', sentence2_start:'He is going to', sentence2_end:'by the doctor.', answer:['have his leg examined'] },
        { number:10, sentence1:'They are going to demolish the old building.', key_word:'PULLED', sentence2_start:'The old building is going to', sentence2_end:'down.', answer:['be pulled'] }
      ]
    },
    // ── Ejercicio 3 ─────────────────────────────────
    {
      id: 'pas3', title: 'Passive Voice - Exercise 3', description: 'Nivel B2 - Pasivas con verbos de dos objetos',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'They gave me a warm welcome at the airport.', key_word:'GIVEN', sentence2_start:'I', sentence2_end:'a warm welcome at the airport.', answer:['was given'] },
        { number:2, sentence1:'A lawyer is preparing the contract for us.', key_word:'HAVING', sentence2_start:'We', sentence2_end:'by a lawyer.', answer:['are having the contract prepared'] },
        { number:3, sentence1:'People say the new restaurant is very expensive.', key_word:'SAID', sentence2_start:'The new restaurant', sentence2_end:'very expensive.', answer:['is said to be'] },
        { number:4, sentence1:'They sent him a warning letter yesterday.', key_word:'SENT', sentence2_start:'He', sentence2_end:'a warning letter yesterday.', answer:['was sent'] },
        { number:5, sentence1:'My brother was cleaning the windows when I arrived.', key_word:'BEING', sentence2_start:'The windows', sentence2_end:'by my brother when I arrived.', answer:['were being cleaned'] },
        { number:6, sentence1:'The builder will repair our roof next week.', key_word:'REPAIRED', sentence2_start:'We will', sentence2_end:'next week.', answer:['have our roof repaired'] },
        { number:7, sentence1:'They believe the painting is a copy.', key_word:'BELIEVED', sentence2_start:'The painting', sentence2_end:'a copy.', answer:['is believed to be'] },
        { number:8, sentence1:'No one told me about the meeting.', key_word:'WAS', sentence2_start:'I', sentence2_end:'about the meeting.', answer:['was not told','wasn\'t told'] },
        { number:9, sentence1:'They made me sign the contract.', key_word:'MADE', sentence2_start:'I', sentence2_end:'the contract.', answer:['was made to sign'] },
        { number:10, sentence1:'Someone has taken my book.', key_word:'BEEN', sentence2_start:'My book', sentence2_end:'by someone.', answer:['has been taken'] }
      ]
    },
    // ── Ejercicio 4 ─────────────────────────────────
    {
      id: 'pas4', title: 'Passive Voice - Exercise 4', description: 'Nivel B2 - Pasivas complejas y preposicionales',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'They are showing a new film tonight.', key_word:'IS', sentence2_start:'A new film', sentence2_end:'tonight.', answer:['is being shown'] },
        { number:2, sentence1:'People think the author wrote the book in prison.', key_word:'THOUGHT', sentence2_start:'The author', sentence2_end:'written the book in prison.', answer:['is thought to have'] },
        { number:3, sentence1:'The optician tested her eyes last week.', key_word:'HAD', sentence2_start:'She', sentence2_end:'last week.', answer:['had her eyes tested'] },
        { number:4, sentence1:'They have offered me a job in London.', key_word:'BEEN', sentence2_start:'I', sentence2_end:'a job in London.', answer:['have been offered'] },
        { number:5, sentence1:'The referee stopped the match because of the rain.', key_word:'WAS', sentence2_start:'The match', sentence2_end:'by the referee because of the rain.', answer:['was stopped'] },
        { number:6, sentence1:'A professional painter is going to paint my house.', key_word:'GET', sentence2_start:'I am going to', sentence2_end:'by a professional painter.', answer:['get my house painted'] },
        { number:7, sentence1:'People expect the factory will close down soon.', key_word:'EXPECTED', sentence2_start:'The factory', sentence2_end:'close down soon.', answer:['is expected to'] },
        { number:8, sentence1:'They didn\'t invite us to the wedding.', key_word:'INVITED', sentence2_start:'We', sentence2_end:'to the wedding.', answer:['were not invited','weren\'t invited'] },
        { number:9, sentence1:'They will teach the children how to swim.', key_word:'TAUGHT', sentence2_start:'The children', sentence2_end:'how to swim.', answer:['will be taught'] },
        { number:10, sentence1:'They say he stole the money.', key_word:'ALLEGED', sentence2_start:'He', sentence2_end:'stolen the money.', answer:['is alleged to have'] }
      ]
    },
    // ── Ejercicio 5 ─────────────────────────────────
    {
      id: 'pas5', title: 'Passive Voice - Exercise 5', description: 'Nivel B2 - Examen de Pasiva',
      type: 'key_word_transformation',
      instructions: 'For questions 1–10, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        { number:1, sentence1:'The hair stylist cut my hair yesterday.', key_word:'HAD', sentence2_start:'I', sentence2_end:'yesterday.', answer:['had my hair cut'] },
        { number:2, sentence1:'People think the burglar entered through the window.', key_word:'THOUGHT', sentence2_start:'The burglar', sentence2_end:'entered through the window.', answer:['is thought to have'] },
        { number:3, sentence1:'They have not paid the workers yet.', key_word:'BEEN', sentence2_start:'The workers', sentence2_end:'yet.', answer:['have not been paid','haven\'t been paid'] },
        { number:4, sentence1:'They made him clean the floor.', key_word:'WAS', sentence2_start:'He', sentence2_end:'clean the floor.', answer:['was made to'] },
        { number:5, sentence1:'They are holding the meeting in the boardroom.', key_word:'HELD', sentence2_start:'The meeting', sentence2_end:'in the boardroom.', answer:['is being held'] },
        { number:6, sentence1:'They sent her a parcel last week.', key_word:'SENT', sentence2_start:'She', sentence2_end:'a parcel last week.', answer:['was sent'] },
        { number:7, sentence1:'A local mechanic is checking my car.', key_word:'GETTING', sentence2_start:'I', sentence2_end:'by a local mechanic.', answer:['am getting my car checked'] },
        { number:8, sentence1:'No one has cleaned this room for weeks.', key_word:'BEEN', sentence2_start:'This room', sentence2_end:'for weeks.', answer:['has not been cleaned'] },
        { number:9, sentence1:'They will solve the problem soon.', key_word:'SOLVED', sentence2_start:'The problem', sentence2_end:'soon.', answer:['will be solved'] },
        { number:10, sentence1:'The reporter wrote a very interesting article.', key_word:'WRITTEN', sentence2_start:'A very interesting article', sentence2_end:'by the reporter.', answer:['was written'] }
      ]
    }
  ]

};

const PHRASAL_VERBS = [
  {
    sentence: "We had to ________ the meeting because of the heavy rain.",
    options: ["call off", "put off", "take on", "bring up"],
    answer: "call off",
    meaning: "call off: cancelar un evento planificado."
  },
  {
    sentence: "Due to the storm, they decided to ________ the match until next Tuesday.",
    options: ["put off", "call off", "carry out", "turn down"],
    answer: "put off",
    meaning: "put off: posponer o aplazar un evento para más adelante."
  },
  {
    sentence: "Could you please ________ my cat while I am away on holiday?",
    options: ["look after", "look up to", "look down on", "look for"],
    answer: "look after",
    meaning: "look after: cuidar de alguien o de algo."
  },
  {
    sentence: "He decided to ________ smoking after his doctor warned him about his health.",
    options: ["give up", "give in", "give away", "give out"],
    answer: "give up",
    meaning: "give up: dejar de hacer un hábito o abandonar un esfuerzo."
  },
  {
    sentence: "She was ________ by her grandparents in a small town in Yorkshire.",
    options: ["brought up", "grown up", "taken up", "set up"],
    answer: "brought up",
    meaning: "bring up: criar y educar a un niño desde su infancia."
  },
  {
    sentence: "Even though it was raining heavily, they decided to ________ walking.",
    options: ["carry on", "carry out", "hold on", "keep up"],
    answer: "carry on",
    meaning: "carry on: continuar haciendo una actividad."
  },
  {
    sentence: "The plane is scheduled to ________ at exactly 6:00 AM.",
    options: ["take off", "take up", "take on", "take after"],
    answer: "take off",
    meaning: "take off: despegar (un avión) o quitarse una prenda de ropa."
  },
  {
    sentence: "We need to ________ what time the train leaves tomorrow morning.",
    options: ["find out", "work out", "make out", "look up"],
    answer: "find out",
    meaning: "find out: descubrir o averiguar información."
  },
  {
    sentence: "She doesn't ________ her new colleague; they argue all the time.",
    options: ["get on with", "get over", "get away with", "get by"],
    answer: "get on with",
    meaning: "get on with: llevarse bien con alguien."
  },
  {
    sentence: "I am really ________ hearing from you soon.",
    options: ["looking forward to", "looking up to", "looking after", "looking into"],
    answer: "looking forward to",
    meaning: "look forward to: esperar con ilusión o entusiasmo un acontecimiento."
  },
  {
    sentence: "We have ________ sugar, so I need to go to the supermarket.",
    options: ["run out of", "run into", "run away", "run after"],
    answer: "run out of",
    meaning: "run out of: quedarse sin existencias de algo."
  },
  {
    sentence: "He had to ________ the job offer because the salary was too low.",
    options: ["turn down", "turn off", "turn up", "turn back"],
    answer: "turn down",
    meaning: "turn down: rechazar una oferta o propuesta, o bajar el volumen."
  },
  {
    sentence: "She loves to ________ stories to entertain her little brother.",
    options: ["make up", "make out", "make for", "make do"],
    answer: "make up",
    meaning: "make up: inventar una historia o reconciliarse después de una disputa."
  },
  {
    sentence: "I cannot ________ his bad behavior any longer.",
    options: ["put up with", "put off", "put out", "put away"],
    answer: "put up with",
    meaning: "put up with: tolerar o soportar una situación o persona desagradable."
  },
  {
    sentence: "The car ________ on the way to the airport, so we missed our flight.",
    options: ["broke down", "broke up", "broke out", "broke in"],
    answer: "broke down",
    meaning: "break down: averiarse (un vehículo) o derrumbarse emocionalmente."
  },
  {
    sentence: "She ________ her sister last week over a silly argument, and they aren't speaking.",
    options: ["fell out with", "fell through", "fell behind", "fell for"],
    answer: "fell out with",
    meaning: "fall out with: enfadarse o pelearse con alguien, rompiendo la relación."
  },
  {
    sentence: "It is hard to ________ the latest technological advancements.",
    options: ["keep up with", "keep on", "keep away", "keep off"],
    answer: "keep up with",
    meaning: "keep up with: mantenerse al mismo nivel o ritmo que algo o alguien."
  },
  {
    sentence: "Please ________, I will be back in just a minute.",
    options: ["hold on", "hold up", "hold out", "hold back"],
    answer: "hold on",
    meaning: "hold on: esperar un momento corto."
  },
  {
    sentence: "It took him a long time to ________ the loss of his pet dog.",
    options: ["get over", "get through", "get by", "get away"],
    answer: "get over",
    meaning: "get over: recuperarse de una enfermedad, susto o pérdida emocional."
  },
  {
    sentence: "He ________ in London but later moved to New York for work.",
    options: ["grew up", "brought up", "took up", "set up"],
    answer: "grew up",
    meaning: "grow up: crecer y hacerse adulto."
  },
  {
    sentence: "They decided to ________ a new company specializing in green energy.",
    options: ["set up", "set off", "set out", "set back"],
    answer: "set up",
    meaning: "set up: fundar o establecer un negocio, sistema o institución."
  },
  {
    sentence: "He didn't ________ for the meeting until it was almost over.",
    options: ["show up", "show off", "turn off", "give in"],
    answer: "show up",
    meaning: "show up: aparecer o llegar a un sitio."
  },
  {
    sentence: "She decided to ________ tennis to stay in shape during summer.",
    options: ["take up", "take on", "take in", "take over"],
    answer: "take up",
    meaning: "take up: empezar a practicar un pasatiempo, deporte o actividad."
  },
  {
    sentence: "After hours of pressure, the enemy finally decided to ________.",
    options: ["give in", "give up", "give away", "give out"],
    answer: "give in",
    meaning: "give in: ceder ante la presión o rendirse."
  },
  {
    sentence: "She has always ________ her mother, who is a very brave woman.",
    options: ["looked up to", "looked down on", "looked after", "looked into"],
    answer: "looked up to",
    meaning: "look up to: admirar y respetar enormemente a alguien."
  },
  {
    sentence: "You should never ________ people just because they are poor.",
    options: ["look down on", "look up to", "look after", "look for"],
    answer: "look down on",
    meaning: "look down on: menospreciar o considerar a alguien como inferior."
  },
  {
    sentence: "It was so hot in the crowded room that she ________.",
    options: ["passed out", "passed away", "passed by", "passed on"],
    answer: "passed out",
    meaning: "pass out: perder el conocimiento o desmayarse."
  },
  {
    sentence: "It was so dark that I could not ________ what the sign said.",
    options: ["make out", "make up", "make for", "make over"],
    answer: "make out",
    meaning: "make out: conseguir ver, escuchar o comprender algo con dificultad."
  },
  {
    sentence: "I promise I won't ________ you ________; you can trust me.",
    options: ["let / down", "let / in", "let / out", "let / off"],
    answer: "let / down",
    meaning: "let down: defraudar o decepcionar a alguien."
  },
  {
    sentence: "Please ________ this form with your personal details and sign it.",
    options: ["fill in", "fill up", "fill out of", "fill with"],
    answer: "fill in",
    meaning: "fill in: rellenar o completar un documento o formulario."
  },
  {
    sentence: "Don't ________ those old books; we can donate them to the library.",
    options: ["throw away", "throw up", "throw out of", "throw back"],
    answer: "throw away",
    meaning: "throw away: desechar o tirar algo a la basura."
  },
  {
    sentence: "Remember to ________ the lights before you go to bed.",
    options: ["turn off", "turn down", "turn on", "turn into"],
    answer: "turn off",
    meaning: "turn off: apagar un interruptor o aparato eléctrico."
  },
  {
    sentence: "If you walk faster, you will soon ________ the rest of the group.",
    options: ["catch up with", "keep up with", "go along with", "run out of"],
    answer: "catch up with",
    meaning: "catch up with: alcanzar a alguien que va delante."
  },
  {
    sentence: "We don't have internet at the moment, so we must ________ it.",
    options: ["do without", "do away with", "make up for", "go along with"],
    answer: "do without",
    meaning: "do without: apañarse o prescindir de algo que no se tiene."
  },
  {
    sentence: "Their plans to buy the house ________ when the bank rejected the loan.",
    options: ["fell through", "fell out", "fell behind", "fell down"],
    answer: "fell through",
    meaning: "fall through: fracasar o no llegar a realizarse (un plan o acuerdo)."
  },
  {
    sentence: "He managed to ________ cheating in the exam because the teacher wasn't looking.",
    options: ["get away with", "get over", "get along with", "get by with"],
    answer: "get away with",
    meaning: "get away with: irse de rositas o escapar sin castigo tras cometer una falta."
  },
  {
    sentence: "The politician refused to ________ despite the heavy protests.",
    options: ["back down", "back up", "back out", "back away"],
    answer: "back down",
    meaning: "back down: retractarse, ceder en una postura o echarse atrás."
  },
  {
    sentence: "The scientists plan to ________ a series of experiments next month.",
    options: ["carry out", "carry on", "carry away", "carry through"],
    answer: "carry out",
    meaning: "carry out: llevar a cabo, realizar o ejecutar una tarea o investigación."
  },
  {
    sentence: "He decided to ________ of university and travel around the world.",
    options: ["drop out", "drop off", "drop in", "drop by"],
    answer: "drop out",
    meaning: "drop out: abandonar los estudios antes de terminarlos."
  },
  {
    sentence: "The alarm clock ________ at 6:00 AM every single morning.",
    options: ["goes off", "goes on", "goes out", "goes away"],
    answer: "goes off",
    meaning: "go off: sonar (una alarma), estallar (una bomba) o estropearse la comida."
  },
  {
    sentence: "We want everyone to ________ the activities and have fun.",
    options: ["join in", "join up", "join into", "join on"],
    answer: "join in",
    meaning: "join in: unirse o participar en una actividad grupal."
  },
  {
    sentence: "She kept ________ talking even though no one was listening.",
    options: ["on", "out", "away", "up"],
    answer: "on",
    meaning: "keep on: seguir o continuar haciendo algo de forma insistente."
  },
  {
    sentence: "The boat began to ________ the harbor as the storm approached.",
    options: ["make for", "make up", "make out", "make over"],
    answer: "make for",
    meaning: "make for: dirigirse hacia un lugar determinado."
  },
  {
    sentence: "I will ________ the money you lent me as soon as I get paid.",
    options: ["pay back", "pay for", "pay off", "pay up"],
    answer: "pay back",
    meaning: "pay back: devolver dinero prestado a alguien."
  },
  {
    sentence: "Guess who I ________ at the supermarket yesterday? My old school teacher!",
    options: ["run into", "run out of", "run after", "run over"],
    answer: "run into",
    meaning: "run into: encontrarse con alguien por casualidad."
  },
  {
    sentence: "She really ________ her father; they have the exact same eyes and smile.",
    options: ["takes after", "takes up", "takes on", "takes over"],
    answer: "takes after",
    meaning: "take after: parecerse físicamente o en carácter a un familiar."
  },
  {
    sentence: "These old shoes are completely ________; I need to buy a new pair.",
    options: ["worn out", "worn off", "worn down", "worn away"],
    answer: "worn out",
    meaning: "wear out: desgastarse por el uso extremo o agotar físicamente."
  },
  {
    sentence: "It took them a long time to ________ a solution to the complex problem.",
    options: ["work out", "work up", "work off", "work on"],
    answer: "work out",
    meaning: "work out: resolver, calcular o hacer ejercicio físico."
  },
  {
    sentence: "Please ________ your phone number here so I don't forget it.",
    options: ["write down", "write up", "write off", "write out"],
    answer: "write down",
    meaning: "write down: anotar o registrar algo por escrito."
  },
  {
    sentence: "The strike was ________ after a successful negotiation between both sides.",
    options: ["called off", "called out", "called for", "called in"],
    answer: "called off",
    meaning: "call off: suspender o cancelar una actividad o evento planificado."
  }
];

const DEPENDENT_PREPOSITIONS = [
  {
    sentence: "Are you interested ________ applying for the student exchange program?",
    options: ["in", "on", "at", "about"],
    answer: "in",
    meaning: "interested in: estar interesado en algo."
  },
  {
    sentence: "She is extremely good ________ solving complex mathematical equations.",
    options: ["at", "in", "on", "with"],
    answer: "at",
    meaning: "good at: ser bueno/a en una habilidad o materia."
  },
  {
    sentence: "You can always rely ________ John to help you when you are in trouble.",
    options: ["on", "in", "at", "with"],
    answer: "on",
    meaning: "rely on: confiar o contar con alguien o algo."
  },
  {
    sentence: "The police decide to accuse him ________ committing the credit card fraud.",
    options: ["of", "for", "with", "about"],
    answer: "of",
    meaning: "accuse someone of: acusar a alguien de un delito o falta."
  },
  {
    sentence: "He wanted to apologise ________ arriving late to the formal dinner.",
    options: ["for", "about", "to", "at"],
    answer: "for",
    meaning: "apologise for: pedir disculpas por un error o retraso."
  },
  {
    sentence: "She is highly capable ________ running the entire marketing department herself.",
    options: ["of", "for", "in", "to"],
    answer: "of",
    meaning: "capable of: ser capaz de realizar una acción."
  },
  {
    sentence: "Who is responsible ________ organizing the safety training next week?",
    options: ["for", "of", "about", "with"],
    answer: "for",
    meaning: "responsible for: ser responsable de algo o alguien."
  },
  {
    sentence: "Her parents are incredibly proud ________ her outstanding academic results.",
    options: ["of", "for", "about", "with"],
    answer: "of",
    meaning: "proud of: estar orgulloso/a de los logros de alguien."
  },
  {
    sentence: "She isn't very keen ________ playing video games in her free time.",
    options: ["on", "in", "at", "about"],
    answer: "on",
    meaning: "keen on: tener afición o interés en hacer algo."
  },
  {
    sentence: "If you work hard, you will succeed ________ passing the B2 First certificate.",
    options: ["in", "on", "at", "to"],
    answer: "in",
    meaning: "succeed in: tener éxito o lograr realizar algo difícil."
  },
  {
    sentence: "The city of Seville is famous ________ its beautiful historic architecture.",
    options: ["for", "about", "of", "by"],
    answer: "for",
    meaning: "famous for: ser famoso/a o conocido/a por una característica especial."
  },
  {
    sentence: "Many young children are afraid ________ sleeping in the dark.",
    options: ["of", "about", "with", "by"],
    answer: "of",
    meaning: "afraid of: tener miedo a algo."
  },
  {
    sentence: "How does this new proposal differ ________ the one we saw yesterday?",
    options: ["from", "with", "to", "of"],
    answer: "from",
    meaning: "differ from: diferenciarse de otra opción."
  },
  {
    sentence: "Our weekend plans depend entirely ________ the weather conditions.",
    options: ["on", "of", "in", "with"],
    answer: "on",
    meaning: "depend on: depender de un factor externo."
  },
  {
    sentence: "Do you truly believe ________ ghosts or supernatural beings?",
    options: ["in", "on", "at", "about"],
    answer: "in",
    meaning: "believe in: creer en la existencia de algo."
  },
  {
    sentence: "It is hard to concentrate ________ studying with so much background noise.",
    options: ["on", "in", "at", "about"],
    answer: "on",
    meaning: "concentrate on: concentrarse o enfocarse en una tarea."
  },
  {
    sentence: "Your handwriting is very similar ________ your brother's.",
    options: ["to", "with", "at", "like"],
    answer: "to",
    meaning: "similar to: ser parecido/a o similar a algo."
  },
  {
    sentence: "Are you fully satisfied ________ the quality of service in this hotel?",
    options: ["with", "about", "of", "in"],
    answer: "with",
    meaning: "satisfied with: estar satisfecho/a o conforme con algo."
  },
  {
    sentence: "We must prevent the children ________ playing near the busy highway.",
    options: ["from", "of", "to", "against"],
    answer: "from",
    meaning: "prevent someone from: evitar o impedir que alguien haga algo."
  },
  {
    sentence: "Many elderly people suffer ________ arthritis during cold winter months.",
    options: ["from", "of", "with", "about"],
    answer: "from",
    meaning: "suffer from: padecer o sufrir una enfermedad o problema."
  },
  {
    sentence: "He went to the reception desk to complain ________ the noisy neighbors.",
    options: ["about", "of", "for", "with"],
    answer: "about",
    meaning: "complain about: quejarse sobre un inconveniente o molestia."
  },
  {
    sentence: "The exam will consist ________ three parts: reading, writing and listening.",
    options: ["of", "in", "by", "with"],
    answer: "of",
    meaning: "consist of: constar o consistir de varias partes."
  },
  {
    sentence: "Don't laugh ________ him; he is doing the best he can.",
    options: ["at", "of", "about", "to"],
    answer: "at",
    meaning: "laugh at: reírse o burlarse de alguien."
  },
  {
    sentence: "I don't agree ________ you on this topic; I have a different opinion.",
    options: ["with", "to", "about", "on"],
    answer: "with",
    meaning: "agree with: estar de acuerdo con una persona."
  },
  {
    sentence: "I want to congratulate you ________ winning the first prize.",
    options: ["on", "for", "about", "by"],
    answer: "on",
    meaning: "congratulate someone on: felicitar a alguien por un logro."
  },
  {
    sentence: "What time will the flight arrive ________ London Heathrow airport?",
    options: ["at", "in", "to", "on"],
    answer: "at",
    meaning: "arrive at: llegar a un sitio cerrado o específico (aeropuerto, estación, etc.)."
  },
  {
    sentence: "You shouldn't spend so much money ________ designer clothes.",
    options: ["on", "in", "for", "about"],
    answer: "on",
    meaning: "spend money on: gastar dinero en algo."
  },
  {
    sentence: "I will pay ________ the coffee; it is my treat today.",
    options: ["for", "about", "to", "with"],
    answer: "for",
    meaning: "pay for: pagar el importe de un objeto o servicio."
  },
  {
    sentence: "She doesn't seem to care ________ what other people think of her.",
    options: ["about", "of", "for", "on"],
    answer: "about",
    meaning: "care about: importar o preocuparse por algo."
  },
  {
    sentence: "Does this beautiful leather umbrella belong ________ you?",
    options: ["to", "in", "at", "with"],
    answer: "to",
    meaning: "belong to: pertenecer a alguien."
  },
  {
    sentence: "Many local residents object ________ the construction of the new airport.",
    options: ["to", "for", "against", "about"],
    answer: "to",
    meaning: "object to: oponerse o poner objeciones a una idea o proyecto."
  },
  {
    sentence: "Eating fresh vegetables and fruits is very good ________ your health.",
    options: ["for", "to", "at", "in"],
    answer: "for",
    meaning: "good for: ser beneficioso o bueno para la salud."
  },
  {
    sentence: "Don't worry ________ the results; you did a great job.",
    options: ["about", "for", "of", "with"],
    answer: "about",
    meaning: "worry about: preocuparse por una situación o problema."
  },
  {
    sentence: "She is extremely fond ________ baking desserts for her friends.",
    options: ["of", "about", "for", "with"],
    answer: "of",
    meaning: "fond of: tenerle mucho cariño o afición a algo/alguien."
  },
  {
    sentence: "He is absolutely crazy ________ learning how to play the drums.",
    options: ["about", "for", "with", "on"],
    answer: "about",
    meaning: "crazy about: estar loco/a por algo o sumamente entusiasmado/a."
  },
  {
    sentence: "She decided to apply ________ the graphic designer position.",
    options: ["for", "to", "in", "about"],
    answer: "for",
    meaning: "apply for: solicitar un puesto de trabajo o beca formalmente."
  },
  {
    sentence: "Many local businesses will benefit ________ the new tourism campaign.",
    options: ["from", "of", "by", "with"],
    answer: "from",
    meaning: "benefit from: beneficiarse o sacar provecho de algo."
  },
  {
    sentence: "It is difficult to cope ________ so much work stress every day.",
    options: ["with", "about", "for", "by"],
    answer: "with",
    meaning: "cope with: lidiar o apañarse con una situación difícil."
  },
  {
    sentence: "The idea of camping in the cold rain doesn't appeal ________ me at all.",
    options: ["to", "for", "about", "on"],
    answer: "to",
    meaning: "appeal to: resultar atractivo o gustar a alguien."
  },
  {
    sentence: "Her parents do not approve ________ her choice of career.",
    options: ["of", "about", "for", "with"],
    answer: "of",
    meaning: "approve of: aprobar o dar el visto bueno a una acción o decisión."
  },
  {
    sentence: "We hope that everyone will participate ________ the local charity event.",
    options: ["in", "on", "at", "to"],
    answer: "in",
    meaning: "participate in: participar o tomar parte en una actividad."
  },
  {
    sentence: "The town is widely known ________ its production of high-quality olive oil.",
    options: ["for", "about", "of", "in"],
    answer: "for",
    meaning: "known for: ser conocido/a o famoso/a por un motivo concreto."
  },
  {
    sentence: "We must prepare ________ the upcoming job interview carefully.",
    options: ["for", "to", "about", "with"],
    answer: "for",
    meaning: "prepare for: prepararse para un evento futuro."
  },
  {
    sentence: "Everyone should try to contribute ________ the conservation of the forest.",
    options: ["to", "for", "with", "in"],
    answer: "to",
    meaning: "contribute to: contribuir o aportar a una causa."
  },
  {
    sentence: "Managers have to deal ________ customer complaints with absolute patience.",
    options: ["with", "about", "for", "on"],
    answer: "with",
    meaning: "deal with: tratar, gestionar o lidiar con un problema o persona."
  },
  {
    sentence: "The sunglasses will protect your eyes ________ harmful UV solar radiation.",
    options: ["from", "of", "against", "to"],
    answer: "from",
    meaning: "protect from: proteger de un peligro o elemento dañino."
  },
  {
    sentence: "He is still trying to recover ________ the severe flu he got last week.",
    options: ["from", "of", "with", "about"],
    answer: "from",
    meaning: "recover from: recuperarse de una enfermedad o golpe emocional."
  },
  {
    sentence: "This beautiful old song always reminds me ________ my childhood summers.",
    options: ["of", "about", "for", "with"],
    answer: "of",
    meaning: "remind someone of: recordarle a alguien una persona, lugar o recuerdo."
  },
  {
    sentence: "Please do not shout ________ me; I am trying to understand you.",
    options: ["at", "to", "for", "with"],
    answer: "at",
    meaning: "shout at: gritarle a alguien enfadado/a (shout to se usa para que te oigan)."
  },
  {
    sentence: "We need to translate this entire document ________ Spanish before Friday.",
    options: ["into", "to", "in", "with"],
    answer: "into",
    meaning: "translate into: traducir un texto o palabra a otro idioma."
  }
];


