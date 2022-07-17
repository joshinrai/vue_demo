const tableList = [{
  id: 1,
  date: '2021',
  department: '大数据及AI',
  departmentId: 1,
  bizName: '测试',
  bizid: 11,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 2,
  date: '2021',
  department: '大数据及AI',
  departmentId: 1,
  bizName: '测试',
  bizid: 12,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 3,
  date: '2021',
  department: '大数据及AI',
  departmentId: 1,
  bizName: '测试',
  bizid: 13,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 4,
  date: '2021',
  department: '大数据及AI',
  departmentId: 1,
  bizName: '测试',
  bizid: 14,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 5,
  date: '2021',
  department: 'koo',
  departmentId: 1,
  bizName: 'who',
  bizid: 21,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 6,
  date: '2021',
  department: 'koo',
  departmentId: 1,
  bizName: 'are',
  bizid: 22,
  name: '张三',
  firstName: '张',
  lastName: '三'
}, {
  id: 7,
  date: '2021',
  department: '够呀',
  departmentId: 3,
  bizName: 'an',
  bizid: 32,
  name: '张三',
  firstName: '张',
  lastName: '三'
}]

const departmentList = [
  {
    id: 1,
    name: '大数据',
    children: [{
      id: 11,
      name: '测试'
    }, {
      id: 12,
      name: '开发'
    }, {
      id: 13,
      name: '产品'
    }, {
      id: 14,
      name: '设计'
    }]
  },
  {
    id: 2,
    name: 'koo',
    children: [{
      id: 21,
      name: 'who'
    }, {
      id: 22,
      name: 'are'
    }, {
      id: 23,
      name: 'you'
    }]
  },
  {
    id: 3,
    name: '够呀',
    children: [{
      id: 31,
      name: 'I'
    }, {
      id: 32,
      name: 'am'
    }, {
      id: 33,
      name: '张三'
    }]
  }
]

const departmentMap = departmentList.reduce((m, { id, children }) => {
  m.set(id, children)
  return m
}, new Map())

export {
  tableList,
  departmentList,
  departmentMap
}
