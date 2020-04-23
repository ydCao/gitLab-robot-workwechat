const handler = require("./index").main_handler;
const event = {
    body:{
        "object_kind": "merge_request",
        "user": {
            "name": "Administrator",
            "username": "root",
            "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
        },
        "object_attributes": {
            "id": 99,
            "target_branch": "master",
            "source_branch": "ms-viewport",
            "source_project_id": 14,
            "author_id": 51,
            "assignee_id": 6,
            "title": "MS-Viewport",
            "created_at": "2013-12-03T17:23:34Z",
            "updated_at": "2013-12-03T17:23:34Z",
            "st_commits": null,
            "st_diffs": null,
            "milestone_id": null,
            "state": "opened",
            "merge_status": "unchecked",
            "target_project_id": 14,
            "iid": 1,
            "description": "",
            "source":{
                "name":"Awesome Project",
                "description":"Aut reprehenderit ut est.",
                "web_url":"http://example.com/awesome_space/awesome_project",
                "avatar_url":null,
                "git_ssh_url":"git@example.com:awesome_space/awesome_project.git",
                "git_http_url":"http://example.com/awesome_space/awesome_project.git",
                "namespace":"Awesome Space",
                "visibility_level":20,
                "path_with_namespace":"awesome_space/awesome_project",
                "default_branch":"master",
                "homepage":"http://example.com/awesome_space/awesome_project",
                "url":"http://example.com/awesome_space/awesome_project.git",
                "ssh_url":"git@example.com:awesome_space/awesome_project.git",
                "http_url":"http://example.com/awesome_space/awesome_project.git"
            },
            "target": {
                "name":"Awesome Project",
                "description":"Aut reprehenderit ut est.",
                "web_url":"http://example.com/awesome_space/awesome_project",
                "avatar_url":null,
                "git_ssh_url":"git@example.com:awesome_space/awesome_project.git",
                "git_http_url":"http://example.com/awesome_space/awesome_project.git",
                "namespace":"Awesome Space",
                "visibility_level":20,
                "path_with_namespace":"awesome_space/awesome_project",
                "default_branch":"master",
                "homepage":"http://example.com/awesome_space/awesome_project",
                "url":"http://example.com/awesome_space/awesome_project.git",
                "ssh_url":"git@example.com:awesome_space/awesome_project.git",
                "http_url":"http://example.com/awesome_space/awesome_project.git"
            },
            "last_commit": {
                "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
                "message": "fixed readme",
                "timestamp": "2012-01-03T23:36:29+02:00",
                "url": "http://example.com/awesome_space/awesome_project/commits/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
                "author": {
                    "name": "GitLab dev user",
                    "email": "gitlabdev@dv6700.(none)"
                }
            },
            "work_in_progress": false,
            "url": "http://example.com/diaspora/merge_requests/1",
            "action": "open",
            "assignee": {
                "name": "User1",
                "username": "user1",
                "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
            }
        }
    },

    headers: {
        accept: "*/*",

        "content-length": "9853",

        "content-type": "application/x-www-form-urlencoded",

        host: "service-5mv1fv1k-1251767583.gz.apigw.tencentcs.com",

        "user-agent": "GitHub-Hookshot/7ea4e29",

        "x-anonymous-consumer": "true",

        "x-api-requestid": "f4195f0a498ba9d9e997aca082338fb8",

        "x-b3-traceid": "f4195f0a498ba9d9e997aca082338fb8",

        "x-github-delivery": "a1aab800-379b-11ea-87cc-2eb3ac5508aa",

        "x-gitlab-event": "Merge Request Hook",

        "x-qualifier": "$LATEST"
    },

    httpMethod: "POST",

    path: "/wechatwork_git_robot",

    pathParameters: {},
    queryString: { id: "70e9b288-8704-42c2-abc0-1260c187f3e5" },

    queryStringParameters: {},

    requestContext: {
        httpMethod: "ANY",

        identity: {},

        path: "/wechatwork_git_robot",

        serviceId: "service-5mv1fv1k",

        sourceIp: "192.30.252.99",

        stage: "release"
    }
};
const context = {
    hello: "hello"
};

const callback = function(param) {
    console.log("param", param);
};
let result = handler(event, context, callback);
console.log("result: ", result);
