import NewsCard from "./NewsCard";

const PremiumNewsList = () => {
  const result = {
    success: true,
    nessage: "premiume news data",
    data: [
      {
        id: "post-001",
        title: "Mastering Next.js 14 Server Actions",
        content:
          "In this comprehensive guide, we will explore how to build robust web applications using Next.js 14 Server Actions without extra API routes...",
        thumbnail:
          "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500",
        isFeatured: true,
        status: "published",
        tags: ["nextjs", "react", "webdev"],
        views: 1250,
        isPremium: false,
        authorId: "user-101",
        createdAt: "2026-01-10T10:00:00Z",
        updatedAt: "2026-01-12T14:30:00Z",
      },
      {
        id: "post-002",
        title: "Understanding Tailwind CSS Grid & Flexbox",
        content:
          "Layout design with Tailwind CSS is fast and intuitive. Let's break down how Grid and Flexbox utilities work under the hood...",
        thumbnail:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
        isFeatured: false,
        status: "published",
        tags: ["tailwindcss", "css", "frontend"],
        views: 890,
        isPremium: false,
        authorId: "user-102",
        createdAt: "2026-01-15T08:15:00Z",
        updatedAt: "2026-01-15T08:15:00Z",
      },
      {
        id: "post-003",
        title: "Advanced TypeScript Patterns for Enterprise Applications",
        content:
          "Learn how to utilize conditional types, mapped types, and generics to write type-safe code for production systems...",
        thumbnail:
          "https://images.unsplash.com/photo-1516116211223-4258568880c6?w=500",
        isFeatured: true,
        status: "published",
        tags: ["typescript", "javascript", "backend"],
        views: 3420,
        isPremium: true,
        authorId: "user-101",
        createdAt: "2026-01-20T11:45:00Z",
        updatedAt: "2026-02-01T09:10:00Z",
      },
      {
        id: "post-004",
        title: "MongoDB Schema Design Best Practices",
        content:
          "Designing schemas for NoSQL databases requires a different mindset compared to SQL databases. Here are 5 tips for schema optimization...",
        thumbnail:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
        isFeatured: false,
        status: "draft",
        tags: ["mongodb", "database", "backend"],
        views: 0,
        isPremium: false,
        authorId: "user-103",
        createdAt: "2026-02-05T16:20:00Z",
        updatedAt: "2026-02-05T16:20:00Z",
      },
      {
        id: "post-005",
        title: "Building Microservices with Docker and Kubernetes",
        content:
          "Containerization has revolutionized software deployment. Learn how to orchestrate your microservices seamlessly using Kubernetes...",
        thumbnail:
          "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500",
        isFeatured: true,
        status: "published",
        tags: ["devops", "docker", "kubernetes"],
        views: 2150,
        isPremium: true,
        authorId: "user-104",
        createdAt: "2026-02-10T12:00:00Z",
        updatedAt: "2026-02-12T15:00:00Z",
      },
      {
        id: "post-006",
        title: "Introduction to AI Engineering with Python",
        content:
          "Artificial Intelligence is evolving rapidly. Explore basic machine learning pipelines using Python, Pandas, and Scikit-Learn...",
        thumbnail:
          "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500",
        isFeatured: false,
        status: "published",
        tags: ["python", "ai", "machinelearning"],
        views: 4500,
        isPremium: true,
        authorId: "user-102",
        createdAt: "2026-02-18T09:30:00Z",
        updatedAt: "2026-02-20T11:00:00Z",
      },
      {
        id: "post-007",
        title: "REST API vs GraphQL: Which One Should You Choose?",
        content:
          "Comparing REST APIs and GraphQL in terms of performance, over-fetching, under-fetching, and overall ease of integration...",
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
        isFeatured: false,
        status: "archived",
        tags: ["api", "graphql", "rest"],
        views: 980,
        isPremium: false,
        authorId: "user-105",
        createdAt: "2026-02-22T14:10:00Z",
        updatedAt: "2026-03-01T10:00:00Z",
      },
      {
        id: "post-008",
        title: "Node.js Performance Optimization Strategies",
        content:
          "How to handle heavy computation, optimize event loop execution, and prevent memory leaks in production Node.js servers...",
        thumbnail:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500",
        isFeatured: true,
        status: "published",
        tags: ["nodejs", "backend", "javascript"],
        views: 1830,
        isPremium: false,
        authorId: "user-103",
        createdAt: "2026-03-02T18:00:00Z",
        updatedAt: "2026-03-05T08:45:00Z",
      },
      {
        id: "post-009",
        title: "State Management in React: Zustand vs Redux Toolkit",
        content:
          "A detailed comparison between lightweight Zustand and feature-rich Redux Toolkit for complex React application states...",
        thumbnail:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
        isFeatured: false,
        status: "published",
        tags: ["react", "frontend", "state-management"],
        views: 1120,
        isPremium: false,
        authorId: "user-101",
        createdAt: "2026-03-08T07:20:00Z",
        updatedAt: "2026-03-08T07:20:00Z",
      },
      {
        id: "post-010",
        title: "Web Security Fundamentals for Fullstack Developers",
        content:
          "Protect your applications against CORS errors, XSS, CSRF, SQL Injection, and unhandled authentication vulnerabilities...",
        thumbnail:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
        isFeatured: true,
        status: "published",
        tags: ["security", "webdev", "fullstack"],
        views: 2900,
        isPremium: true,
        authorId: "user-104",
        createdAt: "2026-03-12T13:00:00Z",
        updatedAt: "2026-03-15T17:30:00Z",
      },
    ],
  };

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No premium news found
      </p>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: IPost) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PremiumNewsList;
