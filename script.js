function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "🌅 Good Morning!";
    } else if (hour < 18) {
        greetingText = "🌇 Good Afternoon!";
    } else {
        greetingText = "🌃 Good Evening!";
    }

    greetingElement.textContent = greetingText;
}

// Call the function when the page loads
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

       // Replace your existing scrollspy code with this
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("div[id]");
    
    // Make first nav link active by default (Home)
    navLinks[0].classList.add("active");

    function updateActiveSection() {
        let current = "";
        const scrollPosition = window.scrollY + 100; // Adjust for navbar height
        
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
            if (href === `#${current}` || (current === "" && href === "#Home")) {
                link.classList.add("active");
            }
        });
    }

    // Run once on load
    updateActiveSection();
    
    // Then on scroll
    window.addEventListener("scroll", updateActiveSection);
});

// Update the JavaScript for dropdown version
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('project-filter');
    const gridItems = document.querySelectorAll('.grid-item');
    
    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        
        gridItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React",
        excerpt: "Learn the basics of React and how to build your first component.",
        category: "webdev",
        date: "May 15, 2023",
        image: "pics/blog1.jpg",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Machine Learning Fundamentals",
        excerpt: "An introduction to the core concepts of machine learning.",
        category: "tech",
        date: "June 2, 2023",
        image: "pics/blog2.jpg",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "The Future of Web Development",
        excerpt: "Exploring emerging trends in web development technologies.",
        category: "webdev",
        date: "June 20, 2023",
        image: "pics/blog3.jpg",
        readTime: "6 min read"
    },
    // Add more posts as needed
];

// Function to render blog posts
function renderBlogPosts(posts) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
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

// Filter and search functionality
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

// Initialize blog
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    renderBlogPosts(blogPosts);
    
    // Event listeners
    document.getElementById('blog-search').addEventListener('input', filterBlogPosts);
    document.getElementById('blog-filter').addEventListener('change', filterBlogPosts);
});

// To load from JSON file instead:
// fetch('blog-posts.json')
//     .then(response => response.json())
//     .then(data => {
//         blogPosts = data;
//         renderBlogPosts(blogPosts);
//     });
document.addEventListener("DOMContentLoaded", function() {
    // Validation Configuration
    const fields = [
        { id: "fullName", regexp: /^[A-Za-z\s]+$/, error: "Only letters and spaces allowed" },
        { id: "email", regexp: /^\S+@\S+\.\S+$/, error: "Enter a valid email address" },
        { id: "phone", regexp: /^\d{10,15}$/, error: "Phone must be 10-15 digits" },
        { id: "message", regexp: /^.{10,}$/, error: "Message must be at least 10 characters" }
    ];

    // Real-time Validation
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener("input", function() {
            validateField(field);
        });
    });

    // Validation Function
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

    // Form Submission
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let isValid = true;
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            const msgElement = document.getElementById("msg");
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxgxf-q1qCEujDmQ-LrXvchSLAoeLW3TVPUKwv8TXUhS1N7oXA7UcCnWTvqTuoszb8MIg/exec';
            const form = document.forms['submit-to-google-sheet']
            https://kit.fontawesome.com/0d8d7b063e
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msgElement.textContent = "Message sent successfully!";
                    msgElement.style.color = "#08fdd8";
                    setTimeout(() => {
                        msgElement.textContent = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => {
                    msgElement.textContent = "Error! Please try again.";
                    msgElement.style.color = "#ff004f";
                    console.error('Error!', error.message);
                });
        }
    });
});
