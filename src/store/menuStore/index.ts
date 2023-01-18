import { getMenu } from '@/api';
import { flow, Instance, types } from 'mobx-state-tree';

export type IMenuItemModel = Instance<typeof MenuItemModel>;
export type IMenuModel = Instance<typeof MenuStore>;
export interface IDisplayHours {
  hours: string;
  days: string;
}

export const MenuItemModel = types.model('MenuItemModel', {
  id: types.identifierNumber,
  name: types.string,
  description: types.string,
  price: types.string,
  section: types.string, // enum
  diet: types.string, // enum
  created_at: types.maybeNull(types.string),
  updated_at: types.maybeNull(types.string),
});

const MenuStore = types
  .model('MenuStore', {
    menuItems: types.map(MenuItemModel),
  })
  .actions((self) => ({
    addMenuItem(menuItem: IMenuItemModel) {
      self.menuItems.put(menuItem);
    },

    getMenuItems: flow(function* () {
      try {
        const menuItemArray = yield getMenu();

        menuItemArray.forEach((menuItem: IMenuItemModel) => {
          (self as IMenuModel).addMenuItem(menuItem);
        });
      } catch (e) {
        console.log(e);
      }
    }),
  }))
  .views((self) => ({
  }));

export default MenuStore;
