import React from "react";

const Upgrade = (props, { upgrade, count, setCount, multiplier, setMultiplier }) => {
    const { name, cost, multiplier: upgradeMultiplier } = upgrade;
    const buyUpgrade = () => {
        if (count >= cost) {
        setMultiplier(multiplier * upgradeMultiplier);
        setCount(count - cost);
        }
    };
    return (
        <div className="upgrade">
        <h3>{name}</h3>
        <p>{upgradeMultiplier}x per click</p>
        <button onClick={buyUpgrade}>{cost} samosas</button>
        </div>
    );    
}

export default Upgrade;
