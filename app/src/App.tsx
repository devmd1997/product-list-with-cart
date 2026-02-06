import { Page, SpaceBetween } from "product-list-with-cart";
import "./App.css";
import "product-list-with-cart/styles.css";

function App() {
  return (
    <>
      <Page className="p-3 md:p-5 lg:px-5 lg:py-11">
        <SpaceBetween
          direction="vertical"
          spacing="lg"
          fullWidth={true}
          lg={{ direction: "horizontal" }}
        >
          <div className="flex h-[1000px] w-full items-center justify-center bg-blue-500 text-center">
            <p>Primary Content</p>
          </div>
          <div className="flex h-[550px] w-full items-center justify-center bg-blue-200 text-center lg:w-[380px]">
            Secondary Content
          </div>
        </SpaceBetween>
      </Page>
    </>
  );
}

export default App;
