import toast from 'react-hot-toast';

type CalculateTotalCostProps = {
  startTime: string; // Format: "HH:mm"
  endTime: string; // Format: "HH:mm"
  pricePerHour: number;
};

const calculateTotalCost = ({
  startTime,
  endTime,
  pricePerHour,
}: CalculateTotalCostProps) => {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  // Create date objects (assuming same day for simplicity)
  const startDate = new Date(0, 0, 0, startHour, startMinute);
  const endDate = new Date(0, 0, 0, endHour, endMinute);

  // Calculate the difference in milliseconds
  const timeDifferenceMs = endDate.getTime() - startDate.getTime();

  if (timeDifferenceMs < 0) {
    toast.error('End time must be after start time.');
    return null;
  } else {
    // Convert milliseconds to hours
    const hoursDifference = timeDifferenceMs / (1000 * 60 * 60);
    console.log(timeDifferenceMs, hoursDifference);
    // Calculate total cost
    const totalCost = parseFloat((hoursDifference * pricePerHour).toFixed(2));
    return totalCost;
  }
};

export default calculateTotalCost;
