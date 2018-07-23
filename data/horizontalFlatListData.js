var horizontalStatus = {
    sunny: {
        ios: 'ios-sunny',
        android: 'md-sunny'
    },
    cloudy: {
        ios: 'ios-cloudy',
        android: 'md-cloudy'
    },
    rainy: {
        ios: 'ios-rainy',
        android: 'md-rainy'
    },
    thunderstorm: {
        ios: 'ios-thunderstorm',
        android: 'md-thunderstorm'
    }
}
var horizontalFlatListData = [
    {
        hour: '1 AM',
        status: horizontalStatus.sunny,
        degrees: 10
    },
    {
        hour: '2 AM',
        status: horizontalStatus.thunderstorm,
        degrees: 71
    },
    {
        hour: '3 AM',
        status: horizontalStatus.rainy,
        degrees: 31
    },
    {
        hour: '4 AM',
        status: horizontalStatus.cloudy,
        degrees: 11
    },
    {
        hour: '5 AM',
        status: horizontalStatus.sunny,
        degrees: 20
    },
    {
        hour: '6 AM',
        status: horizontalStatus.thunderstorm,
        degrees: 81
    },
    {
        hour: '7 AM',
        status: horizontalStatus.rainy,
        degrees: 31
    },
    {
        hour: '8 AM',
        status: horizontalStatus.cloudy,
        degrees: 5
    },
    {
        hour: '9 AM',
        status: horizontalStatus.sunny,
        degrees: 20
    },
    {
        hour: '10 AM',
        status: horizontalStatus.thunderstorm,
        degrees: 100
    },
    {
        hour: '11 AM',
        status: horizontalStatus.rainy,
        degrees: 51
    },
]

export { horizontalStatus };
export { horizontalFlatListData};