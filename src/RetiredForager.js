var RetiredForagerBee = function() {
  // call the ForagerBee superclass
  ForagerBee.call(this);
  // age property = 40
  this.age = 40;
  // job property = gamble
  this.job = 'gamble';
  // canFly property = false
  this.canFly = false;
  // color property = grey
  this.color = 'grey';

  // food property inherited from grub
  // eat method inherited from grub
  // treasureChest property inherited from foragerBee = []
};
// set the prototype
RetiredForagerBee.prototype = Object.create(Bee.prototype)
// set the constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// forage that method returns 'I am too old, let me play cards instead'
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};
// always winning gamble method that allows bee to add a treasure to treasureChest
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};
