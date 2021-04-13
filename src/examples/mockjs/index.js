let Mock = require('mockjs')
// let data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1,
//         'name|1-10': 1,
//         'string|1-10': "%",
//         'name|+1': 202,
//         "number|1-100.1-10": 1,
//         "object|2": {
//             "310000": '上海市',
//             "320000": "江苏省",
//             "330000": "浙江省",
//             "340000": "安徽省"
//         },
//         "array|1": [
//             "AMD",
//             "CMD",
//             "UMD"
//         ],
//         "array1|+1": [
//             "AMD",
//             "CMD",
//             "UMD"
//         ],
//         "array|1-10": [
//             {
//                 "name|+1": [
//                     "Hello",
//                     "Mock.js",
//                     "!"
//                 ]
//             }
//         ]
//     }]
// })

// let data = Mock.mock('@date("y-M-d")')
// let data = Mock.mock('@csentence(5)')
// let data = Mock.mock('@guid')
let data = Mock.mock('@county(true)')
console.info(JSON.stringify(data, null, 1))
