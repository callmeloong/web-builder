import { Editor } from 'grapesjs';

export const ButtonComponent = (editor: Editor) => {
  editor.DomComponents.addType('button', {
    isComponent: (el) => el.tagName === 'BUTTON',
    model: {
      defaults: {
        traits: [{ name: 'bgs-btn' }],
      },
    },
    view: {
      click: 'handleClick',
      handleClick: (e: any) => {
        console.log(e);
      },
    },
  });
};
