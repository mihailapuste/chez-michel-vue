import { types } from 'mobx-state-tree';
import ScheduleStore from '../scheduleStore';

const RootStore = types
  .model('RootStore')
  .props({
    scheduleStore: types.optional(ScheduleStore, {}),
  });

export default RootStore;
