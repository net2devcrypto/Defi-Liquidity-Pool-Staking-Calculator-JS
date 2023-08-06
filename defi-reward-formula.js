const logo = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█ ▄▄█▄ ▄█ ▄ █ ▄▀█ ▄▄█▀███▀
█ ██ █ ▄▄██ ███▀▄█ █ █ ▄▄██ ▀ █
█▄██▄█▄▄▄██▄██ ▀▀█▄▄██▄▄▄███▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`
/*
DEFI STAKING CALCULATOR

Three Staking Pools Scenario

poolTotalStaked -- > The total amount of LP tokens staked in the pool
poolUserStake  -- > The amount of LP tokens the user has staked in the pool
poolAllocation -- > The percentage in basis points allocated to each pool of 
                     tokens mined after each block and provided as staking 
                     rewards to stakers.

Change Values as You Like!
*/


//DeFI Pool 1 ETH/N2DR Values
const pool1TotalStaked = 32410034
const pool1UserStake = 41000
//DeFI Pool 2 MATIC/N2DR Values
const pool2TotalStaked = 250000000
const pool2UserStake = 8500
//DeFI Pool 3 BNB/N2DR Values
const pool3TotalStaked = 10000000
const pool3UserStake = 96321

const pool1Allocation = 30000 // 30% in basis points.
const pool2Allocation = 40000 // 40% in basis points.
const pool3Allocation = 10000 // 10% in basis points.
const pool4Allocation = 20000 // 20% in basis points.

//DeFI GLOBAL VALUES

const startblock = 17300 //Start block to mine coins.
const endblock = 60500 //End block to mine coins.
const minedCoinsPerBlock = 3; //Amount of coins to mine (mint) per block. 
const totalAllocation = pool1Allocation + pool2Allocation + pool3Allocation + pool4Allocation; //The total allocation sum for all pools.
const duration = 1 //In Days
const BONUS_MULTIPLIER = 1; // x amount to increment reward


async function getReward() {
    
    let multiplier = (endblock - startblock) * BONUS_MULTIPLIER

    //POOL1 REWARD MATH
    let Pool1Reward = multiplier * minedCoinsPerBlock * pool1Allocation / totalAllocation;
    let Pool1accTokenPerShare = Pool1Reward / pool1TotalStaked
    let Pool1Final = (pool1UserStake * Pool1accTokenPerShare).toFixed(2)
    let Pool1APR = ((Pool1Reward / pool1TotalStaked) * 100).toFixed(2)

    //POOL2 REWARD MATH
    let Pool2Reward = multiplier * minedCoinsPerBlock * pool2Allocation / totalAllocation;
    let Pool2accTokenPerShare = Pool2Reward / pool2TotalStaked
    let Pool2Final = (pool2UserStake * Pool2accTokenPerShare).toFixed(2)
    let Pool2APR = ((Pool2Reward / pool2TotalStaked) * 100).toFixed(2)

    //POOL3 REWARD MATH
    let Pool3Reward = multiplier * minedCoinsPerBlock * pool3Allocation / totalAllocation;
    let Pool3accTokenPerShare = Pool3Reward / pool3TotalStaked
    let Pool3Final = (pool3UserStake * Pool3accTokenPerShare).toFixed(2)
    let Pool3APR = ((Pool3Reward / pool3TotalStaked) * 100).toFixed(2)

    console.log(logo)
    console.log('DEFI Staking Rewards')
    console.log(' ')
    console.log('User Staking Rewards for ' + duration + ' Days')
    console.log(' ')
    console.log('User Staked: ' + pool1UserStake + ' ETH' ) 
    console.log("Pool 1 Rewards: " + Pool1Final  + " N2DR");
    console.log("APR " + Pool1APR + "%")
    console.log(' ')

    console.log('User Staked: ' + pool2UserStake + ' MATIC' ) 
    console.log("Pool 2 Rewards: " + Pool2Final  + " N2DR");
    console.log("APR " + Pool2APR + "%")
    console.log(' ')
    console.log('User Staked: ' + pool3UserStake + ' BNB' ) 
    console.log("Pool 3 Rewards: " + Pool3Final  + " N2DR");
    console.log("APR " + Pool3APR + "%")
    console.log(' ')
    console.log(' ')

}

getReward()
