const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Put automatically a focus on textarea as you load the page
textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  // When you press 'Enter' key, it clears texts in textarea
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    // Run func select texts randomly
    randomSelect()
  }
})

// Make a fun to split texts by ','
function createTags(input) {
  const tags = input.split(',')
    // See if there is a space
    .filter(tag => tag.trim() !== '')
    // Remove white space
    .map(tag => tag.trim())
  
  // Display the texts
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  // Drum roll for 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    // Highligh and unhighligh while picking the text
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

    // Highligh the selected text
      highlightTag(randomTag)
    }, 100)

  }, times * 100)
}

// Select text randomly
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

// Add a specipic element - highlight
function highlightTag(tag) {
  tag.classList.add('highlight')
}

// Remove a specipic element - highlight
function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
