// 3. game loop
var gameStart = () => {
  // 1.a. my ship
  var USSS = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack(opponent) {
      // hit
      if (Math.random() < this.accuracy) {
        opponent.hull -= this.firepower;
        if (opponent.hull > 0)
          prompt(
            "Direct hit! Damage target by " +
              this.firepower +
              ", But target is still functional! And it's firing at us right now! Brace for impact!" +
              "\r\n" +
              "U.S.S. Schwarzenegger" +
              "\r\n" +
              "  |  HULL: " +
              USSS.hull +
              "  |  FIREPOWER: " +
              USSS.firepower +
              "  |  ACCURACY: " +
              USSS.accuracy +
              "\r\n" +
              "Alien Ship" +
              "\r\n" +
              "  |  HULL: " +
              opponent.hull +
              "  |  FIREPOWER: " +
              opponent.firepower +
              "  |  ACCURACY: " +
              opponent.accuracy +
              "\r\n" +
              alienShipArr.length +
              " ships remain.",
            "Incoming!"
          );
        // hit and destroyed
        else if (opponent.hull <= 0) {
          prompt(
            "Target destroyed, here’s come another one!!" +
              "\r\n" +
              "U.S.S. Schwarzenegger" +
              "\r\n" +
              "  |  HULL: " +
              USSS.hull +
              "  |  FIREPOWER: " +
              USSS.firepower +
              "  |  ACCURACY: " +
              USSS.accuracy +
              "\r\n" +
              "Alien Ship" +
              "\r\n" +
              "  |  HULL: " +
              opponent.hull +
              "  |  FIREPOWER: " +
              opponent.firepower +
              "  |  ACCURACY: " +
              opponent.accuracy +
              "\r\n" +
              alienShipArr.length +
              " ships remain, fire at will!",
            "Fire!!"
          );
        }
      }
      // miss
      else {
        prompt(
          "Attack missed, hostile is firing back at us! Brace for impact!" +
            "\r\n" +
            "U.S.S. Schwarzenegger" +
            "\r\n" +
            "  |  HULL: " +
            USSS.hull +
            "  |  FIREPOWER: " +
            USSS.firepower +
            "  |  ACCURACY: " +
            USSS.accuracy +
            "\r\n" +
            "Alien Ship" +
            "\r\n" +
            "  |  HULL: " +
            opponent.hull +
            "  |  FIREPOWER: " +
            opponent.firepower +
            "  |  ACCURACY: " +
            opponent.accuracy +
            "\r\n" +
            alienShipArr.length +
            " ships remain",
          "Incoming!"
        );
      }
    },
  };
  // 1. b. Alienships in array
  var alienShipArr = [];
  for (var i = 0; i < 6; i++) {
    alienShipArr[i] = {
      hull: Math.floor(Math.random() * 4) + 3,
      firepower: Math.floor(Math.random() * 4) + 3,
      accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
      attack(opponent) {
        if (Math.random() < this.accuracy) {
          opponent.hull -= this.firepower;
          prompt(
            "You been Hit! hull damaged by " +
              this.firepower +
              "\r\n" +
              "U.S.S. Schwarzenegger" +
              "\r\n" +
              "  |  HULL: " +
              USSS.hull +
              "  |  FIREPOWER: " +
              USSS.firepower +
              "  |  ACCURACY: " +
              USSS.accuracy +
              "\r\n" +
              "Alien Ship" +
              "\r\n" +
              "  |  HULL: " +
              this.hull +
              "  |  FIREPOWER: " +
              this.firepower +
              "  |  ACCURACY: " +
              this.accuracy +
              "\r\n" +
              alienShipArr.length +
              " ships remain",
            "Fire Back!!"
          );
          if (opponent.hull <= 0) {
            prompt(
              "GAME OVER MAN" + "\r\n" + alienShipArr.length + " ships remain",
              "TRY AGAIN"
            );
            gameStart();
          }
        } else {
          prompt(
            "You dodged! No damage! Fire back!!!" +
              "\r\n" +
              alienShipArr.length +
              " ships remain"
          );
        }
      },
    };
  }
  let start = prompt(
    "Oh no, the big bad aliens are here and will destroy the earth!!!" +
      "\r\n" +
      "The future of the human race depends on you and your ship U.S.S. Schwarzenegger, please defeat the whole alien fleet on your own, or you can escape and watch the world burn, no pressure.",
    "Defend the earth and open fire!/ My life is more important than humanity, escape"
  );
  if (start == "Defend the earth and open fire!") {
    //   refresh ships
    while (alienShipArr.length !== 0) {
      if (USSS.hull > 0) {
        USSS.attack(alienShipArr[0]);
        if (alienShipArr[0].hull < 0) {
          alienShipArr.shift();
          if (alienShipArr.length == 0) {
            start = prompt(
              alienShipArr.length + " ships remain" + "\r\n" + "YOU WON",
              "TRY AGAIN"
            );
            gameStart();
          }
          continue;
        } else if (alienShipArr[0].hull > 0) {
          alienShipArr[0].attack(USSS);
          continue;
        }
      }
    }
  } else {
    promptAsk = prompt(
      "Earth is annihilated, everyone you’ve ever known is dead." +
        "\r\n" +
        "At least you can go to Mars or something.",
      "Oh, I forgot about the Oxygen...Guess I’ll dead.."
    );
  }
};
// 4.start the game
gameStart();
