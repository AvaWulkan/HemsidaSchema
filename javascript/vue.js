new Vue({
    el: '#schedule' ,
    data: {
        newScheduleActivity: '',
        newScheduleDay: '',
        mondaySchedule: [
            {
                id: 1,
                activity: 'Bowla',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 2,
                activity: 'Springa',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextMondayScheduleId: 3,
        tuesdaySchedule: [
            {
                id: 1,
                activity: 'Gymma',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextTuesdayScheduleId: 2,
        wednesdaySchedule: [
            {
                id: 1,
                activity: 'Hopprep',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 2,
                activity: 'Cykla',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 3,
                activity: 'Simma',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextWednesdayScheduleId: 4,
        thursdaySchedule: [
            {
                id: 1,
                activity: 'Boccia',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 2,
                activity: 'Stretcha',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextThursdayScheduleId: 3,
        fridaySchedule: [
            {
                id: 1,
                activity: 'Intervaller',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextFridayScheduleId: 2,
        saturdaySchedule: [
            {
                id: 1,
                activity: 'Skydive',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 2,
                activity: 'Springa',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextSaturdayScheduleId: 3,
        sundaySchedule: [
            {
                id: 1,
                activity: 'Simma',
                prio: 0,
                prioColor: 'black'
            },
            {
                id: 2,
                activity: 'Klättra',
                prio: 0,
                prioColor: 'black',
            },
            {
                id: 2,
                activity: 'Gymma',
                prio: 0,
                prioColor: 'black'
            }
        ],
        nextSundayScheduleId: 4
    },
    methods: {
        addNewActivity: function () {
            if(this.newScheduleDay == 'Måndag'){
                this.mondaySchedule.push({
                    id: this.nextMondayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }else if(this.newScheduleDay == 'Tisdag'){
                this.tuesdaySchedule.push({
                id: this.nextTuesdayScheduleId++,
                activity: this.newScheduleActivity,
                    prio: 0
            })
            }else if(this.newScheduleDay == 'Onsdag'){
                this.wednesdaySchedule.push({
                    id: this.nextWednesdayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }else if(this.newScheduleDay == 'Torsdag'){
                this.thursdaySchedule.push({
                    id: this.nextThursdayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }else if(this.newScheduleDay == 'Fredag'){
                this.fridaySchedule.push({
                    id: this.nextFridayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }else if(this.newScheduleDay == 'Lördag'){
                this.saturdaySchedule.push({
                    id: this.nextSaturdayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }else if(this.newScheduleDay == 'Söndag'){
                this.sundaySchedule.push({
                    id: this.nextSundayScheduleId++,
                    activity: this.newScheduleActivity,
                    prio: 0
                })
            }

            this.newScheduleActivity = '',
            this.newScheduleDay = ''
        }
    }
})