import { getSchedule } from '@/api/scheduleApi';
import { flow, Instance, types } from 'mobx-state-tree';
import moment from 'moment';

export type IScheduleDayModel = Instance<typeof ScheduleDayModel>;
export type IScheduleModel = Instance<typeof ScheduleStore>;
export interface IDisplayHours {
  hours: string;
  days: string;
}

export const ScheduleDayModel = types.model('ScheduleDayModel', {
  id: types.identifierNumber,
  day: types.number,
  hours: types.string,
  updated_at: types.maybeNull(types.string),
  created_at: types.maybeNull(types.string),
});

const ScheduleStore = types
  .model('ScheduleStore', {
    scheduleDays: types.map(ScheduleDayModel),
  })
  .actions((self) => ({
    addScheduleDay(day: IScheduleDayModel) {
      self.scheduleDays.put(day);
    },

    getScheduleDays: flow(function* () {
      try {
        const resScheduleArray = yield getSchedule();

        resScheduleArray.forEach((day: IScheduleDayModel) => {
          (self as IScheduleModel).addScheduleDay(day);
        });
      } catch (e) {
        console.log(e);
      }
    }),
  }))
  .views((self) => ({
    get displayHours(): IDisplayHours[] {
      const hoursMap = new Map();

      const setHours = (map: Map<string, {hours: string, days: string[]}>, obj: IScheduleDayModel) => {
        const weekDayString = moment().day(obj.day).format('ddd');

        if (!map.has(obj.hours)) {
          map.set(obj.hours, { hours: obj.hours, days: [weekDayString] });

          return;
        }

        const existingObj = map.get(obj.hours);
        existingObj?.days.push(weekDayString);
      };

      self.scheduleDays.forEach((item) => {
        setHours(hoursMap, item);
      });

      return Array.from(hoursMap).map(([, value]) => {
        const dayString = value.days.join(', ');

        return { hours: value.hours, days: dayString };
      });
    },
  }));

export default ScheduleStore;
