
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll("section");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));
        // Hide all sections
        sections.forEach((section) => (section.style.display = "none"));

        // Add active class to clicked tab
        this.classList.add("active");
        // Show the corresponding section
        sections[index].style.display = "block";
      });
    });

    // Show the first section by default
    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "block" : "none";
    });
  });

  document.getElementById("user-profile").addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("user-menu");
    let userProfile = document.getElementById("user-profile");
    let rect = userProfile.getBoundingClientRect(); // Get user-profile position in viewport

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";

        // Position relative to viewport, not content
        menu.style.top = rect.top - menu.offsetHeight - 10 + "px"; 
        menu.style.left = rect.left + "px";
    }
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("user-menu");
    if (!document.getElementById("user-profile").contains(event.target)) {
        menu.style.display = "none";
    }
});

document.querySelector(".menu-item:last-child").addEventListener("click", function () {
  window.location.href = "login.html"; // Redirect to login page
});






const mockUsers = [
  {
      id: 1,
      name: 'Sagir Hussain',
      username: '@sagiransary18',
      avatar: './profilepic.jpg'
  },
  {
      id: 2,
      name: 'Jane Smith',
      username: '@janesmith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
      id: 3,
      name: 'Bob Wilson',
      username: '@bobwilson',
      avatar: 'https://images.unsplash.com/photo-1646617747609-45b466ace9a6'
  },
  {
      id: 4,
      name: 'Alice Brown',
      username: '@alicebrown',
      avatar: 'https://images.unsplash.com/photo-1628891435222-065925dcb365'
  }
];

const mockTweets = [
  {
      id: 1,
      userId: 1,
      content: 'Just launched my new website! Check it out! #webdev #coding',
      image: 'https://images.unsplash.com/photo-1585007600338-ec568e187cc1',
      likes: 42,
      retweets: 12,
      comments: 5,
      timestamp: '2h'
  },
  {
      id: 2,
      userId: 2,
      content: 'Beautiful sunset today! 🌅 #nature #photography',
      image: 'https://images.unsplash.com/photo-1592578629295-73a151d69c96',
      likes: 156,
      retweets: 23,
      comments: 8,
      timestamp: '4h'
  },
  {
      id: 3,
      userId: 3,
      content: 'Working on some exciting new projects! Stay tuned! 👨‍💻',
      likes: 89,
      retweets: 15,
      comments: 12,
      timestamp: '6h'
  },
  {
    id: 4,
    userId: 4,
    content: 'Working on some exciting new projects! Stay tuned! 👨‍💻',
    likes: 89,
    retweets: 15,
    comments: 12,
    timestamp: '6h'
},

];

const mockTrending = [
  {
    name: "Royal Challengers Bangalore · Trending",
      topic: '#ViratKohli',
      tweets: '125K'
  },
  {
    name: "K L Rahul · Trending",
      topic: 'KL Rahul',
      tweets: '87K'
  },
  {
    name: "Trending in India",
    name: "K L Rahul · Trending",
      topic: '#dhruvrathee',
      tweets: '45K'
  },
  {
    name: "Sports · Trending",
      topic: '#RachinRavindra',
      tweets: '256K'
  },
  {
    name: "Trending in India",
    topic: '#SanamTeriKasam',
    tweets: '256K'
}
];





document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    loadTweets();
    loadTrending();
    setupEventListeners();
});

// Load tweets from local storage or use mock data
function loadTweets() {
    const storedTweets = JSON.parse(localStorage.getItem('tweets')) || mockTweets;
    const tweetFeed = document.querySelector('.tweet-feed');
    tweetFeed.innerHTML = '';
    
    storedTweets.forEach(tweet => {
        const user = mockUsers.find(u => u.id === tweet.userId);
        tweetFeed.insertAdjacentHTML('beforeend', createTweetHTML(tweet, user));
    });

    // Add event listeners to like buttons after loading tweets
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const tweetCard = e.target.closest('.tweet-card');
            const tweetId = parseInt(tweetCard.dataset.tweetId);
            toggleLike(tweetId);
        });
    });
}

// Create HTML for a single tweet
function createTweetHTML(tweet, user) {
    return `
        <div class="tweet-card" data-tweet-id="${tweet.id}">
            <div class="tweet-header">
                <img src="${user.avatar}" alt="${user.name}" class="avatar">
                <div>
                    <span class="name">${user.name}</span>
                    <span class="username">${user.username}</span>
                    <span class="time">· ${tweet.timestamp}</span>
                </div>
            </div>
            <div class="tweet-content">
                <p>${tweet.content}</p>
                ${tweet.image ? `<img src="${tweet.image}" alt="Tweet image" class="tweet-image">` : ''}
            </div>
            <div class="tweet-actions-bar">
                <button class="action-button comment-btn">
                    <i class="far fa-comment"></i>
                    <span>${tweet.comments || 0}</span>
                </button>
                <button class="action-button retweet-btn">
                    <i class="fas fa-retweet"></i>
                    <span>${tweet.retweets || 0}</span>
                </button>
                <button class="action-button like-btn ${tweet.liked ? 'liked' : ''}">
                    <i class="${tweet.liked ? 'fas' : 'far'} fa-heart"></i> <!-- Solid heart when liked, regular heart when unliked -->
                    <span>${tweet.likes || 0}</span>
                </button>
                <button class="action-button share-btn">
                    <i class="far fa-share-square"></i>
                </button>
            </div>
        </div>
    `;
}

// Load trending topics
function loadTrending() {
    const trendingTopics = document.querySelector('.trending-topics');
    trendingTopics.innerHTML = mockTrending.map(topic => `
        <div class="trending-topic">
            <div class="tweet-name">${topic.name}</div>
            <div class="topic-name">${topic.topic}</div>
            <div class="tweet-count">${topic.tweets} Tweets</div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    const tweetSubmit = document.querySelector('.tweet-button');
    const tweetTextarea = document.querySelector('.tweet-composer textarea');

    // Tweet submission
    tweetSubmit.addEventListener('click', () => {
        const content = tweetTextarea.value.trim();
        if (content) {
            const newTweet = {
                id: Date.now(),
                userId: 1, // Current user
                content: content,
                likes: 0,
                retweets: 0,
                comments: 0,
                timestamp: 'now',
                liked: false // Initialize liked state
            };

            const storedTweets = JSON.parse(localStorage.getItem('tweets')) || mockTweets;
            storedTweets.unshift(newTweet);
            localStorage.setItem('tweets', JSON.stringify(storedTweets));
            
            tweetTextarea.value = '';
            loadTweets();
        }
    });
}

// Toggle like on a tweet
function toggleLike(tweetId) {
    const storedTweets = JSON.parse(localStorage.getItem('tweets')) || mockTweets;
    const tweet = storedTweets.find(t => t.id === tweetId);
    if (tweet) {
        // Toggle the liked state
        tweet.liked = !tweet.liked;

        // Update the like count
        if (tweet.liked) {
            tweet.likes = (tweet.likes || 0) + 1; // Increment likes if liked
        } else {
            tweet.likes = (tweet.likes || 0) - 1; // Decrement likes if unliked
        }

        // Save updated tweets to localStorage
        localStorage.setItem('tweets', JSON.stringify(storedTweets));

        // Reload tweets to reflect changes in the UI
        loadTweets();
    }
}

// Toggle retweet on a tweet
function toggleRetweet(tweetId) {
    const storedTweets = JSON.parse(localStorage.getItem('tweets')) || mockTweets;
    const tweet = storedTweets.find(t => t.id === tweetId);
    if (tweet) {
        tweet.retweets = tweet.retweets ? tweet.retweets - 1 : 1;
        localStorage.setItem('tweets', JSON.stringify(storedTweets));
        loadTweets();
    }
}







