Project: Build a basic-yet-useful, interactive Personal Diary App with React
-Display a list of diary entries sorted by date (newest first).
-Each entry should be displayed as a card with a preview image, date and title.
-Clicking on a card opens a modal window with full entry details (title, date, image, content)*
-implement functionality
oadd new entry modal:
Action button “Add Entry” to open a modal for adding a new entry.
oensure they are validated:
Check if there’s already an entry for the day, If so, prompt the user to return the next day, If not, show a form asking for: Title, Date, Image URL, Content
Validate that all fields are populated before submission.
olocalStorage: Store and retrieve diary entries
On form submission, add the entry to a localStorage item as an array
Loading Entries: On app load, load diary entries from localStorage.

Technical spec:
-Create a mock: Figma, MS Paint, paper
-Break your UI into components
-Single public GitHub Repos
-Frontend framework: React
-Styling: Tailwind CSS
-Deploy the application as a static site on Render.
* This can be achieved by setting the desired card data in a state variable
