import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import grapesjs from 'grapesjs';
import { DeviceProperties, Editor } from 'grapesjs';
import { LucideAngularModule } from 'lucide-angular';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzTabSetComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzSegmentedComponent } from 'ng-zorro-antd/segmented';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
declare const require: any;
const GjsTailwind = require('../../node_modules/grapesjs-tailwind/dist/grapesjs-tailwind.min.js');
import GjsPluginForms from 'grapesjs-plugin-forms';
// declare var GjsTailwind: any;
declare var grapesjs: any;
@Component({
  selector: 'bgs-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideAngularModule,
    NzInputDirective,
    NzTabSetComponent,
    NzTabComponent,
    NzButtonComponent,
    NzSegmentedComponent,
    NzTooltipDirective,
    NzSwitchComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  editor!: Editor;
  borderComponents = false;
  selectedTabPanel = 0;
  devices: DeviceProperties[] = [
    {
      id: 'desktop',
      name: 'Desktop',
      width: '', // default size
    },
    {
      id: 'tablet',
      name: 'Tablet',
      width: '900px',
    },
    {
      id: 'mobile',
      name: 'Mobile',
      width: '320px', // this value will be used on canvas width
      widthMedia: '480px', // this value will be used in CSS @media
    },
  ];
  devicesSegmented = this.devices.map((x) => x.name);

  constructor() {}

  ngOnInit() {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      width: 'auto',
      storageManager: false,
      panels: {
        defaults: [],
      },
      blockManager: {
        appendTo: '#blocks',
        // blocks: [
        //   {
        //     category: { id: 'header', label: 'Header', open: true, order: 1 },
        //     id: 'section', // id is mandatory
        //     label: '<b>Section</b>', // You can use HTML/SVG inside labels
        //     attributes: { class: 'gjs-block-section' },
        //     content: `<section>
        //       <h1>This is a simple title</h1>
        //       <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        //     </section>`,
        //   },
        //   {
        //     category: { id: 'header' },
        //     id: 'text',
        //     label: 'Text',
        //     content: '<div data-gjs-type="text">Insert your text here</div>',
        //   },
        //   {
        //     category: { id: 'hero', label: 'Hero', open: true, order: 1 },
        //     id: 'image',
        //     label: 'Image',
        //     // Select the component once it's dropped
        //     select: true,
        //     // You can pass components as a JSON instead of a simple HTML string,
        //     // in this case we also use a defined component type `image`
        //     content: { type: 'image' },
        //     // This triggers `active` event on dropped components and the `image`
        //     // reacts by opening the AssetManager
        //     activate: true,
        //   },
        // ],
      },
      deviceManager: {
        default: this.devices[0].id,
        devices: this.devices,
      },
      layerManager: {
        appendTo: '#layers',
      },
      selectorManager: {
        appendTo: '#styles',
      },
      styleManager: {
        appendTo: '#styles',
      },
      plugins: [GjsTailwind, GjsPluginForms],
      pluginsOpts: {
        GjsTailwind: {},
        GjsPluginForms: {},
      },
    });
  }

  ngAfterViewInit(): void {
    // this.editor.BlockManager.add('text', {
    //   id: 'text',
    //   label: `<div>Text</div> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-case-sensitive"><path d="m3 15 4-8 4 8"/><path d="M4 13h6"/><circle cx="18" cy="12" r="3"/><path d="M21 9v6"/></svg>`,
    //   content: '<div data-gjs-type="text">Insert your text here</div>',
    // });
    // this.editor.BlockManager.add('header', {
    //   id: 'header',
    //   label: `<div>Header</div> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-case-sensitive"><path d="m3 15 4-8 4 8"/><path d="M4 13h6"/><circle cx="18" cy="12" r="3"/><path d="M21 9v6"/></svg>`,
    //   content: `<div>Insert your text here</div>`,
    // });
  }

  undo() {
    this.editor.UndoManager.undo();
  }

  redo() {
    this.editor.UndoManager.redo();
  }

  toggleBorder(event: boolean) {
    if (event) {
      this.editor.runCommand('sw-visibility');
    } else {
      this.editor.stopCommand('sw-visibility');
    }
  }

  handleIndexChange(e: number): void {
    this.editor.setDevice(this.devices[e].id!);
  }
}
