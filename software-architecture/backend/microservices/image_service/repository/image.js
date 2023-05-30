const imageMap = new Map();

const image1 = {
  name: 'javascript',
  url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJavaScript-logo.png&psig=AOvVaw3_oqIb7XbTvY3aBn5FQDtW&ust=1685543093323000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjzwr2fnf8CFQAAAAAdAAAAABAJ'
};

const image2 = {
  name: 'python',
  url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&psig=AOvVaw3hjU6PoLvrXLiCOG5B_MBv&ust=1685543117491000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCc0Mifnf8CFQAAAAAdAAAAABAE'
};

imageMap.set(image1.name, image1);
imageMap.set(image2.name, image2);

function getImageFromDatabase(name) {
  return imageMap.get(name)
}

module.exports = {
  getImageFromDatabase,
}
