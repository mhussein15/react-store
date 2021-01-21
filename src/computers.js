class Computer {
  constructor(name, price, imgURL) {
    this.id = Computer.incrementId();
    this.name = name;
    this.price = price;
    this.imgURL = imgURL;
  }
  
  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}

const computers = [
  new Computer("ABS Master Gaming PC ","6,633.19SR","https://c1.neweggimages.com/ProductImage/83-360-021-10.jpg"),
  new Computer("ROG Strix GL10DH ","3,537.39SR","https://c1.neweggimages.com/ProductImage/83-221-640-V01.jpg"),
  new Computer("Acer Predator Orion","6,059.34SR","https://c1.neweggimages.com/ProductImage/83-101-820-V16.jpg"),
];

export default computers;
