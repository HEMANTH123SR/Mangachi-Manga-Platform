type FormattedDate = {
  day: number;
  month: number;
  year: number;
  hour: number;
  fdmy: string;
  ftime: string;
  fullyFormatedTime: string;
};

export const getFormattedDate = (): FormattedDate => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return {
    day,
    month,
    year,
    hour,
    fdmy: `${day}/${month}/${year}`,
    ftime: `${hour}:${formattedMinutes}:${formattedSeconds}`,
    fullyFormatedTime: `${day}/${month}/${year} ${hour}:${formattedMinutes}:${formattedSeconds}`,
  };
};
