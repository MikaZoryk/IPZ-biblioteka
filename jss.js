// Database of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, url: "great_gatsby.html" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, url: "to_kill_mockingbird.html" },
    { title: "1984", author: "George Orwell", year: 1949, url: "1984.html" },
    // Add more books as needed
];

// Function to display all book titles
function displayAllTitles() {
    const bookTitlesDiv = document.getElementById('bookTitles');
    bookTitlesDiv.innerHTML = '';
    books.forEach(book => {
        const titleBtn = document.createElement('button1'); // Change div to button1
        titleBtn.textContent = book.title;
        // Set button1 styles
        titleBtn.style.backgroundColor = '#EAEAEA';
        titleBtn.style.color = 'rgba(0, 0, 0, 0.8)';
        titleBtn.style.border = 'none';
        titleBtn.style.cursor = 'pointer';
        titleBtn.style.width = '432px'; // Set width
        titleBtn.style.height = '40px'; // Set height
        titleBtn.style.marginTop = '10px'; // Add margin top
        // Add event listener to navigate to book page
        titleBtn.addEventListener('click', function() {
            navigateToBookPage(book.url);
        });
        bookTitlesDiv.appendChild(titleBtn);
    });
}

// Function to perform search
function searchBooks(query) {
    query = query.toLowerCase();
    const results = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    const bookTitlesDiv = document.getElementById('bookTitles');
    bookTitlesDiv.innerHTML = '';
    results.forEach(book => {
        const titleBtn = document.createElement('button1'); // Change div to button1
        titleBtn.textContent = book.title;
        // Set button1 styles
        titleBtn.style.backgroundColor = '#EAEAEA';
        titleBtn.style.color = 'rgba(0, 0, 0, 0.8)';
        titleBtn.style.border = 'none';
        titleBtn.style.cursor = 'pointer';
        titleBtn.style.width = '432px'; // Set width
        titleBtn.style.height = '40px'; // Set height
        titleBtn.style.marginTop = '10px'; // Add margin top
        // Add event listener to navigate to book page
        titleBtn.addEventListener('click', function() {
            navigateToBookPage(book.url);
        });
        bookTitlesDiv.appendChild(titleBtn);
    });
}

// Function to navigate to the book page
function navigateToBookPage(url) {
    window.location.href = url;
}

// Event listener for search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
    const inputText = this.value.trim();
    const bookTitlesDiv = document.getElementById('bookTitles');
    if (inputText === '') {
        bookTitlesDiv.style.display = 'none';
    } else {
        bookTitlesDiv.style.display = 'block';
        searchBooks(inputText);
    }
});

// Event listener for Enter key press
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputText = this.value.trim();
        if (inputText !== '') {
            const results = books.filter(book =>
                book.title.toLowerCase().includes(inputText.toLowerCase()) ||
                book.author.toLowerCase().includes(inputText.toLowerCase())
            );
            if (results.length > 0) {
                navigateToBookPage(results[0].url);
            }
        }
    }
});

// Display all titles initially
displayAllTitles();
