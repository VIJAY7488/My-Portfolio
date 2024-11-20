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
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const [getData, setGetData] = useState([]);

  async function fetchRating() {
    try {
      const data = await fetch(
        "https://codeforces.com/api/user.rating?handle=vijaypatel3207"
      );
      const res = await data.json();
      setGetData(res.result || []); // Access the 'result' array or default to an empty array
      console.log(res.result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchRating(); // Fetch data on component mount
    const intervalRating = setInterval(() => {
      fetchRating();
    }, 10000); // Poll every 10 seconds

    return () => clearInterval(intervalRating); // Cleanup on unmount
  }, []);

  // Dynamically generate labels from the data
  const labels = getData.map((item) =>
    new Date(item.ratingUpdateTimeSeconds * 1000).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    })
  );

  // Prepare data for the line chart
  const chartData = {
    labels: labels, // Dynamically generated contest dates for the X-axis
    datasets: [
      {
        label: "Rating",
        data: getData.map((item) => item.newRating), // Old ratings for the Y-axis
        borderColor: "rgba(237,194,64)", // Line color
        backgroundColor: "rgba(255,255,255)", // Fill color
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Codeforces User Old Ratings Over Time",
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
          callback: function (value) {
            if (value % 200 === 0) {
              return value;
            }
            return "";
          },
          stepSize: 200, 
          max: 3500, 
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgba(204,204,204, 0.8)", // Tooltip background color
      },
    },
  };

  // Set background color of the canvas element
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Set the background color of the canvas
    }
  }, []);

  return (
    <div>
      {getData.length > 0 ? (
        <div className="bg-white/70 rounded-xl">
          <Line
            style={{ width: "800px", height: "800px" }}
            data={chartData}
            options={chartOptions}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
