## 1. Project Overview
- **Objective:** Recreate the ThinkBIT Solutions primary landing page.
- **Target Audience:** Enterprises, Government Agencies, NGOs, SMEs, and Startups.
- **Primary Call to Action (CTA):** "Let's Talk" / "INQUIRE NOW".
## 2. Design System & Theming
Agents must strictly adhere to these values. Do not invent new colors, layouts, or copy.
### 2.1. Color Palette
- **Primary (Brand):** `#0A2540` (Deep Navy) - Used for headers, footer background, primary text.
- **Secondary (Accent):** `#F97316` (Vibrant Orange) - Used for primary CTA buttons ("Inquire Now", "Let's Talk") and active states.
- **Background (Main):** `#FFFFFF` (White) - Default page background.
- **Background (Alt):** `#F3F4F6` (Light Gray) - Used for alternating section backgrounds (e.g., Services section).
- **Text (Body):** `#4B5563` (Gray 700) - Used for paragraph text and subtitles.
### 2.2. Typography
- **Font Family:** Inter (Sans-serif). Fallback: system-ui.
- **H1 (Hero Title):** 56px, Font Weight 800, Line Height 1.2, Color: Primary.
- **H2 (Section Titles):** 40px, Font Weight 700, Line Height 1.3, Color: Primary.
- **H3 (Card Titles):** 24px, Font Weight 600, Line Height 1.4, Color: Primary.
- **Body Text:** 16px, Font Weight 400, Line Height 1.6, Color: Text (Body).
### 2.3. Spacing & Layout
- **Max Content Width:** 1280px, centered.
- **Section Padding (Y-axis):** 80px (Desktop), 40px (Mobile).
- **Border Radius:** 12px (`rounded-xl`) for all feature cards; 9999px (`rounded-full`) for CTA buttons.
## 3. Component Architecture & Specifications
### 3.1. Navigation Bar (Header)
- **Positioning:** Sticky top, 100% width, White background, subtle bottom shadow.
- **Left:** Company Logo (Text representation: **ThinkBIT**).
- **Center:** Dropdown Links (`Services`, `Events`), Standard Links (`Odoo`, `Our Company`, `Careers`). Text color: Primary.
- **Right:** "Let's Talk" button (Solid Secondary background, White text, Pill shape).
### 3.2. Hero Section
- **Background:** White.
- **Layout:** Two-column grid (Text left, Image placeholder right).
- **Left Column (Content):**
  - H1: "Let's launch your software!"
  - Subtitle: "Trusted by Enterprises, Government Agencies, NGOs, SMEs, and Startups"
  - CTA Button: "INQUIRE NOW" (Solid Secondary).
- **Social Proof Banner:** Below the hero columns, a full-width light gray banner displaying client text placeholders: "Hotel 101 | PhilHealth | Ogilvy | UNDP | Globe".
### 3.3. Services Section ("From Idea to Launch")
- **Background:** Alt Background (`#F3F4F6`).
- **Header:** Centered H2 ("FROM IDEA TO LAUNCH").
- **Layout:** CSS Grid (Auto-fit, min-width 300px).
- **Cards (x5):**
  - Card Style: White background, hover shadow, 24px padding.
  - Card 1: "Outsource teams" - "We provide certified industry professionals..."
  - Card 2: "Websites" - "SEO-first, mobile-optimized approaches..."
  - Card 3: "Web Apps" - "Polished, secure, and scalable solutions..."
  - Card 4: "Mobile Apps" - "Intuitive mobile experiences that captivate users..."
  - Card 5: "Games and Asset Production" - "Engaging and visually stunning mobile games..."
  - *Note for Agents: Include a "LEARN MORE" text link at the bottom of each card.*
### 3.4. Statistics Section ("ThinkBIT by the Numbers")
- **Background:** Primary (`#0A2540`), White text.
- **Layout:** Four-column flexbox, horizontally centered.
- **Data Points:**
  - "600+" (Label: # of total projects)
  - "10+" (Label: Years in the business)
  - "300+" (Label: Satisfied clients)
  - "10+" (Label: Countries worked with)
### 3.5. Events Banner ("ThinkBIT Events")
- **Background:** White.
- **Header:** Centered H2 ("Powering Every Moment, End-to-End with ThinkBIT Events").
- **Layout:** Three columns for sub-products:
  - "Onsite" (Digital Registration Done Right)
  - "Raffle" (Make your events more exciting)
  - "Conference" (Your event's mobile app companion)
### 3.6. Footer
- **Background:** Primary (`#0A2540`).
- **Text Color:** White for titles, Gray-400 for links.
- **Layout:** 
  - **Left Column:** "ThinkBIT 10 Years" Logo Placeholder, Tagline: "We make Ideas Happen".
  - **Middle Columns:** Navigation links duplicating the Header (Services, Events, Our Company, Let's Talk).
  - **Right Column:** Badges for "ISO 27001", "PSIA", "DMAP", "GDAP".
- **Bottom Bar:** "2026 © ThinkBIT Solutions. Privacy Policy."
## 4. Responsive Constraints
- **Mobile Breakpoint:** `< 768px`.
- **Nav Bar (Mobile):** Hide center links, show a hamburger menu icon. Right CTA remains visible if space permits.
- **Hero & Services (Mobile):** Stack all grid columns vertically (1 column layout).
- **Padding:** Reduce all Y-axis padding by 50% on mobile.

