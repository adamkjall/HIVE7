const path = require('path');

const SRC_FOLDER_PATH = path.resolve(__dirname, 'src');
const COMPONENTS_FOLDER_PATH = path.join(SRC_FOLDER_PATH, 'components');
const COMPOSITIONS_FOLDER_PATH = path.join(SRC_FOLDER_PATH, 'compositions');
const CONTEXTS_FOLDER_PATH = path.join(SRC_FOLDER_PATH, 'contexts');
const VIEWS_FOLDER_PATH = path.join(SRC_FOLDER_PATH, 'views');

module.exports = function(plop) {
  plop.addHelper('js', content => `{{ ${content} }}`);

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the component'
      }
    ],
    actions: [
      {
        type: 'add',
        path: path.join(COMPONENTS_FOLDER_PATH, '{{pascalCase name}}/index.jsx'),
        templateFile: 'templates/component/index.jsx'
      },
      {
        type: 'add',
        path: path.join(COMPONENTS_FOLDER_PATH, '{{pascalCase name}}/style.jsx'),
        templateFile: 'templates/component/style.jsx'
      },
      {
        type: 'modify',
        path: path.join(COMPONENTS_FOLDER_PATH, '{{pascalCase name}}/index.jsx'),
        pattern: new RegExp('MyComponent', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: path.join(COMPONENTS_FOLDER_PATH, '{{pascalCase name}}/style.jsx'),
        pattern: new RegExp('MyComponent', 'gi'),
        template: '{{pascalCase name}}'
      }
    ]
  });

  // Composition generator
  plop.setGenerator('composition', {
    description: 'Create a new composition',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the composition'
      }
    ],
    actions: [
      {
        type: 'add',
        path: path.join(COMPOSITIONS_FOLDER_PATH, '{{pascalCase name}}/index.jsx'),
        templateFile: 'templates/composition/index.jsx'
      },
      {
        type: 'add',
        path: path.join(COMPOSITIONS_FOLDER_PATH, '{{pascalCase name}}/style.jsx'),
        templateFile: 'templates/composition/style.jsx'
      },
      {
        type: 'modify',
        path: path.join(COMPOSITIONS_FOLDER_PATH, '{{pascalCase name}}/index.jsx'),
        pattern: new RegExp('MyComposition', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: path.join(COMPOSITIONS_FOLDER_PATH, '{{pascalCase name}}/style.jsx'),
        pattern: new RegExp('MyComposition', 'gi'),
        template: '{{pascalCase name}}'
      }
    ]
  });

  // Context generator
  plop.setGenerator('context', {
    description: 'Create a new context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the context'
      }
    ],
    actions: [
      {
        type: 'add',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/index.js'),
        templateFile: 'templates/context/index.js'
      },
      {
        type: 'add',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/context.js'),
        templateFile: 'templates/context/context.js'
      },
      {
        type: 'add',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/contextProvider.js'),
        templateFile: 'templates/context/contextProvider.js'
      },
      {
        type: 'add',
        path: path.join(
          CONTEXTS_FOLDER_PATH,
          '{{pascalCase name}}Context/with{{pascalCase name}}.js'
        ),
        templateFile: 'templates/context/withMy.js'
      },
      {
        type: 'modify',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/index.js'),
        pattern: new RegExp('My', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/context.js'),
        pattern: new RegExp('My', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: path.join(CONTEXTS_FOLDER_PATH, '{{pascalCase name}}Context/contextProvider.js'),
        pattern: new RegExp('My', 'gi'),
        template: '{{pascalCase name}}'
      },
      {
        type: 'modify',
        path: path.join(
          CONTEXTS_FOLDER_PATH,
          '{{pascalCase name}}Context/with{{pascalCase name}}.js'
        ),
        pattern: new RegExp('My', 'gi'),
        template: '{{pascalCase name}}'
      }
    ]
  });

  // View generator
  plop.setGenerator('view', {
    description: 'Create a new view',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the view'
      }
    ],
    actions: [
      {
        type: 'add',
        path: path.join(VIEWS_FOLDER_PATH, '{{pascalCase name}}View/index.jsx'),
        templateFile: 'templates/view/index.jsx'
      },
      {
        type: 'modify',
        path: path.join(VIEWS_FOLDER_PATH, '{{pascalCase name}}View/index.jsx'),
        pattern: new RegExp('MyView', 'gi'),
        template: '{{pascalCase name}}View'
      }
    ]
  });
};
