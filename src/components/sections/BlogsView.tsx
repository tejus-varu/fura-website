"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  User,
} from "lucide-react";
import {
  seedBlogPosts,
  blogCategoryList,
  BlogCategory,
  BlogPost,
  BlogSection,
} from "@/config/blogs";
import Button from "@/components/ui/Button";

interface RawD1Blog {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: Exclude<BlogCategory, "All">;
  author_name?: string;
  author_role?: string;
  publication_date?: string;
  read_time?: string;
  cover_image: string;
  cover_image_caption?: string;
  excerpt: string;
  content?: BlogSection[];
  status?: "published" | "draft";
}

export default function BlogsView() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>(seedBlogPosts);

  // Client-side attempt to fetch fresh dynamic articles from Cloudflare D1
  useEffect(() => {
    let isMounted = true;
    async function fetchDynamicBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data?.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
          // Merge D1 blogs with seed blogs, avoiding slug duplicates
          const d1Mapped: BlogPost[] = (data.blogs as RawD1Blog[]).map((b) => ({
            id: b.id,
            slug: b.slug,
            title: b.title,
            subtitle: b.subtitle || "",
            category: b.category,
            author: {
              name: b.author_name || "FURAA Educator",
              role: b.author_role || "Academic Council",
            },
            publicationDate: b.publication_date || "Recent",
            readTime: b.read_time || "5 min read",
            coverImage: {
              src: b.cover_image,
              alt: b.title,
              caption: b.cover_image_caption || b.title,
            },
            excerpt: b.excerpt,
            introduction: b.excerpt,
            sections: b.content || [],
            relatedSlugs: [],
            status: b.status || "published",
          }));

          const existingSlugs = new Set(d1Mapped.map((p) => p.slug));
          const nonDuplicates = seedBlogPosts.filter((p) => !existingSlugs.has(p.slug));
          setPosts([...d1Mapped, ...nonDuplicates]);
        }
      } catch {
        // Quiet fallback to static seedBlogPosts
      }
    }

    fetchDynamicBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter posts by category and search
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Filter Pills & Search */}
      <div className="bg-white border-b border-gray-100 py-6 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="container-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--color-green-800)] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Articles ({posts.length})
            </button>

            {blogCategoryList.map((cat) => {
              const count = posts.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[var(--color-green-800)] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container-xl py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300 p-8">
            <BookOpen size={36} className="mx-auto text-gray-400 mb-3" />
            <h3 className="font-display text-lg font-bold text-gray-800">
              No articles found
            </h3>
            <p className="text-xs text-gray-600 mt-1 max-w-md mx-auto">
              No published articles match &quot;{searchQuery}&quot; in the selected category.
              Try adjusting your search or viewing all topics.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-semibold text-emerald-700 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="card-base bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Cover Image */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900 block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Metadata Header */}
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-emerald-600" />
                        {post.publicationDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-emerald-600" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[var(--color-green-900)] group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-[var(--color-green-800)]/80 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author & Read More Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-[10px]">
                        <User size={14} />
                      </div>
                      <div className="text-[11px] leading-tight">
                        <p className="font-bold text-[var(--color-green-900)]">
                          {post.author.name}
                        </p>
                        <p className="text-gray-500 text-[10px]">{post.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                      aria-label={`Read article: ${post.title}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Integrated Nutrition Education Callout */}
        <div className="mt-16 bg-[var(--color-green-50)] border border-[var(--color-green-200)] rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-green-700)]">
              Integrated Curricular Track
            </span>
            <h3 className="font-display text-2xl font-bold text-[var(--color-green-950)] mt-1 mb-2">
              Nutrition, Food Education and Nutri Gardens
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
              Looking for our structured nutrition curriculum matrices, farm-to-plate tasting modules, and school nutri-garden designs? Explore the dedicated nutrition framework preserved across all class bands.
            </p>
          </div>
          <Button href="/nutrition" variant="outline" size="md" className="shrink-0">
            View Nutrition Curriculum
          </Button>
        </div>
      </div>
    </div>
  );
}
