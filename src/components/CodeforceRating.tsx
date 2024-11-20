import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

type RatingData = {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
};

function CodeforceRating() {
  const [getData, setGetData] = useState<RatingData[]>([]);

  async function fetchRating() {
    try {
      const response = await fetch(
        "https://codeforces.com/api/user.rating?handle=vijaypatel3207"
      );
      const data = await response.json();
      if (data.result) {
        setGetData(data.result as RatingData[]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchRating();
    const intervalRating = setInterval(() => {
      fetchRating();
    }, 10000);

    return () => clearInterval(intervalRating);
  }, []);

  const labels = getData.map((item) =>
    new Date(item.ratingUpdateTimeSeconds * 1000).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Rating",
        data: getData.map((item) => item.newRating),
        borderColor: "rgba(237,194,64)",
        backgroundColor: "rgba(255,255,255)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // Ensure the position is correctly typed
      },
      title: {
        display: true,
        text: "Codeforces User Ratings Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Contest Dates",
        },
      },
      y: {
        title: {
          display: true,
        },
        ticks: {
            callback: function (value: string | number) {
              // Ensure the value is a number before performing calculations
              if (typeof value === "number") {
                return value % 200 === 0 ? value : "";
              }
              return ""; // Return an empty string for non-number values
            },
            stepSize: 200,
          },
          
      },
    },
  };

  return (
    <div>
      {getData.length > 0 ? (
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CodeforceRating;
