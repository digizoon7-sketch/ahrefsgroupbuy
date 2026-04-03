/**
 * Central title / description / path for `buildMetadata`.
 * Each route has a distinct title and description (avoid comma-heavy lists).
 */
import { buildMetadata } from "@/lib/metadata";
import { getPageByHref } from "@/content/topical-map";

export function metadataFor(path: string) {
  if (path === "/") {
    return buildMetadata({
      title: "Ahrefs Group Buy Guide | Compare Options, Pricing & Alternatives",
      description:
        "Learn what Ahrefs group buy means, compare options, check pricing paths, and explore better choices for beginners, freelancers, and SEO users.",
      path: "/",
      titleAsIs: true,
    });
  }

  if (path === "/site-pages") {
    return buildMetadata({
      title: "All Pages | Ahrefs Group Buy Site Directory",
      description:
        "Directory of every public page on this site—main guides and focused articles—with clean URLs.",
      path: "/site-pages",
      titleAsIs: true,
    });
  }

  if (path === "/guides") {
    return buildMetadata({
      title: "Ahrefs Group Buy Guides | Topics, Plans, Pricing & More",
      description:
        "Browse every main guide: group buy overview, pricing, best plans, keyword research, backlinks, and SEO tools—each with focused follow-up pages.",
      path: "/guides",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-guide") {
    return buildMetadata({
      title:
        "Ahrefs Group Buy Guide | Meaning, Reviews, Options & Better Choices",
      description:
        "Read this Ahrefs group buy guide to understand the meaning, compare options, check reviews, and find a better path for your SEO needs.",
      path: "/ahrefs-group-buy-guide",
      titleAsIs: true,
    });
  }

  if (path === "/what-is-ahrefs-group-buy") {
    return buildMetadata({
      title: "What Is Ahrefs Group Buy? | Ahrefs Group Buy Explained Simply",
      description:
        "Learn what Ahrefs group buy means, why people search it, and how to think about Ahrefs group buy options in a simple way.",
      path: "/what-is-ahrefs-group-buy",
      titleAsIs: true,
    });
  }

  if (path === "/is-ahrefs-group-buy-worth-it") {
    return buildMetadata({
      title: "Is Ahrefs Group Buy Worth It? | Ahrefs Group Buy Review Guide",
      description:
        "Find out if Ahrefs group buy is worth it for beginners, freelancers, and SEO users, and see what to compare before choosing your next step.",
      path: "/is-ahrefs-group-buy-worth-it",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-for-beginners") {
    return buildMetadata({
      title: "Ahrefs Group Buy for Beginners | Ahrefs Group Buy Beginner Guide (Simple)",
      description:
        "New to Ahrefs group buy? Read this simple beginner guide to understand the topic, compare choices, and find the best next step.",
      path: "/ahrefs-group-buy-for-beginners",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-pros-and-cons") {
    return buildMetadata({
      title: "Ahrefs Group Buy Pros and Cons | Ahrefs Group Buy Comparison (Simple)",
      description:
        "Read the pros and cons of Ahrefs group buy in simple words and see how to think about value, fit, and better next steps.",
      path: "/ahrefs-group-buy-pros-and-cons",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-review") {
    return buildMetadata({
      title:
        "Ahrefs Group Buy Review | Ahrefs Group Buy Guide for Beginners & SEO Users (Simple)",
      description:
        "Read this Ahrefs group buy review to understand the value, the main questions users ask, and the best next step for your SEO needs.",
      path: "/ahrefs-group-buy-review",
      titleAsIs: true,
    });
  }

  if (path === "/why-people-search-ahrefs-group-buy") {
    return buildMetadata({
      title: "Why People Search Ahrefs Group Buy | User Intent Guide",
      description:
        "Learn why people search Ahrefs group buy, what they really want, and how this keyword connects to pricing, reviews, and better choices.",
      path: "/why-people-search-ahrefs-group-buy",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-pricing") {
    return buildMetadata({
      title: "Ahrefs Group Buy Pricing | Compare Cost, Value and Better Options",
      description:
        "Explore Ahrefs group buy pricing in simple words, compare cost and value, and see which next step makes the most sense for your needs.",
      path: "/ahrefs-group-buy-pricing",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-alternative") {
    return buildMetadata({
      title: "Ahrefs Group Buy Alternative | Ahrefs Group Buy · Better Options (Simple)",
      description:
        "Looking for an Ahrefs group buy alternative? Read this simple guide to compare better options, understand value, and choose the right next step.",
      path: "/ahrefs-group-buy-alternative",
      titleAsIs: true,
    });
  }

  if (path === "/best-ahrefs-group-buy-alternative") {
    return buildMetadata({
      title: "Best Ahrefs Group Buy Alternative | Compare Better Options",
      description:
        "Looking for the best Ahrefs group buy alternative? Compare better paths, understand your needs, and choose the option that fits you best.",
      path: "/best-ahrefs-group-buy-alternative",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-vs-official-plans") {
    return buildMetadata({
      title: "Ahrefs Group Buy vs Official Plans | Ahrefs Group Buy Comparison (Simple)",
      description:
        "Compare Ahrefs group buy vs official plans in simple words and see which path may fit beginners, freelancers, and regular SEO users better.",
      path: "/ahrefs-group-buy-vs-official-plans",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-vs-starter-plan") {
    return buildMetadata({
      title: "Ahrefs Group Buy vs Starter Plan | Ahrefs Group Buy Comparison (Simple)",
      description:
        "Compare Ahrefs group buy vs Starter plan in simple words and see which path may fit beginners, freelancers, and early SEO users better.",
      path: "/ahrefs-group-buy-vs-starter-plan",
      titleAsIs: true,
    });
  }

  if (path === "/cheap-ahrefs-options") {
    return buildMetadata({
      title: "Cheap Ahrefs Options | Ahrefs Group Buy · Lower-Cost Choices (Simple Guide)",
      description:
        "Looking for cheap Ahrefs options? Read this simple guide to compare lower-cost paths, understand value, and choose a better next step.",
      path: "/cheap-ahrefs-options",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-cost-comparison") {
    return buildMetadata({
      title: "Ahrefs Group Buy Cost Comparison | Ahrefs Group Buy Pricing & Value (Simple)",
      description:
        "Compare Ahrefs group buy cost in simple words and understand how price, value, and fit work together before you choose your next step.",
      path: "/ahrefs-group-buy-cost-comparison",
      titleAsIs: true,
    });
  }

  if (path === "/best-plan-instead-of-ahrefs-group-buy") {
    return buildMetadata({
      title: "Best Plan Instead of Ahrefs Group Buy | Ahrefs Group Buy Options (Simple)",
      description:
        "Looking for the best plan instead of Ahrefs group buy? Read this simple guide to compare better choices and pick the right next step.",
      path: "/best-plan-instead-of-ahrefs-group-buy",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-starter-plan-review") {
    return buildMetadata({
      title: "Ahrefs Starter Plan Review | Better Option Than Ahrefs Group Buy",
      description:
        "Read this Ahrefs Starter plan review to see if it is a better option than Ahrefs group buy for beginners, freelancers, and small SEO users.",
      path: "/ahrefs-starter-plan-review",
      titleAsIs: true,
    });
  }

  if (path === "/best-ahrefs-plan-for-beginners") {
    return buildMetadata({
      title: "Best Ahrefs Plan for Beginners | Better Choice Than Ahrefs Group Buy",
      description:
        "Find the best Ahrefs plan for beginners in simple words and see when it may be a better choice than broad Ahrefs group buy searching.",
      path: "/best-ahrefs-plan-for-beginners",
      titleAsIs: true,
    });
  }

  if (path === "/best-ahrefs-plan-for-freelancers") {
    return buildMetadata({
      title: "Best Ahrefs Plan for Freelancers | Better Choice Than Ahrefs Group Buy",
      description:
        "Find the best Ahrefs plan for freelancers in simple words and see when it may be a better choice than broad Ahrefs group buy searching.",
      path: "/best-ahrefs-plan-for-freelancers",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-lite-vs-standard") {
    return buildMetadata({
      title: "Ahrefs Lite vs Standard | Which Is Better After Ahrefs Group Buy",
      description:
        "Compare Ahrefs Lite vs Standard in simple words and see which path may fit better after broad Ahrefs group buy searching.",
      path: "/ahrefs-lite-vs-standard",
      titleAsIs: true,
    });
  }

  if (path === "/is-ahrefs-worth-it") {
    return buildMetadata({
      title: "Is Ahrefs Worth It? | Better Question After Ahrefs Group Buy",
      description:
        "Wondering if Ahrefs is worth it? Read this simple guide to compare value, fit, and what matters most after broad Ahrefs group buy searching.",
      path: "/is-ahrefs-worth-it",
      titleAsIs: true,
    });
  }

  if (path === "/which-ahrefs-plan-should-you-buy") {
    return buildMetadata({
      title: "Which Ahrefs Plan Should You Buy? | Better Choice Than Ahrefs Group Buy",
      description:
        "Not sure which Ahrefs plan to buy? Read this simple guide to compare your options and find a better path than broad Ahrefs group buy searching.",
      path: "/which-ahrefs-plan-should-you-buy",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-keyword-research") {
    return buildMetadata({
      title: "Ahrefs Group Buy Keyword Research | Ahrefs Group Buy Keyword Planning (Simple)",
      description:
        "Learn how Ahrefs group buy keyword research helps with topic ideas, keyword planning, and content direction in simple words.",
      path: "/ahrefs-group-buy-keyword-research",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-keyword-research-for-beginners") {
    return buildMetadata({
      title: "Ahrefs Keyword Research for Beginners | Ahrefs Group Buy · Simple Keyword Guide",
      description:
        "Learn Ahrefs keyword research for beginners in simple words and find better keyword ideas after broad Ahrefs group buy searching.",
      path: "/ahrefs-keyword-research-for-beginners",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-keyword-difficulty-guide") {
    return buildMetadata({
      title: "Ahrefs Keyword Difficulty Guide | Ahrefs Group Buy · Simple Keyword Difficulty Help",
      description:
        "Learn Ahrefs keyword difficulty in simple words and understand how to choose better keyword targets after broad Ahrefs group buy searching.",
      path: "/ahrefs-keyword-difficulty-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-search-intent-guide") {
    return buildMetadata({
      title: "Ahrefs Search Intent Guide | Better Keyword Targeting After Ahrefs Group Buy",
      description:
        "Learn Ahrefs search intent in simple words and understand how to build the right type of page after broad Ahrefs group buy keyword research.",
      path: "/ahrefs-search-intent-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-long-tail-keywords") {
    return buildMetadata({
      title: "Ahrefs Long-Tail Keywords | Easier Keyword Ideas After Ahrefs Group Buy",
      description:
        "Learn Ahrefs long-tail keywords in simple words and find easier keyword ideas after broad Ahrefs group buy keyword research.",
      path: "/ahrefs-long-tail-keywords",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-keyword-gap-guide") {
    return buildMetadata({
      title: "Ahrefs Keyword Gap Guide | Find Missed Keywords After Ahrefs Group Buy",
      description:
        "Learn Ahrefs keyword gap in simple words and find missed keyword ideas after broad Ahrefs group buy keyword research.",
      path: "/ahrefs-keyword-gap-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-content-clusters-guide") {
    return buildMetadata({
      title: "Ahrefs Content Clusters Guide | Build Better Topic Structure",
      description:
        "Learn Ahrefs content clusters in simple words and build stronger topic structure after broad Ahrefs group buy keyword research.",
      path: "/ahrefs-content-clusters-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-backlink-guide") {
    return buildMetadata({
      title: "Ahrefs Group Buy Backlink Guide | Ahrefs Group Buy Backlink Help (Simple)",
      description:
        "Learn Ahrefs group buy backlink research in simple words and understand backlinks, competitors, and site strength after broad Ahrefs group buy searching.",
      path: "/ahrefs-group-buy-backlink-guide",
      titleAsIs: true,
    });
  }

  if (path === "/how-to-check-backlinks-in-ahrefs") {
    return buildMetadata({
      title: "How to Check Backlinks in Ahrefs | Ahrefs Group Buy · Simple Backlink Check Guide",
      description:
        "Learn how to check backlinks in Ahrefs in simple words and understand link patterns after broad Ahrefs group buy searching.",
      path: "/how-to-check-backlinks-in-ahrefs",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-backlink-analysis-guide") {
    return buildMetadata({
      title: "Ahrefs Backlink Analysis Guide | Ahrefs Group Buy · Simple Link Research",
      description:
        "Learn Ahrefs backlink analysis in simple words and use link patterns to improve content and competitor research after Ahrefs group buy.",
      path: "/ahrefs-backlink-analysis-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-referring-domains-guide") {
    return buildMetadata({
      title: "Ahrefs Referring Domains Guide | Ahrefs Group Buy · Link Sources (Simple)",
      description:
        "Learn Ahrefs referring domains in simple words and understand link sources after broad Ahrefs group buy backlink research.",
      path: "/ahrefs-referring-domains-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-top-pages-report-guide") {
    return buildMetadata({
      title: "Ahrefs Top Pages Report Guide | Ahrefs Group Buy · Simple Page Analysis",
      description:
        "Learn Ahrefs Top Pages report in simple words and find strong content ideas after broad Ahrefs group buy backlink research.",
      path: "/ahrefs-top-pages-report-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-competitor-analysis-guide") {
    return buildMetadata({
      title: "Ahrefs Competitor Analysis Guide | Ahrefs Group Buy · Simple Competitor Research",
      description:
        "Learn Ahrefs competitor analysis in simple words and find better content, backlink, and topic ideas after broad Ahrefs group buy searching.",
      path: "/ahrefs-competitor-analysis-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-broken-link-opportunities") {
    return buildMetadata({
      title: "Ahrefs Broken Link Opportunities | Ahrefs Group Buy · Link Ideas (Simple)",
      description:
        "Learn Ahrefs broken link opportunities in simple words and find practical link ideas after broad Ahrefs group buy backlink research.",
      path: "/ahrefs-broken-link-opportunities",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-group-buy-seo-tools") {
    return buildMetadata({
      title: "Ahrefs Group Buy SEO Tools | Ahrefs Group Buy Audits & Tracking (Simple)",
      description:
        "Learn Ahrefs group buy SEO tools in simple words and understand audits, rankings, and useful site checks after broad Ahrefs group buy searching.",
      path: "/ahrefs-group-buy-seo-tools",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-site-audit-guide") {
    return buildMetadata({
      title: "Ahrefs Site Audit Guide | Ahrefs Group Buy · Simple Technical SEO Help",
      description:
        "Learn Ahrefs Site Audit in simple words and understand technical SEO checks after broad Ahrefs group buy searching.",
      path: "/ahrefs-site-audit-guide",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-rank-tracker-guide") {
    return buildMetadata({
      title: "Ahrefs Rank Tracker Guide | Ahrefs Group Buy · Simple Rank Tracking Help",
      description:
        "Learn Ahrefs Rank Tracker in simple words and understand how to track keyword progress after broad Ahrefs group buy searching.",
      path: "/ahrefs-rank-tracker-guide",
      titleAsIs: true,
    });
  }

  if (path === "/technical-seo-checklist-with-ahrefs") {
    return buildMetadata({
      title: "Technical SEO Checklist with Ahrefs | Ahrefs Group Buy · Simple Checklist",
      description:
        "Learn a simple technical SEO checklist with Ahrefs and understand what to review after broad Ahrefs group buy searching.",
      path: "/technical-seo-checklist-with-ahrefs",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-site-health-score") {
    return buildMetadata({
      title: "Ahrefs Site Health Score | Ahrefs Group Buy · Simple Site Health Guide",
      description:
        "Learn Ahrefs Site Health Score in simple words and understand what it tells you after broad Ahrefs group buy searching.",
      path: "/ahrefs-site-health-score",
      titleAsIs: true,
    });
  }

  if (path === "/how-to-track-seo-progress-in-ahrefs") {
    return buildMetadata({
      title: "How to Track SEO Progress in Ahrefs | Ahrefs Group Buy · Simple Progress Guide",
      description:
        "Learn how to track SEO progress in Ahrefs in simple words and measure keyword and site movement after broad Ahrefs group buy searching.",
      path: "/how-to-track-seo-progress-in-ahrefs",
      titleAsIs: true,
    });
  }

  if (path === "/ahrefs-ranking-report-guide") {
    return buildMetadata({
      title: "Ahrefs Ranking Report Guide | Ahrefs Group Buy · Simple Reporting Help",
      description:
        "Learn Ahrefs ranking reports in simple words and understand how to read ranking changes after broad Ahrefs group buy searching.",
      path: "/ahrefs-ranking-report-guide",
      titleAsIs: true,
    });
  }

  const page = getPageByHref(path);
  if (!page) {
    return buildMetadata({
      title: "Ahrefs Group Buy",
      description:
        "SEO-first informational site focused on the “Ahrefs group buy” keyword family.",
      path,
      titleAsIs: true,
    });
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.href,
    titleAsIs: true,
  });
}
