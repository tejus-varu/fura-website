"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  User,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { BlogPost, seedBlogPosts } from "@/config/blogs";
import Button from "@/components/ui/Button";
import CtaBlock from "@/components/ui/CtaBlock";

interface BlogPostClientViewProps {
  initialPost: BlogPost | null;
  slug: string;
}

export default function BlogPostClientView({
  initialPost,
  slug,
}: BlogPostClientViewProps) {
  const [post, setPost] = useState<BlogPost | null>(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [copied, setCopied] = useState(false);

  // Dynamic D1 fetch fallback if post was not part of build-time static params
  useEffect(() => {
    if (initialPost) return;

    let isMounted = true;
    async function fetchFromD1() {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        if (isMounted && data?.title) {
          setPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            subtitle: data.subtitle || "",
            category: data.category,
            author: {
              name: data.author_name || "FURAA Educator",
              role: data.author_role || "Academic Council",
            },
            publicationDate: data.publication_date || "Recent",
            readTime: data.read_time || "5 min read",
            coverImage: {
              src: data.cover_image,
              alt: data.title,
              caption: data.cover_image_caption || data.title,
            },
            excerpt: data.excerpt,
            introduction: data.excerpt,
            sections: data.content || [],
            relatedSlugs: [],
            status: data.status || "published",
          });
        }
      } catch {
        // Post not found
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchFromD1();
    return () => {
      isMounted = false;
    };
  }, [initialPost, slug]);

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled or unsupported, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-[var(--color-cream)]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs font-semibold text-[var(--color-green-800)]">
            Loading educational article...
          </p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)] px-4">
        <div className="max-w-md text-center bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
          <BookOpen size={40} className="text-gray-400 mx-auto mb-3" />
          <h2 className="font-display text-xl font-bold text-gray-900">
            Article Not Found
          </h2>
          <p className="text-xs text-gray-600 mt-2 mb-6">
            The article you are searching for may be a draft or has moved. Browse our complete publication index.
          </p>
          <Button href="/blogs" variant="primary" size="sm">
            Back to All Blogs
          </Button>
        </div>
      </div>
    );
  }

  // Related posts from seed
  const relatedPosts = seedBlogPosts.filter(
    (p) => p.slug !== post.slug && (post.relatedSlugs?.includes(p.slug) || p.category === post.category)
  ).slice(0, 2);

  return (
    <article className="bg-[var(--color-cream)] min-h-screen">
      {/* Article Header & Navigation */}
      <div className="bg-white border-b border-gray-100 pt-8 pb-12">
        <div className="container-xl max-w-4xl mx-auto">
          {/* Back link & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blogs</span>
            </Link>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
              {post.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-green-950)] leading-tight mb-4">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-base sm:text-xl text-[var(--color-green-800)]/80 leading-relaxed mb-6">
              {post.subtitle}
            </p>
          )}

          {/* Author, Date & Share Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                <User size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-[var(--color-green-900)]">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-emerald-600" />
                {post.publicationDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-emerald-600" />
                {post.readTime}
              </span>
              <span>•</span>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
                title="Share article link"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container-xl max-w-4xl mx-auto py-12">
        {/* Cover Image Card */}
        <div className="card-base bg-white border border-emerald-900/10 rounded-3xl overflow-hidden shadow-sm mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {post.coverImage.caption && (
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 text-center sm:text-left">
              {post.coverImage.caption}
            </div>
          )}
        </div>

        {/* Article Intro Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-900/10 shadow-sm mb-10">
          <p className="text-base sm:text-lg text-[var(--color-green-900)] leading-relaxed font-serif italic">
            &ldquo;{post.introduction}&rdquo;
          </p>
        </div>

        {/* Structured Sections */}
        <div className="space-y-12 bg-white p-6 sm:p-10 rounded-3xl border border-emerald-900/10 shadow-sm">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                {section.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--color-green-800)] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Section Key Takeaway */}
              {section.keyTakeaway && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 my-4">
                  <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-900 font-semibold leading-relaxed">
                    <strong>Key Insight:</strong> {section.keyTakeaway}
                  </div>
                </div>
              )}

              {/* Optional Section Photo */}
              {section.photo && (
                <div className="my-6 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.photo.src}
                      alt={section.photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {section.photo.caption && (
                    <p className="p-3 text-xs text-gray-600 bg-white border-t border-gray-100">
                      {section.photo.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Social Share Footer */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-gray-500">
              Published in <strong>{post.category}</strong> by {post.author.name}
            </span>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors w-fit"
            >
              <Share2 size={14} />
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)] mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="card-base p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                      {related.category}
                    </span>
                    <h4 className="font-display text-base font-bold text-[var(--color-green-900)] group-hover:text-emerald-700 transition-colors mb-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-[var(--color-green-800)]/80 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                    <span>Read Article</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="mt-16">
          <CtaBlock
            title="Bring Experiential Farm Education to Your School"
            description="FURAA collaborates with school leadership to design turnkey agricultural modules aligned to your academic curriculum."
            buttonText="Initiate School Dialogue"
            href="/contact?subject=School%20Partnership%20Dialogue"
          />
        </div>
      </div>
    </article>
  );
}
