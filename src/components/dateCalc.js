const dateCalc = startDate => {
  let toDate = new Date();
  let fromDate = new Date(startDate);
  let dayDifference = Math.ceil(
    Math.abs(toDate.getTime() - fromDate.getTime()) / (1000 * 3600 * 24)
  );
  let yearDifference = Math.floor(dayDifference / 365.25);
  let percentage = Math.floor(
    (Math.floor(dayDifference % 365.25) / 365.25) * 100
  );
  console.log(percentage);
  return [yearDifference, percentage, dayDifference];
};

export default dateCalc;
