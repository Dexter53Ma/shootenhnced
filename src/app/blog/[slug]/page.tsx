import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import BlogPostPageClient from "./BlogPostPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | ShootYourListing",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${post.title} | ShootYourListing`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ShootYourListing`,
      description: post.excerpt,
      url: `https://www.shootyourlisting.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["ShootYourListing Team"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ShootYourListing`,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.shootyourlisting.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  const blogPostingSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
          "@type": "Organization",
          name: "ShootYourListing Team",
        },
        publisher: {
          "@type": "Organization",
          name: "ShootYourListing",
          logo: {
            "@type": "ImageObject",
            url: "https://www.shootyourlisting.com/images/logodark.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.shootyourlisting.com/blog/${post.slug}`,
        },
      }
    : null;

  const breadcrumbSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shootyourlisting.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.shootyourlisting.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.shootyourlisting.com/blog/${post.slug}` },
        ],
      }
    : null;

  return (
    <>
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <BlogPostPageClient slug={slug} />
    </>
  );
}
