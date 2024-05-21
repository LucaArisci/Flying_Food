import { Injectable } from '@angular/core';
import { MenuVoice } from '../sidebar/menu/menu.model';

@Injectable()
export class MenuService {
  public menu: MenuVoice[] = [
    new MenuVoice('Home', 'home', 'path', true),
    new MenuVoice('Catalog', 'layers', 'path', false),
    new MenuVoice('Category', 'view_cozy', 'path', false),
    new MenuVoice('Map', 'location_on', 'path', false),
    new MenuVoice('Delivery', 'local_shipping', 'path', false),
    new MenuVoice('Settings', 'tune', 'path', false),
  ];
}
