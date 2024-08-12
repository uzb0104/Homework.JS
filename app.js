const game = {
  weapons: [
    { name: "Knife", power: 20 },
    { name: "Sword", power: 50 },
    { name: "Stick", power: 15 },
    { name: "Axe", power: 30 },
    { name: "Spoon", power: 3 },
    { name: "Pistol", power: 100 },
    { name: "Grenade", power: 85 },
    { name: "Sniper", power: 95 },
    { name: "AK-74", power: 100 },
    { name: "Arm or fist", power: 15 },
  ],

  playRound: function (userChoice) {
    const computerChoice = Math.floor(Math.random() * 10);
    const userWeapon = this.weapons[userChoice];
    const computerWeapon = this.weapons[computerChoice];

    let result = `User choise weapon: ${userWeapon.name} (${userWeapon.power} power), Computer choise weapon: ${computerWeapon.name} (${computerWeapon.power} power). `;

    if (userWeapon.power > computerWeapon.power) {
      result += "User Winner:)";
    } else if (userWeapon.power < computerWeapon.power) {
      result += "Computer Win:)";
    } else {
      result += "Equal (:";
    }

    return result;
  },
};

function playGame() {
  const userChoice = parseInt(document.getElementById("userWeapon").value);
  const result = game.playRound(userChoice);
  document.getElementById("result").innerText = result;
}
