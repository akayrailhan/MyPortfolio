function searchBooks() {
    const query = document.getElementById('query').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Searching...';
  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        resultsDiv.innerHTML = '';
        if (!data.items) {
          resultsDiv.innerHTML = 'No results found.';
          return;
        }
  
        data.items.forEach(item => {
          const volumeInfo = item.volumeInfo;
          const title = volumeInfo.title || 'No title';
          const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown author';
          const thumbnail = volumeInfo.imageLinks?.thumbnail || '';
  
          const bookDiv = document.createElement('div');
          bookDiv.className = 'book';
  
          if (thumbnail) {
            const img = document.createElement('img');
            img.src = thumbnail;
            img.alt = title;
            bookDiv.appendChild(img);
          }
  
          const titleEl = document.createElement('div');
          titleEl.className = 'book-title';
          titleEl.textContent = title;
          bookDiv.appendChild(titleEl);
  
          const authorEl = document.createElement('div');
          authorEl.className = 'book-authors';
          authorEl.textContent = authors;
          bookDiv.appendChild(authorEl);
  
          resultsDiv.appendChild(bookDiv);
        });
      })
      .catch(error => {
        resultsDiv.innerHTML = 'Error fetching data.';
        console.error(error);
      });
  }
  