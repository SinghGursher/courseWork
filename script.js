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

// Modal functionality
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');

function openProjectModal(projectId) {
    // Find the project in your array
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-live').href = project.liveUrl;
    document.getElementById('modal-code').href = project.codeUrl;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeModal.addEventListener('click', closeProjectModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Add this to your existing project card generation code
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = parseInt(e.target.dataset.id);
        openProjectModal(projectId);
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

document.addEventListener('DOMContentLoaded', function() {
    // Projects data array
    const projects = [
        {
            id: 1,
            title: "WEB DESIGN",
            category: "web",
            image: "pictures/web2.png",
            description: "A responsive web design project with modern UI elements and smooth animations.",
            liveUrl: "https://singhgursher.github.io/newForm",
            codeUrl: "https://github.com/singhgursher/newForm"
        },
        {
            id: 2,
            title: "IMAGE GRAPHICS",
            category: "data",
            image: "pictures/js.png",
            description: "Advanced image processing and graphics manipulation using JavaScript.",
            liveUrl: "https://singhgursher.github.io/4035-Tables",
            codeUrl: "https://github.com/your-repo"
        },
        {
            id: 3,
            title: "EPL DESIGN",
            category: "data",
            image: "pictures/css.png",
            description: "Data visualization project showcasing English Premier League statistics.",
            liveUrl: "https://singhgursher.github.io/epl",
            codeUrl: "https://github.com/singhgursher/epl"
        },
        {
            id: 4,
            title: "LIBRARY SYSTEM",
            category: "web",
            image: "pictures/java1.png",
            description: "Full-stack supermarket management system with inventory tracking.",
            liveUrl: "https://singhgursher.github.io/books",
            codeUrl: "https://github.com/your-repo"
        },
        {
            id: 5,
            title: "LOGIN PAGE",
            category: "other",
            image: "pictures/pyorg.png",
            description: "Interactive browser-based game with multiplayer functionality.",
            liveUrl: "https://singhgursher.github.io/js-regex-valiadtion_Singh_Gursher",
            codeUrl: "https://github.com/SinghGursher/js-regex-valiadtion_Singh_Gursher"
        },
        {
            id: 6,
            title: "ONLINE SERVER",
            category: "other",
            image: "pictures/php.png",
            description: "Cloud-based server solution with real-time data processing.",
            liveUrl: "https://user-form-app-flame.vercel.app/",
            codeUrl: "https://example.com"
        }
    ];

    // DOM Elements
    const gridContainer = document.querySelector('.grid-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');

    // Render all projects initially
    renderProjects(projects);

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const category = button.dataset.category;
            const filteredProjects = category === 'all' 
                ? projects 
                : projects.filter(project => project.category === category);
            
            renderProjects(filteredProjects);
        });
    });

    // Modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Render projects to the grid
    function renderProjects(projectsToRender) {
        gridContainer.innerHTML = '';
        
        projectsToRender.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'grid-item';
            projectElement.dataset.category = project.category;
            projectElement.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-info">
                    <a href="#" class="project-link" data-id="${project.id}">${project.title}</a>
                </div>
            `;
            gridContainer.appendChild(projectElement);
        });

        // Add click event to project links
        document.querySelectorAll('.project-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = parseInt(link.dataset.id);
                openProjectModal(projectId);
            });
        });
    }

    // Open modal with project details
    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-image').alt = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-live').href = project.liveUrl;
        document.getElementById('modal-code').href = project.codeUrl;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});