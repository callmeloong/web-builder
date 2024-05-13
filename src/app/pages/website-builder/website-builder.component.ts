import { Component, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzTabSetComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzSegmentedComponent } from 'ng-zorro-antd/segmented';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { DeviceProperties, Editor } from 'grapesjs';
import GjsPluginForms from 'grapesjs-plugin-forms';
declare const require: any;
const GjsTailwind = require('../../../../node_modules/grapesjs-tailwind/dist/grapesjs-tailwind.min.js');
declare var grapesjs: any;

@Component({
  selector: 'bs-website-builder',
  standalone: true,
  imports: [
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
  templateUrl: './website-builder.component.html',
  styleUrl: './website-builder.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class WebsiteBuilderComponent {
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
