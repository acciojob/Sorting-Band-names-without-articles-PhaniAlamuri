//your code here
    let bandNames = ['The Rolling Stones', 'The Beatles', 'Pink Floyd', 'Led Zeppelin', 'Radiohead', 'Aerosmith'];

    // Function to sort the band names in lexicographic order, excluding articles
    function sortBandNames(names) {
      const articles = ['the', 'a', 'an'];
      return names.sort((a, b) => {
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();

        // Function to remove the articles from the band names
        function removeArticles(name) {
          for (const article of articles) {
            if (name.startsWith(article + ' ')) {
              return name.slice(article.length + 1);
            }
          }
          return name;
        }

        const trimmedA = removeArticles(nameA);
        const trimmedB = removeArticles(nameB);

        return trimmedA.localeCompare(trimmedB);
      });
    }

    // Get the sorted band names
    const sortedBandNames = sortBandNames(bandNames);

    // Display the sorted band names in the <ul> with <li> tags
    const bandList = document.getElementById('band');
    sortedBandNames.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      bandList.appendChild(li);
    });
