import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

const headingConfig = {
  defaultProps: {
    title: "Title",
  },
  fields: {
    title: {
      type: "text",
    },
  },
  render: ({ title }) => {
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  },
};

// The Puck configuration object
const config = {
  components: {
    Heading: headingConfig,
  },
  root: {
    render: ({ children }) => {
      return (
        <main
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: 32,
          }}
        >
          {children}
        </main>
      );
    },
  },
};

// The function that gets executed when you push the "Publish" button
const onPublish = (data) => {
  console.log("Published data:", data);
};

// Your editor component
const App = () => {
  return <Puck config={config} data={{}} onPublish={onPublish} />;
};

export default App;
