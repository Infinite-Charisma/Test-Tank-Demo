import tankMintABI from './artifacts/tankMintABI';

// Function to mint a TankNFT
export async function mint( _tokenUri ) {
    setMintedFlg(true);
    console.log( _tokenUri )

    try {
        setMintedFlg(true);
        const tx = await tankMintContractWithSigner.mintTankNFT(tokenUri);
        await tx.wait();
        console.log('TankNFT minted!');

        setTimeout(() => {
            location.href = (
                pName
                    ? props.player === 1 ? "/minting/2" : "/start"
                    : null
            )
        }, 5000);
    } catch (error) {
        console.log(error);
    }
}

// Function to bet contract
export async function bettingEther( _amount ) {
    try {
        const tx = await tankMintContractWithSigner.bettingEther( _amount );
        await tx.wait();
        console.log('Betting Success!');
    } catch (error) {
        console.log(error);
    }
}

// Function to send reward to the winner
export async function toWinner( _winnerAddress, _rewardAmount) {
    try {
        const tx = await tankMintContractWithSigner.sendRewardToWinner( _winnerAddress, _rewardAmount );
        await tx.wait();
        console.log('Reward sent to the winner!');
    } catch (error) {
        console.log(error);
    }
}