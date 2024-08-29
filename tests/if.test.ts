describe('If Statement', () => {
    it('should support in TS', () => {
        const v: number = 90;

        if (v > 80) {
            console.info("good");
        } else {
            console.info("meh");
        }
    });

    it('should ternary operator', () => {
        const n: number = 100;

        const say: string = (n >= 70) ? "congrats" : "try again";
        console.info(say)
    });

    it('should switch operator', () => {
        function getDayName(dayNumber: number): string {
            let dayName: string;
            switch (dayNumber) {
                case 1:
                    dayName = "Sunday";
                    break;
                case 2:
                    dayName = "Monday";
                    break;
                case 3:
                    dayName = "Tuesday";
                    break;
                case 4:
                    dayName = "Wednesday";
                    break;
                case 5:
                    dayName = "Thursday";
                    break;
                case 6:
                    dayName = "Friday";
                    break;
                case 7:
                    dayName = "Saturday";
                    break;
                default:
                    dayName = "Invalid day";
                    break;
            }
            return dayName;
        }

        console.info(getDayName(2))
    });
});