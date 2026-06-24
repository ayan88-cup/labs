import { KnowledgeArticle } from './types';

export const knowledgeBaseData: KnowledgeArticle[] = [
  {
    id: "kb-01", title: "Introduction to SQL Injection", category: "Web",
    content: "SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It generally allows an attacker to view data that they are not normally able to retrieve.",
    tags: ["sql", "database", "injection"]
  },
  {
    id: "kb-02", title: "Cross-Site Scripting (XSS)", category: "Web",
    content: "Cross-Site Scripting (XSS) is a vulnerability that occurs when an application includes untrusted data in a web page without proper validation or escaping. This allows attackers to execute malicious scripts in the victim's browser.",
    tags: ["xss", "javascript", "frontend"]
  },
  {
    id: "kb-03", title: "Cross-Site Request Forgery (CSRF)", category: "Web",
    content: "CSRF forces a logged-on victim's browser to send a forged HTTP request, including the victim's session cookie and any other automatically included authentication information, to a vulnerable web application.",
    tags: ["csrf", "session", "forgery"]
  },
  {
    id: "kb-04", title: "Server-Side Request Forgery (SSRF)", category: "Web",
    content: "SSRF vulnerabilities let an attacker abuse server functionality to access or modify resources. The attacker targets the server to make requests on their behalf, often accessing internal networks.",
    tags: ["ssrf", "server", "networks"]
  },
  {
    id: "kb-05", title: "Command Injection", category: "System",
    content: "Command injection is an attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application. It usually occurs when an application passes unsafe user supplied data to a system shell.",
    tags: ["shell", "rce", "system"]
  },
  {
    id: "kb-06", title: "Directory Traversal", category: "Web",
    content: "Directory traversal (also known as file path traversal) is a vulnerability that allows an attacker to read arbitrary files on the server that is running an application. This might include application code and data, backend credentials, and sensitive operating system files.",
    tags: ["lfi", "files", "traversal"]
  },
  {
    id: "kb-07", title: "XML External Entity (XXE) Injection", category: "Web",
    content: "XXE is a web security vulnerability that allows an attacker to interfere with an application's processing of XML data. It often allows an attacker to view files on the application server filesystem.",
    tags: ["xml", "xxe", "injection"]
  },
  {
    id: "kb-08", title: "Insecure Direct Object References (IDOR)", category: "Web",
    content: "IDOR occurs when an application provides direct access to objects based on user-supplied input. Attackers can bypass authorization and access resources belonging to other users directly by modifying the value of a parameter used to direct an object.",
    tags: ["idor", "authorization", "access"]
  },
  {
    id: "kb-09", title: "Buffer Overflow", category: "System",
    content: "A buffer overflow occurs when a program or process attempts to write more data to a fixed length block of memory, or buffer, than the buffer is allocated to hold. This can be used to execute arbitrary code.",
    tags: ["memory", "buffer", "c"]
  },
  {
    id: "kb-10", title: "Man-in-the-Middle (MitM)", category: "Network",
    content: "A MitM attack occurs when an attacker intercepts communications between two parties to secretly eavesdrop or modify traffic traveling between the two. Attackers might use ARP spoofing or DNS spoofing.",
    tags: ["mitm", "interception", "arp"]
  },
  {
    id: "kb-11", title: "ARP Spoofing", category: "Network",
    content: "ARP spoofing is a type of attack in which a malicious actor sends falsified ARP (Address Resolution Protocol) messages over a local area network. This results in the linking of an attacker's MAC address with the IP address of a legitimate computer or server.",
    tags: ["arp", "spoofing", "lan"]
  },
  {
    id: "kb-12", title: "DNS Spoofing", category: "Network",
    content: "DNS spoofing, also referred to as DNS cache poisoning, is a form of computer security hacking in which corrupt Domain Name System data is introduced into the DNS resolver's cache, causing the name server to return an incorrect IP address.",
    tags: ["dns", "spoofing", "poisoning"]
  },
  {
    id: "kb-13", title: "Phishing", category: "OSINT",
    content: "Phishing is a cybercrime in which a target or targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.",
    tags: ["social-engineering", "email", "credentials"]
  },
  {
    id: "kb-14", title: "Spear Phishing", category: "OSINT",
    content: "Spear phishing is an email or electronic communications scam targeted towards a specific individual, organization or business. Although often intended to steal data for malicious purposes, cybercriminals may also intend to install malware on a targeted user's computer.",
    tags: ["social-engineering", "targeted", "email"]
  },
  {
    id: "kb-15", title: "Password Spraying", category: "System",
    content: "Password spraying is a type of brute force attack in which a malicious actor attempts the same password on many accounts before moving on to another password and repeating the process.",
    tags: ["authentication", "brute-force", "passwords"]
  },
  {
    id: "kb-16", title: "Credential Stuffing", category: "System",
    content: "Credential stuffing is a cyberattack where stolen account credentials typically consisting of lists of usernames and/or email addresses and the corresponding passwords (often from a data breach) are used to gain unauthorized access to user accounts.",
    tags: ["authentication", "credentials", "breach"]
  },
  {
    id: "kb-17", title: "Broken Authentication", category: "Web",
    content: "Broken authentication vulnerabilities allow an attacker to use manual and/or automatic methods to try to gain control over any account they want in a system – or worse, to gain complete control over the system.",
    tags: ["auth", "sessions", "login"]
  },
  {
    id: "kb-18", title: "Security Misconfiguration", category: "Cloud",
    content: "Security misconfiguration arises when security settings are defined, implemented, and maintained as defaults. Good security requires a secure configuration defined and deployed for the application, web server, database server, and platform.",
    tags: ["configuration", "defaults", "hardening"]
  },
  {
    id: "kb-19", title: "Insecure Deserialization", category: "Web",
    content: "Insecure deserialization is a vulnerability which occurs when untrusted data is used to abuse the logic of an application, inflict a denial of service (DoS) attack, or even execute arbitrary code upon it being deserialized.",
    tags: ["serialization", "objects", "rce"]
  },
  {
    id: "kb-20", title: "Using Components with Known Vulnerabilities", category: "Web",
    content: "Components, such as libraries, frameworks, and other software modules, almost always run with full privileges. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover.",
    tags: ["dependencies", "libraries", "cve"]
  },
  {
    id: "kb-21", title: "Insufficient Logging and Monitoring", category: "Cloud",
    content: "Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain extraction, pivot to more systems, and tamper with, extract, or destroy data.",
    tags: ["logging", "monitoring", "incident-response"]
  },
  {
    id: "kb-22", title: "Symmetric Encryption", category: "Cryptography",
    content: "Symmetric encryption uses a single key to encrypt and decrypt data. Both the sender and receiver must have the same key. Examples include AES, DES, and 3DES.",
    tags: ["encryption", "aes", "keys"]
  },
  {
    id: "kb-23", title: "Asymmetric Encryption", category: "Cryptography",
    content: "Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption. This solves the key distribution problem of symmetric encryption. Examples include RSA and ECC.",
    tags: ["encryption", "rsa", "public-key"]
  },
  {
    id: "kb-24", title: "Hashing", category: "Cryptography",
    content: "Hashing is a one-way mathematical function that converts data of any size into a fixed-size string of characters. It is used to verify data integrity and store passwords securely. Examples include SHA-256 and bcrypt.",
    tags: ["hashing", "integrity", "passwords"]
  },
  {
    id: "kb-25", title: "Digital Signatures", category: "Cryptography",
    content: "A digital signature is a mathematical scheme for verifying the authenticity of digital messages or documents. It uses asymmetric cryptography to ensure non-repudiation and integrity.",
    tags: ["signatures", "authenticity", "non-repudiation"]
  },
  {
    id: "kb-26", title: "Public Key Infrastructure (PKI)", category: "Cryptography",
    content: "PKI is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.",
    tags: ["pki", "certificates", "ca"]
  },
  {
    id: "kb-27", title: "Transport Layer Security (TLS)", category: "Cryptography",
    content: "TLS is a cryptographic protocol designed to provide communications security over a computer network. It ensures privacy and data integrity between two or more communicating computer applications.",
    tags: ["tls", "ssl", "https"]
  },
  {
    id: "kb-28", title: "Virtual Private Network (VPN)", category: "Network",
    content: "A VPN extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.",
    tags: ["vpn", "tunneling", "privacy"]
  },
  {
    id: "kb-29", title: "Firewall", category: "Network",
    content: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It typically establishes a barrier between a trusted network and an untrusted network.",
    tags: ["firewall", "filtering", "rules"]
  },
  {
    id: "kb-30", title: "Intrusion Detection System (IDS)", category: "Network",
    content: "An IDS is a device or software application that monitors a network or systems for malicious activity or policy violations. Any malicious activity or violation is typically reported either to an administrator or collected centrally.",
    tags: ["ids", "monitoring", "alerts"]
  },
  {
    id: "kb-31", title: "Intrusion Prevention System (IPS)", category: "Network",
    content: "An IPS is a network security/threat prevention technology that examines network traffic flows to detect and prevent vulnerability exploits.",
    tags: ["ips", "prevention", "blocking"]
  },
  {
    id: "kb-32", title: "Denial-of-Service (DoS)", category: "Network",
    content: "A DoS attack is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.",
    tags: ["dos", "availability", "flooding"]
  },
  {
    id: "kb-33", title: "Distributed Denial-of-Service (DDoS)", category: "Network",
    content: "A DDoS attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.",
    tags: ["ddos", "botnet", "amplification"]
  },
  {
    id: "kb-34", title: "Botnet", category: "Network",
    content: "A botnet is a number of Internet-connected devices, each of which is running one or more bots. Botnets can be used to perform distributed denial-of-service attack (DDoS attack), steal data, send spam, and allows the attacker to access the device and its connection.",
    tags: ["botnet", "malware", "c2"]
  },
  {
    id: "kb-35", title: "Malware", category: "System",
    content: "Malware, or malicious software, is any program or file that is intentionally harmful to a computer, network or server. Types include viruses, worms, trojan horses, ransomware and spyware.",
    tags: ["malware", "virus", "trojan"]
  },
  {
    id: "kb-36", title: "Ransomware", category: "System",
    content: "Ransomware is a type of malware from cryptovirology that threatens to publish the victim's personal data or perpetually block access to it unless a ransom is paid.",
    tags: ["ransomware", "extortion", "crypto"]
  },
  {
    id: "kb-37", title: "Spyware", category: "System",
    content: "Spyware is software with malicious behavior that aims to gather information about a person or organization and send such information to another entity in a way that harms the user.",
    tags: ["spyware", "privacy", "tracking"]
  },
  {
    id: "kb-38", title: "Rootkit", category: "System",
    content: "A rootkit is a collection of computer software, typically malicious, designed to enable access to a computer or an area of its software that is not otherwise allowed and often masks its existence or the existence of other software.",
    tags: ["rootkit", "stealth", "kernel"]
  },
  {
    id: "kb-39", title: "Zero-Day Exploit", category: "System",
    content: "A zero-day exploit is a cyberattack that occurs on the same day a weakness is discovered in software. At that point, it's exploited before a fix becomes available from its creator.",
    tags: ["zero-day", "vulnerability", "unpatched"]
  },
  {
    id: "kb-40", title: "Social Engineering", category: "OSINT",
    content: "Social engineering, in the context of information security, is the psychological manipulation of people into performing actions or divulging confidential information.",
    tags: ["manipulation", "psychology", "deception"]
  },
  {
    id: "kb-41", title: "Tailgating", category: "System",
    content: "Tailgating, also known as piggybacking, involves an attacker seeking entry to a restricted area which lacks the proper authentication, by simply walking in behind a person who has legitimate access.",
    tags: ["physical", "security", "access"]
  },
  {
    id: "kb-42", title: "Dumpster Diving", category: "OSINT",
    content: "Dumpster diving is the practice of sifting through commercial or residential waste to find items that have been discarded by their owners, but that may prove useful to the picker, such as passwords or sensitive documents.",
    tags: ["physical", "information", "waste"]
  },
  {
    id: "kb-43", title: "Shoulder Surfing", category: "OSINT",
    content: "Shoulder surfing is a type of social engineering technique used to obtain information such as personal identification numbers (PINs), passwords and other confidential data by looking over the victim's shoulder.",
    tags: ["physical", "observation", "privacy"]
  },
  {
    id: "kb-44", title: "Open Source Intelligence (OSINT)", category: "OSINT",
    content: "OSINT is data collected from publicly available sources to be used in an intelligence context. In the security community, the term is used to refer to the process of gathering information about a target before an attack.",
    tags: ["osint", "reconnaissance", "public-data"]
  },
  {
    id: "kb-45", title: "Prompt Injection", category: "AI",
    content: "Prompt injection is a vulnerability in Large Language Models (LLMs) where an attacker provides crafted input to override the original instructions given to the model, causing it to perform unintended actions.",
    tags: ["ai", "llm", "injection"]
  },
  {
    id: "kb-46", title: "Data Poisoning", category: "AI",
    content: "Data poisoning involves manipulating the training data of a machine learning model to alter its behavior. This can result in the model learning incorrect patterns or introducing deliberate backdoors.",
    tags: ["ai", "training", "poisoning"]
  },
  {
    id: "kb-47", title: "Model Inversion", category: "AI",
    content: "Model inversion attacks aim to extract sensitive information about the training data from a machine learning model by querying it and analyzing the responses.",
    tags: ["ai", "privacy", "extraction"]
  },
  {
    id: "kb-48", title: "Serverless Security Risks", category: "Cloud",
    content: "Serverless functions can introduce security risks such as overly permissive roles, vulnerable dependencies, and insecure event data processing, which can lead to unauthorized access or execution.",
    tags: ["cloud", "serverless", "iam"]
  },
  {
    id: "kb-49", title: "Container Security", category: "Cloud",
    content: "Container security involves protecting containerized applications from threats. Risks include vulnerable images, misconfigured orchestrators (like Kubernetes), and container escape vulnerabilities.",
    tags: ["cloud", "docker", "kubernetes"]
  },
  {
    id: "kb-50", title: "Cloud Misconfigurations", category: "Cloud",
    content: "Cloud misconfigurations, such as overly permissive access controls, publicly accessible storage buckets, and unencrypted data, are a leading cause of data breaches in cloud environments.",
    tags: ["cloud", "iam", "storage"]
  }
];
