import { Link } from "react-router-dom";
import "../components/home.css"; // Import CSS for styling

const algorithms = [
    {
      name: "Bubble Sort",
      description: "A simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.",
      path: "/bubble-sort",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    },
    {
      name: "Selection Sort",
      description: "Sorts an array by repeatedly selecting the smallest element and moving it to the correct position.",
      path: "/selection-sort",
      background: "linear-gradient(135deg, #fbc2eb, #a18cd1)",
    },
    {
      name: "Insertion Sort",
      description: "A simple and efficient algorithm that builds the sorted array one item at a time.",
      path: "/insertion-sort",
      background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    },
    {
      name: "Merge Sort",
      description: "A divide-and-conquer algorithm that splits arrays in half and merges them back in sorted order.",
      path: "/merge-sort",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    },
    {
      name: "Quick Sort",
      description: "A fast sorting algorithm that uses partitioning and recursion to sort elements.",
      path: "/quick-sort",
      background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    },
    {
      name: "Heap Sort",
      description: "Uses a binary heap data structure to sort elements efficiently.",
      path: "/heap-sort",
      background: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    },
  ];
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Sorting Algorithm Visualizers</h1>
      <div className="grid-container">
        {algorithms.map((algo) => (
          <Link
            key={algo.path}
            to={algo.path}
            className="card"
            style={{ background: algo.background }}
          >
            <h2>{algo.name}</h2>
            <p>{algo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;