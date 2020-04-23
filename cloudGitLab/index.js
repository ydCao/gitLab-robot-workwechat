'use strict';

const HEADER_KEY = "x-gitlab-event";

const eventHandMap = {
    'Issue Hook': handleIssue,
    'Push Hook': handlePush,
    'Merge Request Hook': handlePR
};

const ChatRobot = require('./chat');

/**
 * 处理push事件
 * @param ctx koa context
 * @param robotid 机器人id
 */
async function handlePush(body, robotid) {
    const robot = new ChatRobot(
        robotid
    );
    let {user_name, project:{name:proName, web_url}, commits} = body;
    const lastCommit = commits[0];
    const mdMsg = ` 项目 [${proName}](${web_url}) 收到一次push提交
                    提交者:  ${user_name}
                    commitID: ${lastCommit.id}
                    最新提交信息: ${lastCommit.message}`;
    await robot.sendMdMsg(mdMsg);
    return mdMsg;
}

/**
 * 处理merge request事件
 * @param ctx koa context
 * @param robotid 机器人id
 */
async function handlePR(body, robotid) {
    const robot = new ChatRobot(
        robotid
    );
    let {object_kind='', user:{name, avatar_url}, project:{name:proName, web_url}, object_attributes:{title, state, target_branch, source_branch, url}} = body;
    const mdMsg = `[${name}](${avatar_url})在 [${proName}](${web_url}) 中${state}了一次${object_kind}
                    标题：${title}
                    源分支：${source_branch}
                    目标分支：${target_branch}
                    [查看PR详情](${url})`;
    await robot.sendMdMsg(mdMsg);
    return mdMsg;
}

/**
 * 处理issue 事件
 * @param ctx koa context
 * @param robotid 机器人id
 */
async function handleIssue(body, robotid) {
    const robot = new ChatRobot(
        robotid
    );
    let {user: {name, avatar_url}, project: {name:proName ,web_url}, object_attributes: {title, url, action}} = body;
    const mdMsg = `[${name}](${avatar_url}) 在 [${proName}](${web_url}) 中 ${action} 了一个issue
                    标题：${title}
                    发起人：[${name}](${avatar_url})
                    [查看详情](${url})`;
    await robot.sendMdMsg(mdMsg);
    return mdMsg;
}

/**
 * 对于未处理的事件，统一走这里
 * @param ctx koa context
 * @param event 事件名
 */
function handleDefault(event) {
    return `Sorry，暂时还没有处理${event}事件`;
}

exports.main_handler = async (event) => {
    const gitEvent = event.headers[HEADER_KEY];
    const robotid = event.queryString.id;
    const bodyObj = JSON.parse(event.body);
    return eventHandMap[gitEvent] ? eventHandMap[gitEvent](bodyObj, robotid) : handleDefault(gitEvent);
};
