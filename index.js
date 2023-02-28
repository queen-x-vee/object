// question 1
function instagramPost(authorHandle, content, imageLink, numViews, numLikes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numViews = numViews;
  this.numLikes = numLikes;
}

//question 2
const myPost = new instagramPost('@valentina', 'have a great weekend everyone!', 'https://example.com/sunset.jpg', 1000, 50);

const post2 = new instagramPost('@buoro', 'hoping that the elections turn out well #anxiousstate #lovenotfight', 'https://example.com/marathon.jpg', 10000, 300);


//question 3
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    }
  }
  
  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    }
  }
  
  // Create an object representing Musa using the createPerson factory function
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
  // Create an object representing Musa's JAMB scores using the createJambScores factory function
  const musaJambScores = createJambScores(70, 85, 82, 94);
  
  // Add the JAMB scores object to Musa's object
  musa.jambScores = musaJambScores;
  
  console.log(musa);

// question 4

/*
The different ways you can clone a Javascript object includes the following
Use the spread operator.
Call the Object.assign() function.
Use JSON.parse() and JSON.stringify().
*/

const userData = { name: "valentina", age: 26 , occupation:"pharmacist"}

// 1
const copy1 = { ...userData }
// 2
const copy2 = Object.assign({}, userData)
// 3
const copy3 = JSON.parse(JSON.stringify(userData))


console.log (copy1)
console.log (copy2)
console.log (copy3)

// question 5
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

for (const partyName in presidentialCandidates) {
 console.log(`${presidentialCandidates[partyName]} is the presidential candidate of ${partyName}`);
}
