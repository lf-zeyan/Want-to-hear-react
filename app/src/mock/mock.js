import Mock from 'mockjs'
Mock.mock('/getData',{
    'list|20':[
        {'id|+1':1,'title':'@title','img':'@image(100x100)','name':'@cname'}
    ]
})