function ps1() {
  this.name =  "artur";
  this.lifePoints = 100;
  this.preferredWeapon = "sword";
  this.eat = function () {
    this.lifePoints = this.lifePoints += 10;
    return this.name + " life points are " + this.lifePoints;
  };
  this.punch = function () {
    troll.lifePoints -= 5;
    lifePoints -= 10;
  };
  this.weaponAttack = function () {
    this.lifePoints -= 10;
    return this.lifePoint;
  };
}

function troll() {
  this.enemyName =  "Trolazo";
  this.lifePoints = 200;
  this.preferredWeapon = "axe";
  this.eatHero = function () {
    this.lifePoints = this.lifePoints +=10;
    return this.enemyName + " life points are " + this.lifePoints;
  };
  this.grunt = function () {
    lifePoints -= 10;
  };
  this.bite = function () {
    lifePoints -= 10;
  };
  this.weaponAttack = function () {
    lifePoints -= 10;
  };
}

var enemy =  new troll();

var ps1 = new ps1();

function combat() {
  console.log(enemy.eat());
}
console.log(combat());
