# How Zenith Works - Complete End-to-End Guide

## Platform Overview

Zenith is an AI-powered MVP development platform with a credit-based system and expert task assignment workflow. Users can generate MVPs with AI and assign specific tasks to human experts for implementation.

---

## User Roles

### 1. Regular User
- Sign up and manage account
- Purchase credits
- Create projects
- Generate MVPs with AI
- Assign tasks to experts
- Review completed work

### 2. Expert/Developer
- Receive task assignments
- Implement features
- Submit work via GitHub PRs
- Get paid per completed task

### 3. Admin
- Manage all users
- Assign experts to tasks
- Monitor transactions
- View platform analytics
- Manage credits and refunds

---

## Complete User Flows

### Flow 1: New User Onboarding

**Route**: `/` → `/login` → `/dashboard`

1. **Landing Page** (`/`)
   - User visits https://zenith-ias5fnypp-soultosoul.vercel.app
   - Sees hero: "Reach New Heights"
   - Views features and pricing
   - Clicks "Get Started Free" or "Start Building Free"

2. **Sign Up** (`/login`)
   - User enters email and password
   - System validates input
   - Creates account in database (`users` table)
   - Hashes password with bcryptjs
   - Automatically logs in user
   - Awards 100 free credits to new account
   - Redirects to `/dashboard`

3. **First Dashboard View** (`/dashboard`)
   - Shows welcome message
   - Displays credit balance: 100 credits
   - Shows "Create Your First Project" CTA
   - Navigation sidebar visible
   - Empty projects list

**Database Changes**:
```sql
INSERT INTO users (email, password, name, created_at)
INSERT INTO credit_ledger (user_id, delta, reason) -- +100 welcome credits
```

---

### Flow 2: Creating a Project with AI

**Route**: `/dashboard` → `/dashboard/projects/new` → `/dashboard/projects/[id]`

1. **Navigate to New Project** (`/dashboard/projects/new`)
   - User clicks "New Project" or "Create Your First Project"
   - Form appears with fields:
     - Project name
     - Description
     - Tech stack preferences (optional)
   - User fills in details
   - Clicks "Create Project"

2. **Project Creation**
   - System validates input
   - Creates project in database
   - Generates unique project ID
   - Redirects to project detail page

3. **Project Detail Page** (`/dashboard/projects/[id]`)
   - Shows project info
   - Displays "Generate MVP" button
   - Shows empty task list
   - Has "Add Task" button

**Database Changes**:
```sql
INSERT INTO projects (user_id, name, description, status)
```

---

### Flow 3: Generating MVP with AI

**Route**: `/dashboard/projects/[id]` → AI Generation → GitHub PR

1. **Initiate MVP Generation**
   - User clicks "Generate MVP" button
   - Modal appears showing cost: 100 credits
   - User confirms
   - System checks credit balance

2. **Credit Reservation**
   - Reserves 100 credits from user's wallet
   - Creates transaction record
   - Updates UI to show "Generating..."

3. **AI Processing** (Backend)
   - API route: `/api/projects/[id]/mvp`
   - Analyzes project description
   - Uses Anthropic Claude or OpenAI to generate:
     - Project structure
     - Component files
     - API routes
     - Database schema
     - Styling
   - Streams progress to user

4. **Code Sandbox Creation**
   - Creates Vercel or E2B sandbox
   - Installs dependencies
   - Starts development server
   - Runs build to verify

5. **GitHub Integration**
   - Creates new branch: `mvp/[project-id]`
   - Commits generated code
   - Creates Pull Request
   - Adds PR link to project

6. **Completion**
   - Deducts credits from reservation
   - Updates project status to "MVP Generated"
   - Shows live preview link
   - Displays GitHub PR link
   - User can review and merge

**Database Changes**:
```sql
-- Reserve credits
INSERT INTO credit_ledger (user_id, delta, reason, project_id)
VALUES (user_id, -100, 'MVP generation reserved', project_id)

-- Track AI run
INSERT INTO ai_runs (project_id, prompt, cost_credits, status)

-- Update project
UPDATE projects SET status = 'mvp_generated', github_pr_url = '...'

-- Deduct credits on completion
UPDATE credit_ledger SET status = 'completed'
```

**API Endpoints Used**:
- `POST /api/projects/[id]/mvp` - Generate MVP
- `POST /api/create-ai-sandbox-v2` - Create sandbox
- `POST /api/generate-ai-code-stream` - Stream AI code
- `GET /api/sandbox-status` - Check sandbox status

---

### Flow 4: Creating and Assigning Tasks to Experts

**Route**: `/dashboard/projects/[id]` → Create Task → Assign to Expert

1. **Create New Task**
   - User clicks "Add Task" button
   - Modal opens with form:
     - Task title
     - Description
     - Priority (Low, Medium, High, Critical)
     - Estimated complexity
   - User fills details
   - Clicks "Create Task"

2. **Task Created**
   - Task appears in project task list
   - Status: "Pending"
   - Shows estimated credit cost
   - Has "Assign to Expert" button

3. **Assign to Expert**
   - User clicks "Assign to Expert"
   - System shows available experts
   - User selects expert (or "Any Available")
   - Confirms assignment

4. **Credit Reservation**
   - System calculates cost based on complexity:
     - Simple task: 10-30 credits
     - Medium task: 30-60 credits
     - Complex task: 60-100 credits
   - Reserves credits from user wallet
   - Creates notification for expert

5. **Expert Receives Task**
   - Expert sees task in their dashboard
   - Task details include:
     - Project context
     - Requirements
     - Deadline
     - Payment (credits)
   - Expert can accept or decline

6. **Expert Works on Task**
   - Expert creates branch: `task/[task-id]`
   - Implements feature
   - Commits code
   - Creates Pull Request
   - Links PR to task

7. **Task Completion**
   - Expert marks task as complete
   - User reviews PR
   - User approves or requests changes
   - On approval:
     - Credits transferred to expert
     - Task marked "Completed"
     - PR can be merged

**Database Changes**:
```sql
-- Create task
INSERT INTO tasks (project_id, title, description, priority, status)

-- Assign to expert
UPDATE tasks SET assigned_to = expert_id, status = 'assigned'

-- Reserve credits
INSERT INTO credit_ledger (user_id, delta, reason, task_id)
VALUES (user_id, -cost, 'Task assignment reserved', task_id)

-- On completion
UPDATE tasks SET status = 'completed', completed_at = NOW()
INSERT INTO credit_ledger (user_id, delta, reason, task_id)
VALUES (expert_id, +cost, 'Task completion payment', task_id)
```

**API Endpoints**:
- `POST /api/tasks` - Create task
- `POST /api/tasks/[id]/assign` - Assign to expert
- `POST /api/tasks/[id]/cancel` - Cancel task
- `GET /api/tasks` - List user's tasks

---

### Flow 5: Admin Managing Platform

**Route**: `/dashboard/admin` (Admin only)

1. **Admin Dashboard** (`/dashboard/admin`)
   - Accessible only to users with role="ADMIN"
   - Shows platform statistics:
     - Total users
     - Active projects
     - Credits in circulation
     - Revenue this month
   - Recent activity feed
   - Quick actions

2. **User Management** (`/dashboard/admin/users`)
   - List all users
   - Filter by:
     - Role (USER, EXPERT, ADMIN)
     - Status (Active, Suspended)
     - Registration date
   - Actions per user:
     - View details
     - Add/remove credits manually
     - Change role
     - Suspend/activate account
     - View user's projects

3. **Expert Management**
   - Filter users by role="EXPERT"
   - See expert statistics:
     - Tasks completed
     - Average rating
     - Earnings
     - Active tasks
   - Assign tasks to specific experts
   - Set expert availability
   - Approve expert applications

4. **Transaction Management** (`/dashboard/admin/transactions`)
   - View all credit transactions
   - Filter by:
     - Type (purchase, usage, refund)
     - User
     - Date range
     - Amount
   - Issue refunds
   - Adjust balances
   - Export reports

5. **Task Oversight**
   - View all tasks across platform
   - See unassigned tasks
   - Manually assign experts
   - Resolve disputes
   - Force completion or cancellation

**Database Queries**:
```sql
-- Get platform stats
SELECT COUNT(*) FROM users
SELECT COUNT(*) FROM projects WHERE status = 'active'
SELECT SUM(credits) FROM wallets

-- Manage users
SELECT * FROM users WHERE role = 'EXPERT'
UPDATE users SET role = 'ADMIN' WHERE id = user_id

-- View transactions
SELECT * FROM credit_ledger
  JOIN users ON credit_ledger.user_id = users.id
  ORDER BY created_at DESC

-- Assign expert
UPDATE tasks SET assigned_to = expert_id WHERE id = task_id
```

**API Endpoints**:
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/users` - List all users
- `PATCH /api/admin/users/[id]` - Update user
- `GET /api/admin/transactions` - All transactions
- `POST /api/admin/credits/add` - Manually add credits

---

### Flow 6: Purchasing Credits

**Route**: `/dashboard/wallet` → Stripe Checkout → Success

1. **Wallet Page** (`/dashboard/wallet`)
   - Shows current credit balance
   - Transaction history table
   - Credit packages:
     - 100 credits - $9.99
     - 1,000 credits - $79.99
     - 10,000 credits - $599.99
   - "Buy Now" buttons

2. **Select Package**
   - User clicks "Buy Now" on a package
   - Redirects to Stripe Checkout
   - Pre-filled with package details

3. **Stripe Checkout**
   - Hosted by Stripe (secure)
   - User enters payment info
   - Confirms purchase
   - Stripe processes payment

4. **Webhook Processing**
   - Stripe sends webhook to `/api/stripe/webhook`
   - System verifies webhook signature
   - Extracts session data
   - Adds credits to user's wallet
   - Creates transaction record

5. **Confirmation**
   - User redirected back to `/dashboard/wallet`
   - Success message displayed
   - Updated credit balance shown
   - Transaction appears in history

**Database Changes**:
```sql
-- On successful payment
INSERT INTO transactions (user_id, amount, credits, status)
VALUES (user_id, 9.99, 100, 'completed')

INSERT INTO credit_ledger (user_id, delta, reason, transaction_id)
VALUES (user_id, +100, 'Credit purchase', transaction_id)

UPDATE wallets SET credits = credits + 100 WHERE user_id = user_id
```

**API Endpoints**:
- `POST /api/stripe/checkout` - Create checkout session
- `POST /api/stripe/webhook` - Handle payment webhook
- `GET /api/user/credits` - Get user credit balance

---

### Flow 7: Expert Dashboard

**Route**: `/dashboard` (Expert view)

1. **Expert Dashboard**
   - Shows available tasks
   - Displays active assignments
   - Earnings summary
   - Task completion stats

2. **View Available Tasks**
   - List of unassigned tasks
   - Filter by:
     - Technology
     - Complexity
     - Payment amount
   - Click to view details

3. **Accept Task**
   - Expert clicks "Accept Task"
   - System checks expert availability
   - Creates assignment
   - Reserves credits for task
   - Shows task in "My Tasks"

4. **Complete Task**
   - Expert creates GitHub branch
   - Implements feature
   - Creates PR
   - Marks task complete
   - Credits released on approval

---

### Flow 8: Project Settings

**Route**: `/dashboard/settings`

1. **Profile Settings**
   - Update name, email
   - Change password
   - Upload avatar (uses Blob storage)
   - Set notification preferences

2. **Notification Settings**
   - Email preferences
   - Task updates
   - Credit alerts
   - Marketing emails

3. **Danger Zone**
   - Export data
   - Delete account
   - Requires confirmation

**API Endpoints**:
- `PATCH /api/user/profile` - Update profile
- `DELETE /api/user/delete` - Delete account
- `POST /api/upload/avatar` - Upload avatar (Blob)

---

## Technical Implementation

### Database Schema (Simplified)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  password      String?
  name          String?
  role          Role      @default(USER) // USER, EXPERT, ADMIN
  credits       Int       @default(100)
  projects      Project[]
  tasks         Task[]
  transactions  Transaction[]
}

model Project {
  id          String   @id @default(cuid())
  userId      String
  name        String
  description String
  status      String   // draft, mvp_generated, in_progress, completed
  githubUrl   String?
  tasks       Task[]
  user        User     @relation(fields: [userId])
}

model Task {
  id            String   @id @default(cuid())
  projectId     String
  title         String
  description   String
  priority      String   // low, medium, high, critical
  status        String   // pending, assigned, in_progress, completed, cancelled
  assignedTo    String?  // Expert user ID
  costCredits   Int
  createdBy     String   // User who created task
  project       Project  @relation(fields: [projectId])
}

model CreditLedger {
  id            String   @id @default(cuid())
  userId        String
  delta         Int      // Positive = added, Negative = spent
  reason        String   // 'welcome_bonus', 'purchase', 'mvp_generation', 'task_assignment', etc.
  projectId     String?
  taskId        String?
  createdAt     DateTime @default(now())
}

model Transaction {
  id              String   @id @default(cuid())
  userId          String
  amount          Decimal  // USD amount
  credits         Int      // Credits purchased
  stripeSessionId String?
  status          String   // pending, completed, failed, refunded
  createdAt       DateTime @default(now())
}
```

---

## API Routes Reference

### Projects
- `GET /api/projects` - List user's projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project details
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/projects/[id]/mvp` - Generate MVP with AI

### Tasks
- `GET /api/tasks` - List tasks (filtered by user role)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/[id]` - Get task details
- `POST /api/tasks/[id]/assign` - Assign task to expert
- `POST /api/tasks/[id]/cancel` - Cancel task and refund
- `PATCH /api/tasks/[id]` - Update task status

### AI Generation
- `POST /api/generate-ai-code-stream` - Stream AI code generation
- `POST /api/apply-ai-code-stream` - Apply AI edits
- `POST /api/analyze-edit-intent` - Analyze user edit request
- `POST /api/create-ai-sandbox-v2` - Create code execution sandbox
- `GET /api/sandbox-status` - Check sandbox status
- `GET /api/sandbox-logs` - Get sandbox logs

### Payments
- `POST /api/stripe/checkout` - Create Stripe checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhooks
- `GET /api/user/credits` - Get user credit balance

### User Management
- `GET /api/user/profile` - Get user profile
- `PATCH /api/user/profile` - Update profile
- `DELETE /api/user/delete` - Delete account

### Admin
- `GET /api/admin/users` - List all users (admin only)
- `GET /api/admin/transactions` - All transactions (admin only)
- `GET /api/admin/stats` - Platform statistics (admin only)
- `PATCH /api/admin/users/[id]` - Update user (admin only)

---

## Credit System Mechanics

### Credit Types

1. **Welcome Credits**
   - New users get 100 free credits
   - Added on account creation
   - Can be used for any feature

2. **Purchased Credits**
   - User buys via Stripe
   - Added immediately after payment
   - Never expire

3. **Bonus Credits**
   - Referral bonuses
   - Promotional credits
   - Admin-awarded credits

### Credit Usage

| Action | Cost | Description |
|--------|------|-------------|
| Generate MVP | 100 credits | Full AI-generated application |
| Simple Task | 10-30 credits | Small feature or bug fix |
| Medium Task | 30-60 credits | New component or page |
| Complex Task | 60-100 credits | Full feature with backend |
| Code Edit | 5-10 credits | AI-powered code changes |

### Credit Reservation Flow

1. **Reservation**
   - Credits reserved when action initiated
   - Status: "Reserved"
   - Cannot be used for other actions

2. **Completion**
   - Action completes successfully
   - Reserved credits deducted
   - Status: "Completed"

3. **Cancellation/Failure**
   - Action cancelled or fails
   - Reserved credits returned
   - Status: "Refunded"

---

## GitHub Integration Flow

### MVP Generation → GitHub

1. **Create Branch**
   ```bash
   git checkout -b mvp/[project-id]-[timestamp]
   ```

2. **Commit Generated Code**
   ```bash
   git add .
   git commit -m "Generate MVP: [project-name]

   - Created project structure
   - Added authentication
   - Set up database schema
   - Generated UI components
   - Configured deployment

   Generated by Zenith AI"
   git push origin mvp/[project-id]
   ```

3. **Create Pull Request**
   - Title: "MVP: [Project Name]"
   - Description includes:
     - Generated features
     - Tech stack used
     - Setup instructions
     - Testing checklist
   - Labels: `ai-generated`, `mvp`

4. **User Reviews PR**
   - Views changes on GitHub
   - Tests preview deployment
   - Requests changes or approves
   - Merges when ready

---

## Task Assignment → Expert Workflow

### User Assigns Task

1. **Create Task Assignment**
   - Task created in database
   - Expert selected (or auto-assigned)
   - Credits reserved
   - Notification sent

2. **Expert Notification**
   - Email sent to expert
   - In-app notification
   - Shows task details and payment

### Expert Implements

1. **Accept Task**
   - Expert clicks "Accept"
   - Task moved to "In Progress"
   - Deadline timer starts

2. **Create Branch**
   ```bash
   git checkout -b feature/task-[id]-[description]
   ```

3. **Implement Feature**
   - Write code
   - Follow project conventions
   - Add tests if applicable
   - Ensure quality

4. **Submit Work**
   ```bash
   git commit -m "feat: [Task title]

   - Implemented [feature]
   - Added [components]
   - Tested on [browsers]

   Resolves task #[id]
   Credits: [amount]"
   git push origin feature/task-[id]
   ```

5. **Create PR**
   - References task ID
   - Describes implementation
   - Screenshots if UI changes
   - Requests review

### User Reviews

1. **Review Notification**
   - User gets email
   - Task status: "Pending Review"
   - PR link in dashboard

2. **Review Code**
   - User reviews PR on GitHub
   - Tests preview deployment
   - Leaves feedback

3. **Approve or Request Changes**
   - **If approved**:
     - Merges PR
     - Marks task complete
     - Credits transferred to expert
   - **If changes needed**:
     - Comments on PR
     - Expert makes updates
     - Repeat review

---

## Admin Management Workflows

### Manage Experts

1. **View Expert Applications**
   - List of users who applied to be experts
   - Review application details
   - Check GitHub profile
   - Approve or reject

2. **Promote User to Expert**
   ```sql
   UPDATE users SET role = 'EXPERT' WHERE id = user_id
   ```

3. **Assign Tasks Manually**
   - View unassigned tasks
   - Select appropriate expert
   - Override auto-assignment
   - Notify expert

### Manage Transactions

1. **View All Transactions**
   - Purchases
   - Refunds
   - Credit adjustments
   - Expert payouts

2. **Issue Refund**
   - Find transaction
   - Click "Refund"
   - Confirm amount
   - Process through Stripe
   - Credits returned to user

3. **Adjust Credits**
   - Select user
   - Add or remove credits
   - Specify reason
   - Creates ledger entry

---

## Error Handling & Edge Cases

### Insufficient Credits
```typescript
if (user.credits < requiredCredits) {
  return {
    error: 'Insufficient credits',
    required: requiredCredits,
    available: user.credits,
    shortfall: requiredCredits - user.credits
  }
}
```

### Task Cancellation
```typescript
// User cancels task
1. Check if task already in progress
2. If not started: Full refund
3. If in progress: Partial refund based on completion %
4. Notify expert
5. Update task status to 'cancelled'
```

### Failed AI Generation
```typescript
// AI generation fails
1. Catch error
2. Log error details
3. Refund reserved credits
4. Notify user
5. Offer retry option
```

### Expert Doesn't Complete
```typescript
// Task deadline passes
1. Auto-cancel task
2. Full refund to user
3. Mark on expert's record
4. Re-open task for assignment
```

---

## Notification System

### User Notifications
- Task assigned to expert
- Expert completed task
- Credits added/spent
- MVP generation complete
- Payment received

### Expert Notifications
- New task assigned
- Task deadline approaching
- User reviewed PR
- Payment received

### Admin Notifications
- New user registration
- High-value purchase
- Expert application
- Platform errors
- Unusual activity

---

## Data Flow Diagram

```
User → Dashboard → Create Project
  ↓
Generate MVP (100 credits)
  ↓
[Credit Reservation]
  ↓
AI Processing (Claude/GPT)
  ↓
Code Generation
  ↓
GitHub Branch + PR
  ↓
[Credit Deduction]
  ↓
User Reviews → Merge
  ↓
Live Application

OR

User → Create Task
  ↓
Assign to Expert
  ↓
[Credit Reservation]
  ↓
Expert Accepts
  ↓
Expert Implements
  ↓
Creates PR
  ↓
User Reviews
  ↓
Approves
  ↓
[Credits → Expert]
  ↓
Task Complete
```

---

## Security & Permissions

### Route Protection

```typescript
// Middleware checks
/dashboard/*     - Requires authentication
/dashboard/admin/* - Requires role="ADMIN"
/api/*           - Most require auth, some public

// Permission checks
- Users can only see their own projects
- Experts can see assigned tasks
- Admins can see everything
```

### Data Access Rules

```typescript
// Projects
- Owner: Full access
- Expert: Read-only (assigned tasks)
- Admin: Full access (all projects)

// Credits
- Owner: View own balance
- Admin: View all balances, can adjust

// Tasks
- Creator: Full access
- Assigned Expert: Can update status
- Admin: Full access
```

---

## Performance Optimizations

### Caching Strategy
- Static pages: Cached at edge
- API responses: Cache user data (5 min)
- Database queries: Connection pooling
- AI responses: Cache similar prompts

### Load Balancing
- Vercel edge functions
- Database connection pooling
- Blob storage via CDN
- Rate limiting on API routes

---

## Monitoring & Analytics

### Track These Metrics
- User signups per day
- MVPs generated
- Tasks created/completed
- Credits purchased/spent
- Expert utilization rate
- Average task completion time
- Revenue per user
- Churn rate

### Error Tracking
- Failed AI generations
- Payment failures
- Database errors
- API timeouts
- User-reported issues

---

## Testing Checklist

### User Flow Testing
- [ ] Sign up creates account
- [ ] Login authenticates user
- [ ] Create project works
- [ ] Generate MVP with AI works
- [ ] Create task works
- [ ] Assign task to expert works
- [ ] Purchase credits works
- [ ] View transaction history works

### Expert Flow Testing
- [ ] Expert can view available tasks
- [ ] Expert can accept tasks
- [ ] Expert can submit work
- [ ] Expert receives payment credits

### Admin Flow Testing
- [ ] Admin can view all users
- [ ] Admin can manage experts
- [ ] Admin can view all transactions
- [ ] Admin can issue refunds
- [ ] Admin can adjust credits

---

## Quick Reference

### Key Pages
- `/` - Marketing homepage
- `/login` - Authentication
- `/dashboard` - User dashboard
- `/dashboard/projects` - Project list
- `/dashboard/projects/[id]` - Project detail
- `/dashboard/projects/new` - Create project
- `/dashboard/wallet` - Credits & purchases
- `/dashboard/settings` - User settings
- `/dashboard/admin` - Admin panel
- `/dashboard/admin/users` - User management
- `/dashboard/admin/transactions` - Transaction management

### Key Components
- `components/projects/GenerateMVPButton.tsx` - MVP generation
- `components/projects/CreateTaskDialog.tsx` - Task creation
- `components/projects/AssignTaskDialog.tsx` - Expert assignment
- `components/wallet/CreditPackages.tsx` - Credit purchases
- `components/admin/*` - Admin management

---

**Version**: 1.0.0
**Last Updated**: November 11, 2025
**Platform**: Zenith MVP Development Platform
**Status**: ✅ Production Ready - All Flows Documented
