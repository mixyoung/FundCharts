import FundCharts from '~'	// '~'为dist目录下index.js
import 'css/index.less'

const KlineChart = FundCharts.kline;

// chart 1
const chart1 = new KlineChart({
    id: 'kline1',
    xaxis: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'],
    datas: [
        [1, 2, 0.5, 2.1],
        [3, 4, 2, 4],
        [3, 5.5, 3, 6],
        [4.4, 3.5, 3, 5],
        [5, 6, 4, 7],
        [7, 3, 3, 7]
    ]
});
chart1.init();

setTimeout(() => {
    chart1.update({
        datas: [
            [3, 2, 1, 2.1],
            [4, 5, 2, 5.1],
            [3, 6, 3, 6],
            [4, 3.5, 3, 4],
            [5, 2, 2, 6],
            [7, 9, 6, 10]
        ]
    })
}, 2000);


// chart 1
const chart2 = new KlineChart({
    id: 'kline2',
    xaxis: [
        '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8',
        '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8',
        '3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8',
        '4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'
    ],
    backgroundColor: '#000',        // 背景色
    font: {
        color: '#eee'           // 文字颜色
    },
    colors: ['#ce0f0f', '', '', '', '#6ca584'],     // 涨/跌颜色
    datas: [
        [2320.26, 2320.26, 2287.3, 2362.94],
        [2300, 2291.3, 2288.26, 2308.38],
        [2295.35, 2346.5, 2295.35, 2346.92],
        [2347.22, 2358.98, 2337.35, 2363.8],
        [2360.75, 2382.48, 2347.89, 2383.76],
        [2383.43, 2385.42, 2371.23, 2391.82],
        [2377.41, 2419.02, 2369.57, 2421.15],
        [2425.92, 2428.15, 2417.58, 2440.38],
        [2411, 2433.13, 2403.3, 2437.42],
        [2432.68, 2434.48, 2427.7, 2441.73],
        [2430.69, 2418.53, 2394.22, 2433.89],
        [2416.62, 2432.4, 2414.4, 2443.03],
        [2441.91, 2421.56, 2415.43, 2444.8],
        [2420.26, 2382.91, 2373.53, 2427.07],
        [2383.49, 2397.18, 2370.61, 2397.94],
        [2378.82, 2325.95, 2309.17, 2378.82],
        [2322.94, 2314.16, 2308.76, 2330.88],
        [2320.62, 2325.82, 2315.01, 2338.78],
        [2313.74, 2293.34, 2289.89, 2340.71],
        [2297.77, 2313.22, 2292.03, 2324.63],
        [2322.32, 2365.59, 2308.92, 2366.16],
        [2364.54, 2359.51, 2330.86, 2369.65],
        [2332.08, 2273.4, 2259.25, 2333.54],
        [2274.81, 2326.31, 2270.1, 2328.14],
        [2333.61, 2347.18, 2321.6, 2351.44],
        [2340.44, 2324.29, 2304.27, 2352.02],
        [2326.42, 2318.61, 2314.59, 2333.67],
        [2314.68, 2310.59, 2296.58, 2320.96],
        [2309.16, 2286.6, 2264.83, 2333.29],
        [2282.17, 2263.97, 2253.25, 2286.33],
        [2255.77, 2270.28, 2253.31, 2276.22],
        [2269.31, 2278.4, 2250, 2312.08],
        [2267.29, 2240.02, 2239.21, 2276.05],
        [2244.26, 2257.43, 2232.02, 2261.31],
        [2257.74, 2317.37, 2257.42, 2317.86],
        [2318.21, 2324.24, 2311.6, 2330.81],
        [2321.4, 2328.28, 2314.97, 2332],
        [2334.74, 2326.72, 2319.91, 2344.89],
        [2318.58, 2297.67, 2281.12, 2319.99],
        [2299.38, 2301.26, 2289, 2323.48],
        [2273.55, 2236.3, 2232.91, 2273.55],
        [2238.49, 2236.62, 2228.81, 2246.87],
        [2229.46, 2234.4, 2227.31, 2243.95],
        [2234.9, 2227.74, 2220.44, 2253.42],
        [2232.69, 2225.29, 2217.25, 2241.34],
        [2196.24, 2211.59, 2180.67, 2212.59],
        [2215.47, 2225.77, 2215.47, 2234.73],
        [2224.93, 2226.13, 2212.56, 2233.04],
        [2236.98, 2219.55, 2217.26, 2242.48],
        [2218.09, 2206.78, 2204.44, 2226.26],
        [2199.91, 2181.94, 2177.39, 2204.99],
        [2169.63, 2194.85, 2165.78, 2196.43],
        [2195.03, 2193.8, 2178.47, 2197.51],
        [2181.82, 2197.6, 2175.44, 2206.03],
        [2201.12, 2244.64, 2200.58, 2250.11],
        [2236.4, 2242.17, 2232.26, 2245.12],
        [2242.62, 2184.54, 2182.81, 2242.62],
        [2187.35, 2218.32, 2184.11, 2226.12],
        [2213.19, 2199.31, 2191.85, 2224.63],
        [2203.89, 2177.91, 2173.86, 2210.58],
        [2170.78, 2174.12, 2161.14, 2179.65],
        [2179.05, 2205.5, 2179.05, 2222.81],
        [2212.5, 2231.17, 2212.5, 2236.07],
        [2227.86, 2235.57, 2219.44, 2240.26],
        [2242.39, 2246.3, 2235.42, 2255.21],
        [2246.96, 2232.97, 2221.38, 2247.86],
        [2228.82, 2246.83, 2225.81, 2247.67],
        [2247.68, 2241.92, 2231.36, 2250.85],
        [2238.9, 2217.01, 2205.87, 2239.93],
        [2217.09, 2224.8, 2213.58, 2225.19],
        [2221.34, 2251.81, 2210.77, 2252.87]
    ]
});
chart2.init();