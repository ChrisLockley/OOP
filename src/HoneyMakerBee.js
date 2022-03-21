var HoneyMakerBee = function() {
  // call bee superclass
  Bee.call(this);
  // age property = 10
  this.age = 10;
  // job property = make honey
  this.job = 'make honey';
  // honeyPot property = 0
  this.honeyPot = 0;
  // color property inherited from bee
  // food property inherited from grub
  // eat method inherited from grub
};
// set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// makeHoney method that adds one to honeyPot
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};
// giveHoney that subtracts one from honeyPot
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
};