
# SMS Reminders + Post-Visit Review Flow

Building on the previously approved SMS plan, adding a post-visit "leave a review" text and a public review submission section on the site.

## Customer Journey (full)

1. Books on `/book` → **Confirmation SMS** sent immediately.
2. **24h before** → reminder SMS.
3. **2h before** → reminder SMS.
4. **2 hours after appointment time** → **Review request SMS**:
   *"Thanks for visiting Schaefer's Gallery! We'd love your feedback — leave a quick review: https://[site]/reviews#leave-a-review"*
5. Customer taps link → lands on `/reviews`, scrolls to the **"Leave a Review"** form, submits name + star rating + text.
6. New review appears in the testimonial grid (after light moderation flag).

## What Gets Built

### Database (Lovable Cloud)
- **`appointments`** table (from prior plan) — adds one column:
  - `review_request_sent_at timestamptz`
- **`reviews`** table — new:
  - `id`, `name`, `rating` (1–5), `text`, `created_at`
  - `approved boolean default true` (set false later if moderation needed)
  - RLS: public can `INSERT` (anyone leaves a review) and `SELECT` where `approved = true`

### Twilio Connector
Connect once — same connection powers all 4 SMS types (confirmation, 24h, 2h, post-visit review).

### Server Functions / Routes
- `createBooking` — inserts appointment + sends confirmation SMS
- `submitReview` — validates (zod: name 1–60, rating 1–5, text 10–500) + inserts into `reviews`
- `getReviews` — returns approved reviews, newest first (loader on `/reviews`)
- `/api/cron/send-reminders` — scans for due 24h, 2h, **and review-request** SMS; sends each once; marks timestamps. Triggered every 15 min by `pg_cron`.

### Frontend
- **`/book`**: SMS consent microcopy; success screen confirms text sent.
- **`/reviews`**:
  - Existing testimonial grid switches to live data from `getReviews` (seeded with the current 6 hardcoded reviews so it never looks empty).
  - New **"Leave a Review"** section with anchor `#leave-a-review`:
    - Name input
    - 5-star clickable rating selector
    - Textarea (review text)
    - Submit → toast confirmation, list refreshes, form clears.
  - Header "Write a Review" button scrolls to the form.

### SMS Copy

| Trigger | Message |
|---|---|
| Booking confirmed | "Hi {name} — you're booked at Schaefer's Gallery for {service} on {date} at {time}. Reply STOP to opt out." |
| 24h before | "Reminder: your {service} at Schaefer's Gallery is tomorrow at {time}. See you soon — 984 NY-25A, Miller Place." |
| 2h before | "Heads up — your appointment at Schaefer's Gallery is in 2 hours ({time}). Need to reschedule? Call (631) 452-1992." |
| 2h after appointment | "Thanks for stopping by Schaefer's Gallery, {name}! Loved your cut? Leave a quick review: {site}/reviews#leave-a-review" |

## Tech Notes
- All SMS sent server-side via Twilio gateway (`connector-gateway.lovable.dev/twilio`) — no keys in browser.
- Phone numbers normalized to E.164 before storing.
- Cron windows: 24h reminder fires 23.5–24.5h out; 2h fires 1.5–2.5h out; review request fires 1.75–2.25h *after* `appointment_at`. Each marked with a sent-at timestamp so duplicates are impossible.
- Review form input validated with zod on both client and server; rate-limited per IP (in-memory) to prevent spam.
- Reviews list rendered with seed data on first load so the page is never empty before real reviews come in.

## What You'll Need to Provide
1. Approve enabling **Lovable Cloud** (database + scheduled job).
2. Approve connecting **Twilio** (one click when prompted).
3. The Twilio phone number to send from (asked after connecting, stored as `TWILIO_FROM_NUMBER`).
