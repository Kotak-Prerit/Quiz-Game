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
    const count =
      i < remainder ? questionsPerPosition + 1 : questionsPerPosition;
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
    question: "What does DHCP stand for?",
    answer: "Dynamic Host Configuration Protocol",
    options: [
      "Dynamic Host Configuration Protocol",
      "Domain Host Configuration Protocol",
      "Dynamic Hypertext Configuration Protocol",
      "Distributed Host Configuration Protocol",
    ],
  },
  {
    id: 2,
    question: "Which layer of the OSI model is responsible for routing?",
    answer: "Network Layer",
    options: [
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer",
    ],
  },
  {
    id: 3,
    question: "What is the default port for HTTP?",
    answer: "80",
    options: ["80", "443", "21", "25"],
  },
  {
    id: 4,
    question: "What device connects different networks together?",
    answer: "Router",
    options: ["Router", "Switch", "Hub", "Repeater"],
  },
  {
    id: 5,
    question:
      "Which protocol is used to securely transfer files over the Internet?",
    answer: "SFTP",
    options: ["SFTP", "FTP", "SMTP", "SNMP"],
  },
  {
    id: 6,
    question: "What does NAT stand for?",
    answer: "Network Address Translation",
    options: [
      "Network Address Translation",
      "Network Access Technology",
      "Network Application Tool",
      "Network Address Tool",
    ],
  },
  {
    id: 7,
    question: "Which protocol is used for sending emails?",
    answer: "SMTP",
    options: ["SMTP", "POP3", "IMAP", "FTP"],
  },
  {
    id: 8,
    question: "What is the main function of a firewall?",
    answer: "To control incoming and outgoing network traffic",
    options: [
      "To control incoming and outgoing network traffic",
      "To increase network speed",
      "To assign IP addresses",
      "To store data",
    ],
  },
  {
    id: 9,
    question: "What does VPN stand for?",
    answer: "Virtual Private Network",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Verified Private Network",
      "Virtual Protected Network",
    ],
  },
  {
    id: 10,
    question: "Which protocol is used to resolve domain names to IP addresses?",
    answer: "DNS",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
  },
  {
    id: 11,
    question: "What is the maximum length of a CAT5e Ethernet cable?",
    answer: "100 meters",
    options: ["100 meters", "50 meters", "200 meters", "500 meters"],
  },
  {
    id: 12,
    question: "Which protocol is used for remote login to a server?",
    answer: "SSH",
    options: ["SSH", "FTP", "SMTP", "SNMP"],
  },
  {
    id: 13,
    question: "What does ARP stand for?",
    answer: "Address Resolution Protocol",
    options: [
      "Address Resolution Protocol",
      "Automatic Routing Protocol",
      "Address Routing Protocol",
      "Automatic Resolution Protocol",
    ],
  },
  {
    id: 14,
    question: "Which device operates at Layer 2 of the OSI model?",
    answer: "Switch",
    options: ["Switch", "Router", "Hub", "Gateway"],
  },
  {
    id: 15,
    question: "What is the loopback IP address?",
    answer: "127.0.0.1",
    options: ["127.0.0.1", "192.168.1.1", "255.255.255.0", "10.0.0.1"],
  },
  {
    id: 16,
    question: "Which protocol is used for network management?",
    answer: "SNMP",
    options: ["SNMP", "SMTP", "SCP", "SFTP"],
  },
  {
    id: 17,
    question: "What does ICMP stand for?",
    answer: "Internet Control Message Protocol",
    options: [
      "Internet Control Message Protocol",
      "Internet Connection Management Protocol",
      "Internal Control Message Protocol",
      "Internet Communication Management Protocol",
    ],
  },
  {
    id: 18,
    question: "Which protocol is used to obtain an IP address automatically?",
    answer: "DHCP",
    options: ["DHCP", "DNS", "SNMP", "FTP"],
  },
  {
    id: 19,
    question: "What is the purpose of a subnet mask?",
    answer: "To divide an IP address into network and host portions",
    options: [
      "To divide an IP address into network and host portions",
      "To encrypt data",
      "To assign MAC addresses",
      "To increase bandwidth",
    ],
  },
  {
    id: 20,
    question: "Which protocol is used for secure web browsing?",
    answer: "HTTPS",
    options: ["HTTPS", "HTTP", "FTP", "SSH"],
  },
  {
    id: 21,
    question: "What does VLAN stand for?",
    answer: "Virtual Local Area Network",
    options: [
      "Virtual Local Area Network",
      "Virtual Logical Area Network",
      "Verified Local Area Network",
      "Virtual Layer Area Network",
    ],
  },
  {
    id: 22,
    question: "Which protocol is used for transferring web pages?",
    answer: "HTTP",
    options: ["HTTP", "FTP", "SMTP", "SNMP"],
  },
  {
    id: 23,
    question: "What is the main function of a switch?",
    answer: "To forward data based on MAC addresses",
    options: [
      "To forward data based on MAC addresses",
      "To assign IP addresses",
      "To connect to the Internet",
      "To filter web content",
    ],
  },
  {
    id: 24,
    question: "Which protocol is used to synchronize time on a network?",
    answer: "NTP",
    options: ["NTP", "SNMP", "SMTP", "FTP"],
  },
  {
    id: 25,
    question: "What does BGP stand for?",
    answer: "Border Gateway Protocol",
    options: [
      "Border Gateway Protocol",
      "Basic Gateway Protocol",
      "Broadband Gateway Protocol",
      "Backup Gateway Protocol",
    ],
  },
  {
    id: 26,
    question: "Which protocol is used for sending and receiving emails?",
    answer: "IMAP",
    options: ["IMAP", "FTP", "HTTP", "SNMP"],
  },
  {
    id: 27,
    question: "What does SSID stand for?",
    answer: "Service Set Identifier",
    options: [
      "Service Set Identifier",
      "Secure Set Identifier",
      "Service System Identifier",
      "Secure System Identifier",
    ],
  },
  {
    id: 28,
    question: "Which device amplifies signals in a network?",
    answer: "Repeater",
    options: ["Repeater", "Switch", "Router", "Bridge"],
  },
  {
    id: 29,
    question: "What is the default port for HTTPS?",
    answer: "443",
    options: ["443", "80", "21", "25"],
  },
  {
    id: 30,
    question: "Which protocol is used to transfer files between computers?",
    answer: "FTP",
    options: ["FTP", "SMTP", "SNMP", "HTTP"],
  },
  {
    id: 31,
    question: "What does PPP stand for?",
    answer: "Point-to-Point Protocol",
    options: [
      "Point-to-Point Protocol",
      "Peer-to-Peer Protocol",
      "Packet-to-Packet Protocol",
      "Private-to-Private Protocol",
    ],
  },
  {
    id: 32,
    question: "Which protocol is used for remote desktop access?",
    answer: "RDP",
    options: ["RDP", "SSH", "FTP", "SNMP"],
  },
  {
    id: 33,
    question: "What does DMZ stand for in networking?",
    answer: "Demilitarized Zone",
    options: [
      "Demilitarized Zone",
      "Domain Management Zone",
      "Data Management Zone",
      "Distributed Management Zone",
    ],
  },
  {
    id: 34,
    question: "Which protocol is used for network file sharing in Windows?",
    answer: "SMB",
    options: ["SMB", "FTP", "NFS", "SNMP"],
  },
  {
    id: 35,
    question: "What does MTU stand for?",
    answer: "Maximum Transmission Unit",
    options: [
      "Maximum Transmission Unit",
      "Minimum Transmission Unit",
      "Maximum Transfer Unit",
      "Minimum Transfer Unit",
    ],
  },
  {
    id: 36,
    question: "Which protocol is used for network discovery?",
    answer: "LLDP",
    options: ["LLDP", "SNMP", "SMTP", "FTP"],
  },
  {
    id: 37,
    question: "What is the main function of a bridge?",
    answer: "To connect two network segments",
    options: [
      "To connect two network segments",
      "To assign IP addresses",
      "To filter web content",
      "To amplify signals",
    ],
  },
  {
    id: 38,
    question: "Which protocol is used for secure shell access?",
    answer: "SSH",
    options: ["SSH", "Telnet", "FTP", "SNMP"],
  },
  {
    id: 39,
    question: "What does OSPF stand for?",
    answer: "Open Shortest Path First",
    options: [
      "Open Shortest Path First",
      "Open Secure Path First",
      "Open Source Path First",
      "Open Shortest Protocol First",
    ],
  },
  {
    id: 40,
    question: "Which protocol is used for network address resolution?",
    answer: "ARP",
    options: ["ARP", "DNS", "DHCP", "ICMP"],
  },
  {
    id: 41,
    question: "What does MAC stand for in networking?",
    answer: "Media Access Control",
    options: [
      "Media Access Control",
      "Machine Access Control",
      "Media Address Control",
      "Machine Address Control",
    ],
  },
  {
    id: 42,
    question: "Which protocol is used for sending error messages in a network?",
    answer: "ICMP",
    options: ["ICMP", "SNMP", "SMTP", "FTP"],
  },
  {
    id: 43,
    question: "What does STP stand for?",
    answer: "Spanning Tree Protocol",
    options: [
      "Spanning Tree Protocol",
      "Secure Transfer Protocol",
      "Simple Transfer Protocol",
      "Spanning Transfer Protocol",
    ],
  },
  {
    id: 44,
    question: "Which protocol is used for network printing?",
    answer: "IPP",
    options: ["IPP", "FTP", "SMTP", "SNMP"],
  },
  {
    id: 45,
    question: "What is the default port for FTP?",
    answer: "21",
    options: ["21", "22", "23", "25"],
  },
  {
    id: 46,
    question: "Which protocol is used for directory services?",
    answer: "LDAP",
    options: ["LDAP", "SNMP", "SMTP", "FTP"],
  },
  {
    id: 47,
    question: "What does MPLS stand for?",
    answer: "Multiprotocol Label Switching",
    options: [
      "Multiprotocol Label Switching",
      "Multiple Protocol Layer Switching",
      "Multipoint Label Switching",
      "Multiprotocol Layer Switching",
    ],
  },
  {
    id: 48,
    question: "Which protocol is used for wireless security?",
    answer: "WPA2",
    options: ["WPA2", "WEP", "SSL", "TLS"],
  },
  {
    id: 49,
    question: "What does ISDN stand for?",
    answer: "Integrated Services Digital Network",
    options: [
      "Integrated Services Digital Network",
      "Internet Services Digital Network",
      "Integrated System Digital Network",
      "Internet System Digital Network",
    ],
  },
  {
    id: 50,
    question: "Which protocol is used for voice over IP?",
    answer: "SIP",
    options: ["SIP", "FTP", "SMTP", "SNMP"],
  },
  {
    id: 51,
    question: "What does FQDN stand for?",
    answer: "Fully Qualified Domain Name",
    options: [
      "Fully Qualified Domain Name",
      "Full Quality Domain Name",
      "Fully Quantified Domain Name",
      "Full Qualified Data Name",
    ],
  },
  {
    id: 52,
    question: "Which protocol is used for network file sharing in Linux?",
    answer: "NFS",
    options: ["NFS", "FTP", "SMB", "SNMP"],
  },
  {
    id: 53,
    question: "What does PAT stand for?",
    answer: "Port Address Translation",
    options: [
      "Port Address Translation",
      "Packet Address Translation",
      "Protocol Address Translation",
      "Port Application Translation",
    ],
  },
  {
    id: 54,
    question: "Which protocol is used for sending instant messages?",
    answer: "XMPP",
    options: ["XMPP", "SMTP", "SNMP", "FTP"],
  },
  {
    id: 55,
    question: "What does CSU/DSU stand for?",
    answer: "Channel Service Unit/Data Service Unit",
    options: [
      "Channel Service Unit/Data Service Unit",
      "Central Service Unit/Data Service Unit",
      "Channel Service Unit/Digital Service Unit",
      "Central Service Unit/Digital Service Unit",
    ],
  },
  {
    id: 56,
    question: "Which protocol is used for secure email?",
    answer: "SMTPS",
    options: ["SMTPS", "SMTP", "POP3", "IMAP"],
  },
  {
    id: 57,
    question: "What does IGMP stand for?",
    answer: "Internet Group Management Protocol",
    options: [
      "Internet Group Management Protocol",
      "Internal Group Management Protocol",
      "Internet Gateway Management Protocol",
      "Internal Gateway Management Protocol",
    ],
  },
  {
    id: 58,
    question: "Which protocol is used for network booting?",
    answer: "PXE",
    options: ["PXE", "FTP", "SNMP", "SMTP"],
  },
  {
    id: 59,
    question: "What does EIGRP stand for?",
    answer: "Enhanced Interior Gateway Routing Protocol",
    options: [
      "Enhanced Interior Gateway Routing Protocol",
      "Extended Interior Gateway Routing Protocol",
      "Enhanced Internet Gateway Routing Protocol",
      "Extended Internet Gateway Routing Protocol",
    ],
  },
  {
    id: 60,
    question: "Which protocol is used for network authentication?",
    answer: "RADIUS",
    options: ["RADIUS", "SNMP", "SMTP", "FTP"],
  },
  {
    id: 61,
    question: "What does WINS stand for?",
    answer: "Windows Internet Name Service",
    options: [
      "Windows Internet Name Service",
      "Wide Internet Name Service",
      "Windows Internal Name Service",
      "Wide Internal Name Service",
    ],
  },
  {
    id: 62,
    question: "Which protocol is used for network monitoring?",
    answer: "SNMP",
    options: ["SNMP", "SMTP", "FTP", "HTTP"],
  },
  {
    id: 63,
    question: "What does TFTP stand for?",
    answer: "Trivial File Transfer Protocol",
    options: [
      "Trivial File Transfer Protocol",
      "Transfer File Transfer Protocol",
      "Temporary File Transfer Protocol",
      "Trivial File Transmission Protocol",
    ],
  },
  {
    id: 64,
    question: "Which protocol is used for sending web pages securely?",
    answer: "HTTPS",
    options: ["HTTPS", "HTTP", "FTP", "SSH"],
  },
  {
    id: 65,
    question: "What does AAA stand for in networking?",
    answer: "Authentication, Authorization, and Accounting",
    options: [
      "Authentication, Authorization, and Accounting",
      "Automatic Address Assignment",
      "Advanced Access Authentication",
      "Authorized Access Assignment",
    ],
  },
];

questions = distributeCorrectAnswers(questions);
