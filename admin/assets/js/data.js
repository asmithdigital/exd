// Stage 1: static seed data, held in localStorage so edits persist in-browser
// during this prototype. Stage 2 replaces this file's role with real Supabase
// reads/writes, and the shape of REQUESTS below maps directly onto that table.

const STAGES = ['New', 'In Discussion', 'Accepted', 'Declined'];

const STAGE_BADGE = {
  'New':            { bg: '#FEF3C7', color: '#92400E' },
  'In Discussion':  { bg: '#DBEAFE', color: '#1E40AF' },
  'Accepted':       { bg: '#D1FAE5', color: '#065F46' },
  'Declined':       { bg: '#FEE2E2', color: '#991B1B' },
};

const URGENCY_COLOR = { High: '#DC2626', Medium: '#D97706', Low: '#6B7280' };
const SIZE_ABBR = { Small: 'S', Medium: 'M', Large: 'L', XL: 'XL' };

const DEFAULT_REQUESTS = [
  {
    id: 'req-001', requester: 'Sarah Chen', team: 'Customer Operations',
    need: 'Redesign the self-service claims portal to reduce inbound call volume',
    context: "Our claims portal was built in 2019 and has had no meaningful UX work since. We handle around 4,200 claims per month and roughly 35% of them result in a call to our team — most asking questions the portal should be answering. We need to understand what's stopping people from completing claims digitally and fix it.",
    urgency: 'High', size: 'Large', expertise: ['Research', 'Service Design', 'UX & Product Design'],
    stage: 'In Discussion', submittedAt: '2026-07-21',
    notes: [{ author: 'Priya Nair', text: 'Discovery call scheduled for 29 July. Sarah mentioned the main drop-off point is the document upload step — worth investigating specifically.', date: '2026-07-23' }],
    history: [
      { date: '2026-07-21', action: 'Request submitted', by: 'Sarah Chen' },
      { date: '2026-07-22', action: 'Moved to In Discussion', by: 'Priya Nair' },
    ],
  },
  {
    id: 'req-002', requester: 'Marcus Webb', team: 'Digital Products',
    need: 'Understand why customers abandon the onboarding flow at step 3 of 5',
    context: "We launched a redesigned onboarding flow in April. Completion rate actually dropped — 54% of new customers now abandon at step 3, which asks for employment and income details. We suspect the framing is the issue but we don't have the research to confirm that.",
    urgency: 'High', size: 'Medium', expertise: ['Research', 'UX & Product Design', 'Content Design'],
    stage: 'Accepted', submittedAt: '2026-07-18',
    notes: [{ author: 'Tom Alderton', text: 'Scoped as a 6-week engagement: 2 weeks discovery, 2 weeks redesign, 2 weeks validation. Proposal accepted. Kicking off 4 August.', date: '2026-07-25' }],
    history: [
      { date: '2026-07-18', action: 'Request submitted', by: 'Marcus Webb' },
      { date: '2026-07-20', action: 'Moved to In Discussion', by: 'Tom Alderton' },
      { date: '2026-07-25', action: 'Accepted', by: 'Tom Alderton' },
    ],
  },
  {
    id: 'req-003', requester: 'Elena Vasquez', team: 'Mobile Product',
    need: 'Redesign the roadside assistance app for calm, one-handed use during a breakdown',
    context: "Our roadside app has a 3.2 App Store rating. The majority of negative reviews mention the same thing: people are in a stressful situation, often alone, and the app asks them to navigate multiple screens before help is confirmed. We need to rethink the flow entirely around the person in that moment.",
    urgency: 'Medium', size: 'Large', expertise: ['Research', 'UX & Product Design', 'Content Design'],
    stage: 'Accepted', submittedAt: '2026-06-30',
    notes: [{ author: 'James Okafor', text: 'Concept validation sessions completed with 12 participants — 10 of 12 preferred the new confirmation-first model. Delivery in progress.', date: '2026-07-28' }],
    history: [
      { date: '2026-06-30', action: 'Request submitted', by: 'Elena Vasquez' },
      { date: '2026-07-02', action: 'Moved to In Discussion', by: 'James Okafor' },
      { date: '2026-07-14', action: 'Accepted', by: 'James Okafor' },
    ],
  },
  {
    id: 'req-004', requester: 'Yuki Tanaka', team: 'Digital Engineering',
    need: 'Audit and consolidate the design system across three separate product lines',
    context: "We have three separate component libraries built independently over five years. They share branding but nothing else — tokens, naming conventions, accessibility standards, and documentation are all different. We're starting a major cross-product initiative in Q4 and need a single unified system before then.",
    urgency: 'Medium', size: 'XL', expertise: ['Design Systems', 'UX & Product Design'],
    stage: 'New', submittedAt: '2026-07-30',
    notes: [], history: [{ date: '2026-07-30', action: 'Request submitted', by: 'Yuki Tanaka' }],
  },
  {
    id: 'req-005', requester: 'Amara Osei', team: 'Strategy & Insights',
    need: 'Map the end-to-end travel booking journey for first-time international travellers',
    context: "We want to understand how people plan their first international trip and where our product fits — or fails to fit — in that journey. Not just the booking moment, the whole arc from inspiration to airport. We think there's a new product proposition in the pre-trip planning phase.",
    urgency: 'Low', size: 'Medium', expertise: ['Research', 'Service Design'],
    stage: 'Accepted', submittedAt: '2026-05-12',
    notes: [{ author: 'Tom Alderton', text: 'Research report and journey map delivered. Wrapping up — will follow up in 60 days to check on outcomes.', date: '2026-07-10' }],
    history: [
      { date: '2026-05-12', action: 'Request submitted', by: 'Amara Osei' },
      { date: '2026-05-14', action: 'Moved to In Discussion', by: 'Tom Alderton' },
      { date: '2026-05-20', action: 'Accepted', by: 'Tom Alderton' },
    ],
  },
  {
    id: 'req-006', requester: 'Ben Hartley', team: 'Operations',
    need: 'Improve internal logistics tracking tool used by the fleet management team',
    context: "Fleet team uses an internal tool that hasn't been updated since 2021. Main complaints are around the daily route view and the alert system, which generates too many false positives. Looking for a quick UX pass.",
    urgency: 'Low', size: 'Small', expertise: ['UX & Product Design'],
    stage: 'Declined', submittedAt: '2026-07-05',
    notes: [],
    history: [
      { date: '2026-07-05', action: 'Request submitted', by: 'Ben Hartley' },
      { date: '2026-07-09', action: 'Declined', by: 'Priya Nair' },
    ],
    declineReason: 'Team is at capacity through September. The scope is clear but the urgency is low — flagged to revisit in Q4.',
  },
];

const CAPACITY_DATA = [
  { specialty: 'Research', status: 'Fully stretched', activeProjects: 3, people: ['Tom Alderton', 'Mei Lin'] },
  { specialty: 'Service Design', status: 'Getting busy', activeProjects: 2, people: ['James Okafor'] },
  { specialty: 'UX & Product Design', status: 'Fully stretched', activeProjects: 4, people: ['Priya Nair', 'Sam Reeve', 'Aisha Kamara'] },
  { specialty: 'Content Design', status: 'Getting busy', activeProjects: 2, people: ['Priya Nair'] },
  { specialty: 'Design Systems', status: 'Available', activeProjects: 1, people: ['Sam Reeve'] },
  { specialty: 'Business Analysis', status: 'Available', activeProjects: 1, people: ['Mei Lin'] },
];

// ---------- persistence helpers (Stage 1: localStorage only) ----------
function loadRequests() {
  try {
    const raw = localStorage.getItem('exd_requests');
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through to defaults */ }
  return JSON.parse(JSON.stringify(DEFAULT_REQUESTS));
}
function saveRequests(requests) {
  localStorage.setItem('exd_requests', JSON.stringify(requests));
}
function resetRequests() {
  localStorage.removeItem('exd_requests');
}
