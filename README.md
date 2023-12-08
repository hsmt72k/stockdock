## Features

- 🔐 Authentication using Clerk
- 📊 Real-time backend and database powered by Convex.dev
- 🖼️ Upload images using Edge Store
- 📝 Create and edit notes using BlockNote editor
- 🙂 Emojis using Emoji Picker React
- 🌲 Create hierarchies of notes
- 🗑️ Archive, restore, and delete notes
- 📢 Publish notes to share with others
- ⬅️ Adjustable sidebar
- ✨ Responsive UI and light/dark mode built with Tailwind and shadcn/ui
- zustand
- shadcn/ui

## Key Features:

- Landing page 🛬
- Real-time database 🔗
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑️
- Authentication 🔐
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡️🔀⬅️
- Fully collapsable sidebar ↕️
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Cover image of each document 🖼️
- Recover deleted files 🔄📄

## Getting Started

### Clone the repo

``` console
git clone https://github.com/hsmt72k/jotion.git
```

### Install dependencies

``` console
npm install
```

### Setup .env file

``` .env
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Start Convex

``` console
npx convex dev
```

### Start the app

``` console
npm run dev
```
