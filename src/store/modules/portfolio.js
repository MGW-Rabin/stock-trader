const state = {
    totalFunds: 10000,
    funds: 1000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record){
            record.quantity = parseInt(record.quantity) + parseInt(quantity);
        }
        else{
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId) 
        
        if(record.quantity > quantity) {
            record.quantity = parseInt(record.quantity) - parseInt(quantity);
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    },
    'SET_DAILY_FUND'(state,portfolio, amount) {
        portfolio.totalFunds -= amount;
        state.funds += amount;
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    },
    totalFunds (state) {
        return state.totalFunds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
