module.exports = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'laptop',
  },
  {
    key: 'users',
    name: 'User Manage',
    icon: 'user',
  },
  {
    key: 'request',
    name: 'Request',
    icon: 'api',
  }, {
    key: 'FunctionProgram',
    name: 'FunctionProgram',
    icon: 'tool',
  },
  {
    key: 'UIElement',
    name: 'UI Element',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'iconfont',
        name: 'IconFont',
        icon: 'heart-o',
      },
      {
        key: 'dataTable',
        name: 'DataTable',
        icon: 'database',
      },
      {
        key: 'dropOption',
        name: 'DropOption',
        icon: 'bars',
      },
      {
        key: 'search',
        name: 'Search',
        icon: 'search',
      },
      {
        key: 'editor',
        name: 'Editor',
        icon: 'edit',
      },
      {
        key: 'layer',
        name: 'layer (Function)',
        icon: 'credit-card',
      },
    ],
  },
  {
    key: 'BusinessComponent',
    name: 'BusinessComponent',
    icon: 'laptop',
    clickable: false,
    child: [
      {
        key: 'selectModal',
        name: 'selectModal',
        icon: 'bars',
      },
      {
        key: 'antdSelect',
        name: 'antdSelect',
        icon: 'arrow-down',
      }
    ],
  },
  {
    key: 'chart',
    name: 'Recharts',
    icon: 'code-o',
    child: [
      {
        key: 'lineChart',
        name: 'LineChart',
        icon: 'line-chart',
      },
      {
        key: 'barChart',
        name: 'BarChart',
        icon: 'bar-chart',
      },
      {
        key: 'areaChart',
        name: 'AreaChart',
        icon: 'area-chart',
      },
    ],
  },
  {
    key: 'navigation',
    name: 'Test Navigation',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: 'Test Navigation1',
      },
      {
        key: 'navigation2',
        name: 'Test Navigation2',
        child: [
          {
            key: 'navigation21',
            name: 'Test Navigation21',
          },
          {
            key: 'navigation22',
            name: 'Test Navigation22',
          },
        ],
      },
    ],
  },
]
