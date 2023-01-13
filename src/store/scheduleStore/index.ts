import { getSchedule } from '@/api/scheduleApi';
import { flow, Instance, types } from 'mobx-state-tree';

export type IScheduleDayModel = Instance<typeof ScheduleDayModel>;
export type IScheduleModel = Instance<typeof ScheduleStore>;

export const ScheduleDayModel = types.model('ScheduleDayModel', {
  id: types.identifierNumber,
  day: types.number,
  hours: types.string,
  updated_at: types.maybeNull(types.string),
  created_at: types.maybeNull(types.string),
});

const ScheduleStore = types
  .model('ScheduleStore', {
    scheduleDays: types.optional(types.array(ScheduleDayModel), []),
  })
  .actions((self) => ({
    afterCreate() {
      (self as IScheduleModel).getScheduleDays();
    },
    getScheduleDays: flow(function* () {
      try {
        const resScheduleArray = yield getSchedule();

        self.scheduleDays.replace(resScheduleArray);
      } catch (e) {
        console.log(e);
      }
    }),
  }))
  .views((self) => ({
  }));

export default ScheduleStore;
