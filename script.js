document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Set dark mode as default if no preference exists
    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode'); // Ensure light mode class is added
        themeToggle.checked = true;
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode'); // Ensure light mode class is removed
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode'); // Ensure light mode class is added
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode'); // Ensure light mode class is removed
            localStorage.setItem('theme', 'dark');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const spinner = document.querySelector('.loading-spinner');
    spinner.style.display = 'inline-block';
    
    // Your existing form validation
    let isValid = true;
    // ... validation code ...
    
    if (isValid) {
        const msgElement = document.getElementById("msg");
        const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL'; // Ensure this is the correct URL
        
        fetch(scriptURL, { method: 'POST', body: new FormData(this)})
            .then(response => {
                msgElement.textContent = "Message sent successfully!";
                msgElement.style.color = "#08fdd8";
                spinner.style.display = 'none';
                setTimeout(() => {
                    msgElement.textContent = "";
                }, 5000);
                this.reset();
            })
            .catch(error => {
                msgElement.textContent = "Error! Please try again.";
                msgElement.style.color = "#ff004f";
                spinner.style.display = 'none';
                console.error('Error!', error.message);
            });
    } else {
        spinner.style.display = 'none';
    }
});

function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    greetingElement.textContent = greetingText;
}


window.onload = setGreeting;
var skillLinks = document.getElementsByClassName("skillLinks");
        var skillcontents = document.getElementsByClassName("skillcontents");

        function opentab(tabname) {
            for(skillLink of skillLinks) {
                skillLink.classList.remove("activeLink");
            }
            for(skillcontent of skillcontents) {
                skillcontent.classList.remove("activeTab");
            }
            event.currentTarget.classList.add("activeLink");
            document.getElementById(tabname).classList.add("activeTab");

        }

        document.addEventListener("DOMContentLoaded", () => {
            const navLinks = document.querySelectorAll("nav ul li a");
            const sections = document.querySelectorAll("div[id]");
            
            navLinks[0].classList.add("active");
        
            function updateActiveSection() {
                let current = "";
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute("id");
                    }
                });
        
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    const href = link.getAttribute("href");
                    if (href === `#${current}` || (current === "" && href === "#home")) {
                        link.classList.add("active");
                    }
                });
            }
        
            updateActiveSection();
            window.addEventListener("scroll", updateActiveSection);
        });

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.grid-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const category = btn.dataset.category;
        gridItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
const blogPosts = [
    {
        id: 1,
        title: "BOOTSTRAP & RAZOR PAGES",
        excerpt: "Build and Deploy.",
        category: "webdev",
        date: "May 15, 2023",
        image: "pics/blog1.jpg",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "GPT'S & AI MODELS",
        excerpt: "Training Your Model",
        category: "tech",
        date: "June 2, 2023",
        image: "pics/blog2.jpg",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "FUTURE OF AI",
        excerpt: "Exploring web development technologies.",
        category: "webdev",
        date: "June 20, 2023",
        image: "pics/blog3.jpg",
        readTime: "6 min read"
    },
];

function renderBlogPosts(posts) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <div class="blog-post-content">
                <div class="post-meta">
                    <span>${post.category}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        container.appendChild(postElement);
    });
}


function filterBlogPosts() {
    const searchTerm = document.getElementById('blog-search').value.toLowerCase();
    const category = document.getElementById('blog-filter').value;
    
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm) || 
                            post.excerpt.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || post.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderBlogPosts(filteredPosts);
}

document.addEventListener('DOMContentLoaded', function() {
    
    renderBlogPosts(blogPosts);
    
    
    document.getElementById('blog-search').addEventListener('input', filterBlogPosts);
    document.getElementById('blog-filter').addEventListener('change', filterBlogPosts);
});

document.addEventListener("DOMContentLoaded", function() {
    const fields = [
        { id: "fullName", regexp: /^[A-Za-z\s]+$/, error: "Only letters and spaces allowed" },
        { id: "email", regexp: /^\S+@\S+\.\S+$/, error: "Enter a valid email address" },
        { id: "phone", regexp: /^\d{10,15}$/, error: "Phone must be 10-15 digits" },
        { id: "message", regexp: /^.{10,}$/, error: "Message must be at least 10 characters" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener("input", function() {
            validateField(field);
        });
    });

    function validateField(field) {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(field.id + "Error");
        const value = input.value.trim();

        if (!field.regexp.test(value)) {
            input.classList.add("error");
            errorElement.textContent = field.error;
            return false;
        } else {
            input.classList.remove("error");
            errorElement.textContent = "";
            return true;
        }
    }

   
  const API_BASE = 'https://vercel.com/singhgurshers-projects/user-form-app';

  // Submit form
  document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const responseEl = document.getElementById('response');
    responseEl.innerText = "Submitting...";
    responseEl.style.color = "black";

    try {
      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
      };

      const res = await fetch(`${API_BASE}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        responseEl.innerText = "Success!";
        responseEl.style.color = "green";
        document.getElementById('userForm').reset();
      } else {
        throw new Error(result.error || 'Failed to submit');
      }
    } catch (err) {
      responseEl.innerText = `Error: ${err.message}`;
      responseEl.style.color = "red";
    }
  });

  // Fetch users
  document.getElementById('fetchUsers').addEventListener('click', async () => {
    const listEl = document.getElementById('userList');
    listEl.innerHTML = "Loading...";

    try {
      const res = await fetch(`${API_BASE}/api/users`);
      const result = await res.json();

      if (res.ok) {
        listEl.innerHTML = '';
        result.data.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          listEl.appendChild(li);
        });
      } else {
        listEl.innerHTML = 'Failed to fetch users';
      }
    } catch (err) {
      console.error('Fetch error:', err);
      listEl.innerHTML = 'Error loading users';
    }
  });


});
