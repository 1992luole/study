//多条件的筛选

// 定义商品类
function Product(name, brand, price) {
    this.name = name; // 名称
    this.brand = brand; // 品牌
    this.price = price; // 价格
}
// 商品筛选器
const ProductFilters = {
    //  区间类型筛选
    rangesFilter: function(products, ranges) {},
    //选择类型筛选
    choosesFilter: function(products, chooses) {}
}

// 区间类型条件结构
const ranges = [{
    type: 'price', // 筛选类型/字段
    low: 3000, // 最小值
    high: 6000 // 最大值
}]

rangesFilter = function(products, ranges) {
    if (ranges.length === 0) {
        return products;
    } else {
        /**
         * 循环多个区间条件，
         * 每种区间类型应该只有一个，
         * 比如价格区间不会有1000-2000和4000-6000同时需要的情况
         */
        for (let range of ranges) {
            // 多个不同类型区间是与逻辑，可以直接赋值给自身
            products = products.filter(function(item) {
                return item[range.type] >= range.low && item[range.type] <= range.high;
            });
        }
        return products;
    }
}

//选择类型筛选：

// 选择类型条件结构
const chooses = [{
        type: 'brand',
        value: '华为'
    },
    {
        type: 'brand',
        value: '苹果'
    }
]

choosesFilter = function(products, chooses) {
    let tmpProducts = [];
    if (chooses.length === 0) {
        tmpProducts = products;
    } else {
        /**
         * 选择类型条件是或逻辑，使用数组连接concat
         */
        for (let choice of chooses) {
            tmpProducts = tmpProducts.concat(products.filter(function(item) {
                return item[choice.type].indexOf(choice.value) !== -1;
            }));
        }
    }
    return tmpProducts;
}

//定义一个执行函数doFilter()。
function doFilter(products, conditions) {
    // 根据条件循环调用筛选器里的方法
    for (key in conditions) {
        // 判断是否有需要的过滤方法
        if (ProductFilters.hasOwnProperty(key + 'Filter') && typeof ProductFilters[key + 'Filter'] === 'function') {
            products = ProductFilters[key + 'Filter'](products, Conditions[key]);
        }
    }
    return products;
}

// 将两种大类的筛选条件放在同一个对象里
// let Conditions = {
//     ranges: [{
//         type: 'price',
//         low: 3000,
//         high: 6000
//     }],
//     chooses: [{
//         type: 'brand',
//         value: '华为'
//     }]
// }

//创建10个商品数据，以及筛选条件
// 商品数组
const products = [
    new Product('华为荣耀9', '华为', 2299),
    new Product('华为P10', '华为', 3488),
    new Product('小米MIX2', '小米', 3599),
    new Product('小米6', '小米', 2499),
    new Product('小米Note3', '小米', 2499),
    new Product('iPhone7 32G', '苹果', 4588),
    new Product('iPhone7 Plus 128G', '苹果', 6388),
    new Product('iPhone8', '苹果', 5888),
    new Product('三星Galaxy S8', '三星', 5688),
    new Product('三星Galaxy S7 edge', '三星', 3399),
];
// 筛选条件
let Conditions = {
    ranges: [{
        type: 'price',
        low: 3000,
        high: 6000
    }]
}

let result = doFilter(products, Conditions);
console.log(result)