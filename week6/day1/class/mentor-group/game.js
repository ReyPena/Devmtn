function mainChracter() {
  this.name =  "artur";
  this.lifePoints = 100;
  this.preferredWeapon = "sword";
  this.eat = function () {
    lifePoints += 10;
  };
  this.punch = function () {
    lifePoints -= 10;
  };
  this.weaponAttack = function () {
    lifePoints -= 10;
    return this.name + " got " this.lifePoints;
  };
};

mainChracter.prototype.eat = function () {
  // body...
};

function troll() {
  this.battleName =  "Trolazo";
  this.lifePoints = 200;
  this.preferredWeapon = "axe";
  this.eatHero = function () {
    lifePoints += 10;
  };
  this.grunt=;
  this.bite = function () {
    lifePoints -= 10;
  };
  this.weaponAttack = function () {
    lifePoints -= 10;
  };
};

var enemy =  new troll();
