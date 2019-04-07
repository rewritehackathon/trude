/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class MyContract extends Contract {

    async instantiate(ctx) {
        console.info('instantiate');
    }

    async updateBalance(ctx, name, value) {
        if(checkBalance(name) > absValue(value)){
            shim.PutState(name, value)
            return "Transaction successful"
        }
        return "Cannot complete transaction, not enough money"
        
    }

    async checkBalance(ctx, arg1) {
        balance = shim.GetState(arg1);
        return balance
    }

}

module.exports = MyContract;
