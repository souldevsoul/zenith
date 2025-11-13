# Zenith - Complete Product Specification

## 🎯 Brand Concept & Vision

### What is Zenith?

**Zenith** is an AI-powered MVP development platform that enables startups and entrepreneurs to generate fully-functional Minimum Viable Products using artificial intelligence, then assign specific implementation tasks to expert developers.

**Tagline:** "Reach New Heights"

**The Core Innovation:**
We combine the speed of AI MVP generation with expert human implementation through a seamless hybrid workflow and unified credit system. Users can leverage AI to rapidly prototype their ideas, then engage professional developers to refine and complete specific features.

### Value Proposition

**For Startup Founders & Entrepreneurs:**
- Generate a working MVP in minutes instead of weeks
- Start free with 100 welcome credits
- Scale implementation through expert developers
- Full GitHub integration and version control
- Pay only for what you need through our credit system

**For Expert Developers:**
- Accept high-value development tasks from entrepreneurs
- Work on diverse, interesting projects
- Earn credits/income per completed task
- Flexible schedule, work on projects you choose
- Build your portfolio with real projects

### Unique Selling Points

1. **AI MVP Generation** - Generate full working applications with AI in minutes
2. **Expert Task Assignment** - Assign specific implementation tasks to vetted developers
3. **Unified Credit System** - One system for AI generation, task completion, and credit purchases
4. **GitHub Integration** - Automatic branch creation, PR generation, seamless workflow
5. **Credit-Based Economy** - Flexible payment model, no subscriptions required
6. **Expert Network** - Access to professional developers for refinement and scaling

---

## 🎨 Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Orange/Amber Zenith Palette:**
```
Primary Orange Gradient:
- #f97316 (orange-500) - Primary action color
- #ea580c (orange-600) - Secondary emphasis
- #c2410c (orange-700) - Hover states & depth

Warm Neutral Support:
- #f5f5f4 (stone-50) - Light backgrounds
- #78716c (stone-600) - Secondary text
- #292524 (stone-950) - Dark text (headings)
```

**Usage Rules:**
- Primary CTAs: Orange gradients (#f97316 → #ea580c)
- Hover states: Orange-700 (#c2410c)
- Backgrounds: White/Stone-50
- Text: Stone-950 (headings), Stone-600 (body)
- Accent: Use orange for all interactive elements

**Zenith Brand Attributes:**
- ✅ Warm, energetic, forward-thinking
- ✅ Professional yet approachable
- ✅ Conveys growth and momentum ("Reach New Heights")
- ✅ Tech-forward but not cold

### Visual Style

**Typography:**
- Headings: Bold, modern (text-5xl, font-bold)
- Body: Readable, relaxed (text-lg, leading-relaxed)
- Accents: Semibold for emphasis

**Shadows (Soft & Professional):**
```css
shadow-soft-sm    - Subtle elevation
shadow-soft-md    - Card elevation
shadow-soft-lg    - Modal/popup elevation
shadow-soft-xl    - Hero element elevation
shadow-glow-orange - Interactive glow effect (Zenith branded)
```

**Corners (Smooth & Modern):**
```css
rounded-xl    - Buttons, cards
rounded-2xl   - Large cards, sections
rounded-3xl   - Hero elements
rounded-full  - Badges, avatars
```

**Spacing (Generous & Breathable):**
- Section padding: py-24 (desktop), py-16 (mobile)
- Card padding: p-8, p-10, p-12
- Element gaps: gap-6, gap-8
- Vertical rhythm: space-y-6, space-y-8

---

## 🔄 Core User Flows

### Flow 1: New User Onboarding & MVP Generation

```
1. User lands on homepage (/)
   ↓
2. Clicks "Get Started Free" or "Start Building Free" CTA
   ↓
3. [If not logged in] → Sign up/login
   ↓
4. System awards 100 welcome credits to new account
   ↓
5. Redirects to /dashboard
   ↓
6. User creates new project by clicking "Create Your First Project"
   ↓
7. Fills out project form:
   - Project name (required)
   - Description (textarea: what does your app do?)
   - Tech stack preferences (optional: React, Node, Python, etc.)
   ↓
8. Project saved to database
   ↓
9. User clicks "Generate MVP" button
   ↓
10. Modal shows cost: 100 credits (deducted immediately)
    ↓
11. Credits reserved in system
    ↓
12. AI Processing begins via Claude/OpenAI:
    - Analyzes project description
    - Generates project structure
    - Creates component files
    - Generates API routes
    - Sets up database schema
    - Implements styling
    ↓
13. Code sandbox created (Vercel or E2B)
    ↓
14. GitHub branch created: mvp/[project-id]
    ↓
15. Generated code committed to branch
    ↓
16. Pull Request created automatically
    ↓
17. User sees preview link + GitHub PR link
    ↓
18. User can review code and merge PR
    ↓
19. Success! Working MVP generated
```

**Happy Path Checkpoints:**
- ✅ Welcome credits awarded on signup (100)
- ✅ Project creation validates properly
- ✅ MVP generation shows real-time progress
- ✅ GitHub integration works (branch + PR created)
- ✅ Code preview accessible
- ✅ Credits properly deducted on completion
- ✅ User can merge PR and deploy

---

### Flow 2: Create Task & Assign to Expert Developer

```
1. User has generated MVP with AI
   ↓
2. User sees task list on project page
   ↓
3. Clicks "Add Task" button
   ↓
4. Task creation modal opens:
   - Task title (required)
   - Description (textarea: detailed requirements)
   - Priority (Low/Medium/High/Critical)
   - Estimated complexity (Simple/Medium/Complex)
   ↓
5. Task saved to database with status: "Pending"
   ↓
6. System calculates credit cost based on complexity:
   - Simple task: 10-30 credits
   - Medium task: 30-60 credits
   - Complex task: 60-100 credits
   ↓
7. User clicks "Assign to Expert"
   ↓
8. Expert selection modal appears
   - Shows available experts
   - Can select "Any Available Expert"
   ↓
9. User confirms assignment
   ↓
10. System reserves credits from user's wallet
    ↓
11. Expert receives notification (email + in-app)
    ↓
12. Expert views task in their dashboard
    ↓
13. Expert clicks "Accept Task"
    ↓
14. Task status changes to "In Progress"
    ↓
15. Expert creates feature branch: task/[task-id]
    ↓
16. Expert implements the feature
    ↓
17. Expert commits code and creates Pull Request
    ↓
18. User receives PR notification
    ↓
19. User reviews code on GitHub
    ↓
20. User approves or requests changes
    ↓
21. If approved:
    - Credits transferred to expert's account
    - Task marked "Completed"
    - PR ready to merge
    ↓
22. Success! Task completed by expert
```

**Happy Path Checkpoints:**
- ✅ Task creation form validates properly
- ✅ Credit cost calculated correctly by complexity
- ✅ Expert receives task notification
- ✅ Expert can accept/decline
- ✅ GitHub branch created automatically
- ✅ PR created and linked to task
- ✅ User can review work
- ✅ Credits transferred on approval
- ✅ Task status updates correctly

---

### Flow 3: Returning User → Project Management

```
1. User logs in
   ↓
2. Lands on /dashboard
   ↓
3. Sees:
   - Recent projects (list/cards)
   - Project status: Draft, MVP Generated, In Progress, Completed
   - Active tasks assigned to experts
   - Credit balance (top-right)
   - "Create New Project" button
   ↓
4. Clicks on existing project
   ↓
5. Project detail page opens:
   - Project name & description
   - Generated MVP preview + GitHub PR link
   - Task list with status
   - "Generate MVP" button (if not done)
   - "Add Task" button
   ↓
6. User can:
   - Review/merge MVP code
   - Create new tasks
   - View assigned expert tasks
   - Track task progress
   - View all task pull requests
```

**Happy Path Checkpoints:**
- ✅ All projects visible with status
- ✅ Project details load correctly
- ✅ MVP preview accessible
- ✅ Task list shows current assignments
- ✅ GitHub integration shows PR links
- ✅ Credit balance displays correctly

---

## 💳 Credit System (Unified)

### Credit Economics

**What Credits Buy:**
- 100 credits = 1 AI MVP generation (full working application)
- 10-30 credits = Simple developer task (bug fix, small feature)
- 30-60 credits = Medium developer task (new component/page)
- 60-100 credits = Complex developer task (full feature with backend)
- 5-10 credits = Code edit via AI enhancement

**New User Welcome:**
- All new users receive 100 free welcome credits
- Can be used for any platform action
- Never expire

### Pricing Model (Pay-as-you-go)

No subscriptions. Users purchase credits as needed:

| Package | Price | Credits | Per-Credit Cost |
|---------|-------|---------|-----------------|
| Starter | $9.99 | 100 | $0.10/credit |
| Pro | $79.99 | 1,000 | $0.08/credit |
| Studio | $599.99 | 10,000 | $0.06/credit |

**Rules:**
- Credits never expire
- No monthly subscriptions required
- No forced credit packages
- Purchase only when needed
- Refunds issued for failed MVP generations
- Expert developers earn credits they're paid in

### Credit Flow

1. **Reservation** - Credits reserved when action initiated
2. **Completion** - Reserved credits deducted when action completes
3. **Refund** - Credits returned if action fails or is cancelled
4. **Transfer** - Credits transferred from user to expert on task approval

### Credit Flow Technical Implementation

**Database Schema:**
```prisma
model User {
  id             String @id @default(cuid())
  credits        Int @default(0)
  plan           String @default("free") // "free", "designer", "agency"
  planRenewsAt   DateTime?
}

model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  type        String // "purchase", "earn", "spend", "refund"
  amount      Int    // positive for add, negative for spend
  balance     Int    // balance after transaction
  description String
  relatedId   String? // logoId, designRequestId, etc.
  createdAt   DateTime @default(now())
}
```

**API Endpoints:**
```typescript
// Check balance
GET /api/credits/balance
Response: { credits: 25, plan: "designer" }

// Spend credits
POST /api/credits/spend
Body: { amount: 1, reason: "logo_generation", relatedId: "logo_123" }
Response: { success: true, newBalance: 24 }

// Purchase credits
POST /api/credits/purchase
Body: { package: "pro" } // 30 credits for $25
Response: { checkoutUrl: "stripe.com/checkout/..." }

// Stripe webhook handles credit addition after payment
```

---

## 🤖 AI Code Generation Integration

### AI Models Used

**Primary: Anthropic Claude (via API)**
- **Purpose:** MVP code generation and architectural planning
- **Output:** Full working code (components, APIs, styling)
- **Speed:** ~2-5 minutes per full MVP
- **Best for:** Initial MVP generation, code analysis, refactoring

**Fallback: OpenAI GPT-4**
- **Purpose:** Alternative if Claude API unavailable
- **Output:** Complete application code
- **Speed:** ~3-7 minutes per full MVP
- **Best for:** Diverse project types, specialized domains

**Capabilities:**
- Project structure generation
- React/Next.js component creation
- API route implementation
- Database schema design
- Authentication setup
- Styling (Tailwind CSS)
- Error handling
- Type safety (TypeScript)

### Generation Flow

```typescript
// /app/api/projects/[id]/mvp/route.ts

export async function POST(req: Request) {
  // 1. Parse request
  const { projectId, userId } = await req.json()

  // 2. Check user credits
  const user = await db.user.findUnique({ where: { id: userId }})
  if (user.credits < 100) {
    return Response.json({
      error: "Insufficient credits",
      required: 100,
      available: user.credits
    }, { status: 402 })
  }

  // 3. Reserve 100 credits immediately
  await reserveCredits(userId, 100, "mvp_generation", projectId)

  // 4. Fetch project details
  const project = await db.project.findUnique({ where: { id: projectId }})

  // 5. Build AI prompt with project context
  const prompt = buildMVPPrompt(project)
  // Example: "Create a full Next.js MVP for 'AI Chat App'.
  // Features: User auth, chat interface, message storage, API routes.
  // Tech stack: React, Next.js, TypeScript, Tailwind CSS, PostgreSQL"

  // 6. Call Claude API
  try {
    const response = await anthropic.messages.create({
      model: "claude-opus",
      max_tokens: 8000,
      messages: [{
        role: "user",
        content: prompt
      }]
    })

    // 7. Save AI run record (status: processing)
    const aiRun = await db.aiRun.create({
      data: {
        projectId,
        userId,
        prompt,
        status: "processing",
        costCredits: 100,
      }
    })

    // 8. Create code sandbox (E2B or Vercel)
    const sandbox = await createSandbox({
      projectId,
      code: response.content[0].text
    })

    // 9. Create GitHub branch and commit code
    await createGitHubBR({
      projectId,
      code: response.content[0].text
    })

    // 10. Deduct credits on completion
    await deductCredits(userId, 100, "mvp_generation", projectId)

    // 11. Update project status
    await db.project.update({
      where: { id: projectId },
      data: {
        status: "mvp_generated",
        githubPrUrl: `https://github.com/...`,
        sandboxUrl: sandbox.url
      }
    })

    return Response.json({
      projectId,
      status: "completed",
      sandboxUrl: sandbox.url,
      prUrl: `https://github.com/...`
    })

  } catch (error) {
    // 12. Refund credits on failure
    await refundCredits(userId, 100, "generation_failed", projectId)

    // 13. Update AI run status
    await db.aiRun.update({
      where: { id: aiRun.id },
      data: { status: "failed", error: error.message }
    })

    return Response.json({ error: "MVP generation failed" }, { status: 500 })
  }
}
```

### Sandbox & GitHub Integration

```typescript
// /app/api/projects/[id]/mvp/sandbox.ts

export async function createSandbox(config: {
  projectId: string,
  code: string
}) {
  // Create E2B sandbox for code execution
  const sandbox = await e2b.Sandbox.create({
    template: "node-python",
  })

  // Write generated code to sandbox
  await sandbox.filesystem.write("/code/package.json", generatePackageJson())
  await sandbox.filesystem.write("/code/app", config.code)

  // Install dependencies
  await sandbox.process.run({
    command: "npm install",
    cwd: "/code"
  })

  // Run build to verify
  await sandbox.process.run({
    command: "npm run build",
    cwd: "/code"
  })

  // Start dev server
  const proc = await sandbox.process.startProcess({
    command: "npm run dev",
    cwd: "/code"
  })

  return {
    id: sandbox.id,
    url: `https://preview-${sandbox.id}.e2b.dev`,
    logs: await sandbox.process.logs,
  }
}

export async function createGitHubPR(config: {
  projectId: string,
  code: string,
  userName: string
}) {
  // Create branch: mvp/[project-id]-[timestamp]
  const branchName = `mvp/${config.projectId}-${Date.now()}`

  // Commit code to branch
  const commit = await github.repos.createOrUpdateFileContents({
    owner: "user",
    repo: "project-repo",
    path: "/",
    message: `Generate MVP: ${config.projectId}

- Created project structure
- Added authentication
- Set up database schema
- Generated UI components
- Configured deployment

Generated by Zenith AI`,
    content: Buffer.from(config.code).toString("base64"),
    branch: branchName
  })

  // Create Pull Request
  const pr = await github.pulls.create({
    owner: "user",
    repo: "project-repo",
    title: `MVP: ${config.projectId}`,
    head: branchName,
    base: "main",
    body: `## AI-Generated MVP

### Features:
- User authentication
- Core database schema
- API routes
- UI components
- Ready for deployment

### Next Steps:
1. Review code on this PR
2. Test the preview
3. Merge when ready`,
    labels: ["ai-generated", "mvp"]
  })

  return {
    branchName,
    prUrl: pr.html_url,
    prNumber: pr.number
  }
}
```

### Prompt Engineering for MVP Generation

**Template Structure:**
```
You are an expert full-stack developer. Create a complete, production-ready MVP for:

Project: {projectName}
Description: {projectDescription}

Requirements:
- Full working application (not pseudocode)
- Authentication system (user signup/login)
- Database schema and migrations
- API routes for core features
- React/Next.js frontend components
- TypeScript for type safety
- Tailwind CSS styling
- Error handling and validation

Tech Stack:
- Framework: {techStackChoice}
- Database: PostgreSQL
- Authentication: NextAuth.js or similar
- Styling: Tailwind CSS
- Deployment: Ready for Vercel

Deliverables:
1. Complete file structure
2. Database schema
3. API routes
4. React components
5. Styling
6. Authentication setup
7. Environment configuration
8. README with setup instructions

Make the code production-ready with proper error handling, validation, and security practices.
```

**Key Prompt Attributes:**
- Focus on working, complete code
- Include all necessary files and structure
- Production-quality from day one
- Security best practices built-in
- Ready to deploy immediately
- Proper error handling throughout
- Clear comments and documentation

---

## 📄 Marketing Pages (Required)

### Homepage (/)

**Sections (in order):**

1. **Hero Section**
   - H1: "Build Your MVP in Minutes, Not Weeks"
   - Subheading: "AI generates fully-functional MVPs. Expert developers scale your vision."
   - Tagline: "Reach New Heights"
   - Primary CTA: "Get Started Free (100 Credits)" → /login
   - Secondary CTA: "See How It Works" → #how-it-works
   - Project showcase: Gallery of example MVPs built with Zenith

2. **AI + Expert Hybrid Section**
   - Split comparison cards
   - Left: AI MVP Path (fast, affordable, instant)
   - Right: Expert Developer Path (custom features, refinement, scaling)
   - Center: Hybrid option (best of both)

3. **How It Works (3 Steps)**
   - Step 1: Describe Your App (text input)
   - Step 2: AI Generates MVP (full working code)
   - Step 3: Assign Tasks to Experts (scale your vision)

4. **MVP Gallery Showcase**
   - Real Zenith-generated projects
   - Filterable by tech stack (Next.js, React, Node, etc.)
   - Hover reveals project description and GitHub repo link

5. **Key Features Grid (6 items)**
   - AI MVP Generation
   - Expert Developer Network
   - GitHub Integration (automatic PRs)
   - Credit-Based System (no subscriptions)
   - Production-Ready Code
   - Full Customization Control

6. **User Testimonials (3 cards)**
   - Founder/entrepreneur photo or avatar
   - Quote about building their MVP
   - Name, role, company
   - 5-star rating

7. **Pricing Section**
   - Credit packages
   - MVP cost: 100 credits
   - Task costs: 10-100 credits depending on complexity
   - CTA: "Start Building Free"

8. **Developer/Expert Section**
   - "Earn Money as an Expert Developer"
   - Accept high-value tasks
   - Get paid in credits
   - Flexible schedule
   - CTA: "Apply as an Expert"

9. **Final CTA Section**
   - H2: "Ready to Reach New Heights?"
   - Primary CTA: "Start Building Now"
   - Secondary CTA: "See Pricing"
   - Trust badges: "No credit card required", "100 free welcome credits", "Full code ownership"

**SEO Requirements:**
- Meta title: "Zenith - Build MVPs with AI in Minutes, Scale with Expert Developers"
- Meta description: "Generate production-ready MVPs using AI, then assign implementation tasks to expert developers. Start free with 100 credits. No subscriptions."
- Structured data: Organization, WebSite, Product, SoftwareApplication
- Open Graph images
- Twitter Card meta tags

---

### Pricing Page (/pricing)

**Layout:**

1. **Header**
   - H1: "No Subscriptions. Pay Only for What You Build."
   - Subheading: "Start free with 100 credits. Buy more credits when you need them."

2. **Credit Packages (Main Focus)**

   **Recommended for Getting Started:**
   - 100 credits - $9.99 (1 MVP generation)
   - 1,000 credits - $79.99 (10 MVPs or extensive task assignments)
   - 10,000 credits - $599.99 (100 MVPs or large team scaling)

3. **What You Can Do With Credits**

   | Action | Credits | Cost |
   |--------|---------|------|
   | Generate 1 MVP | 100 | Included free (new users) |
   | Simple Task (Small feature) | 10-30 | $0.10-0.30 |
   | Medium Task (New component/page) | 30-60 | $0.30-0.60 |
   | Complex Task (Full feature + backend) | 60-100 | $0.60-1.00 |
   | AI Code Enhancement | 5-10 | $0.05-0.10 |

4. **User Roles & Capabilities**

   **Regular User (Founder/Entrepreneur):**
   - Generate unlimited MVPs (100 credits each)
   - Create unlimited tasks
   - Assign tasks to experts
   - Manage credit purchases
   - Full code ownership
   - CTA: "Get Started Free"

   **Expert Developer:**
   - Accept development tasks
   - Earn credits per completed task
   - Build portfolio
   - Work flexible schedule
   - Potential revenue sharing (future)
   - CTA: "Apply as Expert"

   **Admin:**
   - Manage all users
   - Monitor transactions
   - Assign experts to tasks
   - View platform analytics
   - Manage credits and refunds
   - CTA: "Contact for Enterprise"

5. **Comparison with Competitors**
   - Zenith: No subscriptions, 100% credit-based, expert developers included
   - Bubble/Webflow: High monthly costs ($10-100+), limited automation
   - Traditional Freelance: Slow, expensive ($500-5000 for MVP)
   - Traditional Developers: Very expensive, long timelines

6. **FAQ Section**
   - "Do credits expire?" (No, they never expire)
   - "Can I get a refund?" (Yes, for failed MVPs)
   - "How much does an MVP cost?" (100 credits = $9.99 to start)
   - "What if I need more work?" (Hire experts with credits)
   - "Who owns the code?" (You do, 100%)
   - "Can I use this commercially?" (Yes, full ownership)
   - "How do I become an expert?" (Apply on the platform)

---

### Dashboard Pages (Authenticated)

#### /dashboard (Main Dashboard)

**Layout:**

1. **Top Bar**
   - Zenith logo (left)
   - Credit balance badge with "Buy More" button (right)
   - User avatar dropdown (right)

2. **Welcome Section**
   - Welcome message: "Welcome back, [Name]! Ready to build?"
   - Credit balance display: "100 credits available"
   - Primary CTA: "Create New Project" → /dashboard/projects/new

3. **Recent Projects (List or Cards)**
   - Project name, status, created date
   - Status badges: Draft, MVP Generated, In Progress, Completed
   - Click to view project details
   - Quick actions: View, Delete
   - Empty state: "No projects yet. Create your first MVP!"

4. **Active Tasks**
   - List of tasks assigned to experts
   - Shows: task title, assigned expert, status, deadline
   - Status: Pending, In Progress, Under Review, Completed
   - Click to view PR on GitHub
   - Empty state: "No active tasks"

5. **Quick Stats**
   - Total projects created
   - MVPs generated
   - Tasks completed
   - Total credits spent
   - Team members (if applicable)

6. **Quick Actions**
   - "Generate New MVP"
   - "Create a Task"
   - "Invite Team Member" (future)
   - "View Credit History"

---

#### /dashboard/projects/new (Create New Project)

**Form Fields:**

1. **Project Name** (required)
   - Text input
   - Placeholder: "AI Chat App"
   - Character limit: 100

2. **Project Description** (required)
   - Textarea
   - Placeholder: "Describe what your app does. Example: 'A chat application where users can ask AI questions about coding and get instant answers with code examples'"
   - Character limit: 1000
   - Hint: More detail = better MVP generation

3. **Tech Stack Preference** (optional)
   - Checkbox group (select multiple):
     - [ ] React
     - [ ] Next.js
     - [ ] Vue.js
     - [ ] Angular
     - [ ] Node.js
     - [ ] Python/Flask
     - [ ] TypeScript
     - [ ] PostgreSQL
     - [ ] MongoDB
     - [ ] GraphQL
   - Default: "Let AI choose the best stack"

4. **Core Features** (optional)
   - Textarea
   - Example: "User authentication, real-time chat, API integration, dashboard"
   - Character limit: 500

5. **Submit Button**
   - "Create Project & Generate MVP (100 credits)"
   - Shows cost breakdown
   - Disabled if insufficient credits
   - CTA: "Buy Credits" if not enough

**Validation:**
- Project name required
- Description required (min 20 characters)
- Sufficient credits (100)

**After Submit:**
- Project saved with status: "Draft"
- Redirect to /dashboard/projects/[id]
- Start MVP generation automatically
- Show progress bar with estimated time

---

#### /dashboard/projects/[id] (Project Detail)

**Layout:**

1. **Project Header**
   - Project name
   - Status badge (Draft, MVP Generated, In Progress, Completed)
   - Created date
   - Quick actions: Edit, Delete, Share

2. **MVP Preview Section**
   - Sandbox preview iframe (if MVP generated)
   - GitHub PR link (clickable button)
   - Code review checklist
   - "Merge PR" button (links to GitHub)
   - "Regenerate MVP" button (100 credits)

3. **Project Description**
   - Original description
   - Tech stack used
   - Features implemented
   - "Edit Description" link

4. **Tasks Section**
   - List of all tasks for this project
   - Columns: Task name, Status, Assigned Expert, Deadline, Credits
   - Status: Pending, In Progress, Under Review, Completed
   - Quick actions per task:
     - View details
     - View PR on GitHub
     - Cancel task (if not started)
   - Empty state: "No tasks yet. Create one to scale your MVP."

5. **Action Buttons**
   - "Add New Task" (opens task creation modal)
   - "View Code Repository" (links to GitHub)
   - "Download Code" (ZIP of generated files)
   - "View Sandbox Preview"
   - "Request Changes to MVP" (5 credits)

6. **Task Creation Modal (inline)**
   - Task title (required)
   - Task description (required)
   - Priority (Low/Medium/High/Critical)
   - Estimated complexity (Simple/Medium/Complex)
   - "Create & Assign" button
   - Shows estimated credit cost

---

#### /dashboard/wallet (Credits & Billing)

**Layout:**

1. **Credit Balance Display**
   - Large credit count display
   - Last updated timestamp
   - "Buy More Credits" button (primary)

2. **Credit Purchase Section**
   - Credit package cards:
     - 100 credits - $9.99
     - 1,000 credits - $79.99
     - 10,000 credits - $599.99
   - "Buy" button per package
   - Cost breakdown (credits per dollar)
   - Stripe checkout on click

3. **Transaction History**
   - Table with columns:
     - Date
     - Type (purchase, usage, refund)
     - Description (MVP generation, task assignment, etc.)
     - Amount (± credits)
     - Balance after transaction
   - Sortable by date
   - Filter by type
   - Export as CSV option
   - Pagination (20 per page)

4. **Credit Usage Breakdown**
   - Pie chart showing:
     - MVP generations
     - Task assignments
     - Other usage
   - Total credits spent this month

5. **Billing Info**
   - No subscription information
   - Payment method on file (if any)
   - Download invoices section
   - All past purchases listed

---

#### /dashboard/settings (User Settings)

**Layout:**

1. **Profile Section**
   - Name (editable)
   - Email (display only)
   - Avatar upload
   - Bio/description (optional)
   - Save button

2. **Account Settings**
   - Email preferences
   - Notification settings:
     - [ ] Task notifications
     - [ ] MVP generation complete
     - [ ] Credit alerts
     - [ ] Marketing emails

3. **GitHub Integration**
   - Connect GitHub account button
   - Authorized repos list
   - Disconnect button
   - Webhook status

4. **API Keys** (for future integrations)
   - Generate new API key button
   - List of active keys with last used date
   - Revoke key button

5. **Danger Zone**
   - Export my data (downloads ZIP)
   - Delete account (with confirmation)
   - Requires password re-entry

---

## 🔧 Technical Implementation Checklist

### Database (Prisma + PostgreSQL)

**Models Required:**

```prisma
// User & Auth
model User {
  id              String @id @default(cuid())
  email           String @unique
  password        String?
  name            String?
  role            Role @default(USER) // USER, EXPERT, ADMIN
  credits         Int @default(100) // Welcome credits
  projects        Project[]
  tasksCreated    Task[] @relation("CreatedBy")
  tasksAssigned   Task[] @relation("AssignedTo")
  creditLedger    CreditLedger[]
  transactions    Transaction[]
  createdAt       DateTime @default(now())
}

// Projects
model Project {
  id            String @id @default(cuid())
  userId        String
  user          User @relation(fields: [userId], references: [id])
  name          String
  description   String @db.Text
  status        String // "draft", "mvp_generated", "in_progress", "completed"
  techStack     String[] // ["React", "Node.js", etc.]
  githubPrUrl   String?
  sandboxUrl    String?
  tasks         Task[]
  aiRuns        AIRun[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

// AI MVP Generation Runs
model AIRun {
  id            String @id @default(cuid())
  projectId     String
  project       Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  userId        String
  prompt        String @db.Text
  costCredits   Int // 100 for MVP generation
  status        String // "processing", "completed", "failed"
  error         String?
  generatedCode String? @db.Text
  createdAt     DateTime @default(now())
  completedAt   DateTime?
}

// Development Tasks
model Task {
  id            String @id @default(cuid())
  projectId     String
  project       Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdBy     String
  creator       User @relation("CreatedBy", fields: [createdBy], references: [id])
  assignedTo    String?
  assignee      User? @relation("AssignedTo", fields: [assignedTo], references: [id])
  title         String
  description   String @db.Text
  priority      String // "low", "medium", "high", "critical"
  complexity    String // "simple", "medium", "complex"
  status        String @default("pending") // "pending", "assigned", "in_progress", "under_review", "completed", "cancelled"
  costCredits   Int // Calculated based on complexity
  githubPrUrl   String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  completedAt   DateTime?
}

// Credit Ledger (Transaction history)
model CreditLedger {
  id            String @id @default(cuid())
  userId        String
  user          User @relation(fields: [userId], references: [id])
  delta         Int // Positive = added, Negative = spent
  reason        String // "welcome_bonus", "purchase", "mvp_generation", "task_assignment", etc.
  projectId     String?
  taskId        String?
  status        String @default("completed") // "reserved", "completed", "refunded"
  createdAt     DateTime @default(now())
}

// Stripe Transactions
model Transaction {
  id              String @id @default(cuid())
  userId          String
  user            User @relation(fields: [userId], references: [id])
  amount          Decimal // USD amount
  credits         Int // Credits purchased
  stripeSessionId String?
  status          String // "pending", "completed", "failed", "refunded"
  createdAt       DateTime @default(now())
}

enum Role {
  USER
  EXPERT
  ADMIN
}
```

---

### API Routes Required

**Auth:**
- Sign up, login handled by auth provider (NextAuth/Clerk)

**Projects:**
- `POST /api/projects` - Create new project
- `GET /api/projects` - List user's projects
- `GET /api/projects/[id]` - Get project details
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/projects/[id]/mvp` - Generate MVP with AI (Claude)

**Tasks:**
- `POST /api/tasks` - Create new task
- `GET /api/tasks` - List tasks (filtered by role)
- `GET /api/tasks/[id]` - Get task details
- `POST /api/tasks/[id]/assign` - Assign task to expert
- `PATCH /api/tasks/[id]` - Update task status
- `POST /api/tasks/[id]/cancel` - Cancel task and refund

**Credits:**
- `GET /api/user/credits` - Get user credit balance
- `POST /api/credits/purchase` - Stripe checkout session
- `POST /api/credits/refund` - Manual refund (admin)

**Stripe:**
- `POST /api/stripe/checkout` - Create checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhooks

**Admin:**
- `GET /api/admin/users` - List all users (admin only)
- `GET /api/admin/stats` - Platform statistics (admin only)
- `GET /api/admin/transactions` - All transactions (admin only)
- `PATCH /api/admin/users/[id]` - Update user role/status (admin only)
- `POST /api/admin/credits/add` - Manually add credits (admin only)

---

### Environment Variables Needed

```env
# Database
DATABASE_URL="postgresql://..."

# AI Code Generation
ANTHROPIC_API_KEY="sk-ant-..."
OPENAI_API_KEY="sk-..." (fallback)

# GitHub Integration
GITHUB_TOKEN="ghp_..."
GITHUB_OAUTH_ID="Ov23li..."
GITHUB_OAUTH_SECRET="..."

# Code Sandboxes
E2B_API_KEY="e2b_..."
VERCEL_API_TOKEN="..." (for Vercel preview deployments)

# Auth
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App Config
NEXT_PUBLIC_APP_URL="https://zenith.com"
NEXT_PUBLIC_BRAND_COLOR="#ea580c" // Orange/Amber

# Email/Notifications
RESEND_API_KEY="re_..." (for sending task notifications)
SENDGRID_API_KEY="..." (alternative)

# Admin/Support
ADMIN_EMAIL="admin@zenith.com"
SUPPORT_EMAIL="support@zenith.com"
```

---

## ✅ End Goal Verification Checklist

### Marketing Pages Complete?
- [ ] Homepage has all 9 sections with Zenith branding
- [ ] Pricing page shows credit packages (no subscriptions)
- [ ] All CTAs lead to correct destinations
- [ ] SEO meta tags present
- [ ] Mobile responsive
- [ ] Design system consistent (Orange #ea580c, soft shadows)
- [ ] Hero tagline: "Reach New Heights"
- [ ] Expert developer CTA section visible

### User Flows Working?
- [ ] New user can sign up
- [ ] 100 welcome credits awarded on signup
- [ ] User can create project
- [ ] AI MVP generation works (Claude API)
- [ ] Generated code displays in sandbox preview
- [ ] GitHub PR created automatically
- [ ] User can create tasks
- [ ] Tasks can be assigned to experts
- [ ] Expert receives task notification

### Credit System Complete?
- [ ] New users get 100 welcome credits
- [ ] No subscriptions (pay-as-you-go model)
- [ ] Credit packages available (100, 1000, 10000 credits)
- [ ] À la carte purchase works (Stripe)
- [ ] MVP generation costs 100 credits
- [ ] Task costs calculated by complexity (10-100 credits)
- [ ] Credits refund on failed MVP generation
- [ ] Credit balance displays correctly
- [ ] Credit transaction history visible
- [ ] Expert developers earn credits for completed tasks

### AI Code Generation Working?
- [ ] Claude API connection established
- [ ] Prompt engineering for MVP generation
- [ ] Generation request succeeds
- [ ] Generated code stored in database
- [ ] Code sandbox created (E2B/Vercel)
- [ ] GitHub branch created automatically
- [ ] Pull request created automatically
- [ ] Failed generations refund credits
- [ ] OpenAI fallback working

### GitHub Integration Working?
- [ ] OAuth setup complete
- [ ] Branch creation works
- [ ] Code commits automatic
- [ ] Pull requests created
- [ ] PR links show in dashboard
- [ ] Users can merge PRs
- [ ] Task branches created for expert work

### Database Schema Complete?
- [ ] All models defined in Prisma
- [ ] Migrations run successfully
- [ ] User role system (USER, EXPERT, ADMIN)
- [ ] Project and Task relationships correct
- [ ] Credit ledger tracks all transactions
- [ ] Indexes added for performance

### Authentication Working?
- [ ] NextAuth/Clerk integration complete
- [ ] Sign up creates user with 100 credits
- [ ] Login flow works
- [ ] Protected routes secure
- [ ] User profile accessible
- [ ] Role-based access control (RBAC)

### Expert Developer Features Working?
- [ ] Experts can view available tasks
- [ ] Experts can accept/decline tasks
- [ ] Experts notified of assignments
- [ ] Expert dashboard shows earnings
- [ ] Expert can submit work via GitHub PR
- [ ] Expert receives credits on approval

---

## 🎨 Design System Confirmation

**Colors Used Everywhere (Orange/Amber Zenith):**
- ✅ Orange #f97316 (primary)
- ✅ Orange #ea580c (secondary)
- ✅ Orange #c2410c (hover/depth)
- ✅ Stone #f5f5f4 (backgrounds)
- ✅ Stone #78716c (secondary text)
- ✅ Stone #292524 (dark text)
- ❌ NO Emerald/Teal
- ❌ NO Blue/Indigo
- ❌ NO Yellow

**Visual Style:**
- ✅ Soft shadows (shadow-soft-*)
- ✅ Smooth corners (rounded-xl/2xl/3xl)
- ✅ Generous spacing (py-24, gap-8)
- ✅ Warm, energetic, forward-thinking feel
- ✅ "Reach New Heights" tagline everywhere

---

This is the complete, comprehensive specification for Zenith - an AI-powered MVP development platform with expert developer integration and credit-based economy.

**MVP Development Platform Features:**
✅ AI-generated MVPs in minutes
✅ Expert developer task assignment
✅ GitHub integration with automatic PRs
✅ Credit-based payment system (no subscriptions)
✅ Three user roles: Regular User, Expert/Developer, Admin
✅ Orange/Amber branding throughout
✅ Production-ready code generation

**All flows, pages, and technical details are documented here.**
