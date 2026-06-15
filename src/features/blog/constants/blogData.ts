export interface BlogSection {
  id: string;
  title: string;
  level: 1 | 2; // 1 for H2, 2 for H3
  paragraphs?: string[];
  bullets?: string[];
  italicText?: string;
}

export const BLOG_CONTENTS: Record<string, BlogSection[]> = {
  "scaling-design-the-right-way-with-a-solid-component-system": [
    {
      id: "scaling-design-the-right-way",
      title: "Scaling Design the Right Way with a Solid Component System",
      level: 1,
    },
    {
      id: "long-term-growth",
      title: "Long-Term Growth",
      level: 2,
      paragraphs: [
        "Creating a product that can grow over time means preparing for constant change: new features, new layouts, shifting brand identity, and new team members. Without scalable foundations, even simple updates become slow, inconsistent, and frustrating.",
      ],
    },
    {
      id: "why-it-matters",
      title: "Why It Matters",
      level: 2,
      paragraphs: [
        "A strong component system turns design chaos into clarity. It ensures teams move faster, maintain consistency, and ship polished experiences as the product evolves.",
      ],
    },
    {
      id: "why-component-systems-matter",
      title: "Why Component Systems Matter",
      level: 1,
      paragraphs: [
        "A component system is more than reusable UI elements. It is a shared language between design and engineering.",
      ],
    },
    {
      id: "what-they-solve",
      title: "What They Solve",
      level: 2,
      bullets: [
        "Inconsistency across pages and flows",
        "Slow development due to repeated work",
        "Design-dev misalignment and communication gaps",
        "Hard-to-manage UI updates as products grow",
      ],
      paragraphs: [
        "A strong system ensures every feature shipped feels like it belongs — clean, coherent, and on-brand.",
      ],
    },
    {
      id: "collaborative-design-bridging-the-gap",
      title: "Collaborative Design: Bridging the Gap Between Teams",
      level: 1,
    },
    {
      id: "stronger-collaboration",
      title: "Stronger Collaboration",
      level: 2,
      paragraphs: [
        "Strong design-development collaboration is essential for speed and quality. Shared tools, open communication, and clear standards reduce friction and help teams deliver better outcomes.",
        "When both sides understand each other's language, the product benefits — smoother workflows, fewer revisions, and stronger alignment on the final vision.",
      ],
    },
    {
      id: "the-power-of-design-tokens",
      title: "The Power of Design Tokens in Your Workflow",
      level: 1,
    },
    {
      id: "visual-consistency",
      title: "Visual Consistency",
      level: 2,
      paragraphs: [
        "Design tokens are the visual design atoms of the product, representing values such as spacing, colors, and typography. They allow teams to create a cohesive design language across platforms, ensuring that every pixel aligns with the brand's identity.",
        "By integrating design tokens into your development process, you can automate updates and maintain consistency, making it easier to adapt to changes in design.",
      ],
    },
    {
      id: "real-impact-what-teams-gain",
      title: "Real Impact: What Teams Gain",
      level: 1,
      paragraphs: ["When your component system becomes mature, results are visible everywhere:"],
    },
    {
      id: "system-benefits",
      title: "System Benefits",
      level: 2,
      bullets: [
        "Design velocity increases by 2x-10x",
        "UI consistency becomes natural — not enforced",
        "New team members onboard faster",
        "Code and design debt shrink dramatically",
        "Brand identity stays intact across touchpoints",
      ],
      paragraphs: ["It transforms how teams deliver — from firefighting to innovating."],
    },
    {
      id: "conclusion-scale-with-intent",
      title: "Conclusion: Scale with Intent, Not by Accident",
      level: 1,
      paragraphs: [
        "A solid component system is the backbone of scalable design. With the right foundations, workflows, and rules, teams build faster, collaborate better, and keep the product visually aligned as it grows.",
        "You'll stop reinventing buttons — and start creating better product experiences.",
      ],
      italicText: "When the system scales right, your design scales forever.",
    },
  ],
};

// Fallback generator for posts without specified custom rich content
export function getFallbackBlogContent(title: string, category: string): BlogSection[] {
  return [
    {
      id: "introduction",
      title: `Understanding: ${title}`,
      level: 1,
      paragraphs: [
        `As the world of ${category} shifts and advances, staying ahead is no longer optional—it is a critical requirement for sustained success. In this guide, we dive deep into the fundamental shifts shaping this space and share actionable strategies you can apply today.`,
        "This breakdown covers immediate actions, long-term best practices, and the strategic advantages of moving early.",
      ],
    },
    {
      id: "key-pillars",
      title: "Key Pillars of Success",
      level: 1,
      paragraphs: [
        "Implementing changes requires a solid foundation. These are the three main areas to focus on:",
      ],
    },
    {
      id: "pillar-1",
      title: "1. Smart Process Optimization",
      level: 2,
      paragraphs: [
        "Efficiency starts with your workflows. By automating repetitive tasks, teams free up valuable creative and cognitive energy to focus on what truly drives progress and innovation.",
      ],
    },
    {
      id: "pillar-2",
      title: "2. Consistent Quality Metrics",
      level: 2,
      paragraphs: [
        "You cannot improve what you do not measure. Setting up transparent, easily understandable performance goals and tracking them regularly ensures your product and design consistently align with quality standards.",
      ],
    },
    {
      id: "what-to-watch-out-for",
      title: "What to Watch Out For",
      level: 1,
      bullets: [
        "Unclear or shifting goals mid-way",
        "Lack of direct and clear communication channels",
        "Over-engineering simple workflows",
        "Failing to document lessons learned",
      ],
      paragraphs: [
        "By keeping a close eye on these potential speedbumps, you set your team up for a frictionless delivery pipeline.",
      ],
    },
    {
      id: "conclusion-scale-with-intent",
      title: "Conclusion: Moving Forward",
      level: 1,
      paragraphs: [
        "Whether you are just getting started or optimizing an established project, the main takeaway is to act with clear intent. Small, persistent optimizations consistently compound into massive competitive advantages.",
      ],
      italicText: "Consistency over time is your greatest superpower.",
    },
  ];
}
