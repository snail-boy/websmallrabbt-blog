
const log4js= require('../log-config')
const logger = log4js.getLogger()//根据需要获取logger
const errlogger = log4js.getLogger('err')
const othlogger = log4js.getLogger('oth')
const wxlogger = log4js.getLogger('wx')


exports.index = (req, res) => {
    logger.info('地址信息', req.url)
    wxlogger.info('java传过来的数据是', req.url)
    if(req.query.tom) {
        errlogger.error('出错了, 没有姓名', req.query)
        othlogger.info('其他日志信息')
    }
}
