function getRelativeTimeDiffrence(previous: Date, prefix: string = ''): string {
  const current: Date = new Date();

  const msPerMinute: number = 60 * 1000;
  const msPerHour: number = msPerMinute * 60;
  const msPerDay: number = msPerHour * 24;
  const msPerMonth: number = msPerDay * 30;
  const msPerYear: number = msPerDay * 365;

  const elapsed: number = current.getTime() - previous.getTime();

  if (elapsed < msPerMinute) {
    return prefix + Math.round(elapsed / 1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return prefix + Math.round(elapsed / msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay) {
    return prefix + Math.round(elapsed / msPerHour) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return prefix + Math.round(elapsed / msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return prefix + Math.round(elapsed / msPerMonth) + ' months ago';
  }

  else {
    return prefix + Math.round(elapsed / msPerYear) + ' years ago';
  }
}

export {
  getRelativeTimeDiffrence
}
