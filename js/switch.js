// CHANGE LAYOUT
let heroesBefore = document.getElementById('heroes-before')
let heroesAfter = document.getElementById('heroes-after')
let rightIcon = document.getElementById('right-icon')
let mainContainer = document.getElementById('main-container')
let description = document.getElementById('description')

let backgroundArray = [
  {
    
    url1: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/zsuzsa.jpg')",
    url2: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/zsuzsa.jpg')",
    text: "Forests still cover about 30 percent of the world’s land area, but they are disappearing at an alarming rate. Between 1990 and 2016, the world lost 502,000 square miles (1.3 million square kilometers) of forest. Since humans started cutting down forests, 46 percent of trees have been felled."
  },
  {
    url1: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/tomA.jpg')",
    url2: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/tomB.jpg')",
    text: "Budapest faces several social and environmental challenges. The city’s average temperature has risen by 1.5 °C since the 1970’s, and temperature models project a further rise of 4-6°C by 2100. This temperature increase, along with recently worsening air pollution and the heat island effect of urban areas, have already had serious impacts on the population."
  },
  {
    url1: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/eva.jpg')",
    url2: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/eva.jpg')",
    text: "There is so much about the modern city that is wrong. Insecurity and isolation have marred the quality of life; beauty and community are in retreat. When we look at how our cities have changed in the last 50 years, we cannot escape the conclusion that our physical surroundings must have had a part to play in this decline."
  },
  {
    url1: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/hajniA.jpg')",
    url2: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/hajniB.jpg')",
    text: "The melting of the glaciers, a phenomenon that intensified in the 20th century, is leaving our planet iceless. The sea level and global stability depend on how these great masses of recrystallized snow evolve. Pedersen Glacier in Southern Alaska retreated more than 1.2 miles between 1940 and 2005."
  },
  {
    url1: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/rikiA.jpg')",
    url2: "url('https://github.com/szszzsuzsa/awwwards/blob/main/img/rikiB.jpg')",
    text: "Among the most dramatic evidence that Earth's climate is warming is the dwindling and disappearance of mountain glaciers around the world. Based on scientific data, 2018 was the 30th year in a row of mass loss of mountain glaciers worldwide. Muir Glacier in southern Alaska (in the photo) retreated more than 30 miles between the 1890s and 2005."
  }
]



let currentIndex = 1

function changeLayout() {
  let curr = backgroundArray[currentIndex]
  if (currentIndex < backgroundArray.length-1) {
    mainContainer.classList.remove('fade')
    setTimeout(function(){
      heroesBefore.style.backgroundImage = curr.url1
      heroesAfter.style.backgroundImage = curr.url2
      description.textContent = curr.text
      mainContainer.classList.add('fade')
    }, 500);
    currentIndex++
  } else {
    currentIndex = 0
    heroesBefore.style.backgroundImage = curr.url1
    heroesAfter.style.backgroundImage = curr.url2
    description.textContent = curr.text
    mainContainer.classList.remove('fade')
    setTimeout(function(){
      mainContainer.classList.add('fade')
    }, 500);
  }
  console.log(currentIndex);
 
}

rightIcon.addEventListener('click', changeLayout)