let initialState = {
    count: 7,
    data: [
        {
            day: "2019-07-01",
            impressions: 18,
            clicks: 4,
            money: 0.20903
        },
        {
            day: "2019-07-02",
            impressions: 16,
            clicks: 4,
            money: 0.19261999999999999
        },
        {
            day: "2019-07-03",
            impressions: 14,
            clicks: 3,
            money: 0.15514
        },
        {
            day: "2019-07-04",
            impressions: 19,
            clicks: 5,
            money: 0.2572
        },
        {
            day: "2019-07-05",
            impressions: 21,
            clicks: 7,
            money: 0.35465
        },
        {
            day: "2019-07-06",
            impressions: 21,
            clicks: 11,
            money: 0.6426700000000001
        },
        {
            day: "2019-07-07",
            impressions: 22,
            clicks: 3,
            money: 0.21050999999999997
        }
    ],
    total: {
        impressions: 131,
        clicks: 37,
        money: 2.02182
    }
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dataReducer;