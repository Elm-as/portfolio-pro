# Deployment Guide - Portfolio Pro

## Quick Deploy to Vercel (Recommended)

1. Push code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository: `Elm-as/portfolio-pro`
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

Done! Your site will be live at: `https://portfolio-pro.vercel.app`

## Environment Variables

No environment variables required for basic deployment.

## Custom Domain

After deployment, add your custom domain:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `elmas-oulobo.com`)
3. Configure DNS records as instructed

## Build Settings

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`
- **Node Version:** 18.x or higher

## Performance

- First Load JS: ~87KB (shared)
- Page-specific JS: 1.5-2KB
- All routes: Server-rendered on demand
- Middleware: 26.6KB

## Post-Deployment Checklist

- [ ] Test all pages in production
- [ ] Verify language switching works
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test all internal links
- [ ] Add Google Analytics (optional)
- [ ] Configure custom domain
- [ ] Update email addresses if needed
- [ ] Test on multiple browsers

## Support

For issues, check:
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- This repository's Issues page

## Maintenance

To update content:
1. Edit files in `dictionaries/fr.ts` and `dictionaries/en.ts`
2. Commit and push changes
3. Vercel will auto-deploy

To add projects:
1. Add entries to `projects.list` array in dictionaries
2. Include: title, context, problem, solution, tools, method, result
3. Push changes

## Analytics (Optional)

To add analytics:
1. Install: `npm install @vercel/analytics`
2. Add to `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   // In layout component:
   <Analytics />
   ```
3. Redeploy

## Contact Form Integration

Current form shows success/error messages but doesn't send emails.

To integrate real email service:
1. Use Vercel serverless functions
2. Or integrate with SendGrid/Mailgun
3. Or use form service like Formspree

Example with Formspree:
1. Sign up at formspree.io
2. Create a form
3. Update form action in `ContactClient.tsx`

---

**Ready to Deploy!** 🚀
