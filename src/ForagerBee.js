var ForagerBee = function() {
  // call bee superclass
  Bee.call(this);
  // age property = 10
  this.age = 10;
  // job property = find pollen
  this.job = 'find pollen';
  // canFly property set to true
  this.canFly = true;
  // treasureChest property = []
  this.treasureChest = [];
  // color property inherited from bee
  // food property inherited from grub
  // eat method inherited from grub
};
// set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;
// forage method allows bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(string) {
  this.treasureChest.push(string);
};

