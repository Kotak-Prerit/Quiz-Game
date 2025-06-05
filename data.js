function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function distributeCorrectAnswers(questions) {
  const totalQuestions = questions.length;
  const questionsPerPosition = Math.floor(totalQuestions / 4);
  const remainder = totalQuestions % 4;
  
  let positions = [];
  for (let i = 0; i < 4; i++) {
    const count = i < remainder ? questionsPerPosition + 1 : questionsPerPosition;
    positions = positions.concat(Array(count).fill(i));
  }
  
  positions = shuffleArray(positions);
  
  questions.forEach((question, index) => {
    const correctAnswer = question.answer;
    const options = [...question.options];
    
    const correctIndex = options.indexOf(correctAnswer);
    options.splice(correctIndex, 1);
    
    shuffleArray(options);
    
    options.splice(positions[index], 0, correctAnswer);
    
    question.options = options;
  });
  
  return questions;
}

let questions = [
  {
    id: 1,
    question: "What does CPU stand for?",
    answer: "Central Processing Unit",
    options: [
      "Central Processing Unit",
      "Central Programming Unit",
      "Computer Processing Unit",
      "Central Performance Unit",
    ],
  },
  {
    id: 2,
    question: "What does RAM stand for?",
    answer: "Random Access Memory",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Access Memory",
      "Rapid Access Memory",
    ],
  },
  {
    id: 3,
    question: "What does ROM stand for?",
    answer: "Read Only Memory",
    options: [
      "Read Only Memory",
      "Random Only Memory",
      "Run Only Memory",
      "Read On Memory",
    ],
  },
  {
    id: 4,
    question: "What does USB stand for?",
    answer: "Universal Serial Bus",
    options: [
      "Universal Serial Bus",
      "Universal System Bus",
      "United Serial Bus",
      "Universal Serial Base",
    ],
  },
  {
    id: 5,
    question: "What does GPU stand for?",
    answer: "Graphics Processing Unit",
    options: [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Graphical Performance Unit",
      "Graphics Performance Unit",
    ],
  },
  {
    id: 6,
    question: "What does SSD stand for?",
    answer: "Solid State Drive",
    options: [
      "Solid State Drive",
      "Super Speed Drive",
      "Solid Storage Device",
      "Secure Storage Drive",
    ],
  },
  {
    id: 7,
    question: "What does HDD stand for?",
    answer: "Hard Disk Drive",
    options: [
      "Hard Disk Drive",
      "High Density Disk",
      "Hard Data Drive",
      "Heavy Disk Drive",
    ],
  },
  {
    id: 8,
    question: "What does LAN stand for?",
    answer: "Local Area Network",
    options: [
      "Local Area Network",
      "Large Area Network",
      "Long Area Network",
      "Local Access Network",
    ],
  },
  {
    id: 9,
    question: "What does WAN stand for?",
    answer: "Wide Area Network",
    options: [
      "Wide Area Network",
      "Wireless Area Network",
      "Wired Area Network",
      "Wide Access Network",
    ],
  },
  {
    id: 10,
    question: "What does PAN stand for?",
    answer: "Personal Area Network",
    options: [
      "Personal Area Network",
      "Private Area Network",
      "Public Area Network",
      "Primary Area Network",
    ],
  },
  {
    id: 11,
    question: "What does MAN stand for?",
    answer: "Metropolitan Area Network",
    options: [
      "Metropolitan Area Network",
      "Main Area Network",
      "Medium Area Network",
      "Mega Area Network",
    ],
  },
  {
    id: 12,
    question: "What does BIOS stand for?",
    answer: "Basic Input Output System",
    options: [
      "Basic Input Output System",
      "Binary Input Output System",
      "Basic Integrated Output System",
      "Basic Input Output Service",
    ],
  },
  {
    id: 13,
    question: "What does OS stand for?",
    answer: "Operating System",
    options: [
      "Operating System",
      "Open Source",
      "Online System",
      "Operating Service",
    ],
  },
  {
    id: 14,
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "HyperText Transfer Program",
      "HyperText Transfer Process",
    ],
  },
  {
    id: 15,
    question: "What does HTTPS stand for?",
    answer: "HyperText Transfer Protocol Secure",
    options: [
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol Service",
      "HyperText Transmission Protocol Secure",
      "HyperText Transfer Program Secure",
    ],
  },
  {
    id: 16,
    question: "What does URL stand for?",
    answer: "Uniform Resource Locator",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Reference Locator",
      "Universal Reference Locator",
    ],
  },
  {
    id: 17,
    question: "What does IP stand for?",
    answer: "Internet Protocol",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Internet Process",
      "Internal Process",
    ],
  },
  {
    id: 18,
    question: "What does DNS stand for?",
    answer: "Domain Name System",
    options: [
      "Domain Name System",
      "Domain Network System",
      "Data Name System",
      "Domain Name Service",
    ],
  },
  {
    id: 19,
    question: "What does ISP stand for?",
    answer: "Internet Service Provider",
    options: [
      "Internet Service Provider",
      "Internet Service Protocol",
      "Internal Service Provider",
      "Internet Source Provider",
    ],
  },
  {
    id: 20,
    question: "What does PDF stand for?",
    answer: "Portable Document Format",
    options: [
      "Portable Document Format",
      "Public Document Format",
      "Personal Document File",
      "Portable Data File",
    ],
  },
  {
    id: 21,
    question: "What does GUI stand for?",
    answer: "Graphical User Interface",
    options: [
      "Graphical User Interface",
      "General User Interface",
      "Graphical Utility Interface",
      "General Utility Interface",
    ],
  },
  {
    id: 22,
    question: "What does VGA stand for?",
    answer: "Video Graphics Array",
    options: [
      "Video Graphics Array",
      "Visual Graphics Array",
      "Video General Array",
      "Visual General Array",
    ],
  },
  {
    id: 23,
    question: "What does HDMI stand for?",
    answer: "High Definition Multimedia Interface",
    options: [
      "High Definition Multimedia Interface",
      "High Data Multimedia Interface",
      "High Definition Media Interface",
      "High Definition Multimedia Integration",
    ],
  },
  {
    id: 24,
    question: "What does LED stand for?",
    answer: "Light Emitting Diode",
    options: [
      "Light Emitting Diode",
      "Light Emission Device",
      "Low Emitting Diode",
      "Light Emitting Device",
    ],
  },
  {
    id: 25,
    question: "What does LCD stand for?",
    answer: "Liquid Crystal Display",
    options: [
      "Liquid Crystal Display",
      "Light Crystal Display",
      "Liquid Crystal Device",
      "Light Crystal Device",
    ],
  },
  {
    id: 26,
    question: "What does ATM stand for?",
    answer: "Automated Teller Machine",
    options: [
      "Automated Teller Machine",
      "Automatic Teller Machine",
      "Automated Transaction Machine",
      "Automatic Transaction Machine",
    ],
  },
  {
    id: 27,
    question: "What does PIN stand for?",
    answer: "Personal Identification idber",
    options: [
      "Personal Identification idber",
      "Private Identification idber",
      "Personal Identity idber",
      "Public Identification idber",
    ],
  },
  {
    id: 28,
    question: "What does SIM stand for?",
    answer: "Subscriber Identity Module",
    options: [
      "Subscriber Identity Module",
      "Subscriber Identification Module",
      "Subscriber Identity Machine",
      "Subscriber Identification Machine",
    ],
  },
  {
    id: 29,
    question: "What does SMS stand for?",
    answer: "Short Message Service",
    options: [
      "Short Message Service",
      "Simple Message Service",
      "Short Messaging System",
      "Simple Messaging System",
    ],
  },
  {
    id: 30,
    question: "What does GPS stand for?",
    answer: "Global Positioning System",
    options: [
      "Global Positioning System",
      "Global Position System",
      "General Positioning System",
      "Global Placement System",
    ],
  },
  {
    id: 31,
    question: "What does Wi-Fi stand for?",
    answer: "Wireless Fidelity",
    options: [
      "Wireless Fidelity",
      "Wide Fidelity",
      "Wireless Fiber",
      "Wide Fiber",
    ],
  },
  {
    id: 32,
    question: "What does CD stand for?",
    answer: "Compact Disc",
    options: ["Compact Disc", "Computer Disc", "Compact Data", "Computer Data"],
  },
  {
    id: 33,
    question: "What does DVD stand for?",
    answer: "Digital Versatile Disc",
    options: [
      "Digital Versatile Disc",
      "Digital Video Disc",
      "Data Versatile Disc",
      "Digital Visual Disc",
    ],
  },
  {
    id: 34,
    question: "What does ATM stand for (in networking)?",
    answer: "Asynchronous Transfer Mode",
    options: [
      "Asynchronous Transfer Mode",
      "Automatic Transfer Mode",
      "Asynchronous Transmission Mode",
      "Automatic Transmission Mode",
    ],
  },
  {
    id: 35,
    question: "What does FTP stand for?",
    answer: "File Transfer Protocol",
    options: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transmission Protocol",
      "Fast Transmission Protocol",
    ],
  },
  {
    id: 36,
    question: "What does SMTP stand for?",
    answer: "Simple Mail Transfer Protocol",
    options: [
      "Simple Mail Transfer Protocol",
      "Simple Message Transfer Protocol",
      "Secure Mail Transfer Protocol",
      "Secure Message Transfer Protocol",
    ],
  },
  {
    id: 37,
    question: "What does POP stand for?",
    answer: "Post Office Protocol",
    options: [
      "Post Office Protocol",
      "Point of Presence",
      "Protocol of Post",
      "Post Office Process",
    ],
  },
  {
    id: 38,
    question: "What does IMAP stand for?",
    answer: "Internet Message Access Protocol",
    options: [
      "Internet Message Access Protocol",
      "Internal Message Access Protocol",
      "Internet Mail Access Protocol",
      "Internal Mail Access Protocol",
    ],
  },
  {
    id: 39,
    question: "What does MAC stand for (networking)?",
    answer: "Media Access Control",
    options: [
      "Media Access Control",
      "Machine Access Control",
      "Media Access Code",
      "Machine Access Code",
    ],
  },
  {
    id: 40,
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: [
      "Application Programming Interface",
      "Application Program Interface",
      "Advanced Programming Interface",
      "Application Programming Integration",
    ],
  },
  {
    id: 41,
    question: "What does AI stand for?",
    answer: "Artificial Intelligence",
    options: [
      "Artificial Intelligence",
      "Automated Intelligence",
      "Artificial Integration",
      "Automated Integration",
    ],
  },
  {
    id: 42,
    question: "What does IoT stand for?",
    answer: "Internet of Things",
    options: [
      "Internet of Things",
      "Integration of Things",
      "Internet of Technology",
      "Integration of Technology",
    ],
  },
  {
    id: 43,
    question: "What does OCR stand for?",
    answer: "Optical Character Recognition",
    options: [
      "Optical Character Recognition",
      "Optical Code Recognition",
      "Optical Character Reader",
      "Optical Code Reader",
    ],
  },
  {
    id: 44,
    question: "What does QR stand for?",
    answer: "Quick Response",
    options: [
      "Quick Response",
      "Quick Read",
      "Quick Reference",
      "Quick Record",
    ],
  },
  {
    id: 45,
    question: "What does RFID stand for?",
    answer: "Radio Frequency Identification",
    options: [
      "Radio Frequency Identification",
      "Radio Frequency Identification Device",
      "Radio Frequency Integrated Device",
      "Radio Frequency Integrated Data",
    ],
  },
  {
    id: 46,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HyperText Makeup Language",
      "HyperText Markup Level",
      "HyperText Markup Layout",
    ],
  },
  {
    id: 47,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    id: 48,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Personal Home Page",
      "Preprocessor Hypertext Page",
      "Programming Hypertext Page",
    ],
  },
  {
    id: 49,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Structured Question Language",
      "System Query Language",
    ],
  },
  {
    id: 50,
    question: "What does JSON stand for?",
    answer: "JavaScript Object Notation",
    options: [
      "JavaScript Object Notation",
      "JavaScript Oriented Notation",
      "JavaScript Object Name",
      "JavaScript Oriented Name",
    ],
  },
  {
    id: 51,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXtra Markup Language",
      "eXtended Markup Language",
      "eXtra Markup Layout",
    ],
  },
  {
    id: 52,
    question: "What does SSL stand for?",
    answer: "Secure Sockets Layer",
    options: [
      "Secure Sockets Layer",
      "Secure System Layer",
      "Secure Sockets Link",
      "Secure System Link",
    ],
  },
  {
    id: 53,
    question: "What does TLS stand for?",
    answer: "Transport Layer Security",
    options: [
      "Transport Layer Security",
      "Transmission Layer Security",
      "Transport Link Security",
      "Transmission Link Security",
    ],
  },
  {
    id: 54,
    question: "What does VPN stand for?",
    answer: "Virtual Private Network",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Virtual Protected Network",
      "Virtual Personal Network",
    ],
  },
  {
    id: 55,
    question: "What does DOS stand for?",
    answer: "Disk Operating System",
    options: [
      "Disk Operating System",
      "Data Operating System",
      "Disk Operation System",
      "Data Operation System",
    ],
  },
  {
    id: 56,
    question: "What does PC stand for?",
    answer: "Personal Computer",
    options: [
      "Personal Computer",
      "Private Computer",
      "Public Computer",
      "Personal Calculator",
    ],
  },
  {
    id: 57,
    question: "What does IT stand for?",
    answer: "Information Technology",
    options: [
      "Information Technology",
      "Internet Technology",
      "Information Technique",
      "Internet Technique",
    ],
  },
  {
    id: 58,
    question: "What does WWW stand for?",
    answer: "World Wide Web",
    options: [
      "World Wide Web",
      "Wide World Web",
      "World Web Wide",
      "Web World Wide",
    ],
  },
  {
    id: 59,
    question: "What does GIF stand for?",
    answer: "Graphics Interchange Format",
    options: [
      "Graphics Interchange Format",
      "Graphics Interface Format",
      "General Interchange Format",
      "Graphics Interchange File",
    ],
  },
  {
    id: 60,
    question: "What does PNG stand for?",
    answer: "Portable Network Graphics",
    options: [
      "Portable Network Graphics",
      "Personal Network Graphics",
      "Portable Network Group",
      "Personal Network Group",
    ],
  },
  {
    id: 61,
    question: "What does JPEG stand for?",
    answer: "Joint Photographic Experts Group",
    options: [
      "Joint Photographic Experts Group",
      "Joint Photography Experts Group",
      "Joint Photographic Expert Group",
      "Joint Photography Expert Group",
    ],
  },
  {
    id: 62,
    question: "What does BMP stand for?",
    answer: "Bitmap",
    options: ["Bitmap", "Binary Map", "Bit Mapping", "Binary Mapping"],
  },
  {
    id: 63,
    question: "What does PSU stand for?",
    answer: "Power Supply Unit",
    options: [
      "Power Supply Unit",
      "Power System Unit",
      "Personal Supply Unit",
      "Personal System Unit",
    ],
  },
  {
    id: 64,
    question: "What does UPS stand for?",
    answer: "Uninterruptible Power Supply",
    options: [
      "Uninterruptible Power Supply",
      "Uninterrupted Power Supply",
      "Uninterruptible Power System",
      "Uninterrupted Power System",
    ],
  },
];

questions = distributeCorrectAnswers(questions);