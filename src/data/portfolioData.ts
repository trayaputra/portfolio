export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  category: string;
  description: string;
  learnings: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Alvin Prayoga",
    role: "Full-Stack & AI Systems Developer",
    tagline: "Building Ideas Into Digital Experiences.",
    status: "Available for high-impact projects & architecture consulting",
    location: "Indonesia",
    shortBio:
      "Crafting high-precision web applications, real-time interactive systems, and intelligent AI-augmented workflows with an uncompromising focus on aesthetic luxury, micro-interactions, and resilient architecture.",
    aboutNarrative: [
      "Saya adalah seorang software developer yang berfokus pada pembangunan produk digital modern, web berkinerja tinggi, dan integrasi kecerdasan buatan. Pendekatan saya berakar pada pemahaman teknis yang mendalam serta apresiasi terhadap keindahan desain visual yang minimalis dan terstruktur.",
      "Dari antarmuka pengguna responsif hingga arsitektur backend berkecepatan tinggi, saya memandang setiap baris kode sebagai wujud dari problem solving yang kreatif. Menggabungkan teknologi Next.js, TypeScript, sistem real-time, dan LLM API untuk menciptakan pengalaman digital yang intuitif dan bermakna.",
      "Visi personal saya adalah terus mendorong batas rekayasa perangkat lunak dengan menghasilkan karya yang tidak hanya berfungsi secara sempurna, namun juga memberikan kepuasan estetika dan nilai nyata bagi setiap penggunanya."
    ],
    contactEmail: "alvinprayoga.dev@gmail.com",
    githubUsername: "trayaputra",
    githubProfileUrl: "https://github.com/trayaputra",
  },
  projects: [
    {
      id: "clouvia-ai",
      title: "CLOUVIA AI",
      tagline: "AI-Powered Chat & Coding Workspace",
      category: "AI & Developer Tooling",
      description: "Platform cerdas untuk kolaborasi coding, interaksi LLM multi-modal, dan visualisasi workspace terintegrasi.",
      longDescription: "CLOUVIA AI dirancang sebagai lingkungan kerja terpadu bagi engineer yang menggabungkan kemampuan generative AI dengan eksekusi kode kontekstual. Pengguna dapat berinteraksi secara real-time, mengeksplorasi cuplikan solusi, dan menyusun arsitektur kode dengan panduan cerdas.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI SDK", "Node.js"],
      features: [
        "Interactive AI Chat dengan syntax highlighting adaptif",
        "Context-aware codebase generation & refactoring guidance",
        "Multi-modal streaming responses dengan zero UI lag",
        "Workspace memory & custom prompt preferences"
      ],
      challenges: "Mengoptimalkan latensi streaming token AI pada UI berbasis React agar transisi rendering tetap berada pada 60 FPS tanpa jank memori.",
      githubUrl: "https://github.com/trayaputra",
      metrics: [
        { label: "Rendering Performance", value: "60 FPS" },
        { label: "Token Streaming", value: "Sub-50ms Latency" }
      ]
    },
    {
      id: "devora-ai",
      title: "DEVORA AI",
      tagline: "AI Development Platform with Git & Vercel Workflows",
      category: "Cloud & DevSecOps",
      description: "Platform otomasi pengembangan perangkat lunak dengan integrasi repository GitHub dan pipeline deployment Vercel otomatis.",
      longDescription: "DEVORA AI mengotomatisasi siklus hidup pembuatan proyek dari ideation, scaffolding kode, komitmen repository, hingga verifikasi deployment serverless. Mengeliminasi gesekan teknis antara penulisan kode dan rilis produksi.",
      technologies: ["Next.js", "TypeScript", "GitHub API", "Vercel API", "PostgreSQL", "Tailwind CSS"],
      features: [
        "GitHub API integration untuk manajemen branch & commit instan",
        "Vercel automated deployment workflow & webhook monitoring",
        "AI-assisted code generation & dynamic dependency resolution",
        "Audit trail perubahan file secara atomik dan terverifikasi"
      ],
      challenges: "Menangani status sinkronisasi webhook asinkron antara commit Git dan lifecycle build Vercel secara aman dan idempoten.",
      githubUrl: "https://github.com/trayaputra",
      metrics: [
        { label: "Deployment Speedup", value: "3x Faster" },
        { label: "Sync Reliability", value: "99.9%" }
      ]
    },
    {
      id: "anivip",
      title: "ANIVIP",
      tagline: "High-Performance Anime Streaming Platform",
      category: "Media & Streaming",
      description: "Platform streaming anime premium dengan katalog komprehensif, pencarian cepat, autentikasi aman, dan sinkronisasi riwayat tayang.",
      longDescription: "ANIVIP menghadirkan pengalaman menikmati media hiburan tanpa distraksi dengan estetika dark luxury. Menampilkan antarmuka navigasi modern, pemutar media adaptif, serta sistem personalisasi tontonan berbasis pengguna.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
      features: [
        "Katalog anime terstruktur dengan filter genre, musim, dan status rilis",
        "Mesin pencarian cepat dengan debounced auto-complete",
        "Sistem autentikasi aman dan profil pengguna terisolasi",
        "Riwayat tontonan dan bookmark episode tersinkronisasi"
      ],
      challenges: "Mengelola relasi database multi-tabel antara episode, bookmark, dan progress tontonan dengan query efisien via Drizzle ORM.",
      githubUrl: "https://github.com/trayaputra",
      metrics: [
        { label: "Query Execution", value: "< 25ms" },
        { label: "Catalog Density", value: "1000+ Titles" }
      ]
    },
    {
      id: "tiktok-live-quiz",
      title: "TIKTOK LIVE QUIZ",
      tagline: "Interactive Real-Time Live Quiz Engine",
      category: "Real-time Interactivity",
      description: "Platform kuis interaktif waktu nyata yang menangkap komentar siaran langsung, menyusun leaderboard otomatis, dan menghitung poin peserta.",
      longDescription: "Dibangun untuk mengakomodasi interaksi penonton massal pada live stream. Sistem secara otomatis membaca komentar jawaban yang masuk, memvalidasi kecocokan dengan kunci jawaban dalam hitungan milidetik, dan menampilkan leaderboard dinamis di layar siaran.",
      technologies: ["Node.js", "Express.js", "TypeScript", "WebSocket", "Tailwind CSS"],
      features: [
        "Real-time comment parser dengan high throughput message queue",
        "Engine penilaian instan berdasarkan kecepatan dan ketepatan respons",
        "Leaderboard visual terupdate secara langsung via WebSocket",
        "Admin control panel untuk konfigurasi bank soal dan durasi timer"
      ],
      challenges: "Mencegah race condition ketika ribuan komentar tiba secara simultan pada window kuis 15 detik.",
      githubUrl: "https://github.com/trayaputra",
      metrics: [
        { label: "Throughput", value: "500+ msg/sec" },
        { label: "State Sync", value: "< 10ms" }
      ]
    },
    {
      id: "tower-battle-live",
      title: "TOWER BATTLE LIVE",
      tagline: "Interactive Audience-Driven Game Arena",
      category: "Interactive Gaming",
      description: "Permainan interaktif multi-pemain dengan mekanika live audience interaction dan pemicu strategi berbasis gift events.",
      longDescription: "Game berbasis kanvas interaktif di mana penonton live stream dapat berpartisipasi langsung dalam pertahanan dan penyerangan menara. Interaksi audiens diterjemahkan menjadi unit-unit tempur atau power-up yang memengaruhi jalannya pertempuran secara real-time.",
      technologies: ["React", "TypeScript", "Node.js", "WebSocket", "HTML5 Canvas"],
      features: [
        "Sinkronisasi game loop 60 FPS pada HTML5 Canvas",
        "Event listener untuk interaksi penonton dan aksi hadiah real-time",
        "Sistem penyeimbang kekuatan tim secara dinamis",
        "Audio feedback dan efek partikel visual yang kaya"
      ],
      challenges: "Menjaga stabilitas frame rate rendering Canvas di sisi klien saat intensitas partikel ledakan dan unit meningkat tajam.",
      githubUrl: "https://github.com/trayaputra",
      metrics: [
        { label: "Frame Rate", value: "Stable 60 FPS" },
        { label: "Event Ingestion", value: "Real-time" }
      ]
    }
  ] as Project[],
  skills: [
    {
      title: "Frontend Engineering",
      description: "Membangun antarmuka modern yang cepat, terstruktur, responsif, dan mudah diakses.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Engineering",
      description: "Menyusun layanan backend yang modular, efisien, dan siap menangani throughput tinggi.",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database & Data Layer",
      description: "Merancang skema data relasional yang bersih, aman, dan berkinerja tinggi.",
      skills: ["PostgreSQL", "Drizzle ORM"]
    },
    {
      title: "AI Development",
      description: "Mengintegrasikan kecerdasan buatan ke dalam alur kerja produk untuk memecahkan problem riil.",
      skills: ["AI Integration", "OpenAI SDK", "AI-powered applications"]
    },
    {
      title: "Infrastructure & DevOps",
      description: "Menerapkan praktik deployment, kontainerisasi, dan otomatisasi source control yang andal.",
      skills: ["Docker", "VPS", "Vercel", "Git", "GitHub"]
    }
  ] as SkillCategory[],
  journey: [
    {
      period: "Fase 01",
      title: "Awal Mengenal Pemrograman",
      category: "Fondasi & Logika",
      description: "Memulai eksplorasi dasar ilmu komputer, pemecahan masalah algoritmis, dan pemahaman logika perangkat lunak secara fundamental.",
      learnings: ["Struktur Data Dasar", "Logika Pemrograman Komputasional", "Problem-Solving Mindset"]
    },
    {
      period: "Fase 02",
      title: "Mempelajari Ekosistem Web Modern",
      category: "Eksplorasi Teknologi",
      description: "Mendalami bahasa web modern, JavaScript modern, TypeScript, serta pola kerja rekayasa frontend berbasis komponen.",
      learnings: ["TypeScript Strict Typing", "State Management & React Lifecycle", "Modern Styling & CSS Architecture"]
    },
    {
      period: "Fase 03",
      title: "Pengembangan Website & Backend",
      category: "Full-Stack Development",
      description: "Membangun arsitektur web lengkap dari RESTful API, integrasi database PostgreSQL, hingga pengolahan data server-side dengan Next.js.",
      learnings: ["Next.js App Router Architecture", "Relational Database Design", "API Security & Server Performance"]
    },
    {
      period: "Fase 04",
      title: "Eksplorasi AI & Interaktivitas Real-Time",
      category: "AI & Sistem Real-Time",
      description: "Mengembangkan aplikasi yang diperkuat oleh LLM, token streaming, serta komunikasi bidirectional berbasis WebSocket untuk interaksi waktu nyata.",
      learnings: ["AI Prompt & Context Engineering", "WebSocket Event Architecture", "Latency Optimization"]
    },
    {
      period: "Fase 05",
      title: "Pembuatan Ragam Aplikasi Terapan",
      category: "Implementasi Produk",
      description: "Mewujudkan ide menjadi produk nyata yang berfungsi secara penuh seperti CLOUVIA AI, DEVORA AI, ANIVIP, dan game interaktif penonton.",
      learnings: ["End-to-End Product Engineering", "DevOps & Cloud Workflows", "User Experience Refinement"]
    },
    {
      period: "Fase 06",
      title: "Tujuan & Pengembangan Berikutnya",
      category: "Visi Masa Depan",
      description: "Terus memperdalam riset dalam arsitektur AI terdistribusi, efisiensi komputasi cloud, dan penciptaan standar desain antarmuka digital yang semakin presisi.",
      learnings: ["Distributed AI Systems", "Micro-frontend & Edge Runtimes", "Autonomous Systems Architecture"]
    }
  ] as JourneyMilestone[]
};
