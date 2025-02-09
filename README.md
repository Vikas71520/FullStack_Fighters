# FullStack_Fighters
Construct week project for Web-205.

# Twitter Clone (Static Version)

## 📌 Overview

This is a static Twitter Clone built using HTML, CSS, and JavaScript. The project is a simplified replica of Twitter's user interface and core functionalities, but it does not have backend integration, meaning data is not stored or dynamically updated.

## 🚀 Features

- **Home Feed**: Displays sample tweets with user profiles and timestamps.
- **Tweet Box**: Allows users to input text and submit a tweet (tweets do not persist on refresh).
- **Like & Retweet Buttons**: Clickable buttons that change appearance when clicked.
- **Profile Section**: A static profile page with user details and a placeholder for tweets.
- **Navigation Bar**: Includes links for Home, Profile, Notifications, and Messages.
- **Responsive Design**: Works on different screen sizes using CSS media queries.

## 🛠️ Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling, including flexbox and grid for layout.
- **JavaScript**: Handles UI interactions like button clicks and tweet submission.

## 📂 Project Structure

```
/twitter-clone/
│── index.html (Main feed page)
│── profile.html (Static profile page)
│── styles/
│   ├── style.css (Main styles)
│── scripts/
│   ├── app.js (Handles UI interactions)
│── images/ (Profile pictures, icons, etc.)
```

## ⚠️ Limitations

- No backend/database (tweets disappear on refresh).
- No user authentication.
- No real-time updates.

## 📌 Future Enhancements

- Implement **localStorage** to save tweets temporarily.
- Add **backend integration** (Node.js, Firebase, or a database) for persistence.
- Improve UI with animations and better styling.

## 💡 How to Use

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. Interact with the static elements (tweet box, like/retweet buttons, navigation links).
