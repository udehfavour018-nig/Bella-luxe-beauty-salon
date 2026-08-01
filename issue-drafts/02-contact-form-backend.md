# [FEATURE] Add contact form submission backend

## Describe the feature
Connect the contact/booking form to a backend or form service so appointment requests are actually delivered.

## Why is this needed?
Currently the form only shows a browser alert and does not submit data anywhere. To make the website usable for real clients, form submissions should be sent or stored.

## Possible implementation
- Use Formspree, Netlify Forms, or a similar provider
- Add a simple server endpoint to receive and store form submissions
- Optionally send an email notification when a request is received
