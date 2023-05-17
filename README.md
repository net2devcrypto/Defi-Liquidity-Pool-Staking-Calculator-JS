
# DeFI Liquidity Pool Staking Rewards Calculator
<a href="http://youtube.a3b.io" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/n2Dex-img.png" width="200" height="80"></a>

👑 A simple DeFI Staking Pool Calculator to help you understand the DeFI LP Staking Math. 

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

<h2>Download defi-reward-formula.js and update as you like!</h2>

<h4>Variables</h4>


poolTotalStaked -- > The total amount of LP tokens staked in the pool

poolUserStake  -- > The amount of LP tokens the user has staked in the pool

poolAllocation -- > The percentage in basis points allocated to each pool of 
                     tokens mined after each block and provided as staking 
                     rewards to stakers.
                     
Feel free to play with these values, save and run :)

//DeFI Pool 1 ETH/N2DR Values
```shell
const pool1TotalStaked = 250000
const pool1UserStake = 1250
const pool1Allocation = 5000
```
//DeFI Pool 2 MATIC/N2DR Values
```shell
const pool2TotalStaked = 250000
const pool2UserStake = 850
const pool2Allocation = 2500
```
//DeFI Pool 3 BNB/N2DR Values
```shell
const pool3TotalStaked = 10000000
const pool3UserStake = 5400
const pool3Allocation = 2500
```

if you want to calculate rewards in time, basically is substracting endblock minus start block or change the multiplier value in milliseconds
example 1 minute
```shell
let multiplier = 60000
```

don't forget to save everytime you make changes before running!! 

CTRL + S

```shell
node defi-reward-formula.js

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█ ▄▄█▄ ▄█ ▄ █ ▄▀█ ▄▄█▀███▀
█ ██ █ ▄▄██ ███▀▄█ █ █ ▄▄██ ▀ █
█▄██▄█▄▄▄██▄██ ▀▀█▄▄██▄▄▄███▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

DEFI Staking Rewards

User has staked for 24 hours.

User Staked: 1250 ETH
Pool 1 Rewards: 648 N2DR

User Staked: 850 MATIC
Pool 2 Rewards: 220.32 N2DR

User Staked: 5400 BNB
Pool 3 Rewards: 34.992 N2DR

```



