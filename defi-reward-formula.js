const logo = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█ ▄▄█▄ ▄█ ▄ █ ▄▀█ ▄▄█▀███▀
█ ██ █ ▄▄██ ███▀▄█ █ █ ▄▄██ ▀ █
█▄██▄█▄▄▄██▄██ ▀▀█▄▄██▄▄▄███▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

`
/*
DEFI STAKING CALCULATOR

Three Staking Pool Scenario

poolTotalStaked -- > The total amount of LP tokens staked in the pool
poolUserStake  -- > The amount of LP tokens the user has staked in the pool
poolAllocation -- > The percentage in basis points allocated to each pool of 
                     tokens mined after each block and provided as staking 
                     rewards to stakers.
*/

//DeFI Pool 1 ETH/N2DR Values
const pool1TotalStaked = 250000
const pool1UserStake = 1250
const pool1Allocation = 5000

//DeFI Pool 2 MATIC/N2DR Values
const pool2TotalStaked = 250000
const pool2UserStake = 850
const pool2Allocation = 2500

//DeFI Pool 3 BNB/N2DR Values
const pool3TotalStaked = 10000000
const pool3UserStake = 5400
const pool3Allocation = 2500

//DeFI GLOBAL VALUES
const startblock = 17300 //Start block to mine coins.
const endblock = 103700 //End block to mine coins.
const minedCoinsPerBlock = 3; //Amount of coins to mine (mint) per block. 
const totalAllocation = pool1Allocation + pool2Allocation + pool3Allocation; //The total allocation sum for all pools.



async function getReward() {
    /* multiplier will determine how long the staking is calculated for in seconds. 
    if you want to calculate daily rewards, make sure 86400 seconds is the value of "multiplier".
    */
    let multiplier = endblock - startblock 

    //POOL1 REWARD MATH
    let Pool1Reward = multiplier * minedCoinsPerBlock * pool1Allocation / totalAllocation;
    let Pool1accTokenPerShare = Pool1Reward * 1e12 / pool1TotalStaked;
    let Pool1Final = pool1UserStake * Pool1accTokenPerShare / 1e12 

    //POOL2 REWARD MATH
    let Pool2Reward = multiplier * minedCoinsPerBlock * pool2Allocation / totalAllocation;
    let Pool2accTokenPerShare = Pool2Reward * 1e12 / pool2TotalStaked;
    let Pool2Final = pool2UserStake * Pool2accTokenPerShare / 1e12 

    //POOL3 REWARD MATH
    let Pool3Reward = multiplier * minedCoinsPerBlock * pool3Allocation / totalAllocation;
    let Pool3accTokenPerShare = Pool3Reward * 1e12 / pool3TotalStaked;
    let Pool3Final = pool3UserStake * Pool3accTokenPerShare / 1e12 

    console.log(logo)
    console.log(' ')
    console.log('DEFI Staking Rewards')
    console.log(' ')
    console.log('User has staked for 24 hours.')
    console.log(' ')
    console.log('User Staked: ' + pool1UserStake + ' ETH' ) 
    console.log("Pool 1 Rewards: " + Pool1Final  + " N2DR");
    console.log(' ')
    console.log('User Staked: ' + pool2UserStake + ' MATIC' ) 
    console.log("Pool 2 Rewards: " + Pool2Final  + " N2DR");
    console.log(' ')
    console.log('User Staked: ' + pool3UserStake + ' BNB' ) 
    console.log("Pool 3 Rewards: " + Pool3Final  + " N2DR");
    console.log(' ')
    console.log(' ')
}

getReward()