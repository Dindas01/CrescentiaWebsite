# 🚀 CRESCENTIA WEBSITES - PRE-LAUNCH CHECKLIST

## Status: PREPARING FOR LAUNCH
**Date:** January 2, 2026
**Sites:** crescentia.pt, wealth.crescentia.pt, apoios.crescentia.pt

---

## ✅ COMPLETED ITEMS

### SEO & Discoverability
- [x] Meta titles, descriptions, keywords (all 3 sites)
- [x] OpenGraph tags for social sharing
- [x] Twitter Card metadata
- [x] Schema.org structured data (Organization, ProfessionalService, FinancialService)
- [x] sitemap.xml files (all 3 sites)
- [x] robots.txt files (all 3 sites)
- [x] Proper HTML lang attributes (pt/en)

### User Experience
- [x] Custom 404 error pages (theme-aware)
- [x] Cookie consent banners (GDPR compliant)
- [x] Cross-site navigation dropdowns
- [x] Newsletter signup forms
- [x] Theme toggle (light/dark mode)
- [x] Professional imagery (hero backgrounds)
- [x] Loading states and animations

### Content
- [x] Company story (team-focused, no individual founder)
- [x] Service descriptions
- [x] Program logos section (PT2030, PRR - with styled fallbacks)
- [x] Crypto ticker (Wealth site)
- [x] Stats and benefits sections
- [x] Contact information display

---

## ⚠️ CRITICAL - MUST FIX BEFORE LAUNCH

### Legal & Compliance
- [ ] **URGENT:** Privacy Policy page (required for GDPR)
- [ ] **URGENT:** Terms of Service page
- [ ] **URGENT:** Cookie Policy (detailed)
- [ ] Legal disclaimer for financial/tax services
- [ ] Data protection compliance statement

### Logos & Branding
- [ ] **ACTION REQUIRED:** Add actual PT2030 logo PNG to `/apps/apoios/public/logos/portugal2030.png`
- [ ] **ACTION REQUIRED:** Add actual PRR logo PNG to `/apps/apoios/public/logos/prr.png`
  - Current: Using styled text badges as temporary fallback
  - Need: Official high-res PNG logos with transparency

### Forms & Functionality
- [ ] Test newsletter form submissions
- [ ] Verify form validation works
- [ ] Set up email service integration (where do form submissions go?)
- [ ] Add success/error messages for forms
- [ ] Test Calendly integration (Wealth site)

### Contact Information
- [ ] Verify all email addresses are active: info@crescentia.pt
- [ ] Verify phone number: +351 913 960 220
- [ ] Add physical address (required for business websites)
- [ ] Ensure contact info is consistent across all 3 sites

---

## 📋 IMPORTANT - SHOULD FIX BEFORE LAUNCH

### Content & Messaging
- [ ] Add real client testimonials/case studies
- [ ] Finalize pricing (Wealth site shows €12k, €24k, €49k)
- [ ] Add team member bios/photos (optional but recommended)
- [ ] Verify all Portuguese grammar/spelling
- [ ] Verify all English grammar/spelling
- [ ] Add FAQ section (recommended)

### Performance & Technical
- [ ] Run Lighthouse audit on all 3 sites
- [ ] Optimize image sizes (Unsplash images are high-res)
- [ ] Enable image lazy loading
- [ ] Test page load speed (<3 seconds)
- [ ] Minify CSS/JS for production
- [ ] Enable gzip/brotli compression

### Mobile & Responsive
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad/tablet
- [ ] Check touch targets are 44x44px minimum
- [ ] Test horizontal/landscape mode

### Browser Compatibility
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Check for console errors in each browser

### Accessibility (A11y)
- [ ] Add proper heading hierarchy (h1, h2, h3)
- [ ] Add ARIA labels where needed
- [ ] Ensure color contrast meets WCAG AA standards
- [ ] Test keyboard navigation (Tab, Enter, Esc)
- [ ] Add skip-to-content link
- [ ] Test with screen reader

### Security
- [ ] **CRITICAL:** Ensure HTTPS/SSL is configured
- [ ] Test SSL certificate validity
- [ ] Secure API endpoints (if any)
- [ ] Sanitize form inputs
- [ ] Add CSRF protection to forms
- [ ] Set security headers (CSP, X-Frame-Options, etc.)

---

## 💡 RECOMMENDED - NICE TO HAVE

### Analytics & Tracking
- [ ] Set up Google Analytics 4
- [ ] Add Google Tag Manager
- [ ] Set up conversion tracking
- [ ] Configure Search Console
- [ ] Add heatmap tracking (Hotjar/Microsoft Clarity)
- [ ] Set up uptime monitoring (UptimeRobot/Pingdom)

### Marketing & Growth
- [ ] Create social media profiles
- [ ] Prepare launch announcement
- [ ] Set up email marketing (Mailchimp/SendGrid)
- [ ] Create LinkedIn company page
- [ ] Add social media links to footer
- [ ] Create blog section (for SEO)

### Additional Features
- [ ] Add live chat widget (optional)
- [ ] Add language switcher animation
- [ ] Add "Back to top" button
- [ ] Add breadcrumbs navigation
- [ ] Create custom 500 error page
- [ ] Add print stylesheet

---

## 🔧 TECHNICAL SETUP REQUIRED

### Domain & Hosting
```bash
# Verify DNS configuration
- crescentia.pt → points to hosting
- wealth.crescentia.pt → subdomain configured
- apoios.crescentia.pt → subdomain configured

# SSL Certificates
- Valid SSL for crescentia.pt
- Valid SSL for *.crescentia.pt (wildcard) OR individual certs

# Server Configuration
- Enable HTTP/2
- Enable GZIP compression
- Set proper cache headers
- Configure 301 redirects (www to non-www or vice versa)
```

### Email Setup
```bash
# Professional email addresses needed:
- info@crescentia.pt (general inquiries)
- apoios@crescentia.pt (EU funding inquiries)
- wealth@crescentia.pt (tax optimization inquiries)

# Email hosting options:
- Google Workspace (recommended)
- Microsoft 365
- Custom SMTP server
```

---

## 📊 PRE-LAUNCH TESTING CHECKLIST

### Functional Testing
- [ ] All internal links work
- [ ] All external links work and open in new tab
- [ ] Images load correctly
- [ ] Videos/media play correctly
- [ ] Forms submit successfully
- [ ] Search functionality works (if applicable)
- [ ] Newsletter signup works
- [ ] Calendly modal opens/closes

### Content Review
- [ ] Spelling and grammar check (PT & EN)
- [ ] All placeholder text removed
- [ ] Copyright year is 2026 (currently shows 2024 on Wealth)
- [ ] Contact details are correct
- [ ] Pricing is final and approved
- [ ] Legal disclaimers are present

### Visual QA
- [ ] Logo displays correctly on all pages
- [ ] Favicon appears in browser tab
- [ ] Colors are consistent with brand
- [ ] Fonts load properly
- [ ] Layout doesn't break at different screen sizes
- [ ] No content overlap or cut-off text
- [ ] Hover states work on interactive elements

---

## 🚨 LAUNCH DAY CHECKLIST

### Final Checks (30 min before)
- [ ] Run full site backup
- [ ] Test staging site one final time
- [ ] Clear all caches
- [ ] Verify database is optimized
- [ ] Check server resources (disk, RAM)

### Go Live
- [ ] Deploy to production
- [ ] Smoke test all critical paths
- [ ] Monitor error logs
- [ ] Check analytics is tracking
- [ ] Test from different devices
- [ ] Send internal announcement

### Post-Launch (first 24 hours)
- [ ] Monitor site uptime
- [ ] Check for broken links
- [ ] Review error logs
- [ ] Monitor form submissions
- [ ] Check analytics data flow
- [ ] Respond to any user feedback

---

## 📞 SUPPORT CONTACTS

**Technical Issues:**
- Server/hosting provider support
- DNS provider support
- SSL certificate provider

**Content Issues:**
- Content review team
- Legal team (for policies)
- Translation services (if needed)

---

## 🎯 SUCCESS METRICS

After launch, track:
- Page load time <3 seconds
- Mobile traffic > 50%
- Bounce rate < 60%
- Newsletter signup conversion > 2%
- Contact form submissions per day
- Time on site > 2 minutes

---

## 📝 NOTES

### Current Status
- **Institutional (crescentia.pt):** 90% ready - needs legal pages
- **Wealth (wealth.crescentia.pt):** 90% ready - needs legal pages, verify pricing
- **Apoios (apoios.crescentia.pt):** 85% ready - needs legal pages, add real logos

### Known Issues
1. Logo images missing - using styled text fallbacks
2. No Privacy Policy or Terms pages
3. Forms not connected to backend
4. Copyright year 2024 on Wealth (should be 2026)
5. No physical address listed

### Priority Actions
1. Create Privacy Policy & Terms pages
2. Add actual logo PNG files
3. Set up form submission backend
4. Verify HTTPS/SSL configuration
5. Add physical business address

---

**Last Updated:** January 2, 2026
**Next Review:** Before production deployment
