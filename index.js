const apiUrl = 'https://jsonplaceholder.typicode.com';

const postIdInput = document.getElementById('postId');
const getPostBtn = document.getElementById('getPostBtn');
const postContainer = document.getElementById('postContainer');

getPostBtn.addEventListener('click', () => {
  const postId = postIdInput.value;
  fetch(`${apiUrl}/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(post => {
      const postEl = document.createElement('div');
      postEl.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="getCommentsBtn">Get Comments</button>
        <div id="commentsContainer"></div>
      `;
      postContainer.innerHTML = '';
      postContainer.appendChild(postEl);
      const getCommentsBtn = postEl.querySelector('#getCommentsBtn');
      const commentsContainer = postEl.querySelector('#commentsContainer');
      getCommentsBtn.addEventListener('click', () => {
        fetch(`${apiUrl}/posts/${postId}/comments`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(comments => {
            const commentsEl = document.createElement('div');
            comments.forEach(comment => {
              commentsEl.innerHTML += `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
              `;
            });
            commentsContainer.innerHTML = '';
            commentsContainer.appendChild(commentsEl);
          })
          .catch(error => {
            console.error('Error fetching comments:', error);
            commentsContainer.innerHTML = '<p>Error fetching comments</p>';
          });
      });
    })
    .catch(error => {
      console.error('Error fetching post:', error);
      postContainer.innerHTML = '<p>Error fetching post</p>';
    });
});