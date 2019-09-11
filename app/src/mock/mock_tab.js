// import Mock from 'mockjs'

// Mock.mock('/getList',{
//     'list|10':[
//         {'id|+1':1,'title':'@ctitle','img':'@image(100x100)'}
//     ]
// })

import Mock from 'mockjs'

var data = [
    {
        "c_1_title": "全部",
        "c_1_path": "/home/fenlei/quanbu",
        "c_1_content": [
            {
                "c_2_title": '电子书榜单',
                "c_2_content": [
                    {
                        "c_3_name": "畅销榜",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '畅销榜1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '畅销榜2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '畅销榜3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '畅销榜4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '畅销榜5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "新书榜",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '新书榜1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '新书榜2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '新书榜3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '新书榜4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '新书榜5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "阅读榜",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '阅读榜1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '阅读榜2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '阅读榜3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '阅读榜4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '阅读榜5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '文艺',
                "c_2_content": [
                    {
                        "c_3_name": "小说",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '小说1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '小说2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '小说3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '小说4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '小说5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "文学",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '文学1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '文学2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '文学3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '文学4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '文学5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "传记",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '传记1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '传记2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '传记3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '传记4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '传记5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '特色推荐',
                "c_2_content": [
                    {
                        "c_3_name": "当当阅读器",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '当当阅读器1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '当当阅读器2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '当当阅读器3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '当当阅读器4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '当当阅读器5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "特价管",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '特价管1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '特价管2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '特价管3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '特价管4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '特价管5', price: 66, num: 0 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "c_1_title": "儿童故事",
        "c_1_path": "/home/fenlei/ertong",
        "c_1_content": [
            {
                "c_2_title": 'T恤',
                "c_2_content": [
                    {
                        "c_3_name": "长袖T恤",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '长袖T恤1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '长袖T恤2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '长袖T恤3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '长袖T恤4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '长袖T恤5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "短袖T恤",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '短袖T恤1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '短袖T恤2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '短袖T恤3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '短袖T恤4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '短袖T恤5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "时尚T恤",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '时尚T恤1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '时尚T恤2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '时尚T恤3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '时尚T恤4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '时尚T恤5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '鞋',
                "c_2_content": [
                    {
                        "c_3_name": "休闲鞋",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '休闲鞋1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '休闲鞋2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '休闲鞋3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '休闲鞋4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '休闲鞋5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "运动鞋",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '运动鞋1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '运动鞋2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '运动鞋3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '运动鞋4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '运动鞋5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "登山鞋",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '登山鞋1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '登山鞋2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '登山鞋3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '登山鞋4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '登山鞋5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '包',
                "c_2_content": [
                    {
                        "c_3_name": "旅行包",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '旅行包1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '旅行包2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '旅行包3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '旅行包4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '旅行包5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "钱包",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '钱包1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '钱包2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '钱包3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '钱包4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '钱包5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "面包",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '面包1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '面包2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '面包3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '面包4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '面包5', price: 66, num: 0 }
                        ]
                    }
                ]

            }
        ]
    },
    {
        "c_1_title": "启蒙课堂",
        "c_1_path": "/home/fenlei/qimeng",
        "c_1_content": [
            {
                "c_2_title": '早餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '午餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '晚餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "c_1_title": "其他",
        "c_1_path": "/home/fenlei/qita",
        "c_1_content": [
            {
                "c_2_title": '早餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '午餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '晚餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "c_1_title": "国学经典",
        "c_1_path": "/home/fenlei/guoxue",
        "c_1_content": [
            {
                "c_2_title": '早餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '午餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            },
            {
                "c_2_title": '晚餐',
                "c_2_content": [
                    {
                        "c_3_name": "中餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '中餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '中餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '中餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '中餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '中餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "西餐",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '西餐1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '西餐2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '西餐3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '西餐4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '西餐5', price: 66, num: 0 }
                        ]
                    },
                    {
                        "c_3_name": "黑暗料理",
                        "c_3_content": [
                            { id: '1', pic: 'http://dummyimage.com/100x100', name: '黑暗料理1', price: 66, num: 0 },
                            { id: '2', pic: 'http://dummyimage.com/100x100', name: '黑暗料理2', price: 66, num: 0 },
                            { id: '3', pic: 'http://dummyimage.com/100x100', name: '黑暗料理3', price: 66, num: 0 },
                            { id: '4', pic: 'http://dummyimage.com/100x100', name: '黑暗料理4', price: 66, num: 0 },
                            { id: '5', pic: 'http://dummyimage.com/100x100', name: '黑暗料理5', price: 66, num: 0 }
                        ]
                    }
                ]
            }
        ]
    }
];

//返回所有分类数据
Mock.mock('/fenlei', 'get', (options) => {
    //返回数据
    return data;
});



