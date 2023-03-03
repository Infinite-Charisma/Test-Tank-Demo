#Tank Battle (Test Project)

This is tank battle project interacting with solidity smart contract deployed to Polygon Mumbai Testnet.
Players can mint their tank NFTs on the first page. Each tank has their own properties like attack, speed and shield.
Once they mint the tank NFT, the game is started. Before the battle, they have to bet some amount of ether for play. After the battle, reward ether will be sent to the winner and players will be able to play game again and again.

I used finding shortest path algorithm (dijkstra) for making 2 tanks meet each other. So Tanks will go along with the shortest path between them avoiding obstacles. Once they meet, the battle will be started and the winner is determined according to their properties.

To install all dependancies, run the following command
```shell
npm run install
```

To deploy project to localhost, run the follwing command
```shell
npm run start
```

Then, you can enjoy this game.
