export const countdownTimer = (
  targetHour: number,
  targetMinute: number,
  targetSecond: number
): number => {
  const currentTime = new Date();
  const targetTime = new Date();
  targetTime.setHours(targetHour);
  targetTime.setMinutes(targetMinute);
  targetTime.setSeconds(targetSecond);

  if (targetTime <= currentTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  const timeDifference = targetTime.getTime() - currentTime.getTime();
  return Math.floor(timeDifference / 1000);
};
