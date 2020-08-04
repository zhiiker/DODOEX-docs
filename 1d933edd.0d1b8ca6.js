(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=(a(0),a(142));const i={id:"backtest",title:"Backtest Report",sidebar_label:"Backtest"},o={id:"backtest",isDocsHomePage:!1,title:"Backtest Report",description:"Background",source:"@site/docs/backtest.md",permalink:"/docs/docs/backtest",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/backtest.md",sidebar_label:"Backtest",sidebar:"someSidebar",previous:{title:"Initial DODOEX Offering",permalink:"/docs/docs/initialDODOEXOffering"},next:{title:"Authority",permalink:"/docs/docs/authority"}},s=[{value:"Background",id:"background",children:[]},{value:"Method",id:"method",children:[]},{value:"Backtest",id:"backtest",children:[{value:"Profit evaluation",id:"profit-evaluation",children:[]},{value:"Loss evaluation",id:"loss-evaluation",children:[]}]},{value:"Conclusion",id:"conclusion",children:[{value:"Advantage &amp; Disadvantage",id:"advantage--disadvantage",children:[]},{value:"FAQ about backtest",id:"faq-about-backtest",children:[]}]}],l={rightToc:s};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"PMM stands for Proactive Market Maker, which is essentially a quantitative trading strategy used by liquidity providers (LP). To help LP understand ROI of PMM, we\u2019ve performed a backtest to demonstrate the performance of PMM in different market environments."),Object(r.b)("h2",{id:"method"},"Method"),Object(r.b)("p",null,"Evaluation of PMM focuses on these two aspects: pro\ufb01t and loss."),Object(r.b)("p",null,"The pro\ufb01t for LP is turnover rate multiplied by fee rate."),Object(r.b)("p",null,"While the loss has to be explained in two perspectives, counterparty risk and arbitrage trading."),Object(r.b)("p",null,"Counterparty risk can be ignored in this case, because PMM has built a mechanism to limit this risk. In addition, the risk comes from trades by normal users, which are almost random and are statistically balanced against."),Object(r.b)("p",null,"Arbitrage trading is inevitable and contributes most of the loss, as onchain oracle price is always delayed from market."),Object(r.b)("p",null,"Hence, in the following backtesting, we focus on these two key values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Turnover rate (profit wise)"),Object(r.b)("li",{parentName:"ul"},"Arbitrage loss (loss wise)")),Object(r.b)("h2",{id:"backtest"},"Backtest"),Object(r.b)("h3",{id:"profit-evaluation"},"Profit evaluation"),Object(r.b)("p",null,"Assumptions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Our pool size is 1/10 of uniswap's pool size"),Object(r.b)("li",{parentName:"ul"},"Base Token and Quote Token have the same value"),Object(r.b)("li",{parentName:"ul"},"PMM parameter k=0.1"),Object(r.b)("li",{parentName:"ul"},"Fee rate 0.3%")),Object(r.b)("p",null,"Those assumptions are not set arbitrarily. Under this condition, PMM could provide the same liquidity as Uniswap, and hence it's reasonable to assume PMM has the same trading volume as Uniswap. However, because of aggregators, it's more realistic to assume PMM has half of the trading volume of Uniswap. According to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"}),"history data"),", PMM daily turnover rate is about 100% and ROI is 0.3%."),Object(r.b)("h3",{id:"loss-evaluation"},"Loss evaluation"),Object(r.b)("p",null,"It's more complex to evaluate arbitrage loss, as no PMM-like algorithm has been deployed before. The best alternative is backtest with the most stringent standards. below is the assumptions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Onchain oracle price is always delayed from market price"),Object(r.b)("li",{parentName:"ul"},"Oracle price updates whenever deviates from market price by more than 0.5% (chainlink threshold)"),Object(r.b)("li",{parentName:"ul"},"Arbitrageurs always have enough funding and never miss a trade"),Object(r.b)("li",{parentName:"ul"},"The external cost of arbitrageurs is 0.2% (including CEX fees and gas cost)")),Object(r.b)("p",null,"We backtested using BTC price from Apr-2018 to Apr-2020 with 1 minute interval. Aggregate profit and loss, we got the following conclusions."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_backtest.png",alt:null}))),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The backtesting has covered most cases of the market environment, both the bull and bear market, even including the black swan event on 12th March. We concluded that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In most market environments, the fee income is sufficient to cover arbitrage losses and provides a very high rate of return (~80% APR)"),Object(r.b)("li",{parentName:"ul"},"When the market changes volatilely, despite of rises or falls, LP will lose a significant amount of money")),Object(r.b)("p",null,"In brief, PMM makes pro\ufb01ts when the market is flat, while makes losses when volatile."),Object(r.b)("h3",{id:"advantage--disadvantage"},"Advantage & Disadvantage"),Object(r.b)("p",null,"Most quant strategies make pro\ufb01ts only when market price goes up or down, and there is nothing to do when the market is flat. In contrast, PMM can make considerable pro\ufb01ts when the price is nearly flat. Furthermore, unlike AMM, PMM never requires LP to deposit base and quote assets at a certain ratio. Instead, LP could deposit any amount of any asset as they want. As a result, PMM can be a supplement to the original strategies when the market is not volatile."),Object(r.b)("p",null,"Nevertheless, we have to point out its disadvantages. As the old saying goes, there is no free lunch. When the market is volatile, LP suffers from significant loss. LP should make a balance between risks and bene\ufb01ts. So we recommend traders withdraw their assets when they predict the market to be volatile. As a decentralized project, what we can do is very limited. But we would de\ufb01nitely try our best to adjust system parameters to help LP, especially when black swan event happens."),Object(r.b)("p",null,"In addition, one of the inherent drawbacks of backtesting is it cannot simulate 100% of the real trading. But to mitigate this risk, we have performed the backtesting with the most conservative assumptions. Still, LP should determine to what extent they trust the backtesting result."),Object(r.b)("h3",{id:"faq-about-backtest"},"FAQ about backtest"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Where does the turnover rate data come from?"),Object(r.b)("p",{parentName:"li"},"We have counted the historical data of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"}),"Uniswap")," in the past month. Because the capital utilization rate of PMM algorithm is very high, the capital utilization rate can reach ten times that of Uniswap. So the actual turnover rate is also much higher than Uniswap.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Why do you use BTC price for backtesting?"),Object(r.b)("p",{parentName:"li"},"Because we did not find ETH price data of high-precision. We would be very grateful if someone could provide ETH price historical data with 1min interval or more frequent. But it is reasonable to use BTC price to estimate loss, because ETH and BTC prices are highly correlated.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"How does the arbitrage work?"),Object(r.b)("p",{parentName:"li"},"The arbitrage is carried out when arbitrageurs notice that the price provided by the PMM is more beneficial to them than the market price, i.e. the difference between the PMM and the market price is less than its comprehensive arbitrage cost (PMM Fee + Arbitrage Cost)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Given that Chainlink's BTC Oracle accuracy rate is 1%, why is it set to 0.5% here?"),Object(r.b)("p",{parentName:"li"},"First of all, Chainlink will increase the accuracy rate of BTC Oracle to 0.5% soon. Secondly, PMM will focus on ETH trading pair for now. And the accuracy rate of Chainlink\u2019s ETH Oracle is 0.5%.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Does the size of the funding pool have an impact on the backtest?"),Object(r.b)("p",{parentName:"li"},"Yes, it does. ROI will not be so good if the pool size is too small. We need enough liquidity to compete with other liquidity sources. Actually, the 1/10 of Uniswap pool size required for backtesting is able to produce competitive liquidity, which equals only ","$","900,000.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"How about the gas cost"),Object(r.b)("p",{parentName:"li"},"Swap between two standard ERC20 token cost 145,000 ~ 175,000 gas. The gas cost is slightly higher than uniswap(~100,000 gas), but significantly lower than other protocols. For example, kyber costs ~400,000gas; balancer costs ~300,000 gas; dydx costs ~400,000 gas;"))))}c.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);