// description should be a String.
// price should be a Number.
var Dish = function(description, price) {
  this.description = description;
  this.price = price;
};

// meal should be an array of Dish objects.
var Diner = function(meal){
  this.meal = meal||[];
};

// dish should be a Dish object.
Diner.prototype.addDish = function(dish){
  this.meal.push(dish);
};

Diner.prototype.cost = function(){
  return this.meal.reduce(function(total, dish){ return total + dish.price; }, 0);
};

// diners should be an array of Diner objects.
// tax should be a Number between 0 and 1.
// tip should be a Number between 0 and 1.
var Table = function(diners, tax, tip){
  this.diners = diners||[];
  this.tax = tax;
};

// diner should be a Diner object.
Table.prototype.addDiner = function(diner){
  this.diners.push(diner);
};

Table.prototype.cost = function(){
  return this.diners
    .map(function(diner){ return diner.cost(); })
    .reduce(function(total, cost) { return total + cost; }, 0);
};

// diner should be a Diner object.
Table.prototype.bill = function(diner){
  // tip is equally shared
  var tip = this.cost() * this.tip / this.diners.length();
  return tip + diner.cost() * (1 + this.tax);
};

