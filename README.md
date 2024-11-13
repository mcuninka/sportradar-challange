This is a [Next.js](https://nextjs.org/) project developed for Sportradar as
part of the coding challenge for the Coding Academy internship.

## Getting Started

First, install all dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

You will also need `MONGODB_URI` key in your .env (.env.local) file to load and
store events:

```bash
MONGODB_URI = mongodb+srv://<user>:<password>@<cluster>.mongodb.net/calendar
```

### Description

To view the calendar with events, open
[http://localhost:3000](http://localhost:3000) in your browser.  
Events can be filtered by sport using the dropdown next to the month name. You
can click on any event to view its details.

To add your own event, navigate to the `add-event` page by either clicking the
`Add Your Event` button in the navigation bar or by selecting a specific day on
the calendar. Clicking the button in the navigation bar will set the date to
today, while selecting a day will set that specific date as the default in the
date input field.

The required fields for adding an event are `Sport`, `Name`, `Stage`, `Stadium`,
`Date`, and `Time`. The `Home Team` and `Away Team` fields, along with their
respective scores, are optional.

By clicking the `Add to Calendar` button, your event is saved to the database
(MongoDB) and will appear in the calendar. If there is an error, a toast message
will notify you of the issue.
