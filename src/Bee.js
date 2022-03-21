var Bee = function() {
  // call the grub superclass
  Grub.call(this);
  // age property = 5
  // color property = yellow
  this.age = 5;
  this.color = 'yellow';
  // job property = keep on growing
  this.job = 'keep on growing';
  // food property inherited from grub
  // eat method inherited from grub
};
// set the prototype
Bee.prototype = Object.create(Grub.prototype);
// set the constructor
Bee.prototype.constructor = Bee;
