-- Cloudflare D1 Schema for FURAA Content Management System
-- Database name: furaa-db

-- Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  publication_date TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  cover_image TEXT NOT NULL,
  cover_image_caption TEXT,
  excerpt TEXT NOT NULL,
  content_json TEXT NOT NULL, -- JSON array of BlogSection objects
  status TEXT DEFAULT 'draft', -- 'draft' | 'published' | 'archived'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON blogs(category);

-- Gallery Events Table
CREATE TABLE IF NOT EXISTS gallery_events (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT,
  event_date TEXT,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  status TEXT DEFAULT 'draft', -- 'draft' | 'published' | 'archived'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_gallery_events_status ON gallery_events(status);
CREATE INDEX IF NOT EXISTS idx_gallery_events_category ON gallery_events(category);

-- Gallery Photos Table
CREATE TABLE IF NOT EXISTS gallery_photos (
  id TEXT PRIMARY KEY,
  event_id TEXT NOT NULL,
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  caption TEXT NOT NULL,
  badge TEXT,
  category TEXT NOT NULL,
  location TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(event_id) REFERENCES gallery_events(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_gallery_photos_event_id ON gallery_photos(event_id);

-- Leads Table (Book a Demo & Inquiry Submissions)
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  inquiry_type TEXT NOT NULL DEFAULT 'school', -- 'school' | 'corporate' | 'camp' | 'general'
  org_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  designation TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  participant_count TEXT,
  class_range TEXT,
  selected_programs TEXT NOT NULL, -- JSON array of strings
  transport_required TEXT DEFAULT 'undecided', -- 'yes' | 'no' | 'undecided'
  preferred_date TEXT,
  requirements TEXT,
  source_page TEXT,
  processing_status TEXT DEFAULT 'new', -- 'new' | 'contacted' | 'scheduled' | 'completed' | 'archived'
  email_status TEXT DEFAULT 'pending', -- 'sent' | 'failed' | 'unconfigured' | 'pending'
  whatsapp_status TEXT DEFAULT 'pending', -- 'sent' | 'failed' | 'unconfigured' | 'user_initiated' | 'pending'
  notes TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_processing_status ON leads(processing_status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);

