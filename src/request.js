export default () => fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
    .then((response) => response.json())