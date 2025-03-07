# Alma Immigration Case Assessment

A Next.js application for managing immigration case assessments.

## Routes

### 1. Home Page (`/`)
The public-facing lead form where potential clients can:
- Submit their personal information
- Select their visa category of interest
- Provide details about their immigration case
- Get a preliminary assessment

### 2. Success Page (`/success`)
Confirmation page shown after successful form submission, featuring:
- Success message
- Next steps information
- Return to homepage option

### 3. Internal Leads List (`/internal/leads`)
Admin dashboard for managing leads with features:
- View all submitted leads
- Filter leads by status (Pending/Reached Out)
- Search leads by name
- Update lead status
- Secure access (requires authentication)

## Getting Started

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- JsonForms (for form handling)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with lead form
│   ├── success/
│   │   └── page.tsx         # Success confirmation page
│   └── internal/
│       └── leads/
│           └── page.tsx     # Internal leads management
├── components/
│   └── leads/
│       └── LeadsTable.tsx   # Leads table component
└── types.ts                 # Type definitions
```

## Environment Setup

Create a `.env.local` file with necessary environment variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Start production server: `npm start`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
