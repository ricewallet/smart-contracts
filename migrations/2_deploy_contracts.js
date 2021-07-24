var RICEToken = artifacts.require("RICEToken")

module.exports = async (deployer) => {
    await deployer.deploy(RICEToken)
    const token = await RICEToken.deployed()
}
