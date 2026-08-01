## Bug report

**Describe the bug**
The mobile navigation menu is hard to access on small screens. The menu button does not appear clearly and the navigation links can be difficult to open.

**To reproduce**
1. Open the site on a mobile phone or narrow browser window
2. Look at the top navigation
3. Try to open the menu

**Expected behavior**
A visible mobile menu icon should appear on all small screens and should open the navigation links cleanly.

**Additional context**
This is important for phone users and improves the site’s usability on mobile.

## Feature request

**Describe the feature**
Connect the contact/booking form to a backend or form service so appointment requests are actually delivered.

**Why is this needed?**
Currently the form only shows a browser alert and does not send the request anywhere. A real booking flow is required for client use.

**Possible implementation**
- Use Formspree, Netlify Forms, or a similar service
- Or add a simple server endpoint to receive and store submissions
- Optionally send an email notification when a new request arrives

## Feature request

**Describe the feature**
Confirm and complete GitHub Pages deployment for the repository.

**Why is this needed?**
This will make the website publicly accessible as a real web page.

**Possible implementation**
- Enable GitHub Pages in repository settings
- Use the existing Actions workflow to deploy from `master`
- Verify the published site URL

## Feature request

**Describe the feature**
Enable GitHub Pages for this repository so the site becomes publicly accessible.

**Why is this needed?**
The repository already contains a Pages workflow file, but Pages must be enabled in repo settings before the site is published.

**Possible implementation**
- Go to Settings → Pages
- Select the `master` branch
- Save and verify the published site URL