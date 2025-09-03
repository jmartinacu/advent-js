function getCompleted(timeWorked: string, totalTime: string): string {
  const toSeconds = (time: string): number => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };
  const workedSeconds = toSeconds(timeWorked);
  const totalSeconds = toSeconds(totalTime);
  const percentage = (workedSeconds / totalSeconds) * 100;
  return `${Math.round(percentage)}%`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // 33%
console.log(getCompleted("02:00:00", "04:00:00")); // 50%
console.log(getCompleted("01:00:00", "01:00:00")); // 100%
console.log(getCompleted("00:10:00", "01:00:00")); // 17%
console.log(getCompleted("01:10:10", "03:30:30")); // 33%
console.log(getCompleted("03:30:30", "05:50:50")); // 60%
