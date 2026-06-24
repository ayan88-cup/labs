import { Challenge } from './types';

export const challengesData: Challenge[] = [
  {
    id: 'sqli-01',
    title: 'SQL Injection 101',
    description: "Learn how malicious SQL payloads can bypass authentication portals by manipulating backend database queries.",
    category: 'Web',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "SQL Injection (SQLi) occurs when user-supplied data is interpreted as code by the backend database.",
      "An attacker can use characters like single quotes (') to break out of the intended query structure.",
      "By appending logical operators like `OR 1=1`, the attacker forces the database to return a true condition, bypassing password checks."
    ]
  },
  {
    id: 'xss-01',
    title: 'Reflected XSS',
    description: "Inject malicious JavaScript into a search query to execute code in the victim's browser.",
    category: 'Web',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Cross-Site Scripting (XSS) allows attackers to execute scripts in the victim's browser.",
      "Reflected XSS occurs when input provided by a user is immediately returned (reflected) by the web application.",
      "Try injecting `<script>alert(1)</script>` into the input to see if it reflects."
    ]
  },
  {
    id: 'cmd-01',
    title: 'Command Injection',
    description: "Exploit a network ping utility to execute arbitrary system commands on the underlying server.",
    category: 'Network',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Command Injection occurs when an application passes unsafe user-supplied data to a system shell.",
      "Common command separators in Linux include `;`, `&&`, and `|`.",
      "For example, passing `127.0.0.1; ls -la` might ping the localhost and then list the directory contents."
    ]
  },
  {
    id: 'idola-01',
    title: 'Insecure Direct Object Reference',
    description: "Access sensitive files belonging to other users by manipulating the ID parameters in the URL.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "IDOR occurs when an application provides direct access to objects based on user-supplied input.",
      "If the application does not properly authorize the user, an attacker can access other users' data.",
      "Try changing the `user_id` parameter to access another user's profile."
    ]
  },
  {
    id: 'ai-01',
    title: 'AI Prompt Injection',
    description: "Manipulate an AI chatbot's system prompt to leak its initial instructions or perform unauthorized actions.",
    category: 'AI',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Prompt Injection involves crafting inputs that trick an LLM into ignoring previous instructions.",
      "Attackers use phrases like 'Ignore all previous instructions' to pivot the AI's behavior.",
      "This can lead to data exfiltration, offensive output generation, or bypassing safety filters."
    ]
  },
  {
    id: 'sys-01',
    title: 'Stack Buffer Overflow',
    description: "Overwrite the instruction pointer by feeding a program an overly long string input.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Buffer overflows happen when a program writes more data to a block of memory (buffer) than it was allocated for.",
      "By carefully crafting the length of the input, an attacker can overwrite the Return Address (EIP/RIP).",
      "Try sending a large payload of 'A's (e.g., AAAAAAAAAAAAAAAAAAAA) to crash the program."
    ]
  },
  {
    id: 'net-01',
    title: 'MITM: ARP Spoofing',
    description: "Intercept communications between two parties by poisoning their ARP caches.",
    category: 'Network',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Man-in-the-Middle (MITM) attacks allow an attacker to secretly relay and alter communications.",
      "ARP Spoofing involves sending malicious ARP messages to a local area network.",
      "This links the attacker's MAC address with the IP address of a legitimate computer or gateway."
    ]
  },
  {
    id: 'web-02',
    title: 'Server-Side Request Forgery',
    description: "Force the server to make HTTP requests to internal, protected resources.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "SSRF vulnerabilities let an attacker induce the server-side application to make requests to an unintended location.",
      "This is often used to access internal metadata services (like AWS metadata at 169.254.169.254).",
      "Try entering 'http://localhost' or 'http://169.254.169.254' as the target URL."
    ]
  },
  {
    id: 'web-03',
    title: 'Remote Code Execution (RCE)',
    description: "Upload a malicious script to achieve full remote command execution on the target server.",
    category: 'Web',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "RCE is a critical vulnerability allowing an attacker to execute arbitrary commands on a remote device.",
      "This often happens through insecure file uploads (e.g., uploading a .php web shell) or insecure deserialization.",
      "Once a shell is established, commands like 'whoami' or 'ls' can explore the system."
    ]
  },
  {
    id: 'net-02',
    title: 'Data Exfiltration via DNS',
    description: "Bypass outbound firewall rules by tunneling stolen data through DNS queries.",
    category: 'Network',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Data Exfiltration is the unauthorized transfer of data from a computer or server.",
      "DNS tunneling encodes data within DNS queries and responses, which are often allowed through firewalls.",
      "Attackers format data as subdomains to their own authoritative name server."
    ]
  },
  {
    id: 'sys-02',
    title: 'Linux Privilege Escalation',
    description: "Abuse an incorrectly configured SUID binary to escalate from a standard user to root.",
    category: 'System',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Privilege Escalation involves exploiting a bug, design flaw, or configuration oversight to gain elevated access.",
      "SUID (Set owner User ID up on execution) is a special type of file permission in Unix.",
      "If a binary like 'find' or 'vim' has SUID root, it can often be abused to spawn a root shell."
    ]
  },
  {
    id: 'web-04',
    title: 'Cross-Site Request Forgery (CSRF)',
    description: "Trick an authenticated user into executing unwanted actions on a web application.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "CSRF forces an end user to execute unwanted actions on a web application in which they're currently authenticated.",
      "It relies on the browser automatically including credentials like session cookies.",
      "Defenses include Anti-CSRF tokens and SameSite cookie attributes."
    ]
  },
  {
    id: 'web-05',
    title: 'Directory Traversal (LFI)',
    description: "Read arbitrary files on the server that is running an application.",
    category: 'Web',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Local File Inclusion (LFI) or Path Traversal allows an attacker to read files on the server.",
      "This is done by manipulating file path variables with dot-dot-slash (../) sequences.",
      "Try payload `../../../../etc/passwd` to attempt reading system files."
    ]
  },
  {
    id: 'ai-02',
    title: 'AI Data Poisoning',
    description: "Corrupt the training data of a machine learning model to alter its future predictions.",
    category: 'AI',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Data poisoning involves introducing malicious or corrupted data into an AI's training set.",
      "This can create 'backdoors' in the model that cause it to misclassify specific inputs.",
      "Defending requires strict data sanitization and anomaly detection during training."
    ]
  },
  {
    id: 'cloud-01',
    title: 'AWS IAM Misconfiguration',
    description: "Exploit overly permissive IAM roles to access unauthorized S3 buckets.",
    category: 'Cloud',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Identity and Access Management (IAM) controls who is authenticated and authorized to use resources.",
      "Wildcards (like `s3:*`) in policies often grant far more access than intended.",
      "Attackers enumerate permissions to find escalation paths within the cloud environment."
    ]
  },
  {
    id: 'web-06',
    title: 'XML External Entity (XXE)',
    description: "Interfere with an application's processing of XML data to read internal files.",
    category: 'Web',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "XXE vulnerabilities occur when XML input containing a reference to an external entity is processed weakly.",
      "This can lead to the disclosure of confidential data, denial of service, or SSRF.",
      "Use `<!ENTITY xxe SYSTEM \"file:///etc/passwd\">` inside an XML payload."
    ]
  },
  {
    id: 'crypto-01',
    title: 'Weak Hash Cracking',
    description: "Identify and crack MD5 hashes using collision vulnerabilities and rainbow tables.",
    category: 'Cryptography',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Hashing is a one-way mathematical function used to secure passwords.",
      "Older algorithms like MD5 and SHA-1 are vulnerable to collision attacks and rainbow tables.",
      "Modern applications should use slow hashing algorithms like bcrypt or Argon2 with unique salts."
    ]
  },
  {
    id: 'net-03',
    title: 'VLAN Hopping',
    description: "Bypass network segmentation to send traffic to a different Virtual LAN.",
    category: 'Network',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "VLAN Hopping allows an attacker to access a VLAN they are not physically connected to.",
      "Methods include Switch Spoofing (mimicking a trunking switch) or Double Tagging (manipulating 802.1Q tags).",
      "Mitigation includes disabling DTP and using dedicated native VLANs."
    ]
  },
  {
    id: 'web-07',
    title: 'Broken Object Level Auth (BOLA)',
    description: "Exploit API endpoints that fail to validate if the user owns the requested resource.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "BOLA (formerly IDOR) is the most common API vulnerability.",
      "It happens when an API endpoint takes an object ID but doesn't check if the current user has access to it.",
      "Always validate authorization at the object level, not just the endpoint level."
    ]
  },
  {
    id: 'sys-03',
    title: 'Insecure Deserialization',
    description: "Manipulate serialized objects to execute arbitrary code upon deserialization.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Serialization converts an object into a format that can be stored or transported.",
      "If untrusted data is deserialized without verification, an attacker can instantiate malicious objects.",
      "This often leads to Remote Code Execution (RCE) in Java, Python (Pickle), or PHP environments."
    ]
  },
  {
    id: 'web-08',
    title: 'Blind SQL Injection',
    description: "Extract data from a database by asking true/false questions when errors are hidden.",
    category: 'Web',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Blind SQLi occurs when the application is vulnerable to SQL injection, but its HTTP responses do not contain the results.",
      "Attackers use boolean-based (true/false) or time-based payloads.",
      "For example, using `SLEEP(10)` to infer if a condition is true based on response time."
    ]
  },
  {
    id: 'web-09',
    title: 'DOM-based XSS',
    description: "Execute JavaScript by manipulating the Document Object Model (DOM) environment in the browser.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "DOM-based XSS arises when an application contains client-side JavaScript that processes data from an untrusted source.",
      "Data is typically sourced from `location.hash` or `document.referrer`.",
      "Payloads run purely client-side without reaching the server."
    ]
  },
  {
    id: 'web-10',
    title: 'Host Header Injection',
    description: "Manipulate the HTTP Host header to poison password reset links or bypass access controls.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Many web servers trust the Host header provided by the client.",
      "If this header is used dynamically to generate links, an attacker can inject their own domain.",
      "This often leads to token leakage when users click tampered reset links."
    ]
  },
  {
    id: 'web-11',
    title: 'Server-Side Template Injection',
    description: "Inject native template syntax to achieve RCE on the backend server.",
    category: 'Web',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "SSTI occurs when user input is concatenated directly into a template (e.g., Jinja2, Twig) rather than being passed as data.",
      "Attackers can write template expressions to execute arbitrary code.",
      "Try payloads like `{{7*7}}` to check if the template engine evaluates expressions."
    ]
  },
  {
    id: 'web-12',
    title: 'HTTP Request Smuggling',
    description: "Interfere with the way a web site processes sequences of HTTP requests.",
    category: 'Web',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Request smuggling exploits discrepancies in how frontend servers and backend servers parse HTTP requests.",
      "This usually involves manipulating the `Content-Length` and `Transfer-Encoding` headers.",
      "It allows attackers to 'smuggle' a request, bypassing security controls."
    ]
  },
  {
    id: 'net-04',
    title: 'TCP SYN Flood',
    description: "Exhaust server resources by sending rapid SYN requests without completing the handshake.",
    category: 'Network',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "A SYN flood is a form of Denial-of-Service (DoS) attack.",
      "The attacker sends a succession of SYN requests to a target's system in an attempt to consume enough server resources to make the system unresponsive.",
      "Defenses include SYN cookies and rate limiting."
    ]
  },
  {
    id: 'net-05',
    title: 'DNS Spoofing',
    description: "Redirect traffic to a malicious site by altering DNS records.",
    category: 'Network',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "DNS Spoofing (or DNS Cache Poisoning) involves corrupting the DNS cache of a resolver.",
      "This forces users trying to reach a legitimate site to be redirected to a fake one.",
      "DNSSEC (DNS Security Extensions) helps mitigate this by validating DNS responses cryptographically."
    ]
  },
  {
    id: 'net-06',
    title: 'BGP Hijacking',
    description: "Reroute internet traffic by falsely announcing ownership of groups of IP addresses.",
    category: 'Network',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "The Border Gateway Protocol (BGP) is the routing protocol of the internet.",
      "If a rogue autonomous system (AS) announces shorter paths to IP prefixes, traffic can be misdirected.",
      "RPKI (Resource Public Key Infrastructure) is a common defense mechanism."
    ]
  },
  {
    id: 'crypto-02',
    title: 'Padding Oracle Attack',
    description: "Decrypt ciphertext without knowing the encryption key by exploiting padding validation.",
    category: 'Cryptography',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "A padding oracle attack targets CBC mode encryption.",
      "By sending modified ciphertexts and observing whether the server returns a 'padding error', an attacker can deduce the plaintext.",
      "Use authenticated encryption like GCM to prevent this."
    ]
  },
  {
    id: 'crypto-03',
    title: 'ECB Mode Vulnerability',
    description: "Exploit the Electronic Codebook (ECB) cipher mode to reveal structural patterns in data.",
    category: 'Cryptography',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "ECB is the simplest encryption mode, where each block of plaintext is encrypted independently.",
      "Identical plaintext blocks produce identical ciphertext blocks.",
      "This leaks patterns, famously demonstrated by the 'ECB Penguin' image."
    ]
  },
  {
    id: 'osint-01',
    title: 'GitHub Credentials Leak',
    description: "Search public repositories to find accidentally committed API keys and passwords.",
    category: 'OSINT',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Developers sometimes accidentally commit `.env` files or hardcode secrets into their code.",
      "Attackers use automated tools like Gitrob or TruffleHog to scan GitHub for sensitive data.",
      "Always use environment variables and secret management tools."
    ]
  },
  {
    id: 'osint-02',
    title: 'Shodan Exposure',
    description: "Use Shodan to identify publicly accessible industrial control systems or vulnerable servers.",
    category: 'OSINT',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Shodan is a search engine for internet-connected devices.",
      "It indexes banners, versions, and open ports.",
      "Attackers use it to find unpatched servers, default credentials, or exposed webcams."
    ]
  },
  {
    id: 'sys-04',
    title: 'Format String Vulnerability',
    description: "Abuse functions like `printf` to read from or write to arbitrary memory locations.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Format string vulnerabilities occur when untrusted input is passed as the format string argument to a C/C++ function.",
      "Tokens like `%x` can pop values off the stack, and `%n` can write to memory.",
      "Always specify a static format string (e.g., `printf(\"%s\", input)`)."
    ]
  },
  {
    id: 'sys-05',
    title: 'Heap Overflow',
    description: "Corrupt dynamically allocated memory to control execution flow.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Unlike the stack, the heap is used for dynamic memory allocation.",
      "A heap overflow overwrites heap metadata, allowing an attacker to overwrite arbitrary memory pointers during a `free()` operation.",
      "Modern allocators have mitigations like safe unlinking."
    ]
  },
  {
    id: 'ai-03',
    title: 'Model Inversion Attack',
    description: "Extract sensitive training data by repeatedly querying a machine learning model.",
    category: 'AI',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Model inversion attacks aim to reconstruct the data used to train the model.",
      "By analyzing confidence scores and outputs, attackers can recreate facial images or private records.",
      "Differential privacy during training helps mitigate this."
    ]
  },
  {
    id: 'ai-04',
    title: 'Membership Inference Attack',
    description: "Determine whether a specific data record was part of the model's training dataset.",
    category: 'AI',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "If an AI model is overconfident on data it was trained on compared to unseen data, attackers can detect if a person's data was included.",
      "This poses significant privacy risks for medical or financial datasets."
    ]
  },
  {
    id: 'cloud-02',
    title: 'S3 Bucket Takeover',
    description: "Identify and exploit misconfigured, publicly writable Amazon S3 buckets.",
    category: 'Cloud',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "S3 buckets are often misconfigured to allow public 'Write' access.",
      "Attackers can replace legitimate files (like JavaScript libraries) with malicious ones.",
      "Always enforce least privilege and use tools like AWS Macie."
    ]
  },
  {
    id: 'cloud-03',
    title: 'Metadata Service (IMDSv1) Exploitation',
    description: "Steal temporary cloud credentials by exploiting an SSRF vulnerability.",
    category: 'Cloud',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Cloud instances have a metadata service (typically at `169.254.169.254`).",
      "IMDSv1 does not require a session token, making it highly vulnerable to SSRF.",
      "Upgrading to IMDSv2 adds an HTTP PUT requirement to retrieve a token first."
    ]
  },
  {
    id: 'web-13',
    title: 'GraphQL Introspection',
    description: "Query a GraphQL endpoint to map out its entire schema and hidden queries.",
    category: 'Web',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "GraphQL introspection allows clients to query the schema for details about queries, types, and fields.",
      "If left enabled in production, it acts as an automatic map for attackers.",
      "Disable introspection in production environments."
    ]
  },
  {
    id: 'web-14',
    title: 'CORS Misconfiguration',
    description: "Exploit overly permissive Cross-Origin Resource Sharing rules to steal authenticated data.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "CORS defines which origins can access a web resource.",
      "A policy like `Access-Control-Allow-Origin: *` with credentials enabled is highly insecure.",
      "Attackers can host malicious sites that read sensitive data from authenticated users."
    ]
  },
  {
    id: 'web-15',
    title: 'JWT Signature Bypass',
    description: "Manipulate JSON Web Tokens by altering the 'alg' header to 'none'.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "JWTs use cryptographic signatures to verify integrity.",
      "Some weak backend libraries accept tokens with the algorithm header set to 'none', completely bypassing verification.",
      "Always enforce a specific, strong algorithm (like RS256 or HS256)."
    ]
  },
  {
    id: 'web-16',
    title: 'OAuth Flow Misconfiguration',
    description: "Steal authorization codes by exploiting open redirect URIs.",
    category: 'Web',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "OAuth 2.0 relies on redirect URIs to send access tokens or codes back to the client application.",
      "If the redirect URI is not strictly validated, an attacker can redirect the token to their own server.",
      "Ensure exact, absolute string matching for registered redirect URIs."
    ]
  },
  {
    id: 'sys-06',
    title: 'Kernel Privilege Escalation (Dirty COW)',
    description: "Exploit a race condition in the Linux kernel memory subsystem to modify read-only files.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Dirty COW (CVE-2016-5195) is a famous privilege escalation vulnerability.",
      "It exploits a race condition in how the kernel handles copy-on-write (COW) breakage of private read-only memory mappings.",
      "It allows local users to write to arbitrary read-only files, such as `/etc/passwd`."
    ]
  },
  {
    id: 'sys-07',
    title: 'DLL Hijacking',
    description: "Place a malicious DLL in an application's search path to execute arbitrary code.",
    category: 'System',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "When a Windows application loads a DLL without specifying an absolute path, it searches a predefined set of directories.",
      "If an attacker places a malicious DLL in a directory searched earlier than the legitimate one, it will be executed.",
      "Developers should use absolute paths or secure search modes."
    ]
  },
  {
    id: 'net-07',
    title: 'MAC Flooding',
    description: "Overwhelm a network switch's CAM table to force it into hub mode.",
    category: 'Network',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Switches use CAM tables to map MAC addresses to physical ports.",
      "By sending thousands of fake MAC addresses, an attacker fills the table.",
      "The switch fails open, broadcasting all traffic to all ports (hub mode), allowing sniffing."
    ]
  },
  {
    id: 'crypto-04',
    title: 'RSA Key Factorization',
    description: "Break weak RSA encryption by factoring small or shared primes.",
    category: 'Cryptography',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "RSA security relies on the difficulty of factoring the product of two large prime numbers.",
      "If primes are too small, they can be factored quickly using algorithms like the General Number Field Sieve.",
      "Also, if the random number generator is flawed, multiple keys might share a prime factor."
    ]
  },
  {
    id: 'osint-03',
    title: 'Domain Squatting',
    description: "Register variations of popular domains to steal credentials or distribute malware.",
    category: 'OSINT',
    difficulty: 'Beginner',
    completed: false,
    lessons: [
      "Domain squatting (or typosquatting) relies on users making typographical errors.",
      "Attackers register domains like `gogle.com` or `paypa1.com`.",
      "Organizations should defensively register common misspellings of their brand."
    ]
  },
  {
    id: 'cloud-04',
    title: 'Serverless Function RCE',
    description: "Exploit vulnerable dependencies in AWS Lambda or Azure Functions.",
    category: 'Cloud',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "Serverless functions are still just code running on servers.",
      "If the function uses outdated libraries or executes system commands insecurely, it can be compromised.",
      "Attackers can leverage this to access the cloud environment's internal execution context."
    ]
  },
  {
    id: 'ai-05',
    title: 'Adversarial Evasion Attack',
    description: "Add imperceptible noise to an image to fool an AI classification model.",
    category: 'AI',
    difficulty: 'Intermediate',
    completed: false,
    lessons: [
      "Adversarial examples are inputs carefully crafted to cause an AI model to make a mistake.",
      "For example, altering a few pixels in a stop sign image might cause an autonomous vehicle to classify it as a speed limit sign.",
      "Defenses include adversarial training (training the model on these noisy inputs)."
    ]
  },
  {
    id: 'sys-08',
    title: 'Race Condition (TOCTOU)',
    description: "Exploit a Time-of-Check to Time-of-Use window in a file operation.",
    category: 'System',
    difficulty: 'Advanced',
    completed: false,
    lessons: [
      "TOCTOU occurs when a program checks a condition (e.g., file permissions), but the state changes before the program uses it.",
      "An attacker can swap a valid file for a symlink pointing to `/etc/shadow` in that brief window.",
      "Mitigations involve using atomic file operations."
    ]
  }
];
